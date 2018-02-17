import withRedux from 'next-redux-wrapper';
import axios from 'axios';
import { API } from '../config';
import initialize from '../utils/initialize';
import { initStore } from '../redux';
import Layout from '../components/Layout';

const Whoami = ({user}) => (
  <Layout title="Who Am I">
    {(user && <h3 className="title is-3">You are logged in as <strong className="is-size-2 has-text-primary">{user}</strong>.</h3>) ||
      <h3 className="title is-3 has-text-danger	">You are not authenticated.</h3>}
  </Layout>
);

Whoami.getInitialProps = async (ctx) => {
  initialize(ctx);
  const token = ctx.store.getState().authentication.token;
  if(token) {
    const response = await axios.get(`${API}/user`, {headers: {
      authorization: token
    }});
    const user = response.data.user;
    return {
      user
    };
  }

};


export default withRedux(initStore)(Whoami);
