import React, { Component } from 'react';
import { Grid, Icon, Label, List, Header } from 'semantic-ui-react';
import dateFormatter from '../../utils/dateFormatter';
import { ICON } from '../../utils/constants';

class MatchDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { match } = this.props;
    const {
      teams,
      league,
      numberOfBets,
      highestBet,
      tokensInPool,
      numberOfGames,
      serie,
      startTime,
      state,
      isLive,
      isEnded
    } = match;

    if (!serie) serie = '';
    if (!league) league = { displayName: '' };

    const date = dateFormatter(startTime);

    let aproxIcon;

    if (date.isFuture) {
      aproxIcon = ICON.GAME_SCHEDULED;
    } else {
      if (isLive) {
        aproxIcon = ICON.GAME_STARTED;
      } else {
        aproxIcon = ICON.GAME_FINISHED;
      }
    }

    if (match)
      return (
        <div style={{ marginTop: '0.5em' }}>
          <Grid>
            <Grid.Row columns="1">
              <Grid.Column textAlign="right">
                <Label className="orange-label-light" size="large">
                  BO{numberOfGames}
                </Label>
                <Label className="orange-label-light" size="large">
                  <Icon name={ICON.DATE} />
                  {date.formatedDate}
                </Label>
                <Label className="orange-label-light" size="large">
                  <Icon name={aproxIcon} />
                  {isLive ? 'LIVE' : date.aprox}
                </Label>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns="2">
              <Grid.Column>
                <Header dividing as="h4">
                  Match statistics
                </Header>
                <List className="details-list">
                  <List.Item>
                    <List.Icon name="dollar sign" className="font-dark" />
                    <List.Content>
                      <List.Header>{`${(
                        teams[0].totalDollarsBet + teams[1].totalDollarsBet
                      ).toFixed(2)}$`}</List.Header>
                      <List.Description>Total bet</List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="ticket alternate" className="font-dark" />
                    <List.Content>
                      <List.Header>{numberOfBets}</List.Header>
                      <List.Description>Bets total</List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="chess king" className="font-dark" />
                    <List.Content>
                      <List.Header>{`${highestBet.toFixed(2)}$`}</List.Header>
                      <List.Description>Highest bet</List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="ethereum" className="font-dark" />
                    <List.Content>
                      <List.Header>{tokensInPool.length}</List.Header>
                      <List.Description>
                        Different tokens in pool
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column verticalAlign="middle" textAlign="center">
                <img
                  className="league-image undragable"
                  src={`${league.logo}`}
                />
                <p className="league-caption">{`${
                  league.displayName
                } ${serie}`}</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      );

    return '';
  }
}

export default MatchDetails;
