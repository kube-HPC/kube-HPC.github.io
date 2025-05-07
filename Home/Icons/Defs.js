const React = require("react");

const Gradient = ({ id, x1, y1, x2, y2 }) => (
  <linearGradient
    id={id}
    x1={x1}
    y1={y1}
    x2={x2}
    y2={y2}
    gradientUnits="userSpaceOnUse"
  >
    <stop stopColor="#2DA8E6" />
    <stop offset="1" stopColor="white" stopOpacity="0" />
  </linearGradient>
);

module.exports.Gradient = Gradient;
