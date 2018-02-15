import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux';
import Layout from '../components/Layout';

const Index = () => (
  <Layout title="Home">
    <h2 className="title is-2">Authentication with Next.js and JWT</h2>
    <p>Proof of concept, demonstrating the authentication of Next.js application using JWT.</p>
  </Layout>
);


export default withRedux(initStore)(Index);
