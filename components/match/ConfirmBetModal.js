import React, { Component } from 'react';
import {
  Button,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Modal
} from 'semantic-ui-react';

import { toggleModal } from '../../redux/match/actions';
import store from '../../redux/store';
import { Router } from '../../next-routes';
import TokenFromWei from '../../utils/TokenFromWei';
import { backend } from '../../config/config';
import PlaceBet from '../../utils/api/PlaceBet';
import Sleep from '../../utils/Sleep';

class ConfirmBetModal extends Component {
  constructor(props) {
    super(props);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.closeFinalModal = this.closeFinalModal.bind(this);
    this.state = {
      isConfirmButtonLoading: false,
      confirmButtonIcon: false,
      confirmButtonText: 'Confirm and place bet',
      confirmButtonClassName: 'orange-button-dark',
      isBackButtonDisabled: false
    };
  }

  closeFinalModal() {
    this.setState({
      isFinalModalErrorOpen: false,
      isFinalModalSuccessOpen: false
    });
    store.dispatch(toggleModal('confirmBetModal'));
  }

  async handleConfirm(match, pickedTeam, tokensToBet, user) {
    this.setState({
      isConfirmButtonLoading: true,
      isBackButtonDisabled: true
    });

    const tokensBet = tokensToBet.map(token => {
      return { id: token.id, amount: token.balance };
    });

    const api_response = await PlaceBet({
      matchID: match._id,
      teamID: pickedTeam.id,
      betMakerID: user._id,
      tokensBet
    });

    const { data } = api_response;

    if (data.bet) {
      this.setState({
        isConfirmButtonLoading: false,
        isBackButtonDisabled: false,
        confirmButtonIcon: 'chevron down',
        confirmButtonText: 'Bet placed successfuly'
      });

      await Sleep(500);

      Router.push(`/matches/${match._id}`);
    } else {
      this.setState({
        isConfirmButtonLoading: false,
        isBackButtonDisabled: false,
        confirmButtonIcon: 'exclamation',
        confirmButtonText: 'Placing bet failed',
        confirmButtonClassName: 'error-button'
      });
    }
  }

  renderTeamLogos(match, pickedTeam) {
    const notPickedTeam =
      pickedTeam.id === match.teams[0].id ? match.teams[1] : match.teams[0];

    return (
      <div className="confirm-bet-modal-img-div">
        <div className="confirm-bet-modal-img-divider" />
        <Image
          className="confirm-bet-modal-img confirm-bet-modal-img-picked"
          src={`${backend}/img/${pickedTeam.logo}`}
        />

        <Image
          className="confirm-bet-modal-img confirm-bet-modal-img-notpicked"
          src={`${backend}/img/${notPickedTeam.logo}`}
        />
      </div>
    );
  }

  render() {
    let { open, tokensToBet, pickedTeam, user, match } = this.props;

    const tokenList = tokensToBet.map(curr => {
      return (
        <List.Item as="p" key={curr.symbol}>
          <Icon name="right triangle" />
          {`${TokenFromWei(curr)} ${curr.symbol}`}
        </List.Item>
      );
    });

    return (
      <Modal size="tiny" open={open}>
        <Modal.Header className="modal-header">
          <Icon style={{ marginRight: '1em' }} name="check" />
          You are about to place a bet
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Grid>
              <Grid.Column width={10}>
                <Header>Your bet: </Header>
                <List className="confirm-bet-modal-ul font-dark-orange" as="ul">
                  {tokenList}
                </List>
                <Header>
                  Picked Team:
                  <span className="font-dark-orange">
                    {' ' + pickedTeam.displayName}
                  </span>
                </Header>
                <span className="odds-message">
                  <Icon name="info circle" />
                  Odds are now {pickedTeam.odds} but keep in mind they can
                  change prior to the game start based on future bets.
                </span>
              </Grid.Column>
              <Grid.Column width={6}>
                {this.renderTeamLogos(match, pickedTeam)}
              </Grid.Column>
            </Grid>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            disabled={this.state.isBackButtonDisabled}
            className="dark-button"
            onClick={e => store.dispatch(toggleModal('confirmBetModal'))}>
            Back
          </Button>
          <Button
            loading={this.state.isConfirmButtonLoading}
            icon={this.state.confirmButtonIcon}
            className={this.state.confirmButtonClassName}
            content={this.state.confirmButtonText}
            onClick={e =>
              this.handleConfirm(match, pickedTeam, tokensToBet, user)
            }
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ConfirmBetModal;
