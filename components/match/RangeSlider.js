import Big from 'big.js';
import React, { Component } from 'react';
import Slider from 'react-rangeslider';

import { changeTokenAmount } from '../../redux/match/actions';
import store from '../../redux/store';
import EstimateBetValue from '../../utils/EstimateBetValue';

class RangeSlider extends Component {
  range_max = 2000;

  constructor(props) {
    super(props);
    this.handleRange = this.handleRange.bind(this);

    this.state = { value: this.range_max };
  }

  handleRange = val => {
    const { token } = this.props;
    this.setState({ value: val });
    const change = val / this.range_max;
    let newAmount = `${Big(token.initialAmount)
      .mul(change)
      .toFixed(0)}`;
    newAmount = newAmount < 1 ? 1 : newAmount;
    token.amount = newAmount;
    store.dispatch(changeTokenAmount(token));
  };

  render() {
    return (
      <Slider
        min={1}
        max={this.range_max}
        step={10}
        tooltip={false}
        value={this.state.value}
        onChange={val => this.handleRange(val)}
        onChangeComplete={event => {
          EstimateBetValue(this.props.toBet, this.props.prices);
        }}
      />
    );
  }
}

export default RangeSlider;
