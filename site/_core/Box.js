var React = require("react");

module.exports = ({ url, title, text, className }) => (
  <div className={className}>
    <a className="read-next" href={url}>
      <span className="read-next-continue">{title}</span>
      <span className="read-next-title">{text}</span>
    </a>
  </div>
);
