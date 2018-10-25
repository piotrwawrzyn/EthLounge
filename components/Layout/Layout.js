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

const layout = ChildPage =>
  class extends Component {
    static async getInitialProps(initialProps) {
      const { req } = initialProps;
      let res;

      try {
        res = req.headers.cookie
          ? await axios.get(`${backend}/api/current_gambler`, {
              headers: req ? { cookie: req.headers.cookie } : undefined
            })
          : {};
      } catch (err) {
        console.log(err);
      }

      const gambler = res.data;

      let props = { gambler };

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
      store.dispatch({ type: 'LOG_IN', gambler: this.props.gambler });
    }

    render() {
      return (
        <Provider store={store}>
          <Container>
            <Head>
              <link
                rel="stylesheet"
                href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
              />
            </Head>
            <Menu gambler={this.props.gambler} />
            <ChildPage initial={this.props} />
            <h2>Footer</h2>
          </Container>
        </Provider>
      );
    }
  };

export default layout;
