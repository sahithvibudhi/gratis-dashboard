import React, {Component} from 'react';
// import './Signin.css';

const signinbox = {
    height: '100vh',
    width: '100wh',
    position: 'fixed',
    top: 0,
    left: 0, 
    right: 0,
    'backgroundColor' : '#fff'
}

const verticalMiddle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
}

export default class SignIn extends Component {

    login(){
        window.location.href=`${process.env.REACT_APP_BACKEND_URL}/gratis/login`;
    }

    render() {
        return (
            <div style={signinbox}>
                <div style={verticalMiddle}>
                <button type="button" className="btn btn-social btn-block" onClick={this.login}>
                {/* <span className="glyphicon glyphicon-asterisk"></span> */}
                    <span className="fa fa-github" style={{"margin-right":"10px"}}></span> Sign in GitHub
                </button>
                </div>
            </div>
        );
    }

}