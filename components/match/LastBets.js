import React, { Component } from 'react';
import { Grid, Reveal } from 'semantic-ui-react';
import makeBlockie from 'ethereum-blockies-base64';
import Token from './Token';
import { backend } from '../../config/config';

class LastBets extends Component {
  constructor(props) {
    super(props);
  }

  renderTokens(tokens, bet) {
    const markup = tokens.map(token => {
      return (
        <Grid.Column
          key={bet.betMakerID + token.id}
          className="last-bets-token-column"
          width={4}>
          {<Token token={token} />}
        </Grid.Column>
      );
    });

    return markup;
  }

  renderLastBets(bets) {
    const markup = bets.map(bet => {
      let { betMakerID, betMakerUsername, tokensBet, team } = bet;

      return (
        <Grid.Row key={betMakerID} className="last-bets-row">
          <Grid.Column width={3} verticalAlign="middle">
            <Reveal animated="rotate">
              <Reveal.Content visible>
                <img
                  src={makeBlockie(betMakerUsername)}
                  className="user-avatar undragable"
                />
              </Reveal.Content>
              <Reveal.Content hidden>
                <img
                  src={`${backend}/img/${team.logo}`}
                  className="user-avatar undragable img-team-reveal"
                />
              </Reveal.Content>
            </Reveal>
          </Grid.Column>
          <Grid.Column width={13} verticalAlign="middle">
            <Grid>
              <Grid.Row>{this.renderTokens(tokensBet, bet)}</Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      );
    });

    return markup;
  }

  render() {
    const { bets } = this.props;

    return (
      <div>
        <Grid padded>{this.renderLastBets(bets)}</Grid>
      </div>
    );
  }
}

export default LastBets;
