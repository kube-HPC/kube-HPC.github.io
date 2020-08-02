const React = require("react");
var HeaderLinks = require("./HeaderLinks");
var Search = require("./Search");

const Nav = ({ section, noSearch, noHome, className }) => (
  <header className={`nav-header ${className || ""}`}>
    <section className="nav-section">
      <input id="toggle-menu-checkbox" type="checkbox" checked />
      <label
        id="toggle-menu"
        htmlFor="toggle-menu-checkbox"
        className={noHome ? "nav-low-button" : ""}
      >
        <span id="toggle-menu-icon" />
      </label>
      <a className="nav-home" href="/">
        <img className="nav-logo" src="/img/home/top-logo.svg" />
      </a>
      <HeaderLinks section={section} />
      {noSearch || <Search />}
    </section>
  </header>
);

// const Nav = ({ section, noSearch }) => (

// );

module.exports = Nav;
