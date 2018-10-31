import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import BettingBoxToken from './BettingBoxItem';
import RangeSlider from './RangeSlider';

class BettingBox extends Component {
  constructor(props) {
    super(props);
  }

  renderTokens(tokens) {
    const items = [];
    const numberOfBoxes = 4;

    for (let i = 0; i < numberOfBoxes; i++) {
      const token = tokens[i] || null;
      items.push(
        <Grid.Row key={i}>
          <Grid.Column width={7}>
            <BettingBoxToken token={token} />
          </Grid.Column>
          <Grid.Column width={9} verticalAlign="middle">
            <RangeSlider
              prices={this.props.prices}
              token={token}
              toBet={tokens}
            />
          </Grid.Column>
        </Grid.Row>
      );
    }

    return items;
  }

  render() {
    return (
      <div className="betting-box">
        <Grid columns="equal">{this.renderTokens(this.props.tokens)}</Grid>
      </div>
    );
  }
}

export default BettingBox;
