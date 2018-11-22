import React, { Component } from 'react';
import { Table, Image, Icon, Popup, Button } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import { Router } from '../../../next-routes';
import axios from 'axios';
import _ from 'lodash';

class TokenListItem extends Component {
  constructor(props) {
    super(props);
    this.lastMode;

    this.id = props.item._id;
    this.displayName = props.item.displayName;
    this.symbol = props.item.symbol;
    this.address = props.item.address;
    this.decimals = props.item.decimals;
    this.logo = props.item.logo;

    this.tokenNameElement;
    this.tokenSymbolElement;
    this.tokenDecimalsElement;

    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.controlInput = this.controlInput.bind(this);
    this.state = {
      editMode: false,
      newLogo: '',
      newName: props.name,
      logoURL: `${this.logo}`
    };
  }

  handleEdit(event) {
    this.setState({
      editMode: true,
      newDisplayName: this.displayName,
      newSymbol: this.symbol,
      newAddress: this.address,
      newDecimals: this.decimals,
      newLogo: ''
    });
  }

  async handleDelete() {
    await axios({
      method: 'post',
      url: '/backend/delete_token',
      data: { id: this.id }
    });

    Router.replaceRoute('/admin/dashboard/tokens');
  }

  hasSomethingChanged() {
    const { newDisplayName, newSymbol, newDecimals } = this.state;
    if (this.displayName !== newDisplayName) return true;
    if (this.symbol !== newSymbol) return true;
    if (this.decimals !== newDecimals) return true;
    if (this.state.newLogo) return true;

    return false;
  }

  async handleUpdate() {
    if (this.hasSomethingChanged()) {
      const data = new FormData();
      data.append('id', this.id);
      data.append('displayName', this.state.newDisplayName);
      data.append('symbol', this.state.newSymbol);
      data.append('address', this.state.newAddress);
      data.append('decimals', this.state.newDecimals);
      data.append('logo', this.state.newLogo);

      await axios({
        method: 'post',
        url: '/backend/update_token',
        data: data,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
      });
    }
    const logo = this.state.newLogo.preview || this.state.logoURL;
    this.setState({ editMode: false, logoURL: logo });
    Router.replaceRoute('/admin/dashboard/tokens');
  }

  undo() {
    this.setState({ editMode: false });
    this.tokenNameElement.textContent = this.displayName;
    this.tokenSymbolElement.textContent = this.symbol;
    this.tokenDecimalsElement = this.decimals;
  }

  onDrop(accepted, rejected) {
    const [file] = accepted;
    this.setState({ newLogo: file });
  }

  controlInput(event) {
    switch (event.target) {
      case this.tokenNameElement: {
        this.setState({
          newDisplayName: event.target.textContent
        });
        return;
      }
      case this.tokenSymbolElement: {
        this.setState({
          newSymbol: event.target.textContent
        });
        return;
      }
      case this.tokenAddressElement: {
        this.setState({
          newAddress: event.target.textContent
        });
        return;
      }
      case this.tokenDecimalsElement: {
        this.setState({
          newDecimals: event.target.textContent
        });
        return;
      }
    }
  }

  render() {
    return (
      <Table.Row key={this.id} active={this.state.editMode}>
        <Table.Cell>{this.id}</Table.Cell>
        <Table.Cell>
          <div
            onInput={e => this.controlInput(e)}
            spellCheck="false"
            ref={div => (this.tokenNameElement = div)}
            suppressContentEditableWarning={true}
            contentEditable={`${this.state.editMode}`}>
            {`${this.displayName}`}
          </div>
        </Table.Cell>

        <Table.Cell>
          <div
            onInput={e => this.controlInput(e)}
            spellCheck="false"
            ref={div => (this.tokenSymbolElement = div)}
            suppressContentEditableWarning={true}
            contentEditable={`${this.state.editMode}`}>
            {`${this.symbol}`}
          </div>
        </Table.Cell>

        <Table.Cell>
          <div>{`${this.address}`}</div>
        </Table.Cell>

        <Table.Cell>
          <div
            onInput={e => this.controlInput(e)}
            spellCheck="false"
            ref={div => (this.tokenDecimalsElement = div)}
            suppressContentEditableWarning={true}
            contentEditable={`${this.state.editMode}`}>
            {`${this.decimals}`}
          </div>
        </Table.Cell>

        <Table.Cell>{this.renderImage(this.state.newLogo)}</Table.Cell>

        <Table.Cell>{this.renderIcons(this.state.editMode)}</Table.Cell>
      </Table.Row>
    );
  }

  renderImage(newLogo) {
    if (this.state.editMode) {
      if (this.state.newLogo) {
        return (
          <Dropzone
            style={{}}
            accept="image/png"
            onDrop={(accepted, rejected) => this.onDrop(accepted, rejected)}>
            <Image
              className="transparent-image-reveal"
              src={newLogo.preview}
              size="mini"
              verticalAlign="middle"
            />
          </Dropzone>
        );
      } else {
        return (
          <Dropzone
            style={{}}
            accept="image/png"
            onDrop={(accepted, rejected) => this.onDrop(accepted, rejected)}>
            <Image
              className="transparent-image-reveal"
              src={this.state.logoURL}
              size="mini"
              verticalAlign="middle"
            />
          </Dropzone>
        );
      }
    }
    return (
      <Image
        className="transparent-image-reveal"
        src={this.state.logoURL}
        size="mini"
        verticalAlign="middle"
      />
    );
  }

  renderIcons(editMode) {
    if (editMode) {
      return (
        <div>
          <Popup
            on="click"
            trigger={<Icon className="table-icon" circular name="check" />}>
            Are you sure?
            <br />
            <Button
              onClick={e => this.handleUpdate()}
              color="green"
              size="mini"
              fluid
              compact>
              UPDATE
            </Button>
          </Popup>
          <Icon
            className="table-icon"
            circular
            name="chevron right"
            onClick={e => this.undo()}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Icon
            className="table-icon"
            circular
            name="edit"
            onClick={e => this.handleEdit(e)}
          />
          <Popup
            on="click"
            trigger={<Icon className="table-icon" circular name="delete" />}>
            Are you sure?
            <br />
            <Button
              color="red"
              size="mini"
              onClick={e => this.handleDelete()}
              fluid
              compact>
              DELETE
            </Button>
          </Popup>
        </div>
      );
    }
  }
}

export default TokenListItem;
