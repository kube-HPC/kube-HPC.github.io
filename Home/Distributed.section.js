const React = require("react");
const DistributedIcon = require("./Icons/Distributed");

const Distributed = () => (
  <section className="section">
    <div className="prose" data-animation="fadeIn">
      <h2>Distributed pipeline of algorithms</h2>
      <p className="home-section-content">
        Hkube receives input DAG graph and automatically parallelizes your
        algorithms(nodes) over the cluster. You can keep your code simple (even
        single-threaded) and let Hkube worry about the complications distributed
        processing.
      </p>
    </div>
    <DistributedIcon />
  </section>
);

module.exports = Distributed;
