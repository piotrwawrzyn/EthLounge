import React, { Component } from 'react';
import {
  Button,
  Menu,
  Image,
  Icon,
  Modal,
  Message,
  Form,
  Input,
  Label,
  Grid,
  List
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import store from '../../redux/store';
import makeBlockie from 'ethereum-blockies-base64';
import axios from 'axios';
import MenuUser from './MenuUser';
import IsUsernameOk from '../../utils/FormValidation/IsUsernameOk';
import IsPasswordOk from '../../utils/FormValidation/IsPasswordOk';
import IsEmailOk from '../../utils/FormValidation/isEmailOk';

class TopMenu extends Component {
  constructor(props) {
    super(props);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.state = {
      username: '',
      email: '',
      password: '',
      password_2: '',
      signUpErrors: [],
      signUpOpen: false,
      signInOpen: false
    };
  }

  renderRightMenu(user) {
    switch (user) {
      case false: {
        return (
          <div className="auth-buttons">
            <Button
              onClick={e => this.setState({ signInOpen: true })}
              color="black">
              Sign in
            </Button>
            <span className="or">or</span>
            <Button
              onClick={e => this.setState({ signUpOpen: true })}
              color="black"
              className="margin-right-1em">
              Sign up
            </Button>
          </div>
        );
      }

      case null: {
        return '';
      }

      default: {
        return <MenuUser user={user} />;
      }
    }
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

  async handleSignUp() {
    const { username, password, password_2, email } = this.state;

    const signUpErrors = [];

    const isUsernameOk = IsUsernameOk(username);
    if (isUsernameOk !== true) signUpErrors.push(isUsernameOk);

    const isPasswordOk = IsPasswordOk(password, password_2);
    if (isPasswordOk !== true) signUpErrors.push(isPasswordOk);

    const isEmailOk = IsEmailOk(email);
    if (isEmailOk !== true) signUpErrors.push(isEmailOk);

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

  isButtonDisabled(inputs) {
    const ok = inputs.every(curr => curr.length > 0);

    return !ok;
  }

  renderAvatar(username) {
    if (IsUsernameOk(username) === true)
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

  renderSignUpModal(open) {
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
                  </Form.Field>

                  <Form.Field>
                    <label>Password</label>
                    <input
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
          <Button
            className="dark-button"
            onClick={e => {
              this.setState({
                signUpOpen: false,
                username: '',
                password: '',
                password_2: '',
                signUpErrors: []
              });
            }}>
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

  renderSignInModal(open) {
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
          <Button
            className="dark-button"
            onClick={e => {
              this.setState({
                signInOpen: false,
                username: '',
                password: ''
              });
            }}>
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

  render() {
    return (
      <Menu inverted size="large" className="top-menu" icon="labeled">
        <Menu.Item className="item-logo">
          <Image className="logo" src="/static/img/logo/logo.png" />
        </Menu.Item>
        <Menu.Item>
          <Icon name="chess knight" />
          My Bets
        </Menu.Item>
        <Menu.Item>
          <Icon name="angle double down" />
          Deposit
        </Menu.Item>

        <Menu.Item>
          <Icon name="angle double up" />
          Withdraw
        </Menu.Item>

        <Menu.Item>
          <Icon name="question circle outline" />
          FAQ
        </Menu.Item>

        <Menu.Item className="menu-right-item" position="right">
          {this.renderRightMenu(this.props.user)}
        </Menu.Item>

        {this.renderSignUpModal(this.state.signUpOpen)}

        {this.renderSignInModal(this.state.signInOpen)}
      </Menu>
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

const mapStateToProps = state => {
  return {
    user: state.login.user
  };
};

export default connect(mapStateToProps)(TopMenu);
