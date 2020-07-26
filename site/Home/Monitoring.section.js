const React = require("react");

const Monitoring = () => (
  <section className="section" id="without-versions">
    <div className="prose">
      <h2>Algorithm monitoring</h2>
      <p>
        Hkube lets you quickly and easily understand complex problems over the
        cluster by CNCF technologies (such as Prometheus, Jaeger, and more) for
        monitoring the cluster. Hkube exposes algorithm logs through stdout and
        integrates them with Hkube logs to get the whole picture.
      </p>
    </div>
    <div>
      <img
        className="section-image"
        src="/img/home/algorithm.svg"
        width="300"
        height="300"
      />
    </div>
  </section>
);

module.exports = Monitoring;
