import React, { Component } from 'react';
import { Divider, Grid } from 'semantic-ui-react';
import BetHistoryItem from './BetHistoryItem';

class BetHistory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { bets } = this.props;

    return (
      <div>
        <h1>Bet History</h1>
        <Divider />
        {bets.length > 0 ? (
          bets.map(bet => <BetHistoryItem bet={bet} />)
        ) : (
          <p className="informational-text">Your betting history is empty.</p>
        )}
      </div>
    );
  }
}

export default BetHistory;
