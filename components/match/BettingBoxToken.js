import React, { Component } from 'react';
import { Segment, Icon } from 'semantic-ui-react';
import { DropTarget } from 'react-dnd';
import Token from './Token';
import { changeTokenPosition } from '../../redux/match/actions';
import store from '../../redux/store';

const itemSource = {
  drop(props) {
    return { pos: props.pos };
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    token: monitor.getItem(),
    canDrop: monitor.canDrop()
  };
}

class BettingBoxToken extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    store.dispatch(changeTokenPosition(this.props.droppedToken, 'balance-box'));
  }

  render() {
    const { canDrop, connectDropTarget, isOver, token, pos } = this.props;

    let classNameModifier = '';

    if (isOver && canDrop) {
      classNameModifier += ' betting-box-token-hovered';
    }

    if (!isOver && canDrop) {
      classNameModifier += ' betting-box-token-candrop';
    }

    if (this.props.droppedToken) {
      classNameModifier = ' betting-box-token-dropped';

      return (
        <div>
          <Segment
            onClick={this.handleClick}
            textAlign="center"
            className={'betting-box-token' + classNameModifier}>
            <Token token={this.props.droppedToken} className="token-dropped" />
          </Segment>
        </div>
      );
    }

    return connectDropTarget(
      <div>
        <Segment
          size={'big'}
          textAlign="center"
          className={'betting-box-token' + classNameModifier}
        />
      </div>
    );
  }
}

export default DropTarget('token', itemSource, collect)(BettingBoxToken);
