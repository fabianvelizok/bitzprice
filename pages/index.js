import Head from 'next/head'
import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Prices from '../components/Prices';

const Index = (props) => (
  <Layout>
    <Head>
      <link rel="manifest" href="/static/manifest.json" />
    </Head>

    <h1>Welcome to Bitzprice!</h1>
    <p>Check current Bitcoin rate</p>
    <Prices bpi={props.bpi} />
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    bpi: data.bpi,
  }
}

export default Index;
