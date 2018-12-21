import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import MatchListItem from '../../shared/MatchListItem';

class UserPendingBets extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { bets } = this.props;
    const pendingBets = bets.filter(bet => bet.state === 'pending');

    return (
      <div className="user-pending-bets">
        <h1>Pending bets</h1>
        <Divider style={{ marginBottom: '1em' }} />
        {pendingBets.map(bet => (
          <MatchListItem
            key={bet.match.id}
            match={bet.match}
            picked={bet.teamID}
          />
        ))}
      </div>
    );
  }
}

export default UserPendingBets;
