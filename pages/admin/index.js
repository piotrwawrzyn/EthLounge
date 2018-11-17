import React, { Component } from 'react';
import '../../static/css/layout.css';
import Router from 'next/router';
import cookieCall from '../../utils/cookieCall';
import _ from 'lodash';

class AdminLogin extends Component {
  static async getInitialProps(props) {
    const { req, res } = props;

    let api_response = await cookieCall(req, '/api/current_user');

    const user = api_response.data;

    let isAdmin;
    if (!user) isAdmin = false;
    else isAdmin = api_response.data.permissions.includes('admin');

    if (isAdmin) {
      if (res) {
        res.writeHead(302, {
          Location: '/admin/dashboard'
        });
        res.end();
      } else {
        Router.push('/admin/dashboard');
      }
    } else {
      if (res) {
        res.writeHead(302, {
          Location: '/404'
        });
        res.end();
      } else {
        Router.push('/404');
      }
    }

    return {};
  }
  render() {
    const style = { padding: '200px' };

    return <div />;
  }
}

export default AdminLogin;
