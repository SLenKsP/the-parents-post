const express = require(`express`);
const router = express.Router();
// yc4vjtvmn4wdemn4u76j8aru

let activity = "art"
let city = "Olathe"
let queryURL = `http://api.amp.active.com/v2/search?query=${activity}&category=event&start_date=2020-02-15..&near=${city}&radius=50&api_key=yc4vjtvmn4wdemn4u76j8aru`

router.route("/")
  .get(
    function (req, res) {
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(responseData => {
        console.log(responseData, "This is where the data should be")
        res.json(responseData)
      })
      // .catch(err => res.status(422).json(err));
    }
    //   () => {
    //   $.ajax({
    //     url: queryURL,
    //     method: "GET"
    //   }).then(res => {
    //     console.log(res)
    //   })
    // }
  );

module.exports = router;
