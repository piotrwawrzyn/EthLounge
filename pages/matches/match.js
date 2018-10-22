import _ from 'lodash';
import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { connect } from 'react-redux';
import { Button, Grid, Label, List, Modal } from 'semantic-ui-react';

import Layout from '../../components/Layout/Layout';
import BettingBox from '../../components/match/BettingBox';
import ConfirmBetModal from '../../components/match/ConfirmBetModal';
import ErrorModal from '../../components/match/ErrorModal';
import Teams from '../../components/match/Teams';
import BalanceBox from '../../components/match/BalanceBox';
import {
  toggleErrorModal,
  toggleModal,
  updatePrices,
  addTokens
} from '../../redux/match/actions';
import store from '../../redux/store';
import CryptoPrices from '../../utils/CryptoPrices';
import '../../static/css/match.css';
import EthLounge from '../../ethereum/EthLounge';

class Token {
  constructor(address, amount, position) {
    this.address = address;
    this.amount = amount;
    this.initialAmount = amount;
    this.position = position;
  }
}

class Match extends Component {
  static async getInitialProps(props) {
    const matchID = props.query.id;

    // This information will be pulled from database //
    const teams = [
      {
        name: 'Fnatic',
        slug: 'fnatic',
        imgUrl: `../../img/teams/fnatic.png`,
        odds: 1.56
      },
      {
        name: 'Gambit',
        slug: 'gambit',
        imgUrl: `../../img/teams/gambit.png`,
        odds: 2.77
      }
    ];

    const gameInfo = { matchID, teams };

    return { gameInfo };
  }

  async componentDidMount() {
    const prices = await CryptoPrices();
    store.dispatch(updatePrices(prices));
  }

  handleClick(event, tokensToBet) {
    event.preventDefault();
    const errorHead = 'You forgot to do the following';
    const errors = [];
    if (!this.props.gambler) errors.push('Please log in to place bets.');
    if (tokensToBet.length === 0)
      errors.push('Please place at least one token in order to place a bet.');
    if (_.isEmpty(this.props.pickedTeam)) errors.push('Please pick a team.');
    if (errors.length > 0) {
      store.dispatch(toggleErrorModal(errorHead, errors));
      return;
    }

    store.dispatch(toggleModal('confirmBetModal'));
  }

  render() {
    return (
      <Grid relaxed>
        <ErrorModal modal={this.props.errorModal} />
        <ConfirmBetModal
          open={this.props.confirmBetModal.isOpen}
          tokensToBet={this.props.tokens.toBet}
          pickedTeam={this.props.pickedTeam}
          gambler={this.props.gambler}
          matchID={this.props.initial.gameInfo.matchID}
        />

        <Grid.Column width={8}>
          <Teams
            teams={this.props.initial.gameInfo.teams}
            pickedTeam={this.props.pickedTeam}
            gambler={this.props.gambler}
          />
          LAST BETS:
        </Grid.Column>
        <Grid.Column width={8}>
          <h2>Place bet</h2>
          <BettingBox
            prices={this.props.prices}
            tokens={this.props.tokens.toBet}
          />
          <div className="bet-container">
            <Button
              onClick={event =>
                this.handleClick(event, this.props.tokens.toBet)
              }
              className="button-bet"
              size="large"
              color="black">
              Place bet
            </Button>
            <List relaxed floated="right" className="info-bet">
              {this.renderBetValue(this.props.betValue)}
              {this.renderEstimatedReward(this.props.betValue)}
            </List>
          </div>
          <h2>Balances</h2>
          <BalanceBox
            gambler={this.props.gambler}
            tokens={this.props.tokens.wallet}
          />
        </Grid.Column>
      </Grid>
    );
  }

  renderBetValue(betValue) {
    if (this.props.tokens.toBet.length > 0)
      return (
        <List.Item>
          <Label className="orange-label" horizontal>
            ESTIMATED BET VALUE
          </Label>
          <strong>{` ${betValue}$`}</strong>
        </List.Item>
      );

    return '';
  }

  renderEstimatedReward(betValue) {
    if (this.props.tokens.toBet.length > 0 && !_.isEmpty(this.props.pickedTeam))
      return (
        <List.Item>
          <Label className="orange-label" horizontal>
            ESTIMATED RETURN
          </Label>
          <strong>{` ${(
            parseFloat(betValue) * this.props.pickedTeam.odds
          ).toFixed(2)}$`}</strong>
        </List.Item>
      );

    return '';
  }
}

const getTokens = async address => {
  const result = await EthLounge.methods.getBalances().call({ from: address });
  const tokenAddresses = result[0];
  const tokenAmounts = result[1];
  const tokens = [];

  for (let i = 0; i < tokenAmounts.length; i++) {
    if (tokenAmounts[i] !== '0') {
      const newToken = new Token(
        tokenAddresses[i],
        tokenAmounts[i],
        'balance-box'
      );

      tokens.push(newToken);
    }
  }
  store.dispatch(addTokens(tokens));
};

store.subscribe(() => {
  if (store.getState().lastAction.type === 'LOG_IN') {
    getTokens(store.getState().login.gambler.address);
  }
});

const mapStateToProps = state => {
  return {
    tokens: state.match.tokens,
    betValue: state.match.betValue,
    prices: state.match.prices,
    pickedTeam: state.match.pickedTeam,
    errorModal: state.match.errorModal,
    confirmBetModal: state.match.confirmBetModal,
    gambler: state.login.gambler
  };
};

Match = DragDropContext(HTML5Backend)(Match);

export default Layout(connect(mapStateToProps)(Match));
