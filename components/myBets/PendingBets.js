import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';

class PendingBets extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Pending Bets</h1>
        <Divider />
      </div>
    );
  }
}

export default PendingBets;
