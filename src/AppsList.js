import React, {Component} from 'react';
import { List, Icon } from 'antd';

export default class AppsList extends Component 
{

    componentDidMount() 
    {
        this.props.updateApps();
    }

    render() 
    {
        return (
            <List
                size="small"
                itemLayout="horizontal"
                dataSource={this.props.apps}
                bordered
                style={{ "margin-top" : "16px" }}
                renderItem={item => (
                <List.Item
                    actions={[<Icon type="edit" theme="twoTone"/>, <Icon type="delete"   theme="twoTone" twoToneColor="#eb2f96"/>]}
                >
                    <List.Item.Meta
                    title={<a href="https://ant.design">{item.app_name}</a>}
                    description={item.app_description}
                    />
                </List.Item>
                )}
            />
        );
    }

}