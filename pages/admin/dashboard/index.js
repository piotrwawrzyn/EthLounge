import React, { Component } from 'react';
import DashboardLayout from '../../../components/dashboard/Layout/Layout';
import { Divider, Grid, GridColumn } from 'semantic-ui-react';
import ApiSetup from '../../../components/dashboard/index/ApiSetup';

class Dashboard extends Component {
  generateWelcomeMsg(username) {
    return (
      <h1>
        Hello <span className="font-dark-orange">{username}</span>, what are we
        up to today?
      </h1>
    );
  }

  render() {
    const { user } = this.props.initial;
    return (
      <div>
        {this.generateWelcomeMsg(user.username)}
        <Divider />
        <Grid>
          <GridColumn width={10} />
          <GridColumn width={6}>
            <h3>Pandascore API setup</h3>
            <ApiSetup />
          </GridColumn>
        </Grid>
      </div>
    );
  }
}

export default DashboardLayout(Dashboard);
