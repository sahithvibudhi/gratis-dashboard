import { Component } from 'react';
import TokenHelper from './TokenHelper';

export default class AuthComponent extends Component {

    constructor(props){
        super(props);
        if(!TokenHelper.getToken())
            window.location.href = "/";
    }

}