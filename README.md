
# Next.js JWT Authentication


A proof of concept app for demonstrating authentication of Next.js app with JWT. 

The app is made under the assumption that the rendering server and the API server are decoupled.

It uses [this](https://github.com/alan2207/express-server-jwt) API for authentication.

![Demo](demo.gif?raw=true "Demo")

## Idea:

Server side rendering apps are awesome. They make a sweet spot between monolithic and single page applications. But they also add complexity to their creation. Keeping state on the server and the client in sync, routing on the client and the server, loading data before server rendering, etc. are some of the things that make our apps more complex. That is why frameworks such as Next.js exist, to solve most of those problems. However, things such as authentication are left to us. Since JWT's are widely used, I tried to implement authentication based on that. But we can't store JWT in localStorage as we would do with SPA.

The idea is to receive token from the server on the client, store it in cookies, and then whenever a page renders on the server, we would be able to access the token from the cookie.

## How it works:
#### The client:
The user sends an auth request from the client. In the response, JWT is received, and stored in browser cookies and redux store. Then the user has access to the token from the client, and can use it to access protected routes.

#### What about the server?:
When the user makes a page request, cookies are also sent along, so the server can read them. To read it, the user is using the `getInitialProps` lifecycle method, provided by Next.js. It gets an argument - the context that contains some properties. You can read more about it [here](https://github.com/zeit/next.js/#fetching-data-and-component-lifecycle). On `req` property, we can access `headers` property which contains the cookie with the token. An action creator is dispatched to update redux store, and the app now has access to the token again.



## Usage:

### Installation:

Make sure you have Node and NPM installed.

Also make sure you have the [API server](https://github.com/alan2207/express-server-jwt) running.

```bash
git clone https://github.com/alan2207/nextjs-jwt-authentication
cd nextjs-jwt-authentication
npm install
```

### Starting the app:
```bash
# Run in dev mode:
npm run dev

# Run in production:
npm run build
npm start
```
