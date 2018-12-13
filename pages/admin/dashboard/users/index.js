import React, { Component } from 'react';
import Layout from '../../../../components/dashboard/Layout/Layout';
import cookieCall from '../../../../utils/cookieCall';
import { Divider, Grid, Input } from 'semantic-ui-react';
import SearchableTable from '../../../../components/dashboard/shared/SearchableTable';
import UserListItem from '../../../../components/dashboard/users/UserListItem';
import '../../../../static/css/dashboard/users.css';

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ''
    };
  }

  static async getInitialProps(props) {
    const { req } = props;
    const response = await cookieCall(req, '/api/users');
    const users = response.data;

    return { users };
  }

  render() {
    const { users } = this.props.initial;
    return (
      <div>
        <h1>Manage Users</h1> <Divider />
        <Grid className="grid-content">
          <Grid.Column>
            <Input
              fluid
              size="large"
              icon="search"
              placeholder="Search for a user..."
              onChange={e => this.setState({ searchQuery: e.target.value })}
            />
            <SearchableTable
              searchQuery={this.state.searchQuery}
              items={users}
              headers={[
                'ID',
                'Username',
                'E-mail',
                'Verified',
                'Bets Placed',
                'Avatar',
                'Signup Date'
              ]}
              ItemComponent={UserListItem}
              sortBy={'username'}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Layout(Users);
