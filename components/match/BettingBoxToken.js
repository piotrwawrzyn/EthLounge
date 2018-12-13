import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import Token from '../shared/Token';
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
          <div
            style={style}
            onClick={() => this.handleClick(token)}
            className={'betting-box-div betting-box-div-filled'}>
            <Token
              isBettingBox={true}
              token={token}
              className="token-dropped"
            />
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className={'betting-box-div'} />
      </div>
    );
  }
}

export default BettingBoxToken;
