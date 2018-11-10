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
  }

  handleClick(token) {
    store.dispatch(changeTokenPosition(token));
  }

  render() {
    if (this.props.user)
      return (
        <div className="tokens-box">{this.renderItems(this.props.tokens)}</div>
      );

    return (
      <Message
        warning
        header="Sign in"
        content="Please sign in in order to see your balances and place bets."
      />
    );
  }

  renderItems = tokens => {
    const tokensInBalance = _.filter(tokens, { position: 'balance-box' });

    const toRender = (
      <div>
        {tokensInBalance.map(token => {
          return (
            <div
              className={'balance-box-token'}
              onClick={() => this.handleClick(token)}
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
