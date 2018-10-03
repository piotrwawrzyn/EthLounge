import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import BettingBoxItem from './BettingBoxItem';
import RangeSlider from '../RangeSlider'

class BettingBox extends Component {

    constructor(props) {
        super(props);
    }

    renderItems(items) {    
        let bettingBoxes = [];
        const numberOfBoxes = 4;
        

        for (let i = 0; i < numberOfBoxes; i++) {
            let pos = `betting-box-${i}`;       
            let itemProp;
            let rangeSlider = '';

            for (let item of items) {
                if (item.position === pos) {
                    itemProp = item;
                    rangeSlider = <RangeSlider prices={this.props.prices} item={item} toBet={items} handleRange={this.props.handleRange}></RangeSlider>
                }
            }

            
            bettingBoxes.push(
                    <Grid.Row key={pos}>
                        <Grid.Column width={7}>
                            <BettingBoxItem pos={pos} droppedItem={itemProp} handleDelete={this.props.handleDelete}/>                           
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
                    {this.renderItems(this.props.items)}
                </Grid>
            </div>
        );
    }
}

export default BettingBox;