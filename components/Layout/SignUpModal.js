import React, { Component } from 'react';
import {
  Button,
  Image,
  Modal,
  Form,
  Input,
  Grid,
  Message
} from 'semantic-ui-react';
import makeBlockie from 'ethereum-blockies-base64';
import axios from 'axios';
import { toggleSignUpModal } from '../../redux/layout/actions';
import store from '../../redux/store';
import validateSignUpForm from '../../utils/validateSignUpForm';

class SignUpModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      password_2: '',
      signUpErrors: []
    };

    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  async handleSignUp() {
    const { username, password, password_2, email } = this.state;

    const signUpErrors = validateSignUpForm(
      username,
      email,
      password,
      password_2
    );

    if (signUpErrors.length > 0) {
      this.setState({ signUpErrors });
      return;
    }

    const response = await axios({
      method: 'post',
      url: '/register',
      data: { username, password, email },
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    });

    if (!response.data.errors) {
      // here display message about email verification
    } else {
      this.setState({
        signUpErrors: response.data.errors
      });
    }
  }

  handleBack() {
    store.dispatch(toggleSignUpModal());
    this.setState({
      username: '',
      email: '',
      password: '',
      password_2: '',
      signUpErrors: []
    });
  }

  render() {
    const { open } = this.props;

    return (
      <Modal open={open} size="small">
        <Modal.Header className="modal-header">
          Sign up as a new user
        </Modal.Header>
        <Modal.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column width={10}>
                <Form>
                  <Form.Field>
                    <label>Username</label>
                    <Input
                      onChange={e => {
                        this.setState({ username: e.target.value });
                        this.resetErrors();
                      }}
                      value={this.state.username}>
                      <input />
                    </Input>
                    <span className="sign-up-hint">
                      Username should contain between 3 and 15 characters.
                    </span>
                  </Form.Field>

                  <Form.Field>
                    <label>E-mail</label>
                    <Input
                      onChange={e => {
                        this.setState({ email: e.target.value });
                        this.resetErrors();
                      }}
                      value={this.state.email}>
                      <input />
                    </Input>
                    <span className="sign-up-hint">
                      E-mail address will need to be verified before you can
                      sign in.
                    </span>
                  </Form.Field>

                  <Form.Field>
                    <label>Password</label>
                    <Input
                      type="password"
                      onChange={e => {
                        this.setState({ password: e.target.value });
                        this.resetErrors();
                      }}
                      value={this.state.password}
                    />
                    <span className="sign-up-hint">
                      Password should contain at least 8 characters.
                    </span>
                  </Form.Field>

                  <Form.Field>
                    <label>Repeat password</label>
                    <input
                      type="password"
                      onChange={e => {
                        this.setState({ password_2: e.target.value });
                        this.resetErrors();
                      }}
                      value={this.state.password_2}
                    />
                  </Form.Field>
                </Form>
                {this.renderSingUpErrors(this.state.signUpErrors)}
              </Grid.Column>
              <Grid.Column width={6} verticalAlign="middle" textAlign="center">
                {this.renderAvatar(this.state.username)}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          <Button className="dark-button" onClick={e => this.handleBack()}>
            Back
          </Button>

          <Button
            className="orange-button-dark"
            onClick={e => this.handleSignUp()}
            disabled={this.isButtonDisabled([
              this.state.username,
              this.state.password,
              this.state.password_2,
              this.state.email
            ])}>
            Sign Up
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }

  isButtonDisabled(inputs) {
    const ok = inputs.every(curr => curr.length > 0);

    return !ok;
  }

  renderAvatar(username) {
    if (username.length > 3 && username.length < 20 === true)
      return (
        <div className="sign-up-avatar-box">
          <p>Your avatar:</p>
          <Image src={makeBlockie(username)} />
        </div>
      );

    return (
      <div className="sign-up-avatar-box">
        <p>Your avatar:</p>
        <Image
          className="sign-up-avatar-box-img-placeholder"
          src={makeBlockie('dfgdasd')}
        />
      </div>
    );
  }

  resetErrors() {
    this.setState({ signUpErrors: [] });
  }

  renderSingUpErrors(errors) {
    if (errors[0]) {
      return (
        <Message
          error
          header="There were some errors in your sign up form."
          list={errors}
        />
      );
    }
    return '';
  }
}

export default SignUpModal;
