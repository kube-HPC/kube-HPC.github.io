const React = require("react");
const HeaderLinks = require("../_core/HeaderLinks");
const Prism = require("../_core/Prism");

const Hero = ({ section }) => (
  <div id="particles-js" className="hero">
    <div className="abs">
      <header aria-hidden>
        <section>
          <HeaderLinks section={section} />
        </section>
      </header>

      <section className="intro">
        <div className="named-logo">
          <img src="/img/home/logo-fish.svg" />
        </div>

        <div className="marketing-col">
          <h3>Create Algorithm</h3>
          <Prism language="yaml">
            {`
name: my-alg
env: python
resources:
   cpu: 0.5
   mem: 512Mi
`}
          </Prism>
        </div>

        <div className="marketing-col">
          <h3>Create Pipeline</h3>
          <Prism language="yaml">
            {`
name: my-pipeline
nodes:
- nodeName: my-node
  algorithmName: my-alg
  input:
  - flowInput.urls
`}
          </Prism>
        </div>
        <div className="marketing-col">
          <h3>Restful</h3>
          <Prism language="json">
            {`
GET: /api/v1/status
POST: /api/v1/exec
{
  "body": {
    "pipeline": "MyPipeline"
  }
}`}
          </Prism>
        </div>
      </section>
      <div className="buttons-unit">
        <a className="button" href="/learn/">
          Get Started
        </a>
        <a className="button" href="/tutorial/">
          Learn More
        </a>
      </div>
    </div>
  </div>
);

module.exports = Hero;
