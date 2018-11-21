import React, { Component } from 'react';
import { Table, Image, Icon, Popup, Button } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import { Router } from '../../../next-routes';
import axios from 'axios';

class TeamListItem extends Component {
  constructor(props) {
    super(props);
    this.id = props.item._id;
    this.displayName = props.item.displayName;
    this.logo = props.item.logo;

    this.teamNameElement;
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
    this.setState({ editMode: true, newName: this.displayName, newLogo: '' });
    // Set cursor at the end of the team name
    const range = document.createRange();
    const sel = window.getSelection();
    range.setStart(this.teamNameElement, 1);
    sel.removeAllRanges();
    sel.addRange(range);
  }

  async handleDelete() {
    await axios({
      method: 'post',
      url: '/backend/delete_team',
      data: { id: this.id }
    });

    Router.replaceRoute('/admin/dashboard/teams');
  }

  async handleUpdate() {
    if (!(this.displayName === this.state.newName && !this.state.newLogo)) {
      const data = new FormData();
      data.append('logo', this.state.newLogo);
      data.append('displayName', this.state.newName);
      data.append('id', this.id);

      await axios({
        method: 'post',
        url: '/backend/update_team',
        data: data,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
      });
    }
    const logo = this.state.newLogo.preview || this.state.logoURL;
    this.setState({ editMode: false, logoURL: logo });
    Router.replaceRoute('/admin/dashboard/teams');
  }

  undo() {
    this.setState({ editMode: false });
    this.teamNameElement.textContent = this.displayName;
  }

  onDrop(accepted, rejected) {
    const [file] = accepted;
    this.setState({ newLogo: file });
  }

  controlInput(event) {
    this.setState({
      newName: event.target.textContent
    });
  }

  render() {
    return (
      <Table.Row key={this.id} active={this.state.editMode}>
        <Table.Cell>{this.id}</Table.Cell>
        <Table.Cell>
          <div
            onInput={e => this.controlInput(e)}
            spellCheck="false"
            ref={div => (this.teamNameElement = div)}
            suppressContentEditableWarning={true}
            contentEditable={`${this.state.editMode}`}>
            {`${this.displayName}`}
          </div>
        </Table.Cell>
        <Table.Cell>{this.renderImage(this.id, this.state.newLogo)}</Table.Cell>

        <Table.Cell>{this.renderIcons(this.state.editMode)}</Table.Cell>
      </Table.Row>
    );
  }

  renderImage(id, newLogo) {
    if (this.state.editMode) {
      if (this.state.newLogo) {
        return (
          <Dropzone
            style={{}}
            accept="image/png"
            onDrop={(accepted, rejected) => this.onDrop(accepted, rejected)}>
            <Image src={newLogo.preview} size="mini" verticalAlign="middle" />
          </Dropzone>
        );
      } else {
        return (
          <Dropzone
            style={{}}
            accept="image/png"
            onDrop={(accepted, rejected) => this.onDrop(accepted, rejected)}>
            <Image
              src={this.state.logoURL}
              size="mini"
              verticalAlign="middle"
            />
          </Dropzone>
        );
      }
    }
    return (
      <Image src={this.state.logoURL} size="mini" verticalAlign="middle" />
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

export default TeamListItem;
