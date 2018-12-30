import React, { Component } from 'react';
import { Button, Drawer } from 'antd';


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
                    

                    <div
                        style={{
                        position: 'absolute',
                        left: 0,
                        bottom: 0,
                        width: '100%',
                        borderTop: '1px solid #e9e9e9',
                        padding: '10px 16px',
                        background: '#fff',
                        textAlign: 'right',
                        }}
                    >
                        <Button onClick={this.props.closeEditAppDrawer} style={{ marginRight: 8 }}>
                        Cancel
                        </Button>
                        <Button type="primary">
                        Submit
                        </Button>
                    </div>
                </Drawer>
        );
    }
}