import React, { Component } from 'react';
import { Table, Image, Icon, Button } from 'semantic-ui-react';
import _ from 'lodash';

class SearchableTable extends Component {
  constructor(props) {
    super(props);

    this.lastSearchQuery = '';
    this.limitStep = 20;
    this.renderMore = false;
    this.recordsRendered = 0;
    this.state = { limit: this.limitStep };
  }
  renderTeams(items, query, sortBy, ItemComponent) {
    query = query.toLowerCase();

    let firstFilter = items.filter(curr => {
      const name = curr.displayName.toLowerCase();
      return name.startsWith(query);
    });

    firstFilter = firstFilter.reverse();

    let secondFilter = items.filter(curr => {
      const name = curr[sortBy].toLowerCase();
      return !name.startsWith(query) && name.includes(query);
    });

    secondFilter = secondFilter.reverse();

    let filteredItems = [...firstFilter, ...secondFilter];

    let reducedItems;

    if (filteredItems.length > this.state.limit) {
      reducedItems = filteredItems.slice(0, this.state.limit);
      this.renderMore = true;
    } else {
      reducedItems = filteredItems;
      this.recordsRendered = reducedItems.length;
      this.renderMore = false;
    }

    const ListItems = reducedItems.map(curr => {
      const { _id } = curr;
      return <ItemComponent item={curr} key={_id} />;
    });

    return ListItems;
  }

  renderLoadMore(renderMore) {
    if (renderMore) {
      return (
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              <Button
                fluid
                className="orange-button-light"
                onClick={e =>
                  this.setState({ limit: this.state.limit + this.limitStep })
                }>
                Load more
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      );
    }

    return (
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan={this.props.headers.length + 1}>
            All <strong>{this.recordsRendered}</strong> records rendered for the
            given query.
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    );
  }

  renderHeaders(headers) {
    const headersMarkup = headers.map(curr => {
      return <Table.HeaderCell key={curr}>{curr}</Table.HeaderCell>;
    });

    return headersMarkup;
  }

  componentWillUpdate() {
    const { searchQuery, teams } = this.props;

    if (this.lastSearchQuery !== searchQuery)
      this.setState({ limit: this.limitStep });

    this.lastSearchQuery = this.props.searchQuery;
  }

  render() {
    const { searchQuery, items, headers, sortBy, ItemComponent } = this.props;

    return (
      <Table>
        <Table.Header>
          <Table.Row>
            {this.renderHeaders(headers)}
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.renderTeams(items, searchQuery, sortBy, ItemComponent)}
        </Table.Body>
        {this.renderLoadMore(this.renderMore)}
      </Table>
    );
  }
}

export default SearchableTable;
