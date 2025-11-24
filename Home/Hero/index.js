const React = require("react");
const HeaderLinks = require("../../_core/HeaderLinks");
const HeroColumns = require("./HeroColumns");
const HPC = require("./../HPC.lead");
var config = require('../../../config/main/config.base');


const HeroButtons = () => (
  <div className="hero-buttons">
    <a className="button" href={config.base_url + "/learn/"}>
      Get Started
    </a>
    <a className="button" target="_blank" href="https://playground.hkube.org/">
      Playground
    </a>
  </div>
);

const Hero = ({ section }) => (
  <div className="hero">
    <div id="particles-js" />
    <script type="text/javascript" src={config.base_url + "/vendor/particles.min.js"} />
    <script type="text/javascript" src={config.base_url + "/assets/particlesConfig.js"} />
    <div className="hero-content">
      <div className="named-logo">
        <img src={config.base_url + "/img/home/logo-fish.svg"} />
      </div>
      <div className="hero-body">
        <HeroColumns />
      </div>
    </div>
    <HPC />
    <HeroButtons />
    <img className="down-arrow" src={config.base_url + "/img/home/down-arrow.svg"} />
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
