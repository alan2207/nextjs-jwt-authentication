import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux';
import Layout from '../components/Layout';

const Whoami = () => (
  <Layout title="Who Am I">
    <h3 className="title is-3">This route is protected, if you can see it, it means that you are authenticated.</h3>
  </Layout>
);


export default withRedux(initStore)(Whoami);
