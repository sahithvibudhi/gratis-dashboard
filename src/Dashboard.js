import React from 'react';
import AuthComponent from './helpers/AuthComponent';

export default class Dashboard extends AuthComponent {

    render() {
        return (
            <div className="container">
                <p>
                    Apps List
                </p>
            </div>
        );
    }

}