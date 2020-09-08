const React = require("react");
const Prism = require("../../_core/Prism");

const HeroColumns = () => (
  <section className="hero-marketing-columns">
    <div className="marketing-col">
      <h3>Create Algorithm</h3>
      <Prism language="yaml">
        {`
name: my-alg
env: pythons
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
);
module.exports = HeroColumns;
