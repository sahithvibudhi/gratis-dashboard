import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        if(window.location.pathname==='/')
            this.state = { data : [] };
        else
            this.state = { data : [{to:'/dashboard', text:'Dashboard'},{to:'/apps', text:'Plugins'},{to:'/signout', text:'Signout'}] };
    }
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand">{process.env.REACT_APP_NAME}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown pull-right">
                    <ul className="navbar-nav">
                    {
                        this.state.data.map((item)=>{
                            return (<li className="nav-item active">
                                <Link className="nav-link" to={item.to}>{item.text}</Link>
                            </li>);
                        })
                    }
                    </ul>
                </div>
            </nav>
            <div className="cnavbar">
                <ul>
                    {/* {
                        this.state.data.map((item)=>{
                            return (<li>
                                <Link to={item.to}>{item.text}</Link>
                            </li>);
                        })
                    } */}
                </ul>
            </div>
            </div>
        );
    }
}