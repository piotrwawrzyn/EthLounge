import React from 'react';
import { DictionarrySymbol } from '../helpers/SupportedTokens';
import { Label, Image } from 'semantic-ui-react';
import TokenFromWei from '../helpers/TokenFromWei';

export default props => {
  return (
    <Label as="a" key={props.token.address} className="token-label">
      <Image
        avatar
        spaced="right"
        src={`/static/img/tokens/${DictionarrySymbol.get(
          props.token.address
        )}.png`}
      />
      {TokenFromWei(props.token, 'symbol', true)}
    </Label>
  );
};
