import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import { connect } from 'react-redux';
import { Grid, Button, List, Label, Modal } from 'semantic-ui-react';
import BettingBox from '../../components/match/BettingBox';
import TokenBox from '../../components/match/TokenBox';
import {
  updatePrices,
  toggleErrorModal,
  toggleModal
} from '../../redux/actions';
import CryptoPrices from '../../helpers/CryptoPrices';
import store from '../../redux/store';
import Teams from '../../components/match/Teams';
import _ from 'lodash';
import ErrorModal from '../../components/ErrorModal';
import ConfirmBetModal from '../../components/match/ConfirmBetModal';

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
    if (!this.props.signedIn) errors.push('Please log in to place bets.');
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
          account={this.props.account}
          matchID={this.props.initial.gameInfo.matchID}
        />

        <Grid.Column width={8}>
          <Teams
            teams={this.props.initial.gameInfo.teams}
            pickedTeam={this.props.pickedTeam}
            signedIn={this.props.signedIn}
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
          <TokenBox
            signedIn={this.props.signedIn}
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

const mapStateToProps = state => {
  return {
    tokens: state.tokens,
    signedIn: state.signedIn,
    betValue: state.betValue,
    prices: state.prices,
    pickedTeam: state.pickedTeam,
    errorModal: state.errorModal,
    confirmBetModal: state.confirmBetModal,
    account: state.account
  };
};

Match = DragDropContext(HTML5Backend)(Match);

export default Layout(connect(mapStateToProps)(Match));
