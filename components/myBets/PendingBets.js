import React, { Component } from 'react';
import { Divider, GridColumn } from 'semantic-ui-react';
import MatchListItem from '../../components/shared/MatchListItem';
import { Grid } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';
import Token from '../shared/Token';

class PendingBets extends Component {
  constructor(props) {
    super(props);
  }

  renderPendingBets(bets) {
    return bets.map(bet => (
      <Grid.Row style={{ paddingTop: 0 }}>
        <MediaQuery query="(min-width: 1001px)">
          <Grid.Column width={10}>
            <MatchListItem
              key={bet.matchID}
              picked={bet.teamID}
              match={bet.match}
            />
          </Grid.Column>
        </MediaQuery>
        <MediaQuery query="(max-width: 1000px)">
          <Grid.Column width={16}>
            <MatchListItem
              key={bet.matchID}
              picked={bet.teamID}
              match={bet.match}
            />
          </Grid.Column>
        </MediaQuery>
        <MediaQuery query="(min-width: 1001px)">
          <Grid.Column width={6} style={{ paddingLeft: 0 }}>
            <div className="my-bets-tokens-bet">
              {bet.tokensBet.map(token => (
                <Token isPendingBets={true} token={token} />
              ))}
            </div>
          </Grid.Column>
        </MediaQuery>
      </Grid.Row>
    ));
  }

  render() {
    const { bets } = this.props;

    return (
      <div>
        <h1>Pending Bets</h1>
        <Divider />
        <div className="my-bets-pending-bets">
          {bets.length > 0 ? (
            <Grid padded>{this.renderPendingBets(bets)}</Grid>
          ) : (
            <p style={{ marginBottom: '2em' }} className="informational-text">
              You have no pending bets.
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default PendingBets;
