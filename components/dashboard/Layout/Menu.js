import React, { Component } from 'react';
import { Menu, Image, Icon } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from '../../../next-routes';

import MenuUser from '../../Layout/MenuUser';

class DashboardTopMenu extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: false };
  }

  render() {
    return (
      <Menu inverted size="large" className="top-menu" icon="labeled">
        <Link route="/admin/dashboard" href="/admin/dashboard">
          <Menu.Item className="item-logo">
            <Image className="logo" src="/static/img/logo/logo.png" />
          </Menu.Item>
        </Link>

        {this.renderMenuItem('/admin/dashboard/new-match', 'plus', 'New Match')}
        {this.renderMenuItem('/admin/dashboard/users', 'users', 'Users')}

        <Menu.Item position="right">
          <MenuUser user={this.props.user} />
        </Menu.Item>
      </Menu>
    );
  }

  renderMenuItem(route, icon, title) {
    return (
      <Link route={route}>
        <Menu.Item>
          <Icon name={icon} />
          {title}
        </Menu.Item>
      </Link>
    );
  }
}

export default DashboardTopMenu;
