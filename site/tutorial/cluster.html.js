
var React = require('react');
var Site = require('../_core/Site');
var Katacoda = require('../_core/Katacoda');

export default ({ page, site }) =>
  <Site section="code" title="Code" page={page}>
    <section className="point1" id="predictable-results">
      <div className="documentationContent">
        <div className="inner-content">
          <h1>Cluster</h1>
          <Katacoda scenario="cluster"></Katacoda>
        </div>
      </div>
    </section>
  </Site>
