import React from 'react';
import AuthComponent from './helpers/AuthComponent';
import NewGratisAppButton from './NewGratisAppButton';
import AppsList from './AppsList';
import Apps from './services/Apps'
import NewAppModal from './NewAppModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Dashboard extends AuthComponent {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.saveApp = this.saveApp.bind(this);
        this.updateApps = this.updateApps.bind(this);
        this.state = {
            new_app_data : {
                app_name : '',
                app_description : ''
            },
            apps : []
        }
    }

    showSuccessNotification()
    {
        // toast("Default Notification !");

        toast.success("New App Created", {
            position: toast.POSITION.BOTTOM_RIGHT
        });

    }

    handleInputChange(e) {
        let data = this.state;
        let new_app = this.state.new_app_data;
        new_app[e.target.name] = e.target.value;
        data.new_app_data = new_app;
        this.setState(data);
    }

    saveApp(e) {
        e.preventDefault();
        Apps.create(this.state.new_app_data);
        document.getElementById('new-app-close-btn').click();
        this.updateApps();
    }

    async updateApps() 
    {
        let apps = await Apps.fetch();
        let data = this.state;
        data.apps = apps
        this.setState(data);
        this.showSuccessNotification();
    }

    render() {
        return (
            <div className="container">
                <NewGratisAppButton />
                <AppsList updateApps={this.updateApps} apps={this.state.apps}/>
                <NewAppModal handleInputChange={this.handleInputChange} saveApp={this.saveApp}/>
                <ToastContainer />
            </div>
        );
    }

}