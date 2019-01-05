import React, { Component } from 'react';
import { Grid, Label, Rail, Icon } from 'semantic-ui-react';
import { Link } from '../../next-routes';
import dateFormatter from '../../utils/dateFormatter';

class MatchListItem extends Component {
  constructor(props) {
    super(props);
  }

  renderTeam(team, winnerID, index) {
    const { displayName, id, percentages, logo } = team;

    const align = index === 0 ? 'right' : 'left';

    const nameAndPercentagesColumn = (
      <Grid.Column textAlign={align} width={10} style={{ padding: '5px' }}>
        <p className="match-list-item-grid-main-name">{displayName}</p>
        <p className="match-list-item-grid-main-percentage">{percentages}%</p>
      </Grid.Column>
    );

    const pickedTeamClassNameModifier =
      this.props.picked === id ? ' match-list-item-team-logo-picked' : '';

    const logoColumn = (
      <Grid.Column textAlign="center" width={6}>
        <div className={`match-list-item-team-logo`}>
          <img
            className={`match-list-item-grid-main-logo${pickedTeamClassNameModifier} undragable`}
            src={`${logo}`}
            alt={displayName}
          />
          {id === winnerID ? (
            <img
              src="/static/img/winner-tick-orange.png"
              className={`match-list-item-team-winner match-list-item-team-winner-${align}`}
            />
          ) : (
            ''
          )}
        </div>
      </Grid.Column>
    );

    if (index === 0)
      return (
        <Grid verticalAlign="middle">
          <Grid.Row style={{ paddingRight: '0.6em' }}>
            {nameAndPercentagesColumn}
            {logoColumn}
          </Grid.Row>
        </Grid>
      );

    return (
      <Grid verticalAlign="middle">
        <Grid.Row style={{ paddingLeft: '0.6em' }}>
          {logoColumn}
          {nameAndPercentagesColumn}
        </Grid.Row>
      </Grid>
    );
  }

  render() {
    const {
      _id,
      teams,
      league,
      startTime,
      numberOfGames,
      serie,
      state,
      winnerID
    } = this.props.match;
    const date = dateFormatter(startTime);

    const isPastMatch = state === 'finalized';
    const classNameModifier = isPastMatch ? 'past-match' : '';

    const liveLabel =
      !date.isFuture && state !== 'finalized' ? (
        <Rail position="left" internal>
          <Label className="live-label" attached="bottom left" circular>
            LIVE
          </Label>
        </Rail>
      ) : (
        ''
      );

    return (
      <Link route="match" params={{ id: _id }}>
        <a>
          <div
            className={`match-list-item unselectable-text ${classNameModifier}`}>
            <Grid className="match-list-item-grid-main">
              <Grid.Row
                className="match-list-item-grid-main-row-1"
                style={{ padding: 0 }}
                verticalAlign="middle"
                textAlign="center">
                <Grid.Column
                  width={6}
                  style={{ paddingTop: '1em', paddingBottom: '1em' }}>
                  {liveLabel}
                  {this.renderTeam(teams[0], winnerID, 0)}
                </Grid.Column>
                <Grid.Column
                  width={1}
                  style={{ padding: 0 }}
                  textAlign="center">
                  <span className="match-list-item-grid-main-vs">VS</span>
                  <span className="match-list-item-grid-main-bestof">
                    BO{numberOfGames}
                  </span>
                </Grid.Column>
                <Grid.Column width={6}>
                  {this.renderTeam(teams[1], winnerID, 1)}
                </Grid.Column>

                <Grid.Column
                  className="match-list-item-grid-main-tournament"
                  textAlign="center"
                  verticalAlign="middle"
                  width={3}>
                  <img
                    src={`${league.logo}`}
                    className="undragable"
                    alt={league.displayName}
                  />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns="2" className="match-list-item-grid-main-row-2">
                <Grid.Column textAlign="left">{date.aprox}</Grid.Column>
                <Grid.Column textAlign="right">{`${
                  league.displayName
                } ${serie}`}</Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </a>
      </Link>
    );
  }
}

export default MatchListItem;
