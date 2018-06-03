import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

const Index = (props) => (
  <Layout>
    <h1>Welcome to Bitzprice!</h1>
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
