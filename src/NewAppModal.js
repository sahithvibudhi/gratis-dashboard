import React from 'react';
import Apps from './services/Apps';

export default class NewAppModal extends React.Component 
{
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.saveApp = this.saveApp.bind(this);
        this.state = {
            app_name : '',
            app_description : ''
        }
    }

    handleInputChange(e) {
        let data = this.state;
        data[e.target.name] = e.target.value;
        this.setState(data);
    }

    saveApp(e) {
        e.preventDefault();
        Apps.create(this.state);
    }

    render() 
    {
        return (
            <div className="modal fade" id="newAppModalCenter" tabindex="-1" role="dialog" aria-labelledby="newAppModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <form>
                        <input 
                        type="text" 
                        name="app_name" 
                        onChange={this.handleInputChange} />
                        <input 
                        type="text" 
                        name="app_description" 
                        onChange={this.handleInputChange} />
                    </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={this.saveApp}>Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}