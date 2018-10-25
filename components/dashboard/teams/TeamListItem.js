import React, { Component } from 'react';
import { Table, Image, Icon, Popup, Button } from 'semantic-ui-react';
import { backend } from '../../../config/config';
import Dropzone from 'react-dropzone';
import { Router } from '../../../next-routes';
import axios from 'axios';

class TeamListItem extends Component {
  constructor(props) {
    super(props);
    this.teamNameElement;
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.controlInput = this.controlInput.bind(this);
    this.state = {
      editMode: false,
      newLogo: '',
      newName: props.name,
      logoURL: `${backend}/img/teams/${props.id}.png`
    };
  }

  handleEdit(event) {
    this.setState({ editMode: true, newName: this.props.name, newLogo: '' });
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
      data: { id: this.props.id }
    });

    Router.replaceRoute('/admin/dashboard/teams');
  }

  async handleUpdate() {
    if (!(this.props.name === this.state.newName && !this.state.newLogo)) {
      const data = new FormData();
      data.append('logo', this.state.newLogo);
      data.append('displayName', this.state.newName);
      data.append('id', this.props.id);

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
    this.teamNameElement.textContent = this.props.name;
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

  componentDidUpdate() {
    this.teamNameElement.focus();
  }

  render() {
    const { id, name } = this.props;

    return (
      <Table.Row key={id} active={this.state.editMode}>
        <Table.Cell>{id}</Table.Cell>
        <Table.Cell>
          <div
            onInput={e => this.controlInput(e)}
            spellCheck="false"
            ref={div => (this.teamNameElement = div)}
            suppressContentEditableWarning={true}
            contentEditable={`${this.state.editMode}`}>
            {`${name}`}
          </div>
        </Table.Cell>
        <Table.Cell>{this.renderImage(id, this.state.newLogo)}</Table.Cell>

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
            trigger={<Icon className="update-icon" circular name="check" />}>
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
            className="undo-icon"
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
            className="edit-icon"
            circular
            name="edit"
            onClick={e => this.handleEdit(e)}
          />
          <Popup
            on="click"
            trigger={<Icon className="delete-icon" circular name="delete" />}>
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
