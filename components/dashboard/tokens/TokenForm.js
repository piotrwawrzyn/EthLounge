import React, { Component } from 'react';
import { Form, Button, Label, Icon, Message } from 'semantic-ui-react';
import _ from 'lodash';
import axios from 'axios';
import Dropzone from '../shared/DropZone';
import { Router } from '../../../next-routes';
import FormMessage from '../shared/FormMessage';
import AddToken from '../../../utils/api/AddToken';

class TokenForm extends Component {
  constructor(props) {
    super(props);

    this.onDrop = this.onDrop.bind(this);
    this.handleAddTeam = this.handleAddTeam.bind(this);
    this.emptyInputs = {
      displayName: '',
      address: '',
      symbol: '',
      decimals: '',
      logo: ''
    };

    this.noErrors = {
      displayName: false,
      address: false,
      symbol: false,
      decimals: false,
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
    const {
      displayName,
      address,
      symbol,
      decimals,
      logo
    } = this.state.formInputs;

    console.log(!decimals || isNaN(decimals));

    const displayNameNotValid = !displayName;
    const addressNotValid =
      !address || address.length !== 42 || !address.startsWith('0x');
    const symbolNotValid = !symbol;
    const decimalsNotValid = !decimals || isNaN(decimals);
    const logoNotValid = !logo;

    this.setState({
      formError: {
        displayName: displayNameNotValid,
        address: addressNotValid,
        symbol: symbolNotValid,
        decimals: decimalsNotValid,
        logo: logoNotValid
      }
    });

    if (
      displayNameNotValid ||
      addressNotValid ||
      symbolNotValid ||
      logoNotValid ||
      decimalsNotValid
    )
      return;

    const response = await AddToken({
      displayName,
      address,
      symbol,
      decimals,
      logo
    });

    if (response.data.token) {
      Router.pushRoute('/admin/dashboard/tokens');
      this.setState({
        formMessage: 'success',
        formInputs: this.emptyInputs,
        formErrors: this.noErrors
      });
    } else this.setState({ formMessage: 'error' });
  }

  clearFormErrors() {
    this.setState({
      formError: {
        displayName: false,
        address: false,
        symbol: false,
        logo: false
      },
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

        <Form.Field required error={this.state.formError.symbol}>
          <label>Symbol</label>
          <input
            onChange={e => {
              this.clearFormErrors();
              this.setState({
                formInputs: {
                  ...this.state.formInputs,
                  symbol: e.target.value
                }
              });
            }}
            value={this.state.formInputs.symbol}
          />
        </Form.Field>

        <Form.Field required error={this.state.formError.address}>
          <label>Address</label>
          <input
            onChange={e => {
              this.clearFormErrors();
              this.setState({
                formInputs: {
                  ...this.state.formInputs,
                  address: e.target.value
                }
              });
            }}
            value={this.state.formInputs.address}
          />
        </Form.Field>

        <Form.Field required error={this.state.formError.decimals}>
          <label>Decimals</label>
          <input
            onChange={e => {
              this.clearFormErrors();
              this.setState({
                formInputs: {
                  ...this.state.formInputs,
                  decimals: e.target.value
                }
              });
            }}
            value={this.state.formInputs.decimals}
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

export default TokenForm;
