import React, { Component } from 'react';
import {
  Button,
  Grid,
  Header,
  Icon,
  Image,
  Label,
  List,
  Modal
} from 'semantic-ui-react';

import EthLounge from '../../ethereum/EthLounge';
import { toggleModal } from '../../redux/match/actions';
import store from '../../redux/store';
import { Router } from '../../next-routes';
import TokenFromWei from '../../utils/TokenFromWei';

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
      transactionInfo: {},
      waitingText: ''
    };
  }

  closeFinalModal() {
    this.setState({
      isFinalModalErrorOpen: false,
      isFinalModalSuccessOpen: false
    });
    store.dispatch(toggleModal('confirmBetModal'));
  }

  async handleConfirm(tokensToBet, pickedTeam, address, matchID) {
    console.log(this.state);
    this.setState({
      isLoading: true,
      isCancelDisabled: true,
      waitingText: (
        <Label>
          Please confirm the transaction on Metamask and wait a few seconds.
        </Label>
      )
    });
    const tokens = tokensToBet.map(curr => curr.address);
    const amounts = tokensToBet.map(curr => curr.amount);

    try {
      const transactionInfo = await EthLounge.methods
        .placeBet(matchID, pickedTeam.slug, tokens, amounts)
        .send({ from: address });
      if (transactionInfo.status) {
        this.setState({
          isFinalModalSuccessOpen: true,
          transactionInfo: transactionInfo
        });
      }
    } catch (err) {
      console.log(err);
      this.setState({
        isFinalModalErrorOpen: true,
        errorMessage: err.message.replace('Returned error: ', '')
      });
    }
    this.setState({
      isLoading: false,
      isCancelDisabled: false,
      waitingText: ''
    });
  }

  render() {
    let { open, tokensToBet, pickedTeam, gambler, matchID } = this.props;

    const tokenList = tokensToBet.map(curr => {
      return (
        <List.Item as="p" key={curr.address}>
          <Icon name="right triangle" />
          {TokenFromWei(curr, 'symbol')}
        </List.Item>
      );
    });

    return (
      <Modal size="tiny" open={open}>
        <FinalModalSuccess
          open={this.state.isFinalModalSuccessOpen}
          transactionInfo={this.state.transactionInfo}
          matchID={matchID}
          close={this.closeFinalModal}
        />
        <FinalModalError
          open={this.state.isFinalModalErrorOpen}
          errorMessage={this.state.errorMessage}
          close={this.closeFinalModal}
        />
        <Modal.Header>You are about to place a bet</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Grid>
              <Grid.Column width={10}>
                <Header>Your bet: </Header>
                <List className="confirm-bet-modal-ul font-dark-orange" as="ul">
                  {tokenList}
                </List>
                <Header>
                  Picked Team:{' '}
                  <span className="font-dark-orange">{pickedTeam.name}</span>
                </Header>
                <Header>
                  Odds:{' '}
                  <span className="font-dark-orange">{pickedTeam.odds}</span>
                </Header>
                {this.state.waitingText}{' '}
              </Grid.Column>
              <Grid.Column verticalAlign="middle" width={6}>
                <Image
                  className="confirm-bet-modal-img"
                  floated="right"
                  size="small"
                  src={`/static/img/teams/${pickedTeam.slug}.png`}
                />
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
              this.handleConfirm(
                tokensToBet,
                pickedTeam,
                gambler.address,
                matchID
              )
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
    const { open, close, transactionInfo, matchID } = this.props;

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
              Router.push(`/matches/${matchID}`);
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
