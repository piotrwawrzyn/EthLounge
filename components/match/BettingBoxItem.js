import React, { Component } from 'react';
import { Segment, Icon } from 'semantic-ui-react';
import { DropTarget } from 'react-dnd';
import Item from '../Item';

const itemSource = {
    drop(props) {
        return {pos: props.pos};
    },
}


function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        item: monitor.getItem(),
        canDrop: monitor.canDrop()
    }
}

class BettingBoxItem extends Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.handleDelete(this.props.droppedItem);
    }

    render() {
        const { canDrop, connectDropTarget, isOver, item, pos } = this.props;
        
        let classNameModifier = '';

        if (isOver && canDrop) {
            classNameModifier += ' betting-box-item-hovered';
        }

        if (!isOver && canDrop) {
            classNameModifier += ' betting-box-item-candrop';
        }

        let token;

        if (this.props.droppedItem) {
            token = <Item item={this.props.droppedItem} className="item-dropped"></Item>

            classNameModifier = ' betting-box-item-dropped'

            return (            
                <div>
                    <Segment onClick={this.handleClick} textAlign='center' className={'betting-box-item' + classNameModifier}>
                    {token}
                    </Segment>
                </div>
            );
        } 
            

            return connectDropTarget(            
                <div>
                    <Segment size={"big"} textAlign='center' className={'betting-box-item' + classNameModifier}>
                    </Segment>
                </div>
            );
        
    }
}

export default DropTarget('item', itemSource, collect)(BettingBoxItem);