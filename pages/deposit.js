import React, { Component } from 'react';
import '../static/css/deposit.css';
import Layout from '../components/Layout/Layout';
import { Divider, Grid, Button, Input, GridColumn } from 'semantic-ui-react';
import cookieCall from '../utils/cookieCall';
import redirect from '../utils/redirect';
import { MISCELLANEOUS } from '../utils/constants';
import tokenFromWei from '../utils/tokenFromWei';
import vault from '../vault';
import web3 from '../web3';

class Deposit extends Component {
  state = {
    tokenToDeposit: null,
    depositAmount: '',
    loading: false,
    message: null
  };
  depositFormRef = React.createRef();

  static async getInitialProps(props) {
    const { req, res } = props;

    const api_response = await cookieCall(req, `/api/deposit_info`);

    const data = api_response.data;

    if (data.signedIn === false)
      redirect(res, MISCELLANEOUS.NOT_SIGNED_IN_REDIRECT_URL);

    const depositProps = { ...data };

    return { depositProps };
  }

  renderBalances(allTokens, userBalances) {
    return allTokens.map(token => {
      const userToken = userBalances.find(t => t.id === token._id);
      return (
        <Grid.Row key={token.displayName}>
          <Grid.Column width={1} verticalAlign="middle">
            <img src={token.logo} width="25" />
          </Grid.Column>
          <Grid.Column width={5} verticalAlign="middle">
            {token.displayName}
          </Grid.Column>
          <Grid.Column width={5} verticalAlign="middle">
            {userToken ? tokenFromWei({ ...userToken, ...token }) : 0}{' '}
            {token.symbol}
          </Grid.Column>
          <Grid.Column width={5} textAlign="right">
            <Button
              className="dark-button"
              disabled={token.displayName !== 'Ethereum'}
              onClick={() => {
                if (
                  this.state.tokenToDeposit === null ||
                  this.state.tokenToDeposit._id !== token._id
                )
                  this.setState({ tokenToDeposit: token });
                else this.scrollToDepositForm();
              }}
            >
              Deposit
            </Button>
          </Grid.Column>
        </Grid.Row>
      );
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tokenToDeposit !== this.state.tokenToDeposit) {
      this.scrollToDepositForm();
    }
  }

  scrollToDepositForm() {
    this.depositFormRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  handleDeposit = async () => {
    try {
      this.setState({ loading: true, message: null });
      await ethereum.enable();
      const accounts = await web3.eth.getAccounts();
      await vault.methods.deposit(this.props.initial.user.username).send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.depositAmount, 'ether')
      });
      this.setState({
        loading: false,
        message: {
          text: 'Deposit successful! We will credit your account shortly.',
          color: 'green'
        }
      });
    } catch (error) {
      this.setState({
        loading: false,
        message: {
          text: 'There was a problem with your deposit, please try again. ',
          color: 'red'
        }
      });
    }
  };

  render() {
    const { allTokens, userBalances } = this.props.initial.depositProps;

    return (
      <div>
        <h1>Deposit cryptocurrencies</h1>
        <Divider />
        <Grid style={{ marginTop: '1em' }}>
          <Grid.Row className="titleRow">
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={5}>Token</Grid.Column>
            <Grid.Column width={5}>Balance</Grid.Column>
            <Grid.Column width={5}></Grid.Column>
          </Grid.Row>
          {this.renderBalances(allTokens, userBalances)}
        </Grid>
        {this.state.tokenToDeposit ? (
          <div
            ref={this.depositFormRef}
            style={{ marginTop: '45vh', marginBottom: '45vh' }}
          >
            <h2>
              How much {this.state.tokenToDeposit.displayName} would you like to
              deposit?
            </h2>
            <Grid>
              <Grid.Row>
                <Grid.Column width={15} verticalAlign="middle">
                  <Input
                    value={this.state.depositAmount}
                    onChange={e => {
                      this.setState({ depositAmount: e.target.value });

                      if (e.target.value === '')
                        this.setState({ message: null });
                    }}
                    fluid
                    placeholder={`Please enter exactly how much ${this.state.tokenToDeposit.displayName} you would like to deposit`}
                    type="number"
                  ></Input>
                </Grid.Column>
                <GridColumn width={1} verticalAlign="middle">
                  <img src={this.state.tokenToDeposit.logo} width="40" />
                </GridColumn>
              </Grid.Row>
            </Grid>

            {this.state.depositAmount ? (
              <Button
                style={{ marginTop: '1em' }}
                className="dark-button"
                fluid
                onClick={this.handleDeposit}
                loading={this.state.loading}
              >
                DEPOSIT {this.state.depositAmount}{' '}
                {this.state.tokenToDeposit.symbol}
              </Button>
            ) : null}

            {this.state.message ? (
              <p
                style={{
                  color: this.state.message.color,
                  marginBottom: '1em',
                  marginTop: '1em',
                  fontSize: '18px'
                }}
              >
                {this.state.message.text}
              </p>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Layout(Deposit);
