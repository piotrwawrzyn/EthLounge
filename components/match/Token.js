import React from 'react';
import { Image, Label } from 'semantic-ui-react';
import TokenFromWei from '../../utils/TokenFromWei';
import { backend } from '../../config/config';

export default props => {
  const { token } = props;
  return (
    <Label as="a" key={token.address} className="token-label unselectable-text">
      <Image
        className="undragable"
        avatar
        spaced="right"
        src={`${backend}/img/tokens/${token.symbol}.png`}
      />
      {`${TokenFromWei(token, true)} ${token.symbol} `}
    </Label>
  );
};
