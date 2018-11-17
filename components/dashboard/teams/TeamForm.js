import React, { Component } from 'react';
import { Form, Button, Label, Icon, Message } from 'semantic-ui-react';
import _ from 'lodash';
import axios from 'axios';
import Dropzone from '../shared/DropZone';
import { Router } from '../../../next-routes';
import FormMessage from '../shared/FormMessage';
import addTeam from '../../../utils/backend-calls/AddTeam';

class TeamForm extends Component {
  constructor(props) {
    super(props);

    this.onDrop = this.onDrop.bind(this);
    this.handleAddTeam = this.handleAddTeam.bind(this);
    this.emptyInputs = {
      displayName: '',
      logo: ''
    };

    this.noErrors = {
      displayName: false,
      logo: false
    };

    this.state = {
      formInputs: this.emptyInputs,
      formError: this.noErrors,
      formMessage: ''
    };
  }

  onDrop(accepted, rejected) {
    this.clearFormErrors();
    const [file] = accepted;
    this.setState({ formInputs: { ...this.state.formInputs, logo: file } });
  }

  async handleAddTeam() {
    const displayNameError = !this.state.formInputs.displayName;
    const logoError = !this.state.formInputs.logo;

    this.setState({
      formError: { displayName: displayNameError, logo: logoError }
    });

    if (displayNameError || logoError) return;

    const { displayName, logo } = this.state.formInputs;

    const response = await addTeam({ displayName, logo });

    if (response.data.team) {
      Router.pushRoute('/admin/dashboard/teams');
      this.setState({
        formMessage: 'success',
        formInputs: this.emptyInputs,
        formError: this.noErrors
      });
    } else this.setState({ formMessage: 'error' });
  }

  clearFormErrors() {
    this.setState({
      formError: { displayName: false, logo: false },
      formMessage: ''
    });
  }

  render() {
    return (
      <Form error success>
        <Form.Field required error={this.state.formError.displayName}>
          <label>Display name</label>
          <input
            onChange={e => {
              this.clearFormErrors();
              this.setState({
                formInputs: {
                  ...this.state.formInputs,
                  displayName: e.target.value
                }
              });
            }}
            value={this.state.formInputs.displayName}
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

        <FormMessage message={this.state.formMessage} />
      </Form>
    );
  }

  renderDropBox(logo, error) {
    const classNameModifier = error ? 'dropzone-div-error' : '';

    return (
      <Dropzone
        handleDelete={e => {
          this.setState({
            formInputs: { ...this.state.formInputs, logo: false }
          });
        }}
        droppedImg={logo}
        classNameModifier={classNameModifier}
        onDrop={(accepted, rejected) => this.onDrop(accepted, rejected)}
      />
    );
  }
}

export default TeamForm;
