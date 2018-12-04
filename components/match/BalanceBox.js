import _ from 'lodash';
import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';
import { changeTokenPosition } from '../../redux/match/actions';
import store from '../../redux/store';
import Token from './Token';

class BalanceBox extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    if (this.props.user && this.props.user.balances)
      this.emptyBalances = this.props.user.balances.length === 0;
  }

  handleClick(token, betsClosed) {
    if (betsClosed) return;
    if (store.getState().match.tokens.toBet.length === 4) return;

    store.dispatch(changeTokenPosition(token));
  }

  render() {
    const { user, tokens, betsClosed } = this.props;

    if (this.emptyBalances)
      return (
        <p className="informational-text">
          Your balances are empty. You can{' '}
          <a className="dark-link">deposit your tokens here</a>.
        </p>
      );

    if (user)
      return (
        <div className="tokens-box">{this.renderItems(tokens, betsClosed)}</div>
      );

    return (
      <Message
        warning
        header="Sign in"
        content="Please sign in to see your balances and place bets."
      />
    );
  }

  renderItems = (tokens, betsClosed) => {
    const tokensInBalance = _.filter(tokens, { position: 'balance-box' });
    const additionalStyles = betsClosed ? { cursor: 'default' } : {};

    const toRender = (
      <div>
        {tokensInBalance.map(token => {
          return (
            <div
              style={additionalStyles}
              className={'balance-box-token'}
              onClick={() => this.handleClick(token, betsClosed)}
              key={token.id}>
              <Token token={token} />
            </div>
          );
        })}
      </div>
    );

    return toRender;
  };
}

export default BalanceBox;
