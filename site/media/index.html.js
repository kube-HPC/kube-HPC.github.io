
var React = require('react');
var Site = require('../_core/Site');
var Box = require('../_core/Box');

export default ({ page, site }) =>
  <Site section="media" title="Media" page={page}>
    <section className="point1" id="predictable-results">
      <div className="documentationContent">
        <div className="inner-content">
          <h1>Interactive Tutorial</h1>
          <div>
            <h2>Meet Jane</h2>
          </div>
          <div>
            <iframe width="100%" height="600" src="https://www.youtube.com/embed/W99CFTYtpMg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </section>
  </Site>
