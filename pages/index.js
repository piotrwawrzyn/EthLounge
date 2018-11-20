import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Layout from '../components/Layout/Layout';
import cookieCall from '../utils/cookieCall';
import MatchList from '../components/index/MatchList';
import '../static/css/index.css';

class EthLounge extends Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps(props) {
    const { req } = props;

    const api_response = await cookieCall(req, `/api/index_info`);

    const data = api_response.data;

    const indexProps = { ...data };

    return { indexProps };
  }

  render() {
    const { matches } = this.props.initial.indexProps;

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column computer={5} mobile={16} tablet={16}>
            left
          </Grid.Column>
          <Grid.Column computer={11} mobile={16} tablet={16}>
            <MatchList matches={matches} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Layout(EthLounge);
