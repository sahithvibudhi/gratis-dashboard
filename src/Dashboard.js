import React from 'react';
import AuthComponent from './helpers/AuthComponent';
import AppsList from './AppsList';
import Apps from './services/Apps'
import NewAppModal from './NewAppModal';
import AppMoreOptions from './AppMoreOptions';
import { message } from 'antd';


export default class Dashboard extends AuthComponent {

    constructor(props) {
        super(props);
        this.saveApp = this.saveApp.bind(this);
        this.updateApps = this.updateApps.bind(this);
        this.closeEditAppDrawer = this.closeEditAppDrawer.bind(this);
        this.openEditAppDrawer = this.openEditAppDrawer.bind(this);
        this.state = {
            new_app_data : {
                app_name : '',
                app_description : ''
            },
            edit_app_drawer_visible : false,
            apps : []
        }
    }

    saveApp(data) {
        Apps.create(data);
        this.updateApps();
        message.success("New App Created.");
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

    closeEditAppDrawer()
    {
        let data = this.state;
        data.edit_app_drawer_visible = false;
        this.setState(data);
    }

    openEditAppDrawer()
    {
        let data = this.state;
        data.edit_app_drawer_visible = true;
        this.setState(data);
    }

    render() {
        return (
            <div className="container">
                <NewAppModal handleInputChange={this.handleInputChange} saveApp={this.saveApp}/>
                <AppsList updateApps={this.updateApps} apps={this.state.apps} deleteApp={this.deleteApp} editApp={this.openEditAppDrawer}/>
                <AppMoreOptions edit_apps_drawer_visible={this.state.edit_app_drawer_visible} closeEditAppDrawer={this.closeEditAppDrawer} />
            </div>
        );
    }

}