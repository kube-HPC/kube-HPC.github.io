const React = require("react");
const Nav = require("./Nav");
const SiteData = require("./SiteData");

export default ({
  page,
  category,
  title,
  section,
  className,
  noSearch,
  children,
  noHome,
  loadHeroStyles,
}) => (
  <html>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <title>
        {title
          ? `${title} | ${category || "Hkube"}`
          : `Hkube | ${SiteData.description}`}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content="Hkube: HPC over Kubernetes." />
      <meta
        property="og:description"
        content="Hkube - HPC over Kubernetes, cloud native open source framework to run distributed pipeline of algorithms"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://hkube.io/" />
      <meta property="og:image" content="./img/home/og_image.png" />
      <meta property="og:image:type" content="image/png" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@hkube" />
      <meta name="twitter:title" content="Hkube: HPC over Kubernetes" />
      <meta name="twitter:description" content="Hkube HPC over Kubernetes" />
      <meta name="twitter:image" content="./img/home/twitter_image.png" />
      <link rel="shortcut icon" href="./img/home/favicon.png" />
      <link
        rel="home"
        type="application/rss+xml"
        href="./blog/rss.xml"
        title="Hkube Team Blog"
      />
      <link rel="stylesheet" href="./style.css" />
      {loadHeroStyles && <link rel="stylesheet" href="./style.hero.css" />}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Rubik:300|Roboto:300"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,400i,600"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/docsearch.js/1/docsearch.min.css"
      />
    </head>
    <body className={className}>
      <Nav section={section} noSearch={noSearch} noHome={noHome} />
      {children}
      <footer>
        <section className="sitemap">
          <div className="sitemap-group">
            <h5>
              <a href="./learn/">Learn</a>
            </h5>
            <a href="./learn/">Introduction</a>
            <a href="./learn/pipeline/">Pipeline</a>
            <a href="./learn/nodes/">Nodes</a>
            <a href="./learn/input/">Input</a>
            <a href="./learn/execution/">Execution</a>
            <a href="./learn/webhooks/">Webhooks</a>
          </div>
          <div className="sitemap-group">
            <h5>
              <a href="./dashboard/">Dashboard</a>
            </h5>
            <a href="./dashboard/#overview">Overview</a>
            <a href="./dashboard/#tables">Tables</a>
            <a href="./dashboard/#operations">Operations</a>
          </div>
          <div className="sitemap-group">
            <h5>
              <a href="./media/">Media</a>
            </h5>
            <a href="./media/#jane/">Meet Jane</a>
            <a href="./media/#distributed/">Distributed pipeline</a>
            <a href="./media/#hpc/">HPC over Kubernetes</a>
            <a href="./media/#architecture/">Hkube Architecture</a>
          </div>
          <div className="sitemap-group">
            <h5>
              <a href="./learn/algorithms/">Algorithms</a>
            </h5>
            <a href="./learn/algorithms/">Introduction</a>
            <a href="./learn/algorithms/#api/">API</a>
            <a href="./learn/algorithms/#implement/">Implement</a>
            <a href="./learn/algorithms/#build/">Build</a>
            <a href="./learn/algorithms/#publish/">Publish</a>
          </div>
        </section>
        <section className="copyright">
          Copyright &copy;
          <span>
            <script>document.write(new Date().getFullYear())</script>{" "}
          </span>
          <noscript>2018</noscript>
          Hkube. MIT
        </section>
      </footer>

      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/docsearch.js/1/docsearch.min.js"
      />
      <script type="text/javascript" src="./vendor/scroller.js" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
        docsearch({
          apiKey: '4709879ecaf211280c35079f7ebe052a',
          indexName: 'hkube',
          inputSelector: '#algolia-search-input',
          debug: false
        });
      `,
        }}
      />

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-118778729-1"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-118778729-1');
      `,
        }}
      />
    </body>
  </html>
);
