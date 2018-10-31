import React, { Component } from 'react';
import DashboardLayout from '../../../components/dashboard/Layout/Layout';
import { Divider, Grid, GridColumn, Segment } from 'semantic-ui-react';

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
    return (
      <div>
        {this.generateWelcomeMsg(this.props.initial.admin.username)}
        <Divider />
        <Grid columns={2}>
          <GridColumn />
          <GridColumn>hg</GridColumn>
        </Grid>
      </div>
    );
  }
}

export default DashboardLayout(Dashboard);
