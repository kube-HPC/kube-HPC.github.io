const React = require("react");
const MonitoringIcon = require("./Icons/Monitoring");

const Monitoring = () => (
  <section className="section" id="algorithm-monitoring">
    <div className="prose " data-animation="fadeIn">
      <h2>Algorithm monitoring</h2>
      <p className="home-section-content">
        Hkube lets you quickly and easily understand complex problems over the
        cluster by CNCF technologies (such as Prometheus, Jaeger, and more) for
        monitoring the cluster. Hkube exposes algorithm logs through stdout and
        integrates them with Hkube logs to get the whole picture.
      </p>
    </div>
    <MonitoringIcon />
  </section>
);

module.exports = Monitoring;
