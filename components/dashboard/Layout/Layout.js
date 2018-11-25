import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import '../../../static/css/layout.css';
import 'react-rangeslider/lib/index.css';
import axios from 'axios';
import { Router, Link } from '../../../next-routes';
import cookieCall from '../../../utils/cookieCall';
import '../../../semantic/dist/semantic.min.css';
import Menu from './Menu';

const dashboardLayout = ChildPage =>
  class extends Component {
    static async getInitialProps(initialProps) {
      const { req, res } = initialProps;

      let api_response;

      try {
        api_response = await cookieCall(req, '/api/current_user');
      } catch (err) {
        console.log(err);
      }

      const errorURL = '/404';
      const user = api_response.data;

      let isAdmin;
      if (!user) isAdmin = false;
      else isAdmin = api_response.data.permissions.includes('admin');

      if (!isAdmin) {
        if (res) {
          res.writeHead(302, {
            Location: errorURL
          });
          res.end();
        } else {
          Router.pushRoute(errorURL);
        }
      }

      let props = { user };

      const getInitialProps = ChildPage.getInitialProps;

      if (getInitialProps) {
        let childPageProps = await getInitialProps(initialProps);

        props = {
          ...props,
          ...childPageProps
        };
      }

      return props;
    }

    render() {
      return (
        <Container fluid className="main-container">
          <Head>
            <meta name="robots" content="noindex, nofollow " />
            <link
              rel="icon"
              type="image/x-icon"
              href="/static/img/favicon/favicon.png"
            />
            <title>ethlounge | Control Panel</title>
          </Head>
          <Menu user={this.props.user} />
          <Container>
            <ChildPage initial={this.props} />
          </Container>
          <div className="footer" />
        </Container>
      );
    }
  };

export default dashboardLayout;
