import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import { connect } from 'react-redux';
import { Grid, Button, List, Label } from 'semantic-ui-react';
import BettingBox from '../../components/match/BettingBox';
import TokenBox from '../../components/match/TokenBox';
import { changeItemPosition, changeItemAmount, updatePrices } from '../../redux/actions';
import CryptoPrices from '../../components/helpers/CryptoPrices';
import store from '../../redux/store';

class Match extends Component {

    static async getInitialProps(props) {
        const matchID = props.query.id;
        
        // This information will be pulled from database //
        const teams = [{
            name: 'Fnatic',
            slug: 'fnatic',
            imgUrl: `../../img/teams/fnatic.png`
        }, {
            name: 'Gambit',
            slug: 'gambit',
            imgUrl: `../../img/teams/gambit.png`
        }];

        // This information will be pulled from Ethereum blockchain (downloaded on server)
        const odds = new Map();
        odds.set(teams[0].slug, 1,2);
        odds.set(teams[1].slug, 5,8)

        return {matchID, teams};
    }

    async componentDidMount() {
        const prices = await CryptoPrices();
        store.dispatch(updatePrices(prices))
    }


    render() {

        return (                
            <Grid>
                <Grid.Row>
                    <Grid.Column width={8}>
                        FNATIC vs GAMBIT
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <h2>Place bet</h2>
                        <BettingBox prices={this.props.prices} items={this.props.items.toBet} handleRange={this.props.handleRange} handleDelete={this.props.changePosition}/>
                        <div className="bet-container">
                            <Button className="button-bet" size="large" color="black" >
                                Place bet
                            </Button> 
                            <List relaxed floated="right" className="info-bet">
                                <List.Item><Label color='orange' horizontal>ESTIMATED BET VALUE</Label> {this.props.betValue}$</List.Item>
                                <List.Item><Label color='orange' horizontal>ESTIMATED REWARD</Label> </List.Item>                        
                            </List>
                        </div>    
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={8}>
                        LAST BETS:
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <h2>Balances</h2>
                        <TokenBox signedIn={this.props.signedIn} items={this.props.items.wallet} handleDrop={this.props.changePosition}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>                
        );
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
            prices: state.prices
        }
    
  }

Match = DragDropContext(HTML5Backend)(Match);

export default Layout(connect(mapStateToProps, mapDispatchToProps)(Match));