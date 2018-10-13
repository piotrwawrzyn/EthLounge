import React, { Component } from "react";
import BalanceBoxToken from "./BalanceBoxToken";
import { Message } from "semantic-ui-react";
import { changeTokenPosition } from "../../redux/actions";
import store from "../../redux/store";

class TokenBox extends Component {
  constructor(props) {
    super(props);
  }

  handleDrop(token, pos) {
    store.dispatch(changeTokenPosition(token, pos));
  }

  renderItems = tokens => {
    const toRender = (
      <div>
        {tokens.map(token => {
          if (token.position == "balance-box") {
            return (
              <BalanceBoxToken
                key={token.address}
                token={{ ...token }}
                handleDrop={(token, pos) => this.handleDrop(token, pos)}
              />
            );
          } else {
            return "";
          }
        })}
      </div>
    );

    return toRender;
  };

  render() {
    if (this.props.signedIn)
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
