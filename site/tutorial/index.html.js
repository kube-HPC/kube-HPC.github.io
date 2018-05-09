
var React = require('react');
var Site = require('../_core/Site');
var Box = require('../_core/Box');

export default ({ page, site }) =>
  <Site section="code" title="Code" page={page}>
    <section className="point1" id="predictable-results">
      <div className="documentationContent">
        <div className="inner-content">
          <h1>Interactive Tutorial</h1>
          <div>
            <h2 style={{ textAlign: "center" }}>What kind of use?</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%', margin: '0 auto' }}>
              <div>
                <Box url="/tutorial/stand-alone.html" title="&larr; Go To" text="Stand Alone"></Box>
              </div>
              <div>
                <Box url="/tutorial/cluster.html" title="Go To &rarr;" text="Kubernetes Cluster"></Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Site>
