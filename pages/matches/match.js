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
import redirect from '../../utils/redirect';
import MatchDetails from '../../components/match/MatchDetails';
import LastBets from '../../components/match/LastBets';
import WinningsBox from '../../components/match/WinningsBox';
import Confetti from 'react-dom-confetti';
import axios from 'axios';
import { MISCELLANEOUS } from '../../utils/constants';

class Match extends Component {
  constructor(props) {
    super(props);

    this.state = { confettiActive: false };
  }

  static async getInitialProps(props) {
    const { req, res } = props;
    const matchID = props.query.id;

    const api_response = await cookieCall(req, `/api/match_info?id=${matchID}`);

    const data = api_response.data;

    if (!data) {
      redirect(res, MISCELLANEOUS.ERROR_PAGE_URL);
    }

    const now = new Date();
    const matchStartTime = new Date(data.match.startTime);

    data.match.isLive =
      matchStartTime < now && data.match.state === 'scheduled';

    data.match.isEnded = data.match.state !== 'scheduled';

    data.match.betsClosed = matchStartTime < now;

    const matchProps = { ...data };

    return { matchProps };
  }

  async addTokens(userBalances) {
    if (userBalances) store.dispatch(addTokens(userBalances));
  }

  handleClick(event, tokensToBet) {
    event.preventDefault();
    const errorHead = 'You forgot to do the following';
    const errors = [];
    if (!this.props.user) errors.push('Please sign in to place bets.');
    if (tokensToBet.length === 0)
      errors.push('Please bet at least one token in order to place a bet.');
    if (_.isEmpty(this.props.pickedTeam)) errors.push('Please pick a team.');
    if (errors.length > 0) {
      store.dispatch(toggleErrorModal(errorHead, errors));
      return;
    }

    store.dispatch(toggleModal('confirmBetModal'));
  }

  componentWillMount() {
    const { user } = this.props.initial.matchProps;
    const { bet } = user;

    if (bet)
      if (bet.displayedToUser === false && bet.state === 'won')
        if (!this.state.confettiActive) {
          const multiplier = bet.tokensWon ? bet.tokensWon.length : 0;

          setTimeout(() => {
            this.setState({ confettiActive: true });
          }, 600 + 500 * multiplier);

          axios({
            url: '/set_displayed_bet',
            method: 'post',
            data: { betID: bet._id }
          });
        }

    // Add tokens
    this.addTokens(user.balances);
  }

  render() {
    const { match, user } = this.props.initial.matchProps;

    const {
      pickedTeam,
      prices,
      tokens,
      betValue,
      confirmBetModal
    } = this.props;

    return (
      <div>
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

            <h2>Recent bets</h2>
            <LastBets bets={match.bets} />
          </Grid.Column>
          <Grid.Column computer={8} mobile={16} tablet={16}>
            <div
              className={
                !user.bet && match.betsClosed ? 'betting-box-disabled' : ''
              }>
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
                    disabled={match.betsClosed}
                    onClick={event => this.handleClick(event, tokens.toBet)}
                    className="button-bet"
                    size="large"
                    color="black">
                    <span style={{ marginRight: '1em' }}>Bet</span>
                    <Icon name="check" />
                  </Button>
                  <List relaxed floated="right" className="info-bet">
                    {this.renderBetValue(betValue)}
                    {this.renderEstimatedReturn(betValue)}
                  </List>
                </div>
              )}
              <div className="confetti">
                <Confetti
                  config={{
                    spread: 70,
                    elementCount: 70
                  }}
                  active={this.state.confettiActive}
                />
              </div>
            </div>

            <h2>{user.bet ? 'Winnings' : 'Balances'}</h2>
            {user.bet ? (
              <WinningsBox bet={user.bet} />
            ) : (
              <BalanceBox
                betsClosed={match.betsClosed}
                user={user}
                tokens={tokens.wallet}
              />
            )}
          </Grid.Column>
        </Grid>
      </div>
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
            <strong>{` ${betValue.toFixed(3)}$`}</strong>
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
              3
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
