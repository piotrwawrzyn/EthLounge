import React, { Component } from 'react';
import { Checkbox, Grid, Icon } from 'semantic-ui-react';
import axios from 'axios';
import _ from 'lodash';

class ApiSetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      automaticMatchRescheduling: props.pandaAPI.automaticMatchRescheduling,
      automaticMatchFinalizing: props.pandaAPI.automaticMatchFinalizing
    };

    this.handleMatchFinalizing = this.handleMatchFinalizing.bind(this);
    this.handleMatchRescheduling = this.handleMatchRescheduling.bind(this);
  }

  async handleMatchRescheduling(newValue) {
    this.setState({
      automaticMatchRescheduling: newValue
    });

    await axios.post(
      '/backend/update-config/pandascoreapi/automatic-match-rescheduling',
      {
        method: 'post',
        data: { newValue }
      }
    );
  }

  async handleMatchFinalizing(newValue) {
    this.setState({
      automaticMatchFinalizing: newValue
    });

    await axios.post(
      '/backend/update-config/pandascoreapi/automatic-match-finalizing',
      {
        method: 'post',
        data: { newValue }
      }
    );
  }

  render() {
    return (
      <div className="setup-box">
        <div className="setup-box-row">
          <div className="setup-box-row-title">
            <Icon name="calendar alternate outline" /> Automatic Match
            Rescheduling
          </div>
          <div className="setup-box-row-checkbox">
            <Checkbox
              onClick={() =>
                this.handleMatchRescheduling(
                  !this.state.automaticMatchRescheduling
                )
              }
              toggle
              checked={this.state.automaticMatchRescheduling}
            />
          </div>
        </div>

        <div className="setup-box-row">
          <div className="setup-box-row-title">
            <Icon name="calendar check" /> Automatic Match Finalizing
          </div>
          <div className="setup-box-row-checkbox">
            <Checkbox
              onClick={() =>
                this.handleMatchFinalizing(!this.state.automaticMatchFinalizing)
              }
              toggle
              checked={this.state.automaticMatchFinalizing}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ApiSetup;
