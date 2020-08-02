const React = require("react");
const HeaderLinks = require("../_core/HeaderLinks");

const MobileNav = ({ section }) => (
  <div className="mobile-nav">
    <section className="nav-section">
      <input id="toggle-menu-checkbox" type="checkbox" checked />
      <label id="toggle-menu" htmlFor="toggle-menu-checkbox">
        <span id="toggle-menu-icon" />
      </label>
      <HeaderLinks section={section} />
    </section>
  </div>
);
module.exports = MobileNav;
