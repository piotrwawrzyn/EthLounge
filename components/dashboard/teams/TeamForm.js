import React, { Component } from 'react';
import { Form, Button, Label, Icon, Message } from 'semantic-ui-react';
import _ from 'lodash';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import { Router } from '../../../next-routes';

class TeamForm extends Component {
  constructor(props) {
    super(props);

    this.onDrop = this.onDrop.bind(this);
    this.handleAddTeam = this.handleAddTeam.bind(this);

    this.state = {
      formInputs: { name: '', logo: false },
      formError: { name: false, logo: false },
      formMessage: ''
    };
  }

  onDrop(accepted, rejected) {
    this.clearFormErrors();
    const [file] = accepted;
    this.setState({ formInputs: { ...this.state.formInputs, logo: file } });
  }

  async handleAddTeam() {
    const nameCheck = !this.state.formInputs.name;
    const logoCheck = !this.state.formInputs.logo;
    this.setState({ formError: { name: nameCheck, logo: logoCheck } });

    if (!(nameCheck || logoCheck)) {
      const data = new FormData();
      data.append('logo', this.state.formInputs.logo);
      data.append('displayName', this.state.formInputs.name);

      const response = await axios({
        method: 'post',
        url: '/backend/new_team',
        data: data,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
      });

      if (response.data.success) {
        Router.pushRoute('/admin/dashboard/teams');
        this.setState({
          formMessage: 'success',
          formInputs: { name: '', logo: false },
          formError: { name: false, logo: false }
        });
      } else this.setState({ formMessage: 'error' });
    }
  }

  clearFormErrors() {
    this.setState({ formError: { name: false, logo: false }, formMessage: '' });
  }

  render() {
    return (
      <Form error success>
        <Form.Field required error={this.state.formError.name}>
          <label>Display name</label>
          <input
            onChange={e => {
              this.clearFormErrors();
              this.setState({
                formInputs: {
                  ...this.state.formInputs,
                  name: e.target.value
                }
              });
            }}
            value={this.state.formInputs.name}
          />
        </Form.Field>
        <Form.Field required error={this.state.formError.logo}>
          <label>PNG Logo</label>
          {this.renderDropBox(
            this.state.formInputs.logo,
            this.state.formError.logo
          )}
          <Label className="label-warning">
            <Icon name="warning circle" />
            Please upload only square logos. Preferably 200x200 px.
          </Label>
        </Form.Field>

        <Button
          icon
          labelPosition="right"
          onClick={e => this.handleAddTeam()}
          className="dark-button">
          <Icon name="plus" />
          Add
        </Button>

        {this.generateFormMessage(this.state.formMessage)}
      </Form>
    );
  }

  generateFormMessage(message) {
    if (message) {
      const success = message === 'success' ? true : false;
      const header = success ? 'Success' : 'There has been a problem';
      const content = success
        ? 'New team has been succesfuly added to database.'
        : 'No new team has been added to database. Probably a team with such a name already exist.';
      return (
        <Message
          success={success}
          error={!success}
          content={content}
          header={header}
        />
      );
    }

    return '';
  }

  renderDropBox(logo, error) {
    if (!_.isEmpty(logo)) {
      return (
        <Label size="medium" image className="font-white dark-orange-bg">
          {logo.name}
          <Icon
            onClick={e => {
              this.setState({
                formInputs: { ...this.state.formInputs, logo: false }
              });
            }}
            name="delete"
          />
        </Label>
      );
    } else {
      const classNameModifier = error ? 'dropdown-div-error' : '';

      return (
        <Dropzone
          className={`dropdown-div ${classNameModifier}`}
          activeClassName="dropdown-div-accepted"
          rejectClassName="dropdown-div-rejected"
          accept="image/png"
          onDrop={(accepted, rejected) => this.onDrop(accepted, rejected)}>
          {({ isDragAccept, isDragReject }) => {
            if (isDragAccept) {
              return 'The logo look OK. Now drop it.';
            }
            if (isDragReject) {
              return 'This is not a PNG file. ';
            }
            return 'Drop PNG logo here';
          }}
        </Dropzone>
      );
    }
  }
}

export default TeamForm;
