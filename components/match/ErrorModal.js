import React, { Component } from 'react';
import { Button, Header, Icon, Message, Modal } from 'semantic-ui-react';

import { toggleErrorModal } from '../../redux/match/actions';
import store from '../../redux/store';

class ErrorModal extends Component {
  render() {
    let { modal } = this.props;
    const list = modal.reasons.map(curr => {
      return <li key={curr}>{curr}</li>;
    });

    return (
      <Modal size="tiny" open={modal.isOpen} closeOnDocumentClick={true}>
        <Modal.Header className="font-error">
          <Icon name="times circle outline" />
          {modal.head}
        </Modal.Header>
        <Modal.Content>
          <Modal.Description className="font-error">
            <ul>{list}</ul>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            className="dark-orange-bg font-white"
            onClick={e => store.dispatch(toggleErrorModal())}>
            OK
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ErrorModal;
