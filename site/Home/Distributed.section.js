const React = require("react");

const Distributed = () => (
  <section className="section" id="predictable-results">
    <div className="prose">
      <h2>Distributed pipeline of algorithms</h2>
      <p className="home-section-content">
        Hkube receives input DAG graph and automatically parallelizes your
        algorithms(nodes) over the cluster. You can keep your code simple (even
        single-threaded) and let Hkube worry about the complications distributed
        processing.
      </p>
    </div>
    <img className="section-image" src="/img/home/pipeline.svg" />
  </section>
);

module.exports = Distributed;
