import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import Token from './Token';
import { changeTokenPosition } from '../../redux/match/actions';
import store from '../../redux/store';

class BettingBoxToken extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(token) {
    store.dispatch(changeTokenPosition(token));
  }

  render() {
    const { token } = this.props;

    if (token) {
      const style = token.balance
        ? { cursor: 'pointer' }
        : { cursor: 'default' };
      return (
        <div>
          <Segment
            style={style}
            onClick={() => this.handleClick(token)}
            textAlign="center"
            className={'betting-box-segment betting-box-segment-filled'}>
            <Token
              isBettingBox={true}
              token={token}
              className="token-dropped"
            />
          </Segment>
        </div>
      );
    }

    return (
      <div>
        <Segment
          size={'big'}
          textAlign="center"
          className={'betting-box-segment'}
        />
      </div>
    );
  }
}

export default BettingBoxToken;
