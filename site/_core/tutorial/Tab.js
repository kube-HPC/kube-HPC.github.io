var React = require('react');

module.exports = ({ name, content, index }) =>
  <div key={index}>
    <input className="input" name="tabs" type="radio" id={`tab-${index}`} checked="checked" />
    <label className="label" htmlFor={`tab-${index}`}>{name}</label>
    <div className="panel">
      <h1>{name}</h1>
      <div>
        {content}
      </div>
    </div>
  </div>