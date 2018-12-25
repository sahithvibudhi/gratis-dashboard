import React from 'react';

export default class NewAppModal extends React.Component 
{

    render() 
    {
        return (
            <div className="modal fade" id="newAppModalCenter" role="dialog" aria-labelledby="newAppModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    {/* <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div> */}
                    <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label for="app_name">App Name:</label>
                            <input className="form-control" 
                            id="app_name"
                            type="text" 
                            name="app_name" 
                            onChange={this.props.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label for="app_description">Email address</label>
                            <input className="form-control" 
                            id="app_description"
                            type="text" 
                            name="app_description" 
                            onChange={this.props.handleInputChange} />
                        </div>
                    </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" id="new-app-close-btn">Close</button>
                        <button type="button" className="btn btn-primary" onClick={this.props.saveApp}>Create App</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}