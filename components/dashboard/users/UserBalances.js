import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import Token from '../../shared/Token';

class UserBalances extends Component {
  constructor(props) {
    super(props);
  }

  renderTokens(balances) {
    return balances.map(balance => (
      <div className="user-balances-box-token">
        <Token isBalanceBox={true} token={balance} />
      </div>
    ));
  }

  render() {
    const { balances } = this.props;
    return (
      <div className="user-balances">
        <h1>Balances</h1>
        <Divider />
        {balances.length > 0 ? (
          <div className="user-balances-box">
            {this.renderTokens(balances)}{' '}
          </div>
        ) : (
          <div className="empty-box" />
        )}
      </div>
    );
  }
}

export default UserBalances;
