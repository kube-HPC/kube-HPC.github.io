var React = require('react');
var HeaderLinks = require('./HeaderLinks');
var Search = require('./Search');
var SiteData = require('./SiteData');

export default ({ page, category, title, section, className, noSearch, children }) =>
  <html>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <title>
        {title ?
          `${title} | ${category || 'Hkube'}` :
          `Hkube | ${SiteData.description}`}
      </title>
      <meta name="viewport" content="width=640" />
      <meta property="og:title" content="Hkube: HPC over kubernetes." />
      <meta property="og:description" content="Hkube - HPC over kubernetes." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://hkube.io/" />
      <meta property="og:image" content="/img/og_image.png" />
      <meta property="og:image:type" content="image/png" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@hkube" />
      <meta name="twitter:title" content="Hkube: HPC over kubernetes" />
      <meta name="twitter:description" content="Hkube HPC over kubernetes" />
      <meta name="twitter:image" content="/img/twitter_image.png" />
      <link rel="shortcut icon" href="/img/favicon.png" />
      <link rel="home" type="application/rss+xml" href="/blog/rss.xml" title="Hkube Team Blog" />
      <link rel="stylesheet" href="/style.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik:300|Roboto:300" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,400i,600" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/docsearch.js/1/docsearch.min.css" />
    </head>
    <body className={className}>

      <header>
        <section>
          <a className="nav-home" href="/">
            <img className="nav-logo" src="/img/logo.png" width="30" height="30" />
            Hkube
          </a>
          <HeaderLinks section={section} />
          {noSearch || <Search />}
        </section>
      </header>

      {children}

      <footer>
        <section className="sitemap">
          <a href="/" className="nav-home" />
          <div>
            <h5><a href="/learn/">Learn</a></h5>
            <a href="/learn/">Introduction</a>
            <a href="/learn/pipeline/">Pipeline</a>
            <a href="/learn/nodes/">Nodes</a>
            <a href="/learn/input/">Input</a>
            <a href="/learn/execution/">Execution</a>
            <a href="/learn/webhooks/">Webhooks</a>
          </div>
        </section>
        <section className="copyright">
          Copyright &copy;
          <span><script>document.write(new Date().getFullYear())</script> </span>
          <noscript>2018</noscript>
          Hkube. MIT
        </section>
      </footer>

      <script type="text/javascript" src="https://cdn.jsdelivr.net/docsearch.js/1/docsearch.min.js"></script>
      <script dangerouslySetInnerHTML={{
        __html: `
        docsearch({
          apiKey: '1f200a3c89d24e8bae4ab2934c78f67c',
          indexName: 'hkube',
          inputSelector: '#algolia-search-input'
        });
      `}} />
      <script dangerouslySetInnerHTML={{
        __html: `

      `}} />
    </body>
  </html>
