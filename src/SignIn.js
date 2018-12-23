import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import TokenHelper from './helpers/TokenHelper';
// import './Signin.css';

const signinbox = {
    height   : '100vh',
    width    : '100wh',
    position : 'fixed',
    top      : 0,
    left     : 0, 
    right    : 0,
    'backgroundColor' : '#ecf0f1'
}

const verticalMiddle = {
  position   : "absolute",
  top        : "50%",
  left       : "50%",
  transform  : "translate(-50%, -50%)"
}

export default class SignIn extends Component {

    login(){
        window.location.href=`${process.env.REACT_APP_BACKEND_URL}/gratis/login`;
    }

    hasToken() {
        return this.props.match.params.accessToken;
    }

    render() {
        let token = this.hasToken();
        // backend just sent a new token
        if(token)
        {
            TokenHelper.storeToken(token);
            return <Redirect to='/dashboard'/>
        }
        // already logged in
        if(TokenHelper.getToken())
        {
            return <Redirect to='/dashboard'/>
        }

        return (
            <div style={signinbox}>
                <div style={verticalMiddle}>
                <button type="button" className="btn btn-social btn-block" onClick={this.login}>
                    <span className="fa fa-github"></span> Sign in GitHub
                </button>
                </div>
            </div>
        );

    }

}