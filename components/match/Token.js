import React from 'react';
import { Image, Label } from 'semantic-ui-react';

import { DictionarrySymbol } from '../../utils/SupportedTokens';
import TokenFromWei from '../../utils/TokenFromWei';

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
