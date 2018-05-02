var React = require('react');
var Tab = require('./Tab');
var Prism = require('../../_core/Prism');

var connect = [{
  name: 'js',
  content: <Prism language="json">
    {`{
"body": {
"pipeline": "MyPipeline"
}
}`}
  </Prism>
},
{
  name: 'python',
  content: <Prism language="json">
    {`{
"body": {
"pipeline": "MyPipeline"
}
}`}
  </Prism>
}
];

module.exports = () =>
  <div className="tabs">
    <input className="input" name="tabs" type="radio" id={`tab-4`} checked="checked" />
    <label className="label" htmlFor={`tab-4`}>{connect[0].name}</label>
    <div className="panel">
      <h3>{connect[0].name}</h3>
      <a href="https://github.com/kube-HPC/algorithm-node-example">full example</a>
      <div>
        {connect[0].content}
      </div>
    </div>
    <input className="input" name="tabs" type="radio" id={`tab-5`} />
    <label className="label" htmlFor={`tab-5`}>{connect[1].name}</label>
    <div className="panel">
      <h1>{connect[1].name}</h1>
      <div>
        {connect[1].content}
      </div>
    </div>
    <input className="input" name="tabs" type="radio" id={`tab-6`} />
    <label className="label" htmlFor={`tab-6`}>{connect[0].name}</label>
    <div className="panel">
      <h1>{connect[0].name}</h1>
      <div>
        {connect[0].content}
      </div>
    </div>
  </div>