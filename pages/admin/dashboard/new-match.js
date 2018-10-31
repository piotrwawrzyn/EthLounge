import React, { Component } from 'react';
import Layout from '../../../components/dashboard/Layout/Layout';
import { Grid, Divider, Header } from 'semantic-ui-react';
import APImatches from '../../../components/dashboard/new-match/APImatches';

class NewMatch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header as="h1">Add New Match</Header>
        <Divider />
        <Header as="h2">From API</Header>
        <Grid className="grid-content">
          <Grid.Row>
            <Grid.Column>
              <APImatches />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header as="h2">Manually</Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Layout(NewMatch);
