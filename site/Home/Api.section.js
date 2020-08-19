const React = require("react");

const Api = () => (
  <section className="section" id="single-request">
    <div className="prose">
      <h2>Simple API</h2>
      <p className="home-section-content" id="api-section-content">
        Hkube has a simple API with a low learning curve:
        <ul id="api-section-list">
          <li>CLI for storing algorithms.</li>
          <li>Restful API to describe pipeline schema</li>
        </ul>
      </p>
    </div>
    <img className="section-image" src="/img/home/api.svg" />
  </section>
);

module.exports = Api;
