import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { signUpUser } from "../../actions/authentication";
import classnames from 'classnames';
class SignUp extends Component {

    constructor () {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirm: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange (e) {
        this.setState({
            [ e.target.name ]: e.target.value
        })
    }

    handleSubmit (e) {
        e.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        }
        this.props.signUpUser(user, this.props.history);
        this.setState({
            name: "",
            email: "",
            password: "",
            password_confirm: ""
        });
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
    componentDidMount () {
        if (this.props.auth.isAuthenticated)
        {
            this.props.history.push('/signin');
        }
    }
    render () {
        const { errors } = this.state;
        return (
            <div className="container" style={ { marginTop: '0px', width: '700px' } }>
                <h2 className= "blue-text" style={ { marginBottom: '0px' } }>Sign Up</h2>
                <form onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Name"
                            className={ classnames('validate validate-lg', {
                                'is-invalid': errors.name
                            }) }
                            name="name"
                            onChange={ this.handleInputChange }
                            value={ this.state.name }
                        />
                        { errors.name && (<div className="invalid-feedback">{ errors.name }</div>) }
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email"
                            className={ classnames('validate validate-lg', {
                                'is-invalid': errors.email
                            }) }
                            name="email"
                            onChange={ this.handleInputChange }
                            value={ this.state.email }
                        />
                        { errors.email && (<div className="invalid-feedback">{ errors.email }</div>) }
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            className={ classnames('validate validate-lg', {
                                'is-invalid': errors.password
                            }) }
                            name="password"
                            onChange={ this.handleInputChange }
                            value={ this.state.password }
                        />
                        { errors.password && (<div className="invalid-feedback">{ errors.password }</div>) }
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className={ classnames('validate validate-lg', {
                                'is-invalid': errors.password_confirm
                            }) }
                            name="password_confirm"
                            onChange={ this.handleInputChange }
                            value={ this.state.password_confirm }
                        />
                        { errors.password_confirm && (<div className="invalid-feedback">{ errors.password_confirm }</div>) }
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Sign Up User
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
SignUp.propTypes = {
    signUpUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(mapStateToProps, { signUpUser })(withRouter(SignUp))