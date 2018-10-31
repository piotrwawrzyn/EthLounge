import React, { Component } from 'react';
import axios from 'axios';
import { Table, Image, Icon, Dimmer, Loader, Header } from 'semantic-ui-react';
import DateFormatter from '../../../utils/DateFormatter';
import AddTeam from '../../../utils/api/AddTeam';

class APImatches extends Component {
  constructor(props) {
    super(props);

    this.state = { matches: '' };
    this.handleAdd = this.handleAdd.bind(this);
  }

  // async addTeamToDatabase(team) {
  //   const { id, name, img } = team;
  //   await axios({
  //     method: 'post'
  //   });
  // }

  async handleAdd(match) {
    const { pandaID, startTime, teams, league } = match;

    // Teams

    let teamsFromDb = await teams.map(async curr => {
      const api_response = await axios.get(`/api/teams?apiID=${curr.pandaID}`);
      return api_response.data.team;
    });

    teamsFromDb = await Promise.all(teamsFromDb);

    const teamsLogoNeeded = [];
    for (let i = 0; i < 2; i++) {
      if (teamsFromDb[i] === null && teams[i].logo === null);
      teamsLogoNeeded.push(teams[i]);

      if (teamsFromDb[i] === null && teams[i].logo !== null) {
        AddTeam(teams[i]);
      }
    }

    const api_response = await axios.get(
      `/api/leagues?apiID=${league.pandaID}`
    );

    // League

    const leagueFromDb = api_response.data.league;

    let leagueLogoNeeded = null;

    if (leagueFromDb === null && league.logo === null);
    leagueLogoNeeded = league;

    if (leagueFromDb === null && league.logo !== null);
    // ADD LEAGUE TO DATABASE

    if (leagueLogoNeeded === null && teamsLogoNeeded.length === 0);
    // WE DONT NEED ANYTHING, TEAMS AND LEAGUE EXIST. WE CAN CREATE A MATCH NOW
  }

  async getImageFromURL(url) {
    console.log('trying to get image from', url);
    const response = await axios.get(url);
    console.log(response);
  }

  async componentDidMount() {
    const api_call = await axios.get('/api/pandascore/upcoming_matches');

    // Array of matches.
    const data = api_call.data.data;

    // Filter to debug
    const debugedData = data.filter(match => {
      if (!match.id) return false;
      if (!match.begin_at) return false;
      if (match.opponents.length !== 2) return false;
      if (!match.league) return false;

      return true;
    });

    // Object refactoring
    const matches = debugedData.map(match => {
      if (!match.opponents[0]) console.log(match);
      return {
        pandaID: match.id,
        startTime: new Date(match.begin_at),
        teams: [
          {
            pandaID: match.opponents[0].opponent.id,
            displayName: match.opponents[0].opponent.name,
            logo: match.opponents[0].opponent.image_url
          },
          {
            pandaID: match.opponents[1].opponent.id,
            displayName: match.opponents[1].opponent.name,
            logo: match.opponents[0].opponent.image_url
          }
        ],
        league: {
          pandaID: match.league.id,
          displayName: match.league.name,
          logo: match.league.image_url
        }
      };
    });

    const markup = matches.map(match => {
      const date = DateFormatter(match.startTime);
      return (
        <Table.Row key={match.pandaID}>
          <Table.Cell>
            <Header as="h5">{match.teams[0].displayName}</Header>
          </Table.Cell>
          <Table.Cell>
            <Header as="h5">{match.teams[1].displayName}</Header>
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
            <Icon
              onClick={e => this.handleAdd(match)}
              name="plus"
              circular
              className="table-icon"
            />
          </Table.Cell>
        </Table.Row>
      );
    });

    this.setState({ matches: markup });
  }

  render() {
    if (this.state.matches) {
      return (
        <Table
          celled
          singleLine
          selectable
          verticalAlign="middle"
          textAlign="center"
          striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Team 1</Table.HeaderCell>
              <Table.HeaderCell>Team 2</Table.HeaderCell>
              <Table.HeaderCell>League</Table.HeaderCell>
              <Table.HeaderCell>Start date</Table.HeaderCell>
              <Table.HeaderCell />
            </Table.Row>
          </Table.Header>
          <Table.Body>{this.state.matches}</Table.Body>
        </Table>
      );
    } else {
      return (
        <Dimmer active inverted size="large">
          <Loader> Fetching data from API</Loader>
        </Dimmer>
      );
    }
  }
}

export default APImatches;
