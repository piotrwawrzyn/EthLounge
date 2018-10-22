import React, { Component } from 'react';
import DashboardLayout from '../../../components/dashboard/Layout/Layout';
import { Divider, Grid, GridColumn } from 'semantic-ui-react';

class Dashboard extends Component {
  generateWelcomeMsg(admin) {
    const { firstName, lastName } = admin;
    let name;
    if (!lastName) name = firstName;
    else name = `${firstName} ${lastName}`;

    return (
      <h1>
        Hello <span className="font-dark-orange">{name}</span>, what are we up
        to today?
      </h1>
    );
  }

  render() {
    return (
      <div>
        {this.generateWelcomeMsg(this.props.initial.admin)}
        <Divider />
        <Grid columns={2}>
          <GridColumn>hg</GridColumn>
          <GridColumn>hg</GridColumn>
        </Grid>
      </div>
    );
  }
}

export default DashboardLayout(Dashboard);
