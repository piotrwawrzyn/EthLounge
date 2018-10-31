import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import Menu from './Menu';
import store from '../../redux/store';
import '../../static/css/layout.css';
// import 'semantic-ui-css/semantic.min.css';
import 'react-rangeslider/lib/index.css';
import axios from 'axios';
import { login } from '../../redux/layout/actions';
import { backend } from '../../config/config';
import CookieCall from '../../utils/CookieCall';

const layout = ChildPage =>
  class extends Component {
    static async getInitialProps(initialProps) {
      const { req } = initialProps;
      let res;

      let api_response;

      try {
        api_response = await CookieCall(req, '/api/current_user');
      } catch (err) {
        console.log(err);
      }

      const user = api_response.data;

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

    componentWillMount() {
      store.dispatch(login(this.props.user));
    }

    render() {
      return (
        <Provider store={store}>
          <div>
            <Head>
              <link
                rel="stylesheet"
                href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
              />
            </Head>
            <Menu user={this.props.user} />
            <Container>
              <ChildPage initial={this.props} />
              <h2>Footer</h2>
            </Container>
          </div>
        </Provider>
      );
    }
  };

export default layout;
