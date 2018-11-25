import React, { Component } from 'react';
import { Checkbox, Grid, Icon } from 'semantic-ui-react';
import axios from 'axios';
import _ from 'lodash';

class ApiSetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      automaticGameRescheduling: props.pandaAPI.automaticGameRescheduling,
      automaticGameFinalizing: props.pandaAPI.automaticGameFinalizing
    };

    this.handleGameFinalizing = this.handleGameFinalizing.bind(this);
    this.handleGameRescheduling = this.handleGameRescheduling.bind(this);
  }

  async handleGameRescheduling(newValue) {
    this.setState({
      automaticGameRescheduling: newValue
    });

    await axios.post(
      '/backend/update-config/pandascoreapi/automatic-game-rescheduling',
      {
        method: 'post',
        data: { newValue }
      }
    );
  }

  async handleGameFinalizing(newValue) {
    this.setState({
      automaticGameFinalizing: newValue
    });

    await axios.post(
      '/backend/update-config/pandascoreapi/automatic-game-finalizing',
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
            <Icon name="calendar alternate outline" /> Automatic Game
            Rescheduling
          </div>
          <div className="setup-box-row-checkbox">
            <Checkbox
              onClick={() =>
                this.handleGameRescheduling(
                  !this.state.automaticGameRescheduling
                )
              }
              toggle
              checked={this.state.automaticGameRescheduling}
            />
          </div>
        </div>

        <div className="setup-box-row">
          <div className="setup-box-row-title">
            <Icon name="calendar check" /> Automatic Game Finalizing
          </div>
          <div className="setup-box-row-checkbox">
            <Checkbox
              onClick={() =>
                this.handleGameFinalizing(!this.state.automaticGameFinalizing)
              }
              toggle
              checked={this.state.automaticGameFinalizing}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ApiSetup;
