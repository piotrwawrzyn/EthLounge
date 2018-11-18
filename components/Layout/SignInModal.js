import React, { Component } from 'react';
import { Button, Modal, Form, Message, Icon } from 'semantic-ui-react';
import axios from 'axios';
import { toggleSignInModal } from '../../redux/layout/actions';
import store from '../../redux/store';
import sleep from '../../utils/sleep';

class SignInModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      error: '',
      additionalEmailSent: false
    };

    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.resendVerificationEmail = this.resendVerificationEmail.bind(this);
  }

  async handleSignIn() {
    const { username, password } = this.state;

    let data = JSON.stringify({
      password: password,
      username: username
    });

    const response = await axios.post('/login', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.data.success) {
      window.location.href = window.location.href;
      return;
    }

    if (response.data.invalidCredentials) {
      this.setState({ error: 'invalid-credentials' });
    }

    if (response.data.unverifiedEmail) {
      this.setState({ error: 'unverified-email' });
    }
  }

  isButtonDisabled(inputs) {
    const ok = inputs.every(curr => curr.length > 0);

    return !ok;
  }

  handleBack() {
    store.dispatch(toggleSignInModal());
    this.setState({
      username: '',
      password: '',
      error: '',
      additionalEmailSent: false
    });
  }

  render() {
    const { open } = this.props;

    return (
      <Modal open={open} size="small">
        <Modal.Header className="modal-header">Sign in</Modal.Header>
        <Modal.Content>
          <Form id="login_form" action="/login" method="get">
            <Form.Field>
              <label>Username</label>
              <input
                name="username"
                onChange={e =>
                  this.setState({ username: e.target.value, error: '' })
                }
                value={this.state.username}
              />
            </Form.Field>

            <Form.Field>
              <label>Password</label>
              <input
                name="password"
                type="password"
                onChange={e =>
                  this.setState({ password: e.target.value, error: '' })
                }
                value={this.state.password}
              />
            </Form.Field>
          </Form>
          {this.renderMessage(this.state.error)}
        </Modal.Content>
        <Modal.Actions>
          <Button className="dark-button" onClick={() => this.handleBack()}>
            Back
          </Button>

          <Button
            onClick={() => this.handleSignIn()}
            className="orange-button-dark"
            disabled={this.isButtonDisabled([
              this.state.username,
              this.state.password
            ])}>
            Sign In
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }

  renderMessage(error) {
    switch (error) {
      case 'invalid-credentials': {
        return (
          <Message
            error
            icon="times circle"
            header="Invalid username or password."
          />
        );
      }
      case 'unverified-email': {
        return (
          <Message warning icon>
            <Icon name="mail" />
            <Message.Content>
              <Message.Header>E-mail pending confirmation</Message.Header>
              <p>
                Please confirm your e-mail address before you can sign in.
                <br />
                {this.state.additionalEmailSent ? (
                  <span>
                    Verification e-mail has been re-send successfuly! Remember
                    to check the spam folder as well.
                  </span>
                ) : (
                  <span
                    className="resend-verification-email"
                    onClick={() => this.resendVerificationEmail()}>
                    Resend verification e-mail.
                  </span>
                )}
              </p>
            </Message.Content>
          </Message>
        );
      }

      default: {
        return '';
      }
    }
  }

  async resendVerificationEmail() {
    await axios.post('/resend-verification-email', {
      username: this.state.username
    });

    await sleep(500);
    this.setState({ additionalEmailSent: true });
  }
}

export default SignInModal;
