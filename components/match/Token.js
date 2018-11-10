import React from 'react';
import { Image, Label } from 'semantic-ui-react';
import TokenFromWei from '../../utils/TokenFromWei';
import { backend } from '../../config/config';

export default props => {
  const { token, isBettingBox } = props;

  if (isBettingBox || token.balance)
    return (
      <Label className="token balancebox-token">
        <span>{`${TokenFromWei(token, true)}`}</span>
        <Image
          className="undragable"
          spaced="left"
          src={`${backend}/img/${token.logo}`}
        />
      </Label>
    );

  if (token)
    return (
      <Label className="token lastbets-token">
        <span className="lastbets-token-span">{`${TokenFromWei(
          token,
          true
        )}`}</span>
        <Image
          className="undragable"
          spaced="left"
          src={`${backend}/img/${token.logo}`}
        />
      </Label>
    );

  return <Label className="token lastbets-token" />;
};
