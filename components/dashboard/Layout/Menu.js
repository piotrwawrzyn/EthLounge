import React, { Component } from 'react';
import { Menu, Image, Icon, Button, Header } from 'semantic-ui-react';
import axios from 'axios';
import { Router } from '../../../next-routes';

import MenuUser from '../../Layout/MenuUser'; 

class DashboardTopMenu extends Component {
  constructor(props) {
    super(props);
    this.handleRoute = this.handleRoute.bind(this);

    this.state = { loading: false };
  }

  handleRoute(path) {
    Router.pushRoute(path);
  }

  render() {
    return (
      <Menu inverted size="large" className="top-menu" icon="labeled">
        <Menu.Item className="item-logo">
          <Image
            className="logo"
            onClick={e => Router.pushRoute('/admin/dashboard')}
            src="/static/img/logo/logo.png"
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
          <MenuUser user={this.props.user} />
        </Menu.Item>
      </Menu>
    );
  }
}

export default DashboardTopMenu;
