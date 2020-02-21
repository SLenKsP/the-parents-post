const express = require(`express`);
const router = express.Router();
const gravatar = require(`gravatar`);
const bcrypt = require(`bcryptjs`);
const jwt = require(`jsonwebtoken`);
const passport = require(`passport`);
const validateSignUpInput = require("../../validation/signup");
const validateLoginInput = require(`../../validation/login`);

const User = require(`../../models/users`);

// rounting signup
router.post(`/signup`, function(req, res) {
  const { err, isValid } = validateSignUpInput(req.body);
  // throw error if input information is not valid
  if (!isValid) {
    return res.status(400).json(err);
  }

  User.findOne({
    email: req.body.email
  }).then(user => {
    if (user) {
      return res.status(400).json({
        email: `Email already Exists. Please try to Sign in instead!`
      });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: `200`,
        r: `pg`,
        d: `mm`
      });

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        avatar
      });

      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          console.error(`There was an error`, err);
        } else {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) {
              console.error(`There is an error`, err);
            } else {
              (newUser.password = hash),
                newUser.save().then(user => {
                  res.json(user);
                });
            }
          });
        }
      });
    }
  });
});

router.post(`/login`, (req, res) => {
  const { err, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(err);
  }
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      err.email = `User not found!`;
      return res.status(400).json(err);
    }
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.name,
          avatar: user.avatar
        };
        jwt.sign(
          payload,
          `secret`,
          {
            expiresIn: 3600
          },
          (err, token) => {
            if (err) {
              console.error(`There is an err`, err);
            } else {
              res.json({
                success: true,
                token: `Bearer ${token}`
              });
            }
          }
        );
      }
    });
  });
});

router.get(
  `/myinfo`,
  passport.authenticate(`jwt`, { session: false }),
  (req, res) => {
    return res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;
