import React, {Component} from 'react';
import { List, Icon, Popconfirm, Tooltip, Popover } from 'antd';

export default class AppsList extends Component 
{
    constructor(props)
    {
        super(props);
        this.handleVisibleChange = this.handleVisibleChange.bind(this);
        this.state = {
            visible : {}
        }
    }
    componentDidMount() 
    {
        this.props.updateApps();
    }

    handleVisibleChange = (visible) => {
        this.setState({ visible });
    }

    cancel(e)
    {

    }

    render() 
    {
        return (
            <List
                size="small"
                itemLayout="vertical"
                dataSource={this.props.apps}
                bordered
                style={{ marginTop : "16px" }}
                renderItem={item => (
                <List.Item
                    actions={
                        [
                            <Popover
                                content={
                                    <div>
                                        <p><b>gratis-identifier:</b> <kbd>{item['gratis-identifier']}</kbd></p>
                                        <p><b>gratis-secret:</b> <code>{item['gratis-secret']}</code></p>
                                    </div>
                                }
                                title="Credentials"
                                trigger="click">
                                <a href="javascript::void(0)" type="primary">show credentials</a>
                            </Popover>,
                            <Tooltip placement="leftBottom" title="Edit App">
                                <Icon type="edit" theme="twoTone" onClick={() => this.props.editApp(item)}/>
                            </Tooltip>, 
                            <Tooltip placement="rightBottom" title="Delete App">
                                <Popconfirm title="Are you sure delete this app?" onConfirm={() => this.props.deleteApp(item._id)} onCancel={this.cancel} okText="Yes" cancelText="No">
                                    <Icon type="delete"   theme="twoTone" twoToneColor="#eb2f96"/>
                                </Popconfirm>
                            </Tooltip>
                        ]
                    }
                >
                    <List.Item.Meta
                        title={item.app_name}
                        description={item.app_description} 
                    />
                </List.Item>
                )}
            />
        );
    }

}