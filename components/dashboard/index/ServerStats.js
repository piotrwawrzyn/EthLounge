import React, { Component } from 'react';
import secondsToWord from '../../../utils/secondsToWord';

class ServerStats extends Component {
  constructor(props) {
    super(props);
  }

  renderItem(key, value) {
    return (
      <p className="server-stats-item">
        <span className="server-stats-item-key">{key}</span>{' '}
        <span className="server-stats-item-value">{value}</span>
      </p>
    );
  }

  render() {
    const { stats } = this.props;

    return (
      <div className="server-stats">
        {this.renderItem('Platform', stats.platform)}
        {this.renderItem(`Number of CPU's`, stats.numberOfCpus)}
        {this.renderItem('Load Average (5 minutes)', stats.loadAvg5.toFixed(2))}
        {this.renderItem('Total memory', stats.totalMemory.toFixed(2) + ' MB')}
        {this.renderItem(
          'Free memory',
          (stats.freeMemoryPercentage * 100).toFixed(1) + '%'
        )}
        {this.renderItem('Uptime', secondsToWord(stats.processUptime))}
      </div>
    );
  }
}

export default ServerStats;
