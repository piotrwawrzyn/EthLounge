import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';

class UserBetHistory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { bets } = this.props;

    return (
      <div className="user-bet-history">
        <h1>Bet history</h1>
        <Divider />
      </div>
    );
  }
}

export default UserBetHistory;
