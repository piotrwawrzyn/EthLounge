import React, { Component } from 'react';
import { Grid, Button, Popup } from 'semantic-ui-react';
import dateFormatter from '../../utils/dateFormatter';
import _ from 'lodash';
import { Link } from '../../next-routes';
import MediaQuery from 'react-responsive';

class BetHistoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  renderProfit(bet) {
    if (bet.state === 'canceled') return <span>BET CANCELED</span>;
    if (bet.state === 'draw') return <span>MATCH DRAWN</span>;
    if (bet.state === 'lost')
      return (
        <span className="bet-lost-profit">{`-${bet.estimatedBetValue}$`}</span>
      );
    if (bet.state === 'won') {
      const odds = _.find(bet.match.teams, { id: bet.teamID }).odds;
      return <span className="bet-won-profit">{`+${bet.winningsValue}$`}</span>;
    }
  }

  renderTeam(team, pickedTeamID, winningTeamID, colWidth) {
    console.log(pickedTeamID, winningTeamID);
    return (
      <Grid.Column width={colWidth}>
        <div className="image-box">
          <img
            src={team.logo}
            className={`team-img${
              team.id === pickedTeamID
                ? ' bet-history-item-grid-team-picked'
                : ''
            }`}
          />
          <span
            className={
              team.id === winningTeamID
                ? 'bet-history-item-grid-winning-team-name'
                : 'bet-history-item-grid-team-name'
            }>
            {team.displayName}
          </span>
        </div>
      </Grid.Column>
    );
  }

  renderButton(url) {
    return (
      <Link route={url}>
        <a target="blank">
          <Popup
            basic
            content="Go to match page"
            trigger={<Button inverted circular icon="chevron right" />}
          />
        </a>
      </Link>
    );
  }

  render() {
    const { bet } = this.props;
    const { teams } = bet.match;

    const date = dateFormatter(bet.match.startTime);

    let stateClassNameModifier;
    if (bet.state === 'won') stateClassNameModifier = ' won';
    else if (bet.state === 'lost') stateClassNameModifier = ' lost';
    else stateClassNameModifier = ' default';

    return (
      <div>
        <MediaQuery query="(min-width: 1201px)">
          <div
            className={`bet-history-item${stateClassNameModifier}`}
            style={{ marginBottom: '10px' }}>
            <Grid
              className="bet-history-item-grid"
              padded
              relaxed
              verticalAlign="middle">
              <Grid.Row>
                {this.renderTeam(teams[0], bet.teamID, bet.match.winner._id, 3)}
                <Grid.Column width={1}>vs</Grid.Column>
                {this.renderTeam(teams[1], bet.teamID, bet.match.winner._id, 3)}
                <Grid.Column width={3}>
                  <span>{date.formatedDate}</span>
                </Grid.Column>
                <Grid.Column width={1}>
                  <div className="image-box">
                    <Popup
                      trigger={
                        <img
                          src={bet.match.league.logo}
                          className="league-img"
                        />
                      }
                      basic
                      content={`${bet.match.league.displayName} ${
                        bet.match.serie ? bet.match.serie : ''
                      }`}
                    />
                  </div>
                </Grid.Column>
                <Grid.Column textAlign="center" width={2}>
                  BO{bet.match.numberOfGames}
                </Grid.Column>
                <Grid.Column textAlign="center" width={2}>
                  {this.renderProfit(bet)}
                </Grid.Column>
                <Grid.Column textAlign="center" width={1}>
                  {this.renderButton(`/matches/${bet.match._id}`)}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </MediaQuery>

        <MediaQuery query="(max-width: 1200px)">
          <div
            className={`bet-history-item${stateClassNameModifier}`}
            style={{ marginBottom: '10px' }}>
            <Grid
              className="bet-history-item-grid"
              padded
              relaxed
              verticalAlign="middle">
              <Grid.Row>
                {this.renderTeam(teams[0], bet.teamID, bet.match.winner._id, 4)}
                <Grid.Column width={2}>vs</Grid.Column>
                {this.renderTeam(teams[1], bet.teamID, bet.match.winner._id, 4)}
                <Grid.Column textAlign="center" width={3}>
                  {this.renderProfit(bet)}
                </Grid.Column>
                <Grid.Column textAlign="center" width={3} textAlign="center">
                  {this.renderButton(`/matches/${bet.match._id}`)}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default BetHistoryItem;
