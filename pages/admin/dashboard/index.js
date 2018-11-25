import React, { Component } from 'react';
import DashboardLayout from '../../../components/dashboard/Layout/Layout';
import { Divider, Grid, GridColumn } from 'semantic-ui-react';
import ApiSetup from '../../../components/dashboard/index/ApiSetup';
import cookieCall from '../../../utils/cookieCall';
import '../../../static/css/dashboard/index.css';

class Dashboard extends Component {
  static async getInitialProps(props) {
    const { req } = props;

    const api_response = await cookieCall(req, `/api/admin/index_info`);

    const data = api_response.data;

    const indexProps = { ...data };

    return { indexProps };
  }

  generateWelcomeMsg(username) {
    return (
      <h1>
        Hello <span className="font-dark-orange">{username}</span>, what are we
        up to today?
      </h1>
    );
  }

  render() {
    const { pandaAPI } = this.props.initial.indexProps;

    const { user } = this.props.initial;
    return (
      <div>
        {this.generateWelcomeMsg(user.username)}
        <Divider />
        <Grid>
          <GridColumn width={10} />
          <GridColumn width={6}>
            <h3>Pandascore API setup</h3>
            <ApiSetup pandaAPI={pandaAPI} />
          </GridColumn>
        </Grid>
      </div>
    );
  }
}

export default DashboardLayout(Dashboard);
