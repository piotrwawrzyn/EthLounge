import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import BettingBoxToken from './BettingBoxToken';
import RangeSlider from '../RangeSlider';


class BettingBox extends Component {

    constructor(props) {
        super(props);
    }

    renderTokens(tokens) { 
        let bettingBoxes = [];
        const numberOfBoxes = 4;
        

        for (let i = 0; i < numberOfBoxes; i++) {
            let pos = `betting-box-${i}`;       
            let tokenProp;
            let rangeSlider = '';

            for (let token of tokens) {
                if (token.position === pos) {
                    tokenProp = token;
                    rangeSlider = <RangeSlider prices={this.props.prices} token={token} toBet={tokens}></RangeSlider>
                }
            }
            
            bettingBoxes.push(
                    <Grid.Row key={pos}>
                        <Grid.Column width={7}>
                            <BettingBoxToken pos={pos} droppedToken={tokenProp} />                        
                        </Grid.Column>
                        <Grid.Column width={9} verticalAlign="middle">
                            {rangeSlider}
                        </Grid.Column>
                    </Grid.Row>
            );
        }

        return bettingBoxes;
    }

    render() {
        return (
            <div className="betting-box">
                <Grid columns='equal'>
                    {this.renderTokens(this.props.tokens)}
                </Grid>
            </div>
        );
    }
}

export default BettingBox;