const React = require("react");
const ApiIcon = require("./Icons/Api");

const Api = () => (
  <section className="section" id="api-section">
    <div className="prose" data-animation="fadeIn">
      <h2>Simple API</h2>
      <p className="home-section-content" id="api-section-content">
        Hkube has a simple API with a low learning curve:
        <ul id="api-section-list">
          <li>CLI for storing algorithms.</li>
          <li>Restful API to describe pipeline schema</li>
        </ul>
      </p>
    </div>
    <ApiIcon />
  </section>
);

module.exports = Api;
