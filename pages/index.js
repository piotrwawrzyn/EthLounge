import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import Axios from 'axios';
import Layout from '../components/Layout/Layout';

class EthLounge extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = { debug: '' };
  }

  async handleClick() {
    try {
      const gambler = await Axios.get(
        'https://ethlounge-api.herokuapp.com/api/current_gambler'
      );
      this.setState({ debug: gambler });
    } catch (err) {
      console.log(err);
      this.setState({ debug: err });
    }
  }

  render() {
    return <div />;
  }
}

export default Layout(EthLounge);
