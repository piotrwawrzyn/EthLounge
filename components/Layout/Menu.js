import React, { Component } from 'react';
import {
  Button,
  Menu,
  Image,
  Icon,
  Grid,
  Modal,
  Header
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import web3 from '../../ethereum/web3';
import Blockies from 'react-blockies';
import EthLounge from '../../ethereum/EthLounge';
import store from '../../redux/store';
import { Sleep } from '../../utils/Sleep';
import ShortEthAddress from '../../utils/ShortEthAddress';
import axios from 'axios';

class MenuExampleSizeLarge extends Component {
  constructor(props) {
    console.log('state in constructor of menu', store.getState());
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      loading: false,
      popupOpen: false
    };
  }

  generateRightMenu(gambler) {
    switch (gambler) {
      case false: {
        return (
          <Button
            loading={this.state.loading}
            onClick={e => this.handleLogin(e)}
            color="black">
            Sign in
          </Button>
        );
      }

      case null: {
        return '';
      }

      default: {
        const { address } = gambler;
        const ethAddressShort = ShortEthAddress(address);
        const ethAddressStyle = { color: 'white' };
        return (
          <Grid>
            <Grid.Row verticalAlign="middle">
              <Grid.Column width={4}>
                <div className="user-avatar">
                  <Blockies seed={address} scale={6} size={8} />
                </div>
              </Grid.Column>
              <Grid.Column width={1} />
              <Grid.Column width={10} className="user-column-right">
                <div className="user-column-right-address">
                  <a
                    style={ethAddressStyle}
                    href={`https://etherscan.io/address/${address}`}
                    target="_blank">
                    {ethAddressShort}
                  </a>
                </div>
                <Button
                  onClick={e => this.handleLogout(e)}
                  loading={this.state.loading}
                  size="mini"
                  color="black"
                  icon
                  labelPosition="right"
                  className="user-column-right-signout-button">
                  Log out
                  <Icon name="power off" />
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        );
      }
    }
  }

  async handleLogin(e) {
    this.setState({ loading: true });

    let account;

    [account] = await web3.eth.getAccounts();

    if (typeof account !== 'undefined') {
      const gambler = await axios.post('/login', {
        address: account
      });

      this.setState({ gambler: gambler.data });
      store.dispatch({ type: 'LOG_IN', gambler: gambler.data });
    } else {
      this.setState({ popupOpen: true });
    }

    this.setState({ loading: false });
  }

  async handleLogout(e) {
    this.setState({ loading: true });
    await Sleep(600);
    await axios.get('/logout');
    store.dispatch({ type: 'LOG_OUT' });
    this.setState({ loading: false });
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
          {this.generateRightMenu(this.props.gambler)}
        </Menu.Item>

        <Modal open={this.state.popupOpen} size="small">
          <Modal.Header>You need Metamask to sign in</Modal.Header>
          <Modal.Content image>
            <Image wrapped size="medium" src="/static/img/metamask.png" />
            <Modal.Description>
              <Header>What is Metamask?</Header>
              <p>
                MetaMask is an extension for accessing Ethereum Dapps. You can
                download it{' '}
                <a href="https://metamask.io/" target="_blank">
                  here
                </a>
                .
              </p>{' '}
              <Header>But I have Metamask...</Header>
              <p>
                If you have Metamask installed, please make sure to unlock your
                account.
              </p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button
              className="dark-orange-bg font-white"
              onClick={e => {
                this.setState({ popupOpen: false });
              }}>
              Close
            </Button>
          </Modal.Actions>
        </Modal>
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  return {
    gambler: state.login.gambler
  };
};

export default connect(mapStateToProps)(MenuExampleSizeLarge);
