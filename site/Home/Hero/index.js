const React = require("react");
const HeaderLinks = require("../../_core/HeaderLinks");
const HeroColumns = require("./HeroColumns");
const HPC = require("./../HPC.lead");

const HeroButtons = () => (
  <div className="hero-buttons">
    <a className="button" href="/learn/">
      Get Started
    </a>
    <a className="button" href="/tutorial/">
      Learn More
    </a>
  </div>
);

const Hero = ({ section }) => (
  <div className="hero">
    <div id="particles-js" />
    <script type="text/javascript" src="/vendor/particles.min.js" />
    <script type="text/javascript" src="/assets/particlesConfig.js" />
    <div className="hero-content">
      <div className="named-logo">
        <img src="/img/home/logo-fish.svg" />
      </div>
      <div className="hero-body">
        <HeroColumns />
      </div>
    </div>
    <HPC />
    <HeroButtons />
    <div className="abs">
      <header aria-hidden className="hero-nav">
        <section className="nav-section">
          <HeaderLinks section={section} />
        </section>
      </header>
    </div>
  </div>
);

module.exports = Hero;
