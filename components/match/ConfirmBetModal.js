import React, { Component } from 'react';
import {
  Button,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Modal,
  Label
} from 'semantic-ui-react';

import { toggleModal } from '../../redux/match/actions';
import store from '../../redux/store';
import { Router } from '../../next-routes';
import TokenFromWei from '../../utils/TokenFromWei';
import { backend } from '../../config/config';
import PlaceBet from '../../utils/api/PlaceBet';

class ConfirmBetModal extends Component {
  constructor(props) {
    super(props);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.closeFinalModal = this.closeFinalModal.bind(this);
    this.state = {
      isLoading: false,
      isCancelDisabled: false,
      isFinalModalSuccessOpen: false,
      isFinalModalSuccessOpen: false,
      isFinalModalErrorOpen: false,
      errorMessage: '',
      transactionInfo: {}
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
      isLoading: true,
      isCancelDisabled: true
    });

    const tokensBet = tokensToBet.map(curr => {
      return { id: curr.id, amount: curr.amount };
    });

    const api_response = await PlaceBet({
      matchID: match._id,
      teamID: pickedTeam._id,
      betMakerID: user.id,
      tokensBet
    });

    const data = api_response.data;

    console.log(data);

    this.setState({
      isLoading: false,
      isCancelDisabled: false
    });
  }

  renderTeamLogos(match, pickedTeam) {
    const notPickedTeamID =
      pickedTeam._id === match.teams[0] ? match.teams[1] : match.teams[0];

    return (
      <div className="confirm-bet-modal-img-div">
        <Image
          className="confirm-bet-modal-img confirm-bet-modal-img-picked"
          src={`${backend}/img/teams/${pickedTeam._id}.png`}
        />
        <div className="confirm-bet-modal-img-divider" />
        <Image
          className="confirm-bet-modal-img confirm-bet-modal-img-notpicked"
          src={`${backend}/img/teams/${notPickedTeamID}.png`}
        />
      </div>
    );
  }

  render() {
    let { open, tokensToBet, pickedTeam, user, match, teams } = this.props;
    const teamIndex = pickedTeam._id === teams[0]._id ? 0 : 1;

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
        <FinalModalSuccess
          open={this.state.isFinalModalSuccessOpen}
          transactionInfo={this.state.transactionInfo}
          match={match}
          close={this.closeFinalModal}
        />
        <FinalModalError
          open={this.state.isFinalModalErrorOpen}
          errorMessage={this.state.errorMessage}
          close={this.closeFinalModal}
        />
        <Modal.Header className="modal-header">
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
                  Odds are now {match.odds[teamIndex]} but keep in mind they can
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
            disabled={this.state.isCancelDisabled}
            color="black"
            onClick={e => store.dispatch(toggleModal('confirmBetModal'))}>
            Cancel
          </Button>
          <Button
            loading={this.state.isLoading}
            className="dark-orange-bg font-white"
            onClick={e =>
              this.handleConfirm(match, pickedTeam, tokensToBet, user)
            }>
            Confirm
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

class FinalModalSuccess extends Component {
  render() {
    const { open, close, transactionInfo, match } = this.props;

    const hash = transactionInfo.transactionHash;

    return (
      <Modal open={open} size="tiny">
        <Modal.Header>Bet placed successfuly</Modal.Header>
        <Modal.Content className="word-wrap">
          <p>
            Transaction hash:{' '}
            <a href={` https://etherscan.io/tx/${hash}`}>{hash}</a>
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            className="dark-orange-bg font-white"
            onClick={e => {
              close();
              Router.push(`/matches/${match._id}`);
            }}>
            {' '}
            Go back
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

class FinalModalError extends Component {
  render() {
    return (
      <Modal open={this.props.open} size="mini">
        <Modal.Header className="font-error">Placing bet failed</Modal.Header>
        <Modal.Content className="font-error word-wrap">
          <p>{this.props.errorMessage}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            className="dark-orange-bg font-white"
            onClick={e => this.props.close()}>
            Go back
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ConfirmBetModal;
