import Layout from '../components/Layout';

export default () => (
  <Layout title="Who Am I">
    <h3 className="title is-3">This route is protected, if you can see it, it means that you are authenticated.</h3>
  </Layout>
);
