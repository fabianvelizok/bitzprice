import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => (
  <main>
    <Head>
      <title>Bitzprice</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/litera/bootstrap.min.css" />
    </Head>
    <Navbar />
    {props.children}
  </main>
);

export default Layout;
