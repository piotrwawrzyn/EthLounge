import React, { Component } from 'react';
import axios from 'axios';
import { Table, Image, Modal, Header, Button, Grid } from 'semantic-ui-react';
import DateFormatter from '../../../utils/DateFormatter';
import AddTeam from '../../../utils/api/AddTeam';
import AddLeague from '../../../utils/api/AddLeague';
import AddMatch from '../../../utils/api/AddMatch';
import '../../../static/css/dashboard/dropzone.css';
import Dropzone from '../shared/DropZone';
import _ from 'lodash';

class ApiMatchesItem extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleClick.bind(this);
    this.state = {
      modal: {
        open: false,
        data: {}
      },
      button: {
        loading: false,
        icon: 'plus',
        disabled: false
      }
    };
  }

  renderModalBody(data) {
    if (!data.pandaID) return;
    let { dataToSend, teams, league, pandaID, startTime } = data;
    let markup = [];

    for (let i = 0; i < 2; i++) {
      if (dataToSend[`team_${i}_ID`] === null) {
        const image = teams[i].logo ? (
          <Image
            size="small"
            className="margin-top-1em"
            centered
            src={teams[i].logo.preview}
          />
        ) : (
          ''
        );
        markup.push(
          <Grid.Column key={teams[i].displayName}>
            <Header as="h3">{teams[i].displayName}</Header>
            <Dropzone
              handleDelete={e => {
                teams[i].logo = null;
                this.setState({ modal: { ...this.state.modal, teams: teams } });
              }}
              droppedImg={teams[i].logo}
              onDrop={(accepted, rejected) => {
                const [file] = accepted;
                teams[i].logo = file;
                this.setState({ modal: { ...this.state.modal, teams: teams } });
              }}
            />
            {image}
          </Grid.Column>
        );
      }
    }

    if (dataToSend.league_ID === null) {
      const image = league.logo ? (
        <Image
          size="small"
          className="margin-top-1em"
          centered
          src={league.logo.preview}
        />
      ) : (
        ''
      );

      markup.push(
        <Grid.Column className="max-width-100" key={league.displayName}>
          <Header as="h3">{league.displayName}</Header>
          <Dropzone
            handleDelete={e => {
              league.logo = null;
              this.setState({ modal: { ...this.state.modal, league: league } });
            }}
            droppedImg={league.logo}
            onDrop={(accepted, rejected) => {
              const [file] = accepted;
              league.logo = file;
              this.setState({ modal: { ...this.state.modal, league: league } });
            }}
          />
          {image}
        </Grid.Column>
      );
    }

    return markup;
  }

  isButtonDisabled(teams, league, dataToSend) {
    if (!teams) return true;
    if (!teams[0].logo && !dataToSend.team_0_ID) return true;
    if (!teams[1].logo && !dataToSend.team_1_ID) return true;
    if (!league.logo && !dataToSend.league_ID) return true;
    return false;
  }

  async handleAddMatch(data) {
    const { dataToSend, teams, league, pandaID, startTime, serie } = data;

    for (let i = 0; i < 2; i++) {
      if (dataToSend[`team_${i}_ID`] === null) {
        const api_response = await AddTeam(teams[i]);
        dataToSend[`team_${i}_ID`] = api_response.data.team._id;
      }
    }

    if (dataToSend.league_ID === null) {
      const api_response = await AddLeague(league);
      dataToSend.league_ID = api_response.data.league._id;
    }

    const api_response = await AddMatch({
      teams: [dataToSend.team_0_ID, dataToSend.team_1_ID],
      league: dataToSend.league_ID,
      startTime,
      pandaID,
      serie
    });

    const match = api_response.data.match;

    if (match) this.addComplete(true);
    else this.addComplete(false);
  }

  handleBack() {
    this.setState({
      modal: { open: false, data: '' },
      button: { ...this.state.button, loading: false }
    });
  }

  async handleClick(match) {
    this.setState({ button: { ...this.state.button, loading: true } });
    const { pandaID, startTime, teams, league, serie } = match;
    let dataToSend = { team_0_ID: null, team_1_ID: null, league_ID: null };

    // Teams
    let teamsInDb = await teams.map(async curr => {
      const api_response = await axios.get(
        `/api/teams?pandaID=${curr.pandaID}`
      );
      return api_response.data.team;
    });

    teamsInDb = await Promise.all(teamsInDb);

    for (let i = 0; i < 2; i++) {
      if (teamsInDb[i] !== null) {
        dataToSend[`team_${i}_ID`] = teamsInDb[i]._id;
      } else if (teamsInDb[i] === null && teams[i].logo !== null) {
        const api_response = await AddTeam(teams[i]);
        const team = api_response.data.team;
        dataToSend[`team_${i}_ID`] = team._id;
      }
    }

    const api_response = await axios.get(
      `/api/leagues?pandaID=${league.pandaID}`
    );

    // League
    const leagueInDb = api_response.data.league;

    if (leagueInDb !== null) dataToSend.league_ID = leagueInDb._id;
    if (leagueInDb === null && league.logo !== null) {
      const api_response = await AddLeague(league);
      const new_league = api_response.data.league;
      dataToSend.league_ID = new_league._id;
    }

    const { team_0_ID, team_1_ID, league_ID } = dataToSend;

    if (team_0_ID !== null && team_1_ID !== null && league_ID !== null) {
      const api_response = await AddMatch({
        teams: [team_0_ID, team_1_ID],
        league: league_ID,
        pandaID,
        startTime,
        serie
      });
      if (api_response.data.match) this.addComplete(true);
      else this.addComplete(false);

      return;
    }

    this.setState({
      modal: {
        open: true,
        data: {
          dataToSend,
          pandaID,
          startTime,
          serie,
          teams: _.cloneDeep(teams),
          league: _.cloneDeep(league)
        }
      }
    });
  }

  addComplete(success) {
    if (success)
      this.setState({
        button: { loading: false, icon: 'chevron down', disabled: true },
        modal: { open: false, data: {} }
      });
    else
      this.setState({
        button: { loading: false, icon: 'exclamation', disabled: true },
        modal: { open: false, data: {} }
      });
  }

  async getImageFromURL(url) {
    const response = await axios.get(url);
  }

  render() {
    const { match } = this.props;

    const date = DateFormatter(match.startTime);
    return (
      <Table.Row>
        <Table.Cell>
          <Header as="h5" className="font-white">
            {match.teams[0].displayName}
          </Header>
        </Table.Cell>
        <Table.Cell>
          <Header as="h5" className="font-white">
            {match.teams[1].displayName}
          </Header>
        </Table.Cell>
        <Table.Cell>
          <Image src={match.league.logo} spaced size="mini" inline />
          {match.league.displayName}
        </Table.Cell>
        <Table.Cell>
          {date.formatedDate}
          <span
            className="font-size-xsmall"
            style={{ marginLeft: '0.5em' }}>{`(${date.aprox})`}</span>
        </Table.Cell>

        <Table.Cell>
          <Button
            loading={this.state.button.loading}
            icon={this.state.button.icon}
            disabled={this.state.button.disabled}
            basic
            inverted
            as="a"
            onClick={e => this.handleClick(match)}
          />
        </Table.Cell>

        <Modal open={this.state.modal.open}>
          <Modal.Header>Upload the following logos</Modal.Header>
          <Modal.Content>
            <Grid columns={3}>
              {this.renderModalBody(this.state.modal.data)}
            </Grid>
          </Modal.Content>
          <Modal.Actions>
            <Button
              className="orange-button-dark"
              onClick={e => this.handleBack()}>
              Back
            </Button>
            <Button
              className="dark-button"
              disabled={this.isButtonDisabled(
                this.state.modal.data.teams,
                this.state.modal.data.league,
                this.state.modal.data.dataToSend
              )}
              onClick={e => this.handleAddMatch(this.state.modal.data)}>
              Create new match
            </Button>
          </Modal.Actions>
        </Modal>
      </Table.Row>
    );
  }
}

export default ApiMatchesItem;
