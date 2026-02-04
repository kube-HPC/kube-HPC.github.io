const React = require("react");
const HardwareUtilizationIcon = require("./Icons/HardwareUtilization");

const HardwareUtilization = () => (
  <section className="section" id="optimize-hardware">
    <div className="prose" data-animation="fadeIn">
      <h2>Optimize Hardware utilization</h2>
      <p className="home-section-content">
        Hkube Automatically places containers based on their resource
        requirements and other constraints, while not sacrificing availability.
        Mix critical and best-effort workloads to drive up utilization and save
        even more resources. Hkube has metrics and AI engines that help learn
        about your algorithm (like run-time, CPU usage, priority ..) to make
        efficient execution and clustering.
      </p>
    </div>
    <HardwareUtilizationIcon />
  </section>
);

module.exports = HardwareUtilization;
