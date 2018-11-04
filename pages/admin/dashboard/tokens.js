import React, { Component } from 'react';
import Layout from '../../../components/dashboard/Layout/Layout';
import { Divider, Grid, GridColumn, Header, Input } from 'semantic-ui-react';
import '../../../static/css/dashboard/dropzone.css';
import CookieCall from '../../../utils/CookieCall';
import TokenForm from '../../../components/dashboard/tokens/TokenForm';
import TokenListItem from '../../../components/dashboard/tokens/TokenListItem';
import SearchableTable from '../../../components/dashboard/shared/SearchableTable';

class Tokens extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ''
    };
  }

  static async getInitialProps(props) {
    const { req } = props;
    const response = await CookieCall(req, '/api/tokens');
    const tokens = response.data;

    return { tokens };
  }

  render() {
    return (
      <div>
        <h1>Manage Supported Tokens</h1> <Divider />
        <Grid className="grid-content">
          <Grid.Row>
            <GridColumn>
              <Input
                fluid
                size="large"
                icon="search"
                placeholder="Search for a token..."
                onChange={e => this.setState({ searchQuery: e.target.value })}
              />
              <SearchableTable
                searchQuery={this.state.searchQuery}
                items={this.props.initial.tokens}
                headers={[
                  'ID',
                  'Name',
                  'Symbol',
                  'Address (Read Only)',
                  'Decimals',
                  'Logo'
                ]}
                ItemComponent={TokenListItem}
                sortBy={'displayName'}
              />
            </GridColumn>
          </Grid.Row>
          <Grid.Row>
            <GridColumn width="6">
              <Header as="h2">Add New Token</Header>
              <TokenForm />
            </GridColumn>
            <GridColumn width="10" />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Layout(Tokens);
