import React, { Component } from 'react';
import Item from '../Item';
import { DragSource } from 'react-dnd';

const itemSource = {
    beginDrag(props) {
        return props.item;
    },
    endDrag(props, monitor) {
        if(!monitor.didDrop()) return;
        return props.handleDrop(props.item, monitor.getDropResult().pos);
        
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
}

class TokenBoxItem extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { isDragging, connectDragSource} = this.props;

        let classNameModifier = '';

        if (isDragging) {
            classNameModifier = ' token-box-item-dragging';
        } 

        return connectDragSource(
            <div className={'token-box-item'+classNameModifier}><Item item={this.props.item} ></Item></div>
        );
    }
}

export default DragSource('item', itemSource, collect)(TokenBoxItem);