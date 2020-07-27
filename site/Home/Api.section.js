const React = require("react");

const Api = () => (
  <div className="grayWash">
    <section className="section" id="single-request">
      <div className="prose">
        <h2>Simple API</h2>
        <p>
          Hkube has a simple API with a low learning curve: <br />
          - CLI for storing algorithms.
          <br />- Restful API to describe pipeline schema
        </p>
      </div>
      <div>
        <img className="section-image" src="/img/home/api.svg" />
      </div>
    </section>
  </div>
);

module.exports = Api;
