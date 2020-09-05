import React, { Component } from 'react'

import Login from '../../Containers/Login';
// import SignUp from '../../Containers/SignUp';

import './styles.css'

class AuthPanel extends Component {


    render() {
        return (
            <div className="content">

                <Login />

                <div className="separator"></div>

                {/* <SignUp /> */}<div></div>

            </div>
        )
    }
}



export default AuthPanel