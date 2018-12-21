import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';
import PendingBets from '../components/myBets/PendingBets';

class MyBets extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PendingBets />
      </div>
    );
  }
}

export default Layout(MyBets);
