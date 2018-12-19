import React, { Component } from 'react';
import TokenHelper from './helpers/TokenHelper';
import { Redirect } from 'react-router-dom';

export default class SignOut extends Component {

    componentDidMount() {
        TokenHelper.removeToken();
    }
 
    render() {
        return (
            <Redirect to="/"/>
        );
    }

}