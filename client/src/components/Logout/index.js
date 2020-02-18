import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from "../../actions/authentication";
import { withRouter } from 'react-router-dom';

class Logout extends Component {

    onLogout (e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render () {
        return (
            <a className="waves-effect waves-light btn">Logout</a>
        )
    }
}
Logout.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Logout));