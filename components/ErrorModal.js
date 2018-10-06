import React, { Component } from 'react';
import store from '../redux/store';
import { Modal, Message, Button, Header, Icon } from 'semantic-ui-react'
import { toggleErrorModal } from '../redux/actions';

class ErrorModal extends Component {

    render() {
        let { modal } = this.props;
        const list = modal.reasons.map((curr) => {
            return <li>{curr}</li>
        })

        return (
            <Modal size="tiny" open={modal.isOpen} closeOnDocumentClick={true}>
                 
                <Modal.Header className="font-error">
                    <Icon  name='times circle outline' />
                    {modal.head}
                </Modal.Header>
                <Modal.Content>
                    <Modal.Description className="font-error">
                        <ul>
                            {list}
                        </ul>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button className="dark-orange-bg font-white" onClick={(e) => store.dispatch(toggleErrorModal())}>
                        OK
                    </Button>
                </Modal.Actions>
            </Modal>
    

 
            
        );
    }
}

export default ErrorModal;