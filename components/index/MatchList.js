import React, { Component } from 'react';
import MatchListItem from '../shared/MatchListItem';

class MatchList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { matches } = this.props;

    const matchList = matches.map(match => {
      return <MatchListItem key={match._id} match={match} />;
    });

    return matchList;
  }
}

export default MatchList;
