import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        if(window.location.pathname==='/')
            this.state = { data : [] };
        else
            this.state = { data : [{icon:'plus', to:'/dashboard', text:'Apps'},{icon:'appstore-o', to:'/apps', text:'Plugins'},{icon:'pie-chart', to:'/stats', text:'Stats'},{icon:'logout', to:'/signout', text:'Signout'}] };
    }
    render() {
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                {
                    this.state.data.map( (item, key) => {
                        console.log(key);
                        return (
                                <Menu.Item key={key+1}>
                                    <Link to={item.to}>
                                        <Icon type={item.icon} />
                                        <span className="nav-text">{item.text}</span>
                                    </Link>
                                </Menu.Item>
                        );
                    } )
                }
            </Menu>
        );
    }
}