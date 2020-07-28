const React = require("react");

const Monitoring = () => (
  <div className="grayWash">
    <section className="section" id="without-versions">
      <div className="prose">
        <h2>Algorithm monitoring</h2>
        <p className="home-section-content">
          Hkube lets you quickly and easily understand complex problems over the
          cluster by CNCF technologies (such as Prometheus, Jaeger, and more)
          for monitoring the cluster. Hkube exposes algorithm logs through
          stdout and integrates them with Hkube logs to get the whole picture.
        </p>
      </div>
      <div>
        <img className="section-image" src="/img/home/monitoring.svg" />
      </div>
    </section>
  </div>
);

module.exports = Monitoring;
