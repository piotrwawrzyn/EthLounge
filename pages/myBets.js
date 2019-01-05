import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';
import PendingBets from '../components/myBets/PendingBets';
import BetHistory from '../components/shared/BetHistory';
import cookieCall from '../utils/cookieCall';
import '../static/css/my-bets.css';
import redirect from '../utils/redirect';
import { MISCELLANEOUS } from '../utils/constants';

class MyBets extends Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps(props) {
    const { req, res } = props;

    const api_response = await cookieCall(req, '/api/my_bets');
    const data = api_response.data;

    if (data.signedIn === false)
      redirect(res, MISCELLANEOUS.NOT_SIGNED_IN_REDIRECT_URL);

    const myBetsProps = { ...data };

    return { myBetsProps };
  }

  render() {
    const { pendingBets, finalizedBets } = this.props.initial.myBetsProps;
    return (
      <div>
        <PendingBets bets={pendingBets} />
        <BetHistory bets={finalizedBets} />
      </div>
    );
  }
}

export default Layout(MyBets);
