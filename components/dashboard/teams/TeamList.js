import React, { Component } from 'react';
import { Table, Header, Image, Icon, Button } from 'semantic-ui-react';
import { backend } from '../../../config/config';
import _ from 'lodash';

class TeamList extends Component {
  constructor(props) {
    super(props);

    this.lastSearchQuery = '';
    this.limitStep = 20;
    this.renderMore = false;
    this.recordsRendered = 0;
    this.state = { limit: this.limitStep };
  }
  renderTeams(teams, query) {
    query = query.toLowerCase();

    let firstFilter = teams.filter(curr => {
      const name = curr.displayName.toLowerCase();
      return name.startsWith(query);
    });

    firstFilter = firstFilter.reverse();

    let secondFilter = teams.filter(curr => {
      const name = curr.displayName.toLowerCase();
      return !name.startsWith(query) && name.includes(query);
    });

    secondFilter = secondFilter.reverse();

    let filteredTeams = [...firstFilter, ...secondFilter];

    //filteredTeams = filteredTeams.reverse();

    let reducedTeams;
    if (filteredTeams.length > this.state.limit) {
      reducedTeams = filteredTeams.slice(0, this.state.limit);
      this.renderMore = true;
    } else {
      reducedTeams = filteredTeams;
      this.recordsRendered = reducedTeams.length;
      this.renderMore = false;
    }

    const markup = reducedTeams.map(curr => {
      const { _id, displayName } = curr;
      return (
        <Table.Row key={_id}>
          <Table.Cell>{_id}</Table.Cell>
          <Table.Cell>{displayName}</Table.Cell>
          <Table.Cell>
            <Image
              src={`${backend}/img/teams/${_id}.png`}
              size="mini"
              verticalAlign="middle"
            />
          </Table.Cell>
          <Table.Cell>
            <Icon className="edit-icon" circular name="edit" />
            <Icon className="delete-icon" circular name="delete" />
          </Table.Cell>
        </Table.Row>
      );
    });

    return markup;
  }

  renderLoadMore(renderMore) {
    if (renderMore) {
      return (
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              <Button
                fluid
                className="orange-button-light"
                onClick={e =>
                  this.setState({ limit: this.state.limit + this.limitStep })
                }>
                Load more
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      );
    }

    return (
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="4">
            All <strong>{this.recordsRendered}</strong> records rendered for the
            given query.
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    );
  }

  componentWillUpdate() {
    const { searchQuery, teams } = this.props;

    if (this.lastSearchQuery !== searchQuery)
      this.setState({ limit: this.limitStep });

    this.lastSearchQuery = this.props.searchQuery;
  }

  render() {
    const { searchQuery, teams } = this.props;

    return (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Logo</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>{this.renderTeams(teams, searchQuery)}</Table.Body>
        {this.renderLoadMore(this.renderMore)}
      </Table>
    );
  }
}

export default TeamList;
