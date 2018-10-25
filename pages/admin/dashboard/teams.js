import React, { Component } from 'react';
import Layout from '../../../components/dashboard/Layout/Layout';
import { Divider, Grid, GridColumn, Header, Input } from 'semantic-ui-react';
import '../../../static/css/dashboard/teams.css';
import CookieCall from '../../../utils/CookieCall';
import TeamList from '../../../components/dashboard/teams/TeamList';
import TeamForm from '../../../components/dashboard/teams/TeamForm';

class Teams extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ''
    };
  }

  static async getInitialProps(props) {
    const { req } = props;
    const response = await CookieCall(req, '/api/teams');
    const teams = response.data;

    return { teams };
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
            <TeamForm />
          </GridColumn>
        </Grid>
      </div>
    );
  }
}

export default Layout(Teams);
