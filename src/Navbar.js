import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        if(window.location.pathname==='/')
            this.state = { data : [] };
        else
            this.state = { data : [{to:'/', text:'Singin'},{to:'/dashboard', text:'Dashboard'},{to:'/apps', text:'Plugins'}] };
    }
    render() {
        return (
            <div className="cnavbar">
                <ul>
                    {
                        this.state.data.map((item)=>{
                            return (<li>
                                <Link to={item.to}>{item.text}</Link>
                            </li>);
                        })
                    }
                </ul>
            </div>
        );
    }
}