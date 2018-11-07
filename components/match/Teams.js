import React, { Component } from 'react';
import { Grid, Image, Label, Rail, Segment } from 'semantic-ui-react';
import { backend } from '../../config/config';
import { pickTeam } from '../../redux/match/actions';
import store from '../../redux/store';
import DateFormatter from '../../utils/DateFormatter';

class Teams extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (event, team, pickedTeam) => {
    if (this.props.user) {
      if (pickedTeam._id === team._id) {
        store.dispatch(pickTeam({}));
        return;
      }
      store.dispatch(pickTeam(team));
    }
  };

  generateTeamLabel(team, pickedTeam) {
    const style = this.props.user ? { cursor: 'pointer' } : {};
    let classNameModifier =
      pickedTeam._id == team._id ? ' team-label-picked' : '';
    let teamCaption =
      pickedTeam._id == team._id ? (
        <p className="team-name team-name-picked">{team.displayName}</p>
      ) : (
        <p className="team-name">{team.displayName}</p>
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
          <Image
            className="undragable"
            src={`${backend}/img/teams/${team._id}.png`}
          />
        </Label>
        <div style={style}>{teamCaption}</div>{' '}
      </div>
    );
  }

  generatePercentage(match, index) {
    const percentageAndOdds = (
      <div>
        <p className="team-percentage">{match.percentages[index]}%</p>
        <p className="team-odds">x {match.odds[index]}</p>
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
    let { teams, pickedTeam, match } = this.props;

    if (teams)
      return (
        <div>
          <Grid className="teams-grid" padded>
            <Grid.Row>
              <Grid.Column />
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={2}>
                {this.generatePercentage(match, 0)}
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
                {this.generatePercentage(match, 1)}
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
