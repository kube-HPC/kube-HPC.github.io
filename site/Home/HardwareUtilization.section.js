const React = require("react");

const HardwareUtilization = () => (
  <section className="section" id="type-system">
    <div className="prose">
      <h2>Optimize Hardware utilization</h2>
      <p>
        Hkube Automatically places containers based on their resource
        requirements and other constraints, while not sacrificing availability.
        Mix critical and best-effort workloads to drive up utilization and save
        even more resources. Hkube has metrics and AI engines that help learn
        about your algorithm (like run-time, CPU usage, priority ..) to make
        efficient execution and clustering.
      </p>
    </div>
    <div>
      <img
        className="section-image"
        src="/img/home/hardware.svg"
        width="300"
        height="300"
      />
    </div>
  </section>
);

module.exports = HardwareUtilization;
