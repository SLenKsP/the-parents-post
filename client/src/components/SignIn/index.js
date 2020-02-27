import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signInUser } from "../../actions/authentication";
import classnames from "classnames";
import { withRouter } from "react-router-dom";

class SignIn extends Component {
  constructor () {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange (e) {
    this.setState({
      [ e.target.name ]: e.target.value
    });
  }

  handleSubmit (e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.signInUser(user, this.props.history);
  }
  componentDidMount () {
    if (this.props.auth.isAuthenticated)
    {
      this.props.history.push("/signin");
    }
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.auth.isAuthenticated)
    {
      this.props.history.push('/signin')
    }
    if (nextProps.errors)
    {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  render () {
    const { errors } = this.state;
    return (
      <div className="container" style={ { marginTop: "0px", width: "700px" } }>
        <h2 className="blue-text" style={ { marginBottom: "0px" } }>Login</h2>
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              className={ classnames("input-field input-field-lg", {
                "is-invalid": errors.email
              }) }
              name="email"
              onChange={ this.handleInputChange }
              value={ this.state.email }
            />
            {
              console.log(`eroorrrr is ${ errors.email }`),
              errors.email && (
                <div className="invalid-feedback">{ errors.email }</div>
              ) }
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              className={ classnames("input-field input-field-lg", {
                "is-invalid": errors.password
              }) }
              name="password"
              onChange={ this.handleInputChange }
              value={ this.state.password }
            />
            { errors.password && (
              <div className="invalid-feedback">{ errors.password }</div>
            ) }
          </div>
          <div className="form-group">
<<<<<<< HEAD
            <button type="submit" className="waves-effect waves-light btn">
=======
            <button type="submit" className="btn">
>>>>>>> 8b3b006f9d500f26ea0f672ae61ae0daa8050329
              Sign in User
            </button>
          </div>
        </form>
      </div>
    );
  }
}
SignIn.propTypes = {
  signInUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { signInUser })(withRouter(SignIn));
