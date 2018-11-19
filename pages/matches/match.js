import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Label, List, Icon, Header } from 'semantic-ui-react';

import Layout from '../../components/Layout/Layout';
import BettingBox from '../../components/match/BettingBox';
import ConfirmBetModal from '../../components/match/ConfirmBetModal';
import ErrorModal from '../../components/match/ErrorModal';
import Teams from '../../components/match/Teams';
import BalanceBox from '../../components/match/BalanceBox';
import {
  toggleErrorModal,
  toggleModal,
  addTokens
} from '../../redux/match/actions';
import store from '../../redux/store';
import '../../static/css/match.css';
import cookieCall from '../../utils/cookieCall';
import serverSideRedirect from '../../utils/severSideRedirect';
import MatchDetails from '../../components/match/MatchDetails';
import LastBets from '../../components/match/LastBets';
import WinningsBox from '../../components/match/WinningsBox';

class Match extends Component {
  static async getInitialProps(props) {
    const { req, res } = props;
    const matchID = props.query.id;

    const api_response = await cookieCall(req, `/api/match_info?id=${matchID}`);

    const data = api_response.data;

    const errorURL = '/404';

    if (!data) {
      serverSideRedirect(res, errorURL);
    }

    const matchProps = { ...data };

    return { matchProps };
  }

  async componentWillMount() {
    const { user } = this.props.initial.matchProps;

    this.addTokens(user.balances);
  }

  async addTokens(userBalances) {
    if (userBalances) store.dispatch(addTokens(userBalances));
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
    const { match, user } = this.props.initial.matchProps;
    console.log(match);
    const {
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

        <Grid.Column computer={8} mobile={16} tablet={16}>
          <Teams user={user} match={match} pickedTeam={pickedTeam} />

          <MatchDetails match={match} />

          <h2>Last bets</h2>
          <LastBets bets={match.bets} />
        </Grid.Column>
        <Grid.Column computer={8} mobile={16} tablet={16}>
          <h2>{user.bet ? 'Your bet' : 'Place bet'}</h2>
          <BettingBox
            teams={match.teams}
            prices={prices}
            tokens={tokens.toBet}
            bet={user.bet}
          />
          {user.bet ? (
            ''
          ) : (
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
                {this.renderEstimatedReturn(betValue)}
              </List>
            </div>
          )}

          <h2>{user.bet ? 'Winnings' : 'Balances'}</h2>
          {user.bet ? (
            <WinningsBox bet={user.bet} />
          ) : (
            <BalanceBox user={user} tokens={tokens.wallet} />
          )}
        </Grid.Column>
      </Grid>
    );
  }

  renderBetValue(betValue) {
    const { tokens } = this.props;
    if (tokens.toBet.length > 0)
      return (
        <List.Item>
          <Label className="orange-label-light" horizontal>
            ESTIMATED BET VALUE
          </Label>
          <span className="font-dark">
            <strong>{` ${betValue.toFixed(2)}$`}</strong>
          </span>
        </List.Item>
      );

    return '';
  }

  renderEstimatedReturn(betValue) {
    const { pickedTeam, tokens } = this.props;
    if (tokens.toBet.length !== 0 && !_.isEmpty(pickedTeam)) {
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
