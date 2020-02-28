import React, { Component } from 'react';

class UserAccount extends Component {


    render () {
        return (
            <button className="accountBtn waves-effect waves-light btn" onClick={ event => window.location.href = '/useraccount' } >
                My Account
            </button>
        )
    }
}

export default UserAccount;