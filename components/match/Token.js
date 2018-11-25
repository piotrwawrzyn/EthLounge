import React from 'react';
import { Image, Label, Grid } from 'semantic-ui-react';
import tokenFromWei from '../../utils/tokenFromWei';

export default props => {
  const { token, isBettingBox } = props;

  const amount = isBettingBox
    ? `${tokenFromWei(token, true, 14)}`
    : `${tokenFromWei(token, true)}`;

  if (isBettingBox || token.balance)
    return (
      <div className="token">
        <div className="token-amount">
          <span>{amount}</span>
        </div>
        <div className="token-logo">
          <img className="undragable" src={`${token.logo}`} />
        </div>
      </div>
      // <Label className="token balancebox-token">
      //   <Grid>
      //     <Grid.Row>
      //       <Grid.Column width="11" verticalAlign="middle" textAlign="right">
      //         <span>{`${tokenFromWei(token, true)}`}</span>
      //       </Grid.Column>
      //       <Grid.Column
      //         width="5"
      //         textAlign="center"
      //         verticalAlign="middle"
      //         className="balancebox-token-img-box">
      //         <Image className="undragable" src={`${token.logo}`} />
      //       </Grid.Column>
      //     </Grid.Row>
      //   </Grid>
      // </Label>
    );

  if (token)
    return (
      <div className="token last-bets-token">
        <div className="token-amount">
          <span>{amount}</span>
        </div>
        <div className="token-logo">
          <img className="undragable" src={`${token.logo}`} />
        </div>
      </div>
    );

  return <Label className="token lastbets-token" />;
};
