import React from 'react';
import { Image, Label, Grid } from 'semantic-ui-react';
import tokenFromWei from '../../utils/tokenFromWei';

export default props => {
  const { token, isBettingBox } = props;

  if (isBettingBox || token.balance)
    return (
      <Label className="token balancebox-token">
        <Grid>
          <Grid.Row>
            <Grid.Column width="11" verticalAlign="middle" textAlign="right">
              <span>{`${tokenFromWei(token, true)}`}</span>
            </Grid.Column>
            <Grid.Column
              width="5"
              textAlign="center"
              verticalAlign="middle"
              className="balancebox-token-img-box">
              <Image className="undragable" src={`${token.logo}`} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Label>
    );

  if (token)
    return (
      <Label className="token lastbets-token">
        <Grid>
          <Grid.Row>
            <Grid.Column width="11" verticalAlign="middle" textAlign="right">
              <span>{`${tokenFromWei(token, true)}`}</span>
            </Grid.Column>
            <Grid.Column
              width="5"
              textAlign="center"
              verticalAlign="middle"
              className="balancebox-token-img-box">
              <Image className="undragable" src={`${token.logo}`} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Label>
    );

  return <Label className="token lastbets-token" />;
};
