import React, { Component } from 'react';
import {
  Button,
  Menu,
  Image,
  Icon,
  Grid,
  Modal,
  GridColumn,
  Message,
  Form,
  Header,
  GridRow
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import store from '../../redux/store';
import ShortEthAddress from '../../utils/ShortEthAddress';
import makeBlockie from 'ethereum-blockies-base64';
import axios from 'axios';
import { Router } from '../../next-routes';

class MenuExampleSizeLarge extends Component {
  constructor(props) {
    console.log('state in constructor of menu', store.getState());
    super(props);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleSingOut = this.handleSignOut.bind(this);
    this.state = {
      username: '',
      password: '',
      password_2: '',
      signUpErrors: [],
      signUpOpen: false,
      signInOpen: false,
      avatarClassNameModifier: ''
    };
  }

  renderRightMenu(user) {
    switch (user) {
      case false: {
        return (
          <div>
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
        const { username } = user;
        const usernameStyle = { color: 'white' };
        return (
          <Grid className="menu-right">
            <Grid.Row verticalAlign="middle">
              <Grid.Column width={4}>
                <div>
                  <img
                    src={makeBlockie(username)}
                    className={`user-avatar undragable ${
                      this.state.avatarClassNameModifier
                    }`}
                  />
                </div>
              </Grid.Column>
              <Grid.Column width={1} />
              <Grid.Column width={10} className="user-column-right">
                <Grid>
                  <GridRow style={{ padding: '0' }}>
                    <div>
                      <Header size="tiny" style={usernameStyle}>
                        {username}
                      </Header>
                    </div>
                  </GridRow>
                  <GridRow style={{ padding: '0' }}>
                    <GridColumn width="3" style={{ padding: '0' }}>
                      <Button
                        size="small"
                        onClick={e => this.handleSignOut()}
                        icon="power off"
                        className="user-column-right-button orange-button-dark"
                      />
                    </GridColumn>
                    <GridColumn width="1" style={{ padding: '0.5em' }} />
                    <GridColumn style={{ padding: '0' }} width="3">
                      <Button
                        size="small"
                        icon="setting"
                        className="user-column-right-button orange-button-dark"
                      />
                    </GridColumn>
                  </GridRow>
                </Grid>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        );
      }
    }
  }

  async handleSignUp() {
    // Client side check
    const { username, password, password_2 } = this.state;
    const signUpErrors = [];

    if (username.length < 5) {
      signUpErrors.push('Username should be at least 4 characters long.');
    } else if (username.length > 20) {
      signUpErrors.push('Username should be maximum 20 characters long.');
    }

    if (password.length >= 8) {
      if (password !== password_2) {
        signUpErrors.push('Passwords do not seem to match.');
      }
    } else {
      c;
    }

    if (signUpErrors.length > 0) {
      this.setState({ signUpErrors });
      return;
    }

    const response = await axios({
      method: 'post',
      url: '/register',
      data: { username, password },
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    });

    console.log(response.data);

    if (response.data.success) {
    } else {
      this.setState({
        signUpErrors: [
          'This username already exist. Try to pick something else.'
        ]
      });
    }
  }

  async handleSignOut() {
    console.log('sign out');
    this.setState({ avatarClassNameModifier: 'avatar-exit' });
    await axios.get('/logout');
    Router.push('/');
  }

  isButtonDisabled(text) {
    const ok = text.every(curr => curr.length > 0);

    return !ok;
  }

  render() {
    return (
      <Menu inverted size="large" className="menu">
        <Menu.Item>
          <Image src="/static/img/logo.png" />
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
        <Menu.Item position="right">
          {this.renderRightMenu(this.props.user)}
        </Menu.Item>

        <Modal open={this.state.signUpOpen} size="small">
          <Modal.Header>Sign up as a new user</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field>
                <label>Username</label>
                <input
                  onChange={e => this.setState({ username: e.target.value })}
                  value={this.state.username}
                />
              </Form.Field>

              <Form.Field>
                <label>Password</label>
                <input
                  type="password"
                  onChange={e => this.setState({ password: e.target.value })}
                  value={this.state.password}
                />
              </Form.Field>

              <Form.Field>
                <label>Repeat password</label>
                <input
                  type="password"
                  onChange={e => this.setState({ password_2: e.target.value })}
                  value={this.state.password_2}
                />
              </Form.Field>
            </Form>
            {this.renderSingUpErrors(this.state.signUpErrors)}
          </Modal.Content>
          <Modal.Actions>
            <Button
              className="dark-orange-bg font-white"
              onClick={e => {
                this.setState({
                  signUpOpen: false,
                  username: '',
                  password: '',
                  password_2: ''
                });
              }}>
              Back
            </Button>

            <Button
              className="dark-button"
              onClick={e => this.handleSignUp()}
              disabled={this.isButtonDisabled([
                this.state.username,
                this.state.password,
                this.state.password_2
              ])}>
              Sign Up
            </Button>
          </Modal.Actions>
        </Modal>

        <Modal open={this.state.signInOpen} size="small">
          <Modal.Header>Sign in</Modal.Header>
          <Modal.Content>
            <Form id="login_form" action="/login" method="post">
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
              className="dark-orange-bg font-white"
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
              type="submit"
              form="login_form"
              className="dark-button"
              disabled={this.isButtonDisabled([
                this.state.username,
                this.state.password
              ])}>
              Sign In
            </Button>
          </Modal.Actions>
        </Modal>
      </Menu>
    );
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

export default connect(mapStateToProps)(MenuExampleSizeLarge);
