import React from 'react';
import { Label } from 'semantic-ui-react';
import tokenFromWei from '../../utils/tokenFromWei';

export default props => {
  const { token, isBettingBox, isWinningsBox } = props;

  const amount = isBettingBox
    ? `${tokenFromWei(token, true, 14)}`
    : `${tokenFromWei(token, true)}`;

  if (isBettingBox || isWinningsBox || token.balance)
    return (
      <div className="token">
        <div className="token-amount">
          <span>{amount}</span>
        </div>
        <div className="token-logo">
          <img className="undragable" src={`${token.logo}`} />
        </div>
      </div>
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
