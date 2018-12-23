import React from 'react';
import AuthComponent from './helpers/AuthComponent';
import NewGratisAppButton from './NewGratisAppButton';
import AppsList from './AppsList';
import NewAppModal from './NewAppModal';

export default class Dashboard extends AuthComponent {

    render() {
        return (
            <div className="container">
                <NewGratisAppButton />
                <AppsList />
                <NewAppModal />
            </div>
        );
    }

}