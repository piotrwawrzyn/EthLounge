import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import Menu from './Menu';
import store from '../redux/store';

const layout = (ChildPage) => {
    return (
        class Layout extends React.Component {
            render() {
                return (
                    <Provider store={store}>
                        <Container >
                            <Head>
                                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css" />
                                <link rel="stylesheet" href="https://unpkg.com/react-rangeslider/umd/rangeslider.min.css" />
                                <link rel="stylesheet" href="/static/css/style.css" />
                            </Head>
                            <Menu />
                            <ChildPage />
                            <h2>Footer</h2>
                        </Container>
                    </Provider>);
            }
        }
        
    );
}

export default layout;