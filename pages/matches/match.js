import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Label, List, Icon } from 'semantic-ui-react';

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
import CookieCall from '../../utils/CookieCall';
import ServerSideRedirect from '../../utils/SeverSideRedirect';
import MatchDetails from '../../components/match/MatchDetails';

class Token {
  constructor(id, symbol, amount, position = '', displayName, decimals) {
    this.id = id;
    this.symbol = symbol;
    this.amount = amount;
    this.initialAmount = amount;
    this.position = position;
    this.displayName = displayName;
    this.decimals = decimals;
  }
}

class Match extends Component {
  static async getInitialProps(props) {
    const { req, res } = props;
    const matchID = props.query.id;

    const api_response = await CookieCall(req, `/api/match_info?id=${matchID}`);

    const data = api_response.data;

    const errorURL = '/404';

    if (!data) {
      ServerSideRedirect(res, errorURL);
    }

    const matchInfo = { ...data };

    return { matchInfo };
  }

  async componentWillMount() {
    console.log(this.props.initial.matchInfo);
    const { tokens } = this.props.initial.matchInfo;

    const prices = await CryptoPrices(tokens);
    store.dispatch(updatePrices(prices));
    this.addTokens(
      this.props.user.balances,
      this.props.initial.matchInfo.tokens
    );
  }

  async addTokens(userBalances, supportedTokens) {
    if (userBalances) {
      const tokens = [];

      console.log(userBalances, supportedTokens);

      userBalances.forEach(token => {
        const { balance, id } = token;
        const { displayName, decimals, symbol } = _.find(supportedTokens, {
          _id: id
        });

        tokens.push(
          new Token(id, symbol, balance, 'balance-box', displayName, decimals)
        );
      });

      store.dispatch(addTokens(tokens));
    }
  }

  handleClick(event, tokensToBet) {
    event.preventDefault();
    const errorHead = 'You forgot to do the following';
    const errors = [];
    if (!this.props.user) errors.push('Please log in to place bets.');
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
    const { match, bet } = this.props.initial.matchInfo;
    const {
      user,
      pickedTeam,
      prices,
      tokens,
      betValue,
      confirmBetModal
    } = this.props;

    return (
      <Grid relaxed>
        <ErrorModal modal={this.props.errorModal} />
        <ConfirmBetModal
          open={confirmBetModal.isOpen}
          tokensToBet={tokens.toBet}
          pickedTeam={pickedTeam}
          user={user}
          match={match}
        />

        <Grid.Column width={8}>
          <Teams user={user} match={match} pickedTeam={pickedTeam} />
          <MatchDetails match={match} />
        </Grid.Column>
        <Grid.Column width={8}>
          <h2>Place bet</h2>
          <BettingBox prices={prices} tokens={tokens.toBet} />
          <div className="bet-container">
            <Button
              icon
              onClick={event => this.handleClick(event, tokens.toBet)}
              className="button-bet"
              size="large"
              color="black">
              Bet
              <Icon style={{ marginLeft: '1em !important' }} name="check" />
            </Button>
            <List relaxed floated="right" className="info-bet">
              {this.renderBetValue(betValue)}
              {this.renderEstimatedReward(betValue)}
            </List>
          </div>
          <h2>Balances</h2>
          <BalanceBox user={user} tokens={tokens.wallet} />
        </Grid.Column>
      </Grid>
    );
  }

  renderBetValue(betValue) {
    if (this.props.tokens.toBet.length > 0)
      return (
        <List.Item>
          <Label className="orange-label-light" horizontal>
            ESTIMATED BET VALUE
          </Label>
          <span className="font-dark">
            <strong>{` ${betValue}$`}</strong>
          </span>
        </List.Item>
      );

    return '';
  }

  renderEstimatedReward(betValue) {
    if (
      this.props.tokens.toBet.length > 0 &&
      !_.isEmpty(this.props.pickedTeam)
    ) {
      const { match } = this.props.initial.matchInfo;
      const { pickedTeam } = this.props;

      return (
        <List.Item>
          <Label className="orange-label-light" horizontal>
            ESTIMATED RETURN
          </Label>
          <span className="font-dark">
            <strong>{` ${(parseFloat(betValue) * pickedTeam.odds).toFixed(
              2
            )}$`}</strong>
          </span>
        </List.Item>
      );
    }

    return '';
  }
}

const mapStateToProps = state => {
  return {
    tokens: state.match.tokens,
    betValue: state.match.betValue,
    prices: state.match.prices,
    pickedTeam: state.match.pickedTeam,
    errorModal: state.match.errorModal,
    confirmBetModal: state.match.confirmBetModal,
    user: state.login.user
  };
};

export default Layout(connect(mapStateToProps)(Match));
