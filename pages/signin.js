import Layout from '../components/Layout';

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('submitting');
};

export default () => (
  <Layout title="Sign In">
    <h3 className="title is-3">Sign In</h3>
    <form onSubmit={handleSubmit} className="container" style={{ width: '540px' }}>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="email" placeholder="Email" />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope" />
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check" />
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input className="input" type="password" placeholder="Password" />
          <span className="icon is-small is-left">
            <i className="fas fa-lock" />
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-text-centered">
          <button type="submit" className="button is-success">
            Sign In
          </button>
        </p>
      </div>
    </form>
  </Layout>
);
