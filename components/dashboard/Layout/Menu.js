import React, { Component } from 'react';
import { Menu, Image, Icon, Button, Header } from 'semantic-ui-react';
import axios from 'axios';
import { Router } from '../../../next-routes';
import { Sleep } from '../../../utils/Sleep';

class DashboardMenu extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleRoute = this.handleRoute.bind(this);

    this.state = { loading: false };
  }

  handleRoute(path) {
    Router.pushRoute(path);
  }

  async handleLogout() {
    this.setState({ loading: true });
    await axios.get('/admin/logout');
    await Sleep(500);

    Router.pushRoute('/');
  }

  render() {
    return (
      <Menu inverted size="large" className="menu-admin">
        <Menu.Item>
          <Image
            onClick={e => Router.pushRoute('/admin/dashboard')}
            src="/static/img/logo.png"
          />
        </Menu.Item>
        <Menu.Item onClick={e => this.handleRoute('/admin/dashboard/teams')}>
          <Icon name="users" />
          Teams
        </Menu.Item>
        <Menu.Item onClick={e => this.handleRoute('/admin/dashboard/tokens')}>
          <Icon name="ethereum" />
          Tokens
        </Menu.Item>
        <Menu.Item
          onClick={e => this.handleRoute('/admin/dashboard/new-match')}>
          <Icon name="plus" />
          New Match
        </Menu.Item>
        <Menu.Item position="right">
          <Button
            loading={this.state.loading}
            className="black-bg font-white"
            style={{ marginRight: '1em' }}
            onClick={e => this.handleLogout()}>
            Log out
          </Button>
        </Menu.Item>
      </Menu>
    );
  }
}

export default DashboardMenu;
