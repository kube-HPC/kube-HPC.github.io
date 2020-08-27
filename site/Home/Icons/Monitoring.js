const React = require("react");
const { Gradient } = require("./Defs");
const MonitoringIcon = () => (
  <svg
    width="332"
    height="201"
    viewBox="0 0 332 201"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter
        id="shadow_4_0"
        x="174.424"
        y="0.417969"
        width="141.949"
        height="96.3594"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="10" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
      <Gradient
        id="gradient_4"
        x1="369.963"
        y1="256.914"
        x2="100.668"
        y2="-135.889"
      />
    </defs>
    <g
      filter="url(#shadow_4_0)"
      data-animation="zoomIn"
      style={{ transformOrigin: "bottom left" }}
    >
      <rect
        x="194.424"
        y="20.418"
        width="101.949"
        height="56.3594"
        rx="3"
        fill="white"
      />
      <rect
        x="194.924"
        y="20.918"
        width="100.949"
        height="55.3594"
        rx="2.5"
        stroke="#C4C4C4"
      />
      <rect
        data-animation="fadeIn"
        data-animation-delay="0.2s"
        x="202.41"
        y="31.0801"
        width="80.808"
        height="9.6471"
        fill="#A0A0A0"
      />
      <rect
        data-animation="fadeIn"
        data-animation-delay="0.3s"
        x="202.41"
        y="45.8047"
        width="61.5456"
        height="5.58516"
        fill="#C4C4C4"
      />
      <rect
        data-animation="fadeIn"
        data-animation-delay="0.4s"
        x="202.41"
        y="54.9453"
        width="41.3436"
        height="5.07742"
        fill="#C4C4C4"
      />
      <rect
        data-animation="fadeIn"
        data-animation-delay="0.5s"
        x="202.41"
        y="63.5762"
        width="72.8211"
        height="5.58514"
        fill="#C4C4C4"
      />
    </g>
    <g data-animation="fadeIn">
      <path
        d="M6.02832 172.741H88.1028C90.8896 172.741 93.55 171.578 95.4427 169.532L100.737 163.81C105.42 158.749 113.7 159.835 116.92 165.933L124.412 180.121C128.469 187.806 139.722 187.014 142.664 178.838L171.138 99.7093C174.165 91.2962 185.868 90.7814 189.623 98.8963L221.103 166.939C222.739 170.476 226.281 172.741 230.179 172.741H325.971"
        stroke="#326EE6"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M6.02832 172.741H88.1028C90.8896 172.741 93.55 171.578 95.4427 169.532L100.737 163.81C105.42 158.749 113.7 159.835 116.92 165.933L124.412 180.121C128.469 187.806 139.722 187.014 142.664 178.838L171.138 99.7093C174.165 91.2962 185.868 90.7814 189.623 98.8963L221.103 166.939C222.739 170.476 226.281 172.741 230.179 172.741H325.971"
        stroke="url(#gradient_4)"
        strokeWidth="12"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

module.exports = MonitoringIcon;
