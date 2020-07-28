const React = require("react");

const Api = () => (
  <section className="section" id="single-request">
    <div className="prose">
      <h2>Simple API</h2>
      <p className="home-section-content">
        Hkube has a simple API with a low learning curve: <br />
        - CLI for storing algorithms.
        <br />- Restful API to describe pipeline schema
      </p>
    </div>
    <div>
      <img className="section-image" src="/img/home/api.svg" />
    </div>
  </section>
);

module.exports = Api;
