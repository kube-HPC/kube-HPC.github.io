var React = require("react");
var Site = require("../_core/Site");
var Box = require("../_core/Box");

export default ({ page, site }) => (
  <Site section="code" title="Code" page={page} className="tutorial-body">
    <section className="point1" id="predictable-results">
      <h1 style={{ textAlign: "center" }}>Interactive Tutorial</h1>
      <div className="tutorial-buttons">
        <Box
          className="tutorial-box"
          url="/tutorial/stand-alone.html"
          title="&larr; Go To"
          text="Stand Alone"
        />
        <Box
          className="tutorial-box"
          url="/tutorial/cluster.html"
          title="Go To &rarr;"
          text="Kubernetes Cluster"
        />
      </div>
    </section>
  </Site>
);
