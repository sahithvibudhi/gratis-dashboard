import React, {Component} from 'react';
import Apps from './services/Apps'

export default class AppsList extends Component 
{

    componentDidMount() {
        this.props.updateApps();
    }

    render() 
    {
        return (
            <div>
                Apps:
                {
                    this.props.apps.map(item => {
                        return (<p>{item.app_name}</p>);
                    })
                }
            </div>
        );
    }

}