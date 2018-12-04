import React, { Component } from 'react';
import { Grid, Image, Label, Rail, Segment } from 'semantic-ui-react';
import { pickTeam } from '../../redux/match/actions';
import store from '../../redux/store';

class Teams extends Component {
  constructor(props) {
    super(props);
    this.betsClosed = this.props.match.betsClosed;
  }

  handleClick = (user, team, pickedTeam) => {
    if (this.betsClosed) return;

    if (user) {
      if (user.bet) return;
      if (pickedTeam.id === team.id) {
        store.dispatch(pickTeam({}));
        return;
      }
      store.dispatch(pickTeam(team));
    }
  };

  renderTeamLabel(user, team, pickedTeam, winnerID, position) {
    const style =
      user && !user.bet && !this.betsClosed ? { cursor: 'pointer' } : {};
    let nameClassNameModifier = '';
    let labelClassNameModifier = '';

    if (user.bet) {
      if (user.bet.teamID == team.id) {
        labelClassNameModifier = ' team-label-picked';
        nameClassNameModifier = ' team-name-picked';
      }
    } else {
      if (pickedTeam.id == team.id) {
        labelClassNameModifier = ' team-label-picked';
        nameClassNameModifier = ' team-name-picked';
      }
    }

    return (
      <div
        onClick={() => {
          this.handleClick(user, team, pickedTeam);
        }}>
        <div
          style={style}
          className={`team-label team-label${labelClassNameModifier}`}>
          {winnerID === team.id ? (
            <img
              className={`match-team-winner match-team-winner-${position}`}
              src="/static/img/winner-tick-gray.png"
            />
          ) : (
            ''
          )}
          <Image className="team-label-logo undragable" src={`${team.logo}`} />
        </div>

        <div style={style}>
          <p className={`team-name${nameClassNameModifier}`}>
            {team.displayName}
          </p>
        </div>
      </div>
    );
  }

  renderOdds(match, index) {
    const percentageAndOdds = (
      <div>
        <p className="team-percentage">{match.teams[index].percentages}%</p>
        <p className="team-odds">x {match.teams[index].odds.toFixed(2)}</p>
      </div>
    );

    if (index === 0)
      return (
        <Label className="odds-label" color="black" ribbon>
          {percentageAndOdds}
        </Label>
      );

    return (
      <Label className="odds-label" color="black" ribbon="right">
        {percentageAndOdds}
      </Label>
    );
  }

  render() {
    let { match, pickedTeam, user } = this.props;

    if (match)
      return (
        <div>
          <Grid className="teams-grid" padded>
            <Grid.Row>
              <Grid.Column />
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={2}>{this.renderOdds(match, 0)}</Grid.Column>

              <Grid.Column width={5} verticalAlign="middle" textAlign="center">
                {this.renderTeamLabel(
                  user,
                  match.teams[0],
                  pickedTeam,
                  match.winnerID,
                  'left'
                )}
              </Grid.Column>

              <Grid.Column width={2} verticalAlign="middle" textAlign="center">
                <Label color="black">VS</Label>
              </Grid.Column>

              <Grid.Column width={5} verticalAlign="middle" textAlign="center">
                {this.renderTeamLabel(
                  user,
                  match.teams[1],
                  pickedTeam,
                  match.winnerID,
                  'right'
                )}
              </Grid.Column>

              <Grid.Column width={2}>{this.renderOdds(match, 1)}</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column />
            </Grid.Row>
          </Grid>
        </div>
      );

    return '';
  }
}

export default Teams;
