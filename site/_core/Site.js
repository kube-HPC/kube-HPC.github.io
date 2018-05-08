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
      <meta property="og:description" content="Hkube - HPC over kubernetes, cloud native open source framework to run distributed pipeline of algorithms" />
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
          <div>
            <h5><a href="/learn/">Learn</a></h5>
            <a href="/learn/">Introduction</a>
            <a href="/learn/pipeline/">Pipeline</a>
            <a href="/learn/nodes/">Nodes</a>
            <a href="/learn/input/">Input</a>
            <a href="/learn/execution/">Execution</a>
            <a href="/learn/webhooks/">Webhooks</a>
          </div>
          <div>
            <h5><a href="/algorithms/">Algorithms</a></h5>
            <a href="/algorithms/">Introduction</a>
            <a href="/algorithms/api/">API</a>
            <a href="/algorithms/implement/">Implement</a>
            <a href="/algorithms/build/">Build</a>
            <a href="/algorithms/publish/">Publish</a>
          </div>
          <div>
            <h5><a href="/start/">Start</a></h5>
            <a href="/start/">Introduction</a>
            <a href="/start/pipeline/">API</a>
            <a href="/start/nodes/">Implement</a>
            <a href="/start/input/">Build</a>
            <a href="/start/execution/">Publish</a>
          </div>
          <div>
            <h5><a href="/tutorial/">Tutorial</a></h5>
            <a href="/tutorial/stand-alone.html">Stand Alone</a>
            <a href="/tutorial/cluster.html">Cluster</a>
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
          apiKey: '4709879ecaf211280c35079f7ebe052a', 
          indexName: 'hkube', 
          inputSelector: '#algolia-search-input',
          debug: false
        });
      `}} />

      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-118778729-1"></script>
      <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-118778729-1');
      `}} />
    </body>
  </html>
