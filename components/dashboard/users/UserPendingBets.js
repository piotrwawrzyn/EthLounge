import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';

class UserPendingBets extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { bets } = this.props;
    return (
      <div className="user-pending-bets">
        <h1>Pending bets</h1>
        <Divider />
      </div>
    );
  }
}

export default UserPendingBets;
