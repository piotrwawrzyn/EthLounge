import React, { Component } from 'react';
import { Button, Menu, Image, Icon, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from '../../next-routes';
import {
  toggleSignUpModal,
  toggleSignInModal
} from '../../redux/layout/actions';
import store from '../../redux/store';
import MenuUser from './MenuUser';
import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';

class TopMenu extends Component {
  constructor(props) {
    super(props);

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
              className="sign-in-button"
              onClick={() => store.dispatch(toggleSignInModal())}
            >
              Sign in
            </Button>
            <span className="or">or</span>
            <Button
              icon
              onClick={() => store.dispatch(toggleSignUpModal())}
              className="sign-up-button margin-right-1em"
            >
              <span style={{ marginRight: '1em' }}>Sign up</span>
              <Icon name="add user" />
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

  render() {
    const { signInModal, signUpModal } = this.props;

    return (
      <Menu inverted size="large" className="top-menu" icon="labeled">
        <SignUpModal open={signUpModal.isOpen} />
        <SignInModal open={signInModal.isOpen} />

        <Menu.Item className="item-logo">
          <Link route="/">
            <a>
              <Image className="logo" src="/static/img/logo/logo.png" />
            </a>
          </Link>
        </Menu.Item>
        <Link route="/bets">
          <Menu.Item>
            <Icon name="chess knight" />
            My Bets
          </Menu.Item>
        </Link>
        <Link route="/deposit">
          <Menu.Item>
            <Icon name="angle double down" />
            Deposit
          </Menu.Item>
        </Link>

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
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.login.user,
    signInModal: state.login.signInModal,
    signUpModal: state.login.signUpModal
  };
};

export default connect(mapStateToProps)(TopMenu);
