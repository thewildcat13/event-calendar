import React, { Component, Fragment } from 'react';
import '../styles/styles.css';

class EventComponent extends Component {

    handleSaveEvent() {
        this.props.save(this.refs.event.value);
        return this.props.close();
    }

    handleRemoveEvent() {
        this.props.remove();
        return this.props.close();
    }


    render() {
        return <Fragment>
            <div className={"modal fade" + this.props.show}
                 aria-hidden={this.props.hidden} style={this.props.display}
                 id="myModal" role="dialog" aria-labelledby="exampleModalLabel" tabIndex="-1">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Event Name for {this.props.day} day of month</h5>
                            <button onClick={this.props.close}
                                    type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <input className="event" type="text" placeholder="Event Name"
                                   defaultValue={this.props.event} ref="event" />
                        </div>
                        <div className="modal-footer">
                            <button onClick={this.handleRemoveEvent.bind(this)}
                                    type="button" className="btn btn-danger">Delete</button>
                            <button onClick={this.handleSaveEvent.bind(this)}
                                    type="button" className="btn btn-success">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    }
}

export default EventComponent;
