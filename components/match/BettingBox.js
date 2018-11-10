import React, { Component } from 'react';
import { Grid, List, Label, Icon } from 'semantic-ui-react';
import { ICON } from '../../utils/constants';
import _ from 'lodash';

import BettingBoxToken from './BettingBoxToken';
import RangeSlider from './RangeSlider';

class BettingBox extends Component {
  NUMBER_OF_BOXES = 4;

  constructor(props) {
    super(props);
  }

  renderBetInfo(bet, odds) {
    const estimatedBetValue = bet.estimatedBetValue.toFixed(2);
    const estimatedReturn = (bet.estimatedBetValue * odds).toFixed(2);
    let statusIcon, status, statusClassName;

    switch (bet.state) {
      case 'pending': {
        statusIcon = ICON.BET_PENDING;
        break;
      }

      case 'won': {
        statusClassName = 'bet-info-status-won';
        statusIcon = ICON.BET_WON;
        break;
      }

      case 'lost': {
        statusClassName = 'bet-info-status-lost';
        statusIcon = ICON.BET_LOST;
        break;
      }

      case 'draw': {
        statusIcon = ICON.BET_DRAW;
        break;
      }

      case 'canceled': {
        statusIcon = ICON.BET_CANCELED;
        break;
      }
    }
    status = bet.state;

    return (
      <div>
        <List className="bet-info">
          <List.Item>
            <Label className="orange-label-light" horizontal>
              PICKED TEAM
            </Label>
            <span>
              <strong>{bet.team.displayName}</strong>
            </span>
          </List.Item>
          <List.Item>
            <Label className="orange-label-light" horizontal>
              STATUS
            </Label>
            <span className={statusClassName}>
              <strong>{status}</strong> <Icon name={statusIcon} />
            </span>
          </List.Item>
          <List.Item>
            <Label className="orange-label-light" horizontal>
              ESTIMATED BET VALUE
            </Label>
            <span>
              <strong>{estimatedBetValue}$</strong>
            </span>
          </List.Item>
          <List.Item>
            <Label className="orange-label-light" horizontal>
              ESTIMATED RETURN
            </Label>
            <span>
              <strong>{estimatedReturn}$</strong>
            </span>
          </List.Item>
        </List>
      </div>
    );
  }

  renderTokensToBet(tokens) {
    const items = [];

    for (let i = 0; i < this.NUMBER_OF_BOXES; i++) {
      const token = tokens[i] || null;
      items.push(
        <Grid.Row className="betting-box-row" key={i}>
          <Grid.Column>
            <BettingBoxToken token={token} />
          </Grid.Column>
          <Grid.Column verticalAlign="middle">
            <RangeSlider
              prices={this.props.prices}
              token={token}
              toBet={tokens}
            />
          </Grid.Column>
        </Grid.Row>
      );
    }

    return items;
  }

  renderTokensBet(tokens) {
    const items = [];

    for (let i = 0; i < this.NUMBER_OF_BOXES; i++) {
      const token = tokens[i] || null;
      items.push(
        <Grid.Row className="betting-box-row" key={i}>
          <Grid.Column width={7}>
            <BettingBoxToken token={token} />
          </Grid.Column>
        </Grid.Row>
      );
    }

    return items;
  }

  render() {
    const { tokens, bet, teams } = this.props;

    if (!bet)
      return (
        <div className="betting-box">
          <Grid style={{ paddingTop: '1em' }} columns="equal">
            {this.renderTokensToBet(tokens)}
          </Grid>
        </div>
      );

    const odds = _.find(teams, { id: bet.teamID }).odds;

    return (
      <div className="betting-box">
        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column>{this.renderTokensBet(bet.tokensBet)}</Grid.Column>
            <Grid.Column>{this.renderBetInfo(bet, odds)}</Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default BettingBox;
