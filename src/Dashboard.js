import React from 'react';
import AuthComponent from './helpers/AuthComponent';
import AppsList from './AppsList';
import Apps from './services/Apps'
import NewAppModal from './NewAppModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { message } from 'antd';


export default class Dashboard extends AuthComponent {

    constructor(props) {
        super(props);
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

    saveApp(data) {
        Apps.create(data);
        this.updateApps();
        this.showSuccessNotification();
    }

    async updateApps() 
    {
        let apps = await Apps.fetch();
        let data = this.state;
        data.apps = apps
        console.log(data);
        this.setState(data);
    }

    async deleteApp(_id)
    {
        await Apps.delete(_id);
        message.success('Done');
        this.updateApps();
    }

    render() {
        return (
            <div className="container">
                <NewAppModal handleInputChange={this.handleInputChange} saveApp={this.saveApp}/>
                <AppsList updateApps={this.updateApps} apps={this.state.apps} deleteApp={this.deleteApp}/>
                <ToastContainer />
            </div>
        );
    }

}