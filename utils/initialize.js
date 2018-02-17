import Router from 'next/router';
import actions from '../redux/actions';
import { getCookie } from '../utils/cookie';

// checks if the page is being loaded on the server, and if so, get auth token from the cookie:
export default function(ctx) {

  if(ctx.isServer) {
    if(ctx.req.headers.cookie) {
      ctx.store.dispatch(actions.reauthenticate(getCookie('token', ctx.req)));
    }
  } else {
    const token = ctx.store.getState().authentication.token;

    if(token && (ctx.pathname === '/signin' || ctx.pathname === '/signup')) {
      setTimeout(function() {
        Router.push('/');
      }, 0);
    }
  }


}
