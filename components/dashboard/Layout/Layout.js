import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import '../../../static/css/layout.css';
import 'react-rangeslider/lib/index.css';
import axios from 'axios';
import { backend } from '../../../config/config';
import { Router, Link } from '../../../next-routes';
import CookieCall from '../../../utils/CookieCall';
import Menu from './Menu';

const dashboardLayout = ChildPage =>
  class extends Component {
    static async getInitialProps(initialProps) {
      const { req, res } = initialProps;

      let api_response;

      try {
        api_response = await CookieCall(req, '/api/current_user');
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
            <link
              rel="stylesheet"
              href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
            />
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
