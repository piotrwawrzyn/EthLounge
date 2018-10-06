import React, { Component } from 'react';
import store from '../../redux/store';
import { Modal, Grid, Image, Button, List, Icon, Header } from 'semantic-ui-react'
import { toggleModal } from '../../redux/actions';
import TokenFromWei from '../../helpers/TokenFromWei';
import EthLounge from '../../ethereum/EthLounge';

class ConfirmBetModal extends Component {

    constructor(props) {
        super(props);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.state = {isLoading: false, isFinalModalOpen: false};
    }

    async handleConfirm(tokensToBet, pickedTeam, account, matchID) {
        this.setState({isLoading: true});
        const tokens = tokensToBet.map((curr) => curr.address);
        const amounts = tokensToBet.map((curr) => curr.amount);

        try {
            await EthLounge.methods.placeBet(matchID, pickedTeam.slug, tokens, amounts).send({from: account});
        } catch (err) {

        }
        
        this.setState({isLoading: false});
        
    }

    render() {
        let { open, tokensToBet, pickedTeam, account, matchID } = this.props;

        const tokenList = tokensToBet.map((curr) => {
            return <List.Item as='p'><Icon name='right triangle' />{TokenFromWei(curr, 'symbol')}</List.Item>
        });

        return (
                <Modal size='tiny' open={open}>
                <FinalModal />
                    <Modal.Header>You are about to place a bet</Modal.Header>
                    <Modal.Content>
                        
                        <Modal.Description>
                            <Grid>
                                <Grid.Column width={10}>
                                    <Header>Your bet:</Header>
                                    <List className="confirm-bet-modal-ul font-dark-orange" as='ul'>{tokenList}</List>
                                    <Header>Picked Team: <span className="font-dark-orange">{pickedTeam.name}</span></Header>
                                    <Header>Odds: <span className="font-dark-orange">{pickedTeam.odds}</span></Header>                        
                                </Grid.Column>
                                <Grid.Column verticalAlign="middle" width={6}><Image className="confirm-bet-modal-img" floated="right" size='small' src={`/static/img/teams/${pickedTeam.slug}.png`} />
                                </Grid.Column> 
                            </Grid>
                                                                    
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>                    
                        <Button color="black" onClick={(e) => {store.dispatch(toggleModal('confirmBetModal'))}}>
                            Cancel
                        </Button>
                        <Button loading={this.state.isLoading} className="dark-orange-bg font-white" onClick={e => this.handleConfirm(tokensToBet, pickedTeam, account, matchID)}>
                            Confirm
                        </Button>
                    </Modal.Actions>
                </Modal>
    
        );
    }
}

class FinalModal extends Component {
  
    render() { 
      return (
        <Modal  size='tiny'>
          <Modal.Header>Modal #2</Modal.Header>
          <Modal.Content>
            <p>That's everything!</p>
          </Modal.Content>
          <Modal.Actions>
            
          </Modal.Actions>
        </Modal>
      )
    }
  }

export default ConfirmBetModal;