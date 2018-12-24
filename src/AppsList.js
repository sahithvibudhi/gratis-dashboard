import React, {Component} from 'react';
import Apps from './services/Apps'

export default class AppsList extends Component 
{

    componentDidMount() 
    {
        this.props.updateApps();
    }

    render() 
    {
        return (
            <div>
                <h3 style={{'margin-bottom': '20px'}}>Apps:</h3>
                {
                    this.props.apps.map(item => {
                        return (
                            <div className="app-item shadow-sm p-3 mb-5 bg-white rounded">
                                <h5>{item.app_name}</h5>
                                <p>{item.app_description}</p>
                                <p><b>App Id:</b> <kbd>{item['gratis-identifier']}</kbd></p>
                                <p><b>Secret:</b> <kbd>{item['gratis-secret']}</kbd></p>
                            </div>
                        );
                    })
                }
            </div>
        );
    }

}