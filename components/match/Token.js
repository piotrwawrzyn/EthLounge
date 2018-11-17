import React from 'react';
import { Image, Label } from 'semantic-ui-react';
import tokenFromWei from '../../utils/tokenFromWei';

export default props => {
  const { token, isBettingBox } = props;

  if (isBettingBox || token.balance)
    return (
      <Label className="token balancebox-token">
        <span>{`${tokenFromWei(token, true)}`}</span>
        <Image
          className="undragable"
          spaced="left"
          src={`/img/${token.logo}`}
        />
      </Label>
    );

  if (token)
    return (
      <Label className="token lastbets-token">
        <span className="lastbets-token-span">{`${tokenFromWei(
          token,
          true
        )}`}</span>
        <Image
          className="undragable"
          spaced="left"
          src={`/img/${token.logo}`}
        />
      </Label>
    );

  return <Label className="token lastbets-token" />;
};
