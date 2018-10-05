import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import { connect } from 'react-redux';
import { Grid, Button, List, Label, Modal} from 'semantic-ui-react';
import BettingBox from '../../components/match/BettingBox';
import TokenBox from '../../components/match/TokenBox';
import { changeItemPosition, changeItemAmount, updatePrices, toggleModal } from '../../redux/actions';
import CryptoPrices from '../../helpers/CryptoPrices';
import store from '../../redux/store';
import Teams from '../../components/match/Teams';
import _ from 'lodash';
import ErrorModal from '../../components/ErrorModal';

class Match extends Component {

    static async getInitialProps(props) {
        const matchID = props.query.id;
        
        // This information will be pulled from database //
        const teams = [{
            name: 'Fnatic',
            slug: 'fnatic',
            imgUrl: `../../img/teams/fnatic.png`,
            odds: 1.56
        }, {
            name: 'Gambit',
            slug: 'gambit',
            imgUrl: `../../img/teams/gambit.png`,
            odds: 2.77
        }];

        return { teams };
    }

    async componentDidMount() {
        const prices = await CryptoPrices();
        store.dispatch(updatePrices(prices))
    }

    handleClick() {
        const errorHead = "You forgot to do the following"
        const errors = [];
        if (!this.props.signedIn) errors.push('Please log in to place bets.');
        if (this.props.items.toBet.length === 0) errors.push('Please place at least one token in order to place a bet.');
        if (_.isEmpty(this.props.pickedTeam)) errors.push('Please pick a team.');
        if (errors.length > 0) { store.dispatch(toggleModal(errorHead, errors)); console.log(this.props); return; }

        //handle correct PLACE BET
        
    }

    render() {
        return (                
            <Grid relaxed>
                <Grid.Column width={8}>
                    <Teams teams={this.props.initial.teams} pickedTeam={this.props.pickedTeam} signedIn={this.props.signedIn} />
                    LAST BETS:
                </Grid.Column>
                <Grid.Column width={8}>
                    <h2>Place bet</h2>
                    <BettingBox prices={this.props.prices} items={this.props.items.toBet} handleRange={this.props.handleRange} handleDelete={this.props.changePosition}/>
                    <div className="bet-container">
                        <Button onClick={(event) => this.handleClick()} className="button-bet" size="large" color="black" >
                            Place bet
                        </Button>
                        <ErrorModal modal={this.props.errorModal} />
                        <List relaxed floated="right" className="info-bet">
                            {this.renderBetValue(this.props.betValue)}
                            {this.renderEstimatedReward(this.props.betValue)}                 
                        </List>
                    </div>
                        <h2>Balances</h2>
                    <TokenBox signedIn={this.props.signedIn} items={this.props.items.wallet} handleDrop={this.props.changePosition}/>
                </Grid.Column>                             
            </Grid>                
        );
    }

    renderBetValue(betValue) {
        if (this.props.items.toBet.length > 0)
        return <List.Item><Label className="orange-label" horizontal>ESTIMATED BET VALUE</Label><strong>{` ${betValue}$`}</strong></List.Item>;

        return '';
    }

    renderEstimatedReward(betValue) {
        if (this.props.items.toBet.length > 0 && !(_.isEmpty(this.props.pickedTeam)) )
        return <List.Item><Label className="orange-label" horizontal>ESTIMATED RETURN</Label><strong>{` ${(parseFloat(betValue) * this.props.pickedTeam.odds).toFixed(2)}$`}</strong></List.Item>;

        return '';
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changePosition: (item, pos) => {
            dispatch(changeItemPosition(item, pos));
        },

        handleRange: (item) => {
            dispatch(changeItemAmount(item))
        }
    }
}
  

const mapStateToProps = (state) => {
        return {
            items: state.items,
            signedIn: state.signedIn,
            betValue: state.betValue,
            prices: state.prices,
            pickedTeam: state.pickedTeam,
            errorModal: state.errorModal
        }
    
  }

Match = DragDropContext(HTML5Backend)(Match);

export default Layout(connect(mapStateToProps, mapDispatchToProps)(Match));