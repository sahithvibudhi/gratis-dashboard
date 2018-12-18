import React, {Component} from 'react';
// import './Signin.css';

const signinbox = {
    height: '100vh',
    width: '100wh',
    position: 'fixed',
    top: 0,
    left: 0, 
    right: 0,
    'backgroundColor' : '#2d3436'
}

export default class SignIn extends Component {
    login(){
        alert(process.env.REACT_APP_NAME);
        window.location.href='http://google.com/gratis/login';
    }
    render() {
        return (
            <div style={signinbox} className="cnavbar">
                <a type="button" className="btn btn-default" onClick={this.login}>
                <span className="glyphicon glyphicon-asterisk"></span>
                    <span className="fa fa-twitter"></span> Sign in GitHub
                </a>
            </div>
        );
    }
}