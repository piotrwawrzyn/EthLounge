import React, { Component } from 'react';
import Layout from '../../../components/dashboard/Layout/Layout';
import {
  Divider,
  Grid,
  GridColumn,
  Form,
  Header,
  Icon,
  Button,
  Message,
  Label,
  Input
} from 'semantic-ui-react';
import '../../../static/css/dashboard/teams.css';
import Dropzone from 'react-dropzone';
import _ from 'lodash';
import CookieCall from '../../../utils/CookieCall';
import TeamList from '../../../components/dashboard/teams/TeamList';
import axios from 'axios';
import { Router } from '../../../next-routes';

class Teams extends Component {
  constructor(props) {
    super(props);

    this.onDrop = this.onDrop.bind(this);
    this.handleAddTeam = this.handleAddTeam.bind(this);
    this.state = {
      formInputs: { name: '', logo: false },
      formError: { name: false, logo: false },
      formMessage: '',
      searchQuery: ''
    };
  }

  static async getInitialProps(props) {
    const { req } = props;
    const response = await CookieCall(req, '/api/teams');
    const teams = response.data;

    return { teams };
  }

  onDrop(accepted, rejected) {
    this.clearFormErrors();
    const [file] = accepted;
    this.setState({ formInputs: { ...this.state.formInputs, logo: file } });
  }

  async handleAddTeam() {
    const nameCheck = !this.state.formInputs.name;
    const logoCheck = !this.state.formInputs.logo;
    this.setState({ formError: { name: nameCheck, logo: logoCheck } });

    if (!(nameCheck || logoCheck)) {
      const data = new FormData();
      data.append('logo', this.state.formInputs.logo);
      data.append('displayName', this.state.formInputs.name);

      const response = await axios({
        method: 'post',
        url: '/backend/new_team',
        data: data,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
      });

      if (response.data.success) {
        Router.replaceRoute('/admin/dashboard/teams');
        this.setState({
          formMessage: 'success',
          formInputs: { name: '', logo: false },
          formError: { name: false, logo: false }
        });
      } else this.setState({ formMessage: 'error' });
    }
  }

  clearFormErrors() {
    this.setState({ formError: { name: false, logo: false }, formMessage: '' });
  }

  render() {
    return (
      <div>
        <h1>Manage Teams</h1> <Divider />
        <Grid columns="2" className="grid-content">
          <GridColumn width="10">
            <Input
              fluid
              size="large"
              icon="search"
              placeholder="Search for a team..."
              onChange={e => this.setState({ searchQuery: e.target.value })}
            />
            <TeamList
              searchQuery={this.state.searchQuery}
              teams={this.props.initial.teams}
            />
          </GridColumn>

          <GridColumn width="6">
            <Header as="h2">Add New Team</Header>
            <Form error success>
              <Form.Field required error={this.state.formError.name}>
                <label>Display name</label>
                <input
                  onChange={e => {
                    this.clearFormErrors();
                    this.setState({
                      formInputs: {
                        ...this.state.formInputs,
                        name: e.target.value
                      }
                    });
                  }}
                  value={this.state.formInputs.name}
                />
              </Form.Field>
              <Form.Field required error={this.state.formError.logo}>
                <label>PNG Logo</label>
                {this.renderDropBox(
                  this.state.formInputs.logo,
                  this.state.formError.logo
                )}
                <Label className="label-warning">
                  <Icon name="warning circle" />
                  Please upload only square logos. Preferably 200x200 px.
                </Label>
              </Form.Field>

              <Button
                onClick={e => this.handleAddTeam()}
                className="black-bg font-white">
                Add
              </Button>

              {this.generateFormMessage(this.state.formMessage)}
            </Form>
          </GridColumn>
        </Grid>
      </div>
    );
  }

  renderDropBox(logo, error) {
    if (!_.isEmpty(logo)) {
      return (
        <Label size="medium" image className="font-white dark-orange-bg">
          {logo.name}
          <Icon
            onClick={e => {
              this.setState({
                formInputs: { ...this.state.formInputs, logo: false }
              });
            }}
            name="delete"
          />
        </Label>
      );
    } else {
      const classNameModifier = error ? 'dropdown-div-error' : '';

      return (
        <Dropzone
          className={`dropdown-div ${classNameModifier}`}
          activeClassName="dropdown-div-accepted"
          rejectClassName="dropdown-div-rejected"
          accept="image/png"
          onDrop={(accepted, rejected) => this.onDrop(accepted, rejected)}>
          {({ isDragAccept, isDragReject }) => {
            if (isDragAccept) {
              return 'The logo look OK. Now drop it.';
            }
            if (isDragReject) {
              return 'This is not a PNG file. ';
            }
            return 'Drop PNG logo here';
          }}
        </Dropzone>
      );
    }
  }

  generateFormMessage(message) {
    if (message) {
      const success = message === 'success' ? true : false;
      const header = success ? 'Success' : 'There has been a problem';
      const content = success
        ? 'New team has been succesfuly added to database.'
        : 'No new team has been added to database. Probably a team with such a name already exist.';
      return (
        <Message
          success={success}
          error={!success}
          content={content}
          header={header}
        />
      );
    }

    return '';
  }
}

export default Layout(Teams);
