import React, { Component } from 'react';
import { Grid, Label, Rail } from 'semantic-ui-react';
import { Link } from '../../next-routes';
import dateFormatter from '../../utils/dateFormatter';

class MatchListItem extends Component {
  constructor(props) {
    super(props);
  }

  renderTeam(team, index) {
    const { displayName, percentages, logo } = team;

    const align = index === 0 ? 'right' : 'left';

    const nameAndPercentagesColumn = (
      <Grid.Column textAlign={align} width={10} style={{ padding: '5px' }}>
        <p className="match-list-item-grid-main-name">{displayName}</p>
        <p className="match-list-item-grid-main-percentage">{percentages}%</p>
      </Grid.Column>
    );

    const logoColumn = (
      <Grid.Column textAlign={align} width={6}>
        <img
          className="match-list-item-grid-main-logo undragable"
          src={`${logo}`}
          alt={displayName}
        />
      </Grid.Column>
    );

    if (index === 0)
      return (
        <Grid verticalAlign="middle">
          <Grid.Row>
            {nameAndPercentagesColumn}
            {logoColumn}
          </Grid.Row>
        </Grid>
      );

    return (
      <Grid verticalAlign="middle">
        <Grid.Row>
          {logoColumn}
          {nameAndPercentagesColumn}
        </Grid.Row>
      </Grid>
    );
  }

  render() {
    const { _id, teams, league, startTime, serie, state } = this.props.match;
    const date = dateFormatter(startTime);
    const liveLabel =
      !date.isFuture && state !== 'finalized' ? (
        <Rail>
          <Label className="live-label" attached="bottom left" circular>
            LIVE
          </Label>
        </Rail>
      ) : (
        ''
      );

    return (
      <Link route="match" params={{ id: _id }}>
        <div className="match-list-item">
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
                {this.renderTeam(teams[0], 0)}
              </Grid.Column>
              <Grid.Column
                className="match-list-item-grid-main-vs"
                width={1}
                style={{ padding: 0 }}>
                VS
              </Grid.Column>
              <Grid.Column width={6}>
                {this.renderTeam(teams[1], 1)}
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
      </Link>
    );
  }
}

export default MatchListItem;
