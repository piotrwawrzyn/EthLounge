import React, { Component } from 'react';
import { Grid, Icon, Label, List, Header } from 'semantic-ui-react';
import { backend } from '../../config/config';
import DateFormatter from '../../utils/DateFormatter';
import Img from 'react-image';

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
      serie,
      startTime
    } = match;

    if (!serie) serie = '';
    if (!league) league = { displayName: '' };

    const date = DateFormatter(startTime);
    const aproxIcon = date.isFuture ? 'hourglass half' : 'hourglass end';

    if (match)
      return (
        <div style={{ marginTop: '0.5em' }}>
          <Grid>
            <Grid.Row columns="1">
              <Grid.Column textAlign="right">
                <Label className="orange-label-light" size="large">
                  <Icon name="calendar alternate outline" />
                  {date.formatedDate}
                </Label>
                <Label className="orange-label-light" size="large">
                  <Icon name={aproxIcon} />
                  {date.aprox}
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
                        Different coins in pool
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column verticalAlign="middle" textAlign="center">
                <Img
                  className="league-image"
                  src={`${backend}/img/leagues/${league._id}.png`}
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
