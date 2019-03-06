import { register, unregister } from 'next-offline/runtime';
import App, { Container } from 'next/app';
import React from 'react';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount() {
    register();
  }
  componentWillUnmount() {
    unregister();
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
