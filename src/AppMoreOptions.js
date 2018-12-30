import React, { Component } from 'react';
import { Drawer } from 'antd';


export default class AppMoreOptions extends Component 
{

    render()
    {
        return (
                <Drawer
                title="Title"
                width="100vw"
                height="100vh"
                placement="bottom"
                closable={true}
                onClose={this.props.closeEditAppDrawer}
                visible={this.props.edit_apps_drawer_visible}>
                    content
                </Drawer>
        );
    }
}