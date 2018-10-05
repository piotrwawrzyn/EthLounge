import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import Big from 'big.js';
import EstimateBetValue from '../helpers/EstimateBetValue';

class RangeSlider extends Component {

    constructor(props) {
        super(props);            
        this.handleRange = this.handleRange.bind(this);

        this.state = {value: 1000}
    }

    handleRange = (val) => {
        this.setState({value: val})
        const change = val/1000;
        const newAmount = `${Big(this.props.item.initialAmount).mul(change).toFixed(0)}`;
        this.props.item.amount = newAmount;
        this.props.handleRange(this.props.item);
    }

    render() {
        return (
            <Slider min={1} max={1000} step={10} tooltip={false} value={this.state.value} onChange={(val) => this.handleRange(val)}  onChangeComplete={(event) => {EstimateBetValue(this.props.toBet, this.props.prices)}}/>
        );
    }
}

export default RangeSlider;