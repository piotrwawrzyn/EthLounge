import React, { Component } from 'react';
import { Segment, Icon } from 'semantic-ui-react';
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
      return (
        <div>
          <Segment
            onClick={() => this.handleClick(token)}
            textAlign="center"
            className={'betting-box-token betting-box-token-filled'}>
            <Token token={token} className="token-dropped" />
          </Segment>
        </div>
      );
    }

    return (
      <div>
        <Segment
          size={'big'}
          textAlign="center"
          className={'betting-box-token'}
        />
      </div>
    );
  }
}

export default BettingBoxToken;
