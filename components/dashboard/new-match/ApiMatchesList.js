import React, { Component } from 'react';
import axios from 'axios';
import { Table, Dimmer, Loader, Dropdown } from 'semantic-ui-react';
import '../../../static/css/dashboard/dropzone.css';
import _ from 'lodash';
import GetMatches from '../../../utils/api/GetMatches';
import ApiMatchesItem from './ApiMatchesItem';

class ApiMatchesList extends Component {
  constructor(props) {
    super(props);

    this.timeOptions = [
      { text: 'Next 24 hours', value: 24 },
      { text: 'Next 2 days', value: 48 },
      { text: 'Next 3 days', value: 72 },
      { text: 'Everything', value: 9999999 }
    ];

    this.leagueOptions = [{ text: 'All leagues', value: 0 }];

    this.defaultTimeSpan = 48;
    this.defaultLeague = 0;
    this.state = {
      allMatches: '',
      filters: { hours: this.defaultTimeSpan, league: this.defaultLeague }
    };

    this.handleChangeTimeSpan = this.handleChangeTimeSpan.bind(this);
    this.handleChangeLeague = this.handleChangeLeague.bind(this);
  }

  handleChangeTimeSpan(e, { value }) {
    this.setState({ filters: { ...this.state.filters, hours: value } });
  }

  handleChangeLeague(e, { value }) {
    this.setState({ filters: { ...this.state.filters, league: value } });
  }

  hoursFilter(matches = this.state.allMatches) {
    const now = new Date();
    const { hours } = this.state.filters;

    const filteredMatches = matches.filter(
      curr =>
        (curr.startTime.getTime() - now.getTime()) / 3600000 <= hours
          ? true
          : false
    );

    return filteredMatches;
  }

  leaguesFilter(matches = this.state.allMatches) {
    const { league } = this.state.filters;
    if (league === 0) return matches;
    const filteredMatches = matches.filter(
      match => match.league.pandaID === league
    );

    return filteredMatches;
  }

  async componentDidMount() {
    const api_call = await axios.get('/api/pandascore/upcoming_matches');
    const api_response = await GetMatches();
    const matchesInDb = api_response.data;

    // Array of matches.
    const data = api_call.data.data;

    // Filter to debug and remove already added matches
    const debugedData = data.filter(match => {
      if (!match.id) return false;
      if (!match.begin_at) return false;
      if (match.opponents.length !== 2) return false;
      if (!match.league) return false;
      if (matchesInDb.some(curr => curr.pandaID == match.id)) return false;

      return true;
    });

    // Object refactoring
    const matches = debugedData.map(match => {
      if (!this.leagueOptions.some(curr => curr.value === match.league.id))
        this.leagueOptions.push({
          text: match.league.name,
          value: match.league.id
        });
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
            logo: match.opponents[1].opponent.image_url
          }
        ],
        league: {
          pandaID: match.league.id,
          displayName: match.league.name,
          logo: match.league.image_url
        }
      };
    });

    this.setState({ allMatches: matches });
    // this.setState({ filters: { ...this.state.filters } });
  }

  renderItems() {
    // Apply filters provided by user
    let matches = this.hoursFilter();
    matches = this.leaguesFilter(matches);

    const markup = matches.map(match => {
      return <ApiMatchesItem key={match.pandaID} match={match} />;
    });

    return markup;
  }

  render() {
    const filters = (
      <div>
        <Dropdown
          className="margin-right-1em"
          defaultValue={this.timeOptions[1].value}
          options={this.timeOptions}
          selection
          onChange={this.handleChangeTimeSpan}
          scrolling={false}
        />

        <Dropdown
          className="margin-right-1em"
          defaultValue={this.leagueOptions[0].value}
          options={this.leagueOptions}
          selection
          onChange={this.handleChangeLeague}
          scrolling={false}
        />
      </div>
    );
    if (this.state.allMatches) {
      return (
        <div>
          {filters}
          <Table selectable verticalAlign="middle" textAlign="center" inverted>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Team 1</Table.HeaderCell>
                <Table.HeaderCell>Team 2</Table.HeaderCell>
                <Table.HeaderCell>League</Table.HeaderCell>
                <Table.HeaderCell>Start date</Table.HeaderCell>
                <Table.HeaderCell />
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.renderItems(this.state.allMatches, this.state.filters)}
            </Table.Body>
          </Table>
        </div>
      );
    } else {
      return (
        <Dimmer active inverted size="large">
          <Loader>Loading data from API</Loader>
        </Dimmer>
      );
    }
  }
}

export default ApiMatchesList;
