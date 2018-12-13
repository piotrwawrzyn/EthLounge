import React, { Component } from 'react';
import dateFormatter from '../../../utils/dateFormatter';
import { Icon } from 'semantic-ui-react';
import Big from 'big.js';
import tokenFromWei from '../../../utils/tokenFromWei';
import { ICON } from '../../../utils/constants';
import getBalancesWorth from '../../../utils/getBalancesWorth';

class UserDetails extends Component {
  renderWinRatio(bets) {
    let won = 0,
      lost = 0;

    for (let i = 0; i < bets.length; i++) {
      if (bets[i].state === 'won') won++;
      if (bets[i].state === 'lost') lost++;
    }

    let percent;
    if (lost === 0 && won === 0) {
      percent = '-';
      return '-';
    } else if (lost === 0) {
      percent = 100;
    } else {
      percent = ((won / (lost + won)) * 100).toFixed(1);
    }

    return (
      <span>
        {percent}% (<span className="font-won">{won}</span> /{' '}
        <span className="font-lost">{lost}</span>)
      </span>
    );
  }
  renderItem(key, value) {
    return (
      <p className="user-details-item">
        <span className="user-details-item-key">{key}:</span>
        <span className="user-details-item-value">{value}</span>
      </p>
    );
  }

  render() {
    const { user } = this.props;

    const totalDollarVolume = user.bets
      .reduce((prev, curr) => {
        return (prev += curr.estimatedBetValue);
      }, 0)
      .toFixed(2);

    const signupDate = dateFormatter(user.signupDate).formatedDate;

    return (
      <div className="user-details">
        {this.renderItem('User since', signupDate)}
        {this.renderItem(
          'Verified',
          user.verified ? (
            <Icon color="green" name={ICON.USER_VERIFIED} />
          ) : (
            <Icon color="red" name="remove" name={ICON.USER_UNVERIFIED} />
          )
        )}

        {this.renderItem('Bets total', user.bets.length)}
        {this.renderItem(
          'Bets pending',
          user.bets.filter(bet => bet.state === 'pending').length
        )}
        {this.renderItem('Win ratio', this.renderWinRatio(user.bets))}
        {this.renderItem(
          'Balances worth',
          getBalancesWorth(user.balances) + '$'
        )}
        {this.renderItem('Total betting volume', totalDollarVolume + '$')}
      </div>
    );
  }
}

export default UserDetails;
