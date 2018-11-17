import React, { Component } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';
import axios from 'axios';
import { toggleSignInModal } from '../../redux/layout/actions';
import store from '../../redux/store';

class SignInModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      signUpErrors: []
    };

    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleBack = this.handleBack.bind(this);
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

    console.log(response);
  }

  isButtonDisabled(inputs) {
    const ok = inputs.every(curr => curr.length > 0);

    return !ok;
  }

  handleBack() {
    store.dispatch(toggleSignInModal());
    this.setState({
      username: '',
      password: ''
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
                onChange={e => this.setState({ username: e.target.value })}
                value={this.state.username}
              />
            </Form.Field>

            <Form.Field>
              <label>Password</label>
              <input
                name="password"
                type="password"
                onChange={e => this.setState({ password: e.target.value })}
                value={this.state.password}
              />
            </Form.Field>
          </Form>
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
}

export default SignInModal;
