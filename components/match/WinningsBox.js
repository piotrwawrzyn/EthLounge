import React, { Component } from 'react';
import { Message, Image } from 'semantic-ui-react';
import { ICON } from '../../utils/constants';
import Token from '../shared/Token';

class WinningsBox extends Component {
  constructor(props) {
    super(props);
    this.displayedToUser = this.props.bet.displayedToUser;
    this.state = {
      classNameModifiers: new Array(this.props.bet.tokensWon.length).fill('')
    };
  }

  componentWillMount() {
    const { bet } = this.props;
    if (this.displayedToUser === false)
      for (let i = 0; i < bet.tokensWon.length; i++) {
        const newClassNameModifiers = this.state.classNameModifiers;
        newClassNameModifiers[i] = 'winnings-box-token-hidden';
        this.setState({ classNameModifiers: newClassNameModifiers });

        setTimeout(() => {
          newClassNameModifiers[i] = 'winnings-box-token-animated';
          this.setState({
            classNameModifiers: newClassNameModifiers
          });
        }, 300 * i);
      }
  }

  render() {
    const { bet } = this.props;

    switch (bet.state) {
      case 'pending': {
        return (
          <Message
            icon={ICON.BET_PENDING}
            header="Match has not yet been finished"
            content="Come back when the match is over to check your winnings"
          />
        );
      }

      case 'won': {
        if (!bet.tokensWon.length) {
          return (
            <p className="informational-text">
              It seems like you won your bet but we weren't able to reward you.
              <br />
              <a className="dark-link">
                Check the FAQ for more detailed information.
              </a>
              <br />
            </p>
          );
        }

        const tokensWonMarkup = bet.tokensWon.map((token, index) => {
          if (index === bet.tokensWon.length - 1) this.displayedToUser = true;

          return (
            <div
              className={`winnings-box-token ${
                this.state.classNameModifiers[index]
              }`}
              key={token.id}>
              <Token isWinningsBox={true} token={token} />
            </div>
          );
        });

        return <div>{tokensWonMarkup}</div>;
      }

      case 'lost': {
        return (
          <p className="bet-lost-info">
            <span>Bet lost.</span>
            <p className="bet-lost-info-smiley-1">. .</p>
            <p className="bet-lost-info-smiley-2">(</p>
          </p>
        );
      }

      case 'canceled': {
        return (
          <Message
            icon={ICON.BET_CANCELED}
            header="Match has been canceled"
            content="Your bet has been fully returned to your balances."
          />
        );
      }
    }

    return <h3>Not yet implemented</h3>;
  }
}

export default WinningsBox;
