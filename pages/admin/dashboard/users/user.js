import React, { Component } from 'react';
import Layout from '../../../../components/dashboard/Layout/Layout';
import cookieCall from '../../../../utils/cookieCall';
import redirect from '../../../../utils/redirect';
import { MISCELLANEOUS } from '../../../../utils/constants';
import { Grid } from 'semantic-ui-react';
import makeBlockie from 'ethereum-blockies-base64';
import '../../../../static/css/dashboard/users.css';
import UserDetails from '../../../../components/dashboard/users/UserDetails';
import UserBalances from '../../../../components/dashboard/users/UserBalances';
import UserBetHistory from '../../../../components/dashboard/users/UserBetHistory';
import UserPendingBets from '../../../../components/dashboard/users/UserPendingBets';

class User extends Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps(props) {
    const { req, res } = props;
    const userID = props.query.id;

    const api_response = await cookieCall(req, `/api/user_info?id=${userID}`);

    const data = api_response.data;

    if (!data) {
      redirect(res, MISCELLANEOUS.ERROR_PAGE_URL);
    }

    return { ...data };
  }

  render() {
    const user = this.props.initial.userInDb;

    return (
      <div>
        <Grid className="user-header-grid">
          <Grid.Row>
            <Grid.Column width={3} textAlign="center" verticalAlign="middle">
              <img
                className="user-header-grid-avatar"
                src={makeBlockie(user.username)}
              />
            </Grid.Column>
            <Grid.Column>
              <Grid>
                <Grid.Row>
                  <Grid.Column className="user-header-grid-username">
                    {user.username}
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column className="user-header-grid-email">
                    {user.email}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid>
          <Grid.Column width={10}>
            <UserBalances balances={user.balances} />
            <UserPendingBets bets={user.bets} />
            <UserBetHistory bets={user.bets} />
          </Grid.Column>
          <Grid.Column width={6} style={{ paddingRight: '0px' }}>
            <UserDetails user={user} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Layout(User);
