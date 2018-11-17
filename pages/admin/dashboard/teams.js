import React, { Component } from 'react';
import Layout from '../../../components/dashboard/Layout/Layout';
import { Divider, Grid, GridColumn, Header, Input } from 'semantic-ui-react';
import '../../../static/css/dashboard/dropzone.css';
import cookieCall from '../../../utils/cookieCall';
import SearchableTable from '../../../components/dashboard/shared/SearchableTable';
import TeamForm from '../../../components/dashboard/teams/TeamForm';
import TeamListItem from '../../../components/dashboard/teams/TeamListItem';

class Teams extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ''
    };
  }

  static async getInitialProps(props) {
    const { req } = props;
    const response = await cookieCall(req, '/api/teams');
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
            <SearchableTable
              searchQuery={this.state.searchQuery}
              items={this.props.initial.teams}
              headers={['ID', 'Name', 'Logo']}
              ItemComponent={TeamListItem}
              sortBy={'displayName'}
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
