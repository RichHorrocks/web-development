import React, { Component } from 'react';
import Modal from '../components/Modal/Modal';
import Backdrop from '../components/Backdrop/Backdrop.js';

import './events.css';

class EventsPage extends Component {
  state = {
    creating: false
  };

  createEventHandler = () => {
    this.setState({ creating: true });
  };

  cancelHandler = () => {
    this.setState({ creating: false });
  };

  confirmHandler = () => {
    this.setState({ creating: false });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.creating && <Backdrop />}
        {this.state.creating && (
          <Modal
            title="Add Event"
            canCancel
            canConfirm
            onCancel={this.cancelHandler}
            onConfirm={this.confirmHandler}
          >
            Content
          </Modal>
        )}
        <div className="events-control">
          <p>Share your own events!</p>
          <button className="btn" onClick={this.createEventHandler}>
            Create Event
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default EventsPage;
