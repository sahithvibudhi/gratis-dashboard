import React, { Component } from 'react';

export default class NewGratisAppButton extends Component {
    render() {
        return (
            <button type="button" className="btn btn-outline-secondary pull-right" data-toggle="modal" data-target="#newAppModalCenter">
                <span className="icon-plus-sign-alt"></span>
                <span className="glyphicon glyphicon-plus"></span>
                <span className="fa fa-plus" />
                App
            </button>
        );
    }
}