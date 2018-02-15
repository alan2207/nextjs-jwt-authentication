import React from 'react';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux';
import actions from '../redux/actions';
import Layout from '../components/Layout';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.authenticate({email: this.state.email, password: this.state.password}, 'signup');
  }

  render() {
    return (
      <Layout title="Sign Up">
        <h3 className="title is-3">Sign Up</h3>
        <form
          onSubmit={this.handleSubmit.bind(this)}
          className="container"
          style={{ width: '540px' }}
        >
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="email"
                placeholder="Email"
                required
                value={this.state.email}
                onChange={(e) => this.setState({email: e.target.value})}
              />
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
              <input
                className="input"
                type="password"
                placeholder="Password"
                required
                value={this.state.password}
                onChange={(e) => this.setState({password: e.target.value})}
              />
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
  }
}

export default withRedux(initStore, null, actions)(Signup);
