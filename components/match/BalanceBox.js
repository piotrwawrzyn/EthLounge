import _ from 'lodash';
import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';

import { changeTokenPosition } from '../../redux/match/actions';
import store from '../../redux/store';

import BalanceBoxToken from './BalanceBoxToken';

class TokenBox extends Component {
  constructor(props) {
    super(props);
  }

  handleDrop(token, pos) {
    store.dispatch(changeTokenPosition(token, pos));
  }

  renderItems = tokens => {
    const tokensInBalance = _.filter(tokens, { position: 'balance-box' });
    const toRender = (
      <div>
        {tokensInBalance.map(token => {
          return (
            <BalanceBoxToken
              key={token.address}
              token={{ ...token }}
              handleDrop={(token, pos) => this.handleDrop(token, pos)}
            />
          );
        })}
      </div>
    );

    return toRender;
  };

  render() {
    if (this.props.gambler)
      return (
        <div className="tokens-box">{this.renderItems(this.props.tokens)}</div>
      );

    return (
      <Message
        warning
        header="Sign in with Metamask"
        content="Please sign in with Metamask in order to see your balances and place bets."
      />
    );
  }
}

export default TokenBox;
