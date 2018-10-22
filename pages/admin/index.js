import React, { Component } from 'react';
import {
  Segment,
  Form,
  Button,
  FormField,
  Container,
  Grid
} from 'semantic-ui-react';
import '../../static/css/layout.css';
import Router from 'next/router';
import Head from 'next/head';
import axios from 'axios';
import CookieCall from '../../utils/CookieCall';
import _ from 'lodash';

class AdminLogin extends Component {
  static async getInitialProps(props) {
    const { req, res } = props;

    let api_response = await CookieCall(req, '/api/current_admin');

    const admin = api_response.data || false;

    if (admin) {
      if (res) {
        res.writeHead(302, {
          Location: '/admin/dashboard'
        });
        res.end();
      } else {
        Router.push('/admin/dashboard');
      }
    }

    return {};
  }
  render() {
    const style = { padding: '200px' };

    return (
      <Grid verticalAlign="middle" centered className="wrapper" style={style}>
        <Head>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
          />
        </Head>
        <Segment className="dark-orange-bg" padded="very">
          <Form action="/admin/login" method="post" className="login-form">
            <FormField>
              <label>Username</label>
              <input name="username" />
            </FormField>
            <FormField>
              <label>Password</label>
              <input type="password" name="password" />
            </FormField>
            <Button className="black-bg font-white" type="submit">
              Login
            </Button>
          </Form>
        </Segment>
      </Grid>
    );
  }
}

export default AdminLogin;
