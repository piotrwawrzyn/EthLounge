import React, { Component } from 'react';
import { Grid, Image, Label, Rail, Segment } from 'semantic-ui-react';
import { pickTeam } from '../../redux/match/actions';
import store from '../../redux/store';

class Teams extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (user, team, pickedTeam) => {
    if (user) {
      if (user.bet) return;
      if (pickedTeam.id === team.id) {
        store.dispatch(pickTeam({}));
        return;
      }
      store.dispatch(pickTeam(team));
    }
  };

  renderTeamLabel(user, team, pickedTeam) {
    const style = user && !user.bet ? { cursor: 'pointer' } : {};
    let nameClassNameModifier = '';
    let labelClassNameModifier = '';

    if (user.bet) {
      if (user.bet.teamID == team.id) {
        labelClassNameModifier = ' team-label-picked';
        nameClassNameModifier = ' team-name-picked';
      }
    } else {
      if (pickedTeam.id == team.id)
        labelClassNameModifier = ' team-label-picked';
      nameClassNameModifier = ' team-name-picked';
    }

    return (
      <div
        onClick={event => {
          this.handleClick(user, team, pickedTeam);
        }}>
        <Label
          size="huge"
          style={style}
          className={`team-label${labelClassNameModifier}`}>
          <Image className="undragable" src={`/img/${team.logo}`} />
        </Label>
        <div style={style}>
          <p className={`team-name${nameClassNameModifier}`}>
            {team.displayName}
          </p>
        </div>{' '}
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
        <Label color="black" ribbon>
          {percentageAndOdds}
        </Label>
      );

    return (
      <Label color="black" ribbon="right">
        {percentageAndOdds}
      </Label>
    );
  }

  render() {
    let { match, pickedTeam, user } = this.props;
    const { bet } = user;

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
                {this.renderTeamLabel(user, match.teams[0], pickedTeam)}
              </Grid.Column>

              <Grid.Column width={2} verticalAlign="middle" textAlign="center">
                <Label color="black">VS</Label>
              </Grid.Column>

              <Grid.Column width={5} verticalAlign="middle" textAlign="center">
                {this.renderTeamLabel(user, match.teams[1], pickedTeam)}
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
