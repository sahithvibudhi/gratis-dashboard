import React, {Component} from 'react';
import { List } from 'antd';

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
                itemLayout="horizontal"
                dataSource={this.props.apps}
                bordered
                style={{ "margin-top" : "16px" }}
                renderItem={item => (
                <List.Item>
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