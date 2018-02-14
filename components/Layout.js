import Link from 'next/link';
import Head from 'next/head';

export default ({ children, title }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css" />
    </Head>
    <div className="tabs is-centered">
      <ul>
        <Link href="/"><a>Home</a></Link>
        <Link href="/signin"><a>Sign In</a></Link>
        <Link href="/signup"><a>Sign Up</a></Link>
        <Link href="/whoami"><a>Who Am I</a></Link>
      </ul>
    </div>

    <div className="has-text-centered">
      { children }
    </div>
  </div>
);
