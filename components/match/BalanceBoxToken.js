import React, { Component } from 'react';
import Token from '../Token';
import { DragSource } from 'react-dnd';

const itemSource = {
    beginDrag(props) {
        return props.token;
    },
    endDrag(props, monitor) {
        if(!monitor.didDrop()) return;
        return props.handleDrop(props.token, monitor.getDropResult().pos);
        
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
}

class BalanceBoxToken extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { isDragging, connectDragSource} = this.props;

        let classNameModifier = '';

        if (isDragging) {
            classNameModifier = ' balance-box-token-dragging';
        } 

        return connectDragSource(
            <div className={'balance-box-token'+classNameModifier}><Token token={this.props.token} ></Token></div>
        );
    }
}

export default DragSource('token', itemSource, collect)(BalanceBoxToken);