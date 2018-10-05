import React, { Component } from 'react';
import TokenBoxItem from './TokenBoxItem';
import { Message } from 'semantic-ui-react';


class TokenBox extends Component {

    constructor(props) {
        super(props);    
        
        this.handleDrop = this.handleDrop.bind(this);
    }

    handleDrop(item, pos) {
        this.props.handleDrop(item, pos);
    }

    renderItems = (items) => {
            const toRender = <div>{items.map(item => {
                if(item.position == 'token-box') {
                return (
                <TokenBoxItem key={item.token} item={{token: item.token, amount: item.amount, initialAmount: item.initialAmount, position: item.position}} handleDrop={(item, pos) => this.handleDrop(item, pos)}></TokenBoxItem>);
                } else {return ''};            
            })}</div>;
            
            return toRender;
        
      }

    render() {
        if (this.props.signedIn)
        return (
            <div className='tokens-box'>            
                {this.renderItems(this.props.items)}   
            </div>
        );

        return (
            <Message
            warning
            header='Sign in with Metamask'
            content='Please sign in with Metamask in order to see your balances and place bets.'
          />
        );
    }
}


export default TokenBox;