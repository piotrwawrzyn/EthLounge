import React, { Component } from 'react';
import { Grid, Image, Label } from 'semantic-ui-react';

import { pickTeam } from '../../redux/match/actions';
import store from '../../redux/store';

class Teams extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (event, team, pickedTeam) => {
    if (this.props.gambler.address) {
      if (pickedTeam.slug === team.slug) {
        store.dispatch(pickTeam({}));
        return;
      }
      store.dispatch(pickTeam(team));
    }
  };

  generateTeamLabel(team, pickedTeam) {
    const style = this.props.gambler.address ? { cursor: 'pointer' } : {};
    let classNameModifier =
      pickedTeam.slug == team.slug ? ' team-label-picked' : '';
    let teamCaption =
      pickedTeam.slug == team.slug ? (
        <p className="team-name team-name-picked">{team.name}</p>
      ) : (
        <p className="team-name">{team.name}</p>
      );

    return (
      <div
        onClick={event => {
          this.handleClick(event, team, pickedTeam);
        }}>
        {' '}
        <Label
          size="huge"
          style={style}
          className={`team-label${classNameModifier}`}>
          <Image src={`/static/img/teams/${team.slug}.png`} />
        </Label>
        <div style={style}>{teamCaption}</div>{' '}
      </div>
    );
  }

  generatePercentage(teams, index) {
    const sumOdds = teams[0].odds + teams[1].odds;
    const percentage = Math.round((1 / teams[index].odds) * 100) + '%';

    if (index === 0)
      return (
        <Label as="a" color="black" ribbon>
          <p className="team-percentage">{percentage}</p>
          <p className="team-odds">x {teams[index].odds}</p>
        </Label>
      );

    return (
      <Label as="a" color="black" ribbon="right">
        <p className="team-percentage">{percentage}</p>
        <p className="team-odds">x{teams[index].odds}</p>
      </Label>
    );
  }

  render() {
    let { teams, pickedTeam } = this.props;

    if (teams)
      return (
        <div>
          <Grid className="teams-grid" padded>
            <Grid.Row>
              <Grid.Column />
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={2}>
                {this.generatePercentage(teams, 0)}
              </Grid.Column>

              <Grid.Column width={5} verticalAlign="middle" textAlign="center">
                {this.generateTeamLabel(teams[0], pickedTeam)}
              </Grid.Column>

              <Grid.Column width={2} verticalAlign="middle" textAlign="center">
                <Label color="black">VS</Label>
              </Grid.Column>

              <Grid.Column width={5} verticalAlign="middle" textAlign="center">
                {this.generateTeamLabel(teams[1], pickedTeam)}
              </Grid.Column>

              <Grid.Column width={2}>
                {this.generatePercentage(teams, 1)}
              </Grid.Column>
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
