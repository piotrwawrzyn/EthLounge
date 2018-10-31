import Big from 'big.js';
import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import { changeTokenAmount } from '../../redux/match/actions';
import store from '../../redux/store';
import EstimateBetValue from '../../utils/EstimateBetValue';

class RangeSlider extends Component {
  constructor(props) {
    super(props);
    this.handleRange = this.handleRange.bind(this);
    this.maxValue = 2000;
    this.lastValue = this.maxValue;

    this.state = { value: this.maxValue };
  }

  handleRange = (val, token) => {
    console.log('han');
    if (!token) return;
    this.setState({ value: val });
    const change = val / this.maxValue;
    let newAmount = `${Big(token.initialAmount)
      .mul(change)
      .toFixed(0)}`;
    newAmount = newAmount < 1 ? 1 : newAmount;
    token.amount = newAmount;
    store.dispatch(changeTokenAmount(token));
  };

  render() {
    const { token, toBet, prices } = this.props;

    let className;
    if (!token) {
      className = 'range-slider-inactive';
      if (this.lastValue !== this.state.value)
        this.setState({ value: this.maxValue });
      this.lastValue = this.state.value;
    }

    return (
      <Slider
        className={className}
        min={1}
        max={this.maxValue}
        step={10}
        tooltip={false}
        value={this.state.value}
        onChange={val => this.handleRange(val, token)}
        onChangeComplete={() => {
          EstimateBetValue(toBet, prices);
        }}
      />
    );
  }
}

export default RangeSlider;
