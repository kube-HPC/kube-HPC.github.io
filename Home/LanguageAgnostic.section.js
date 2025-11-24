const React = require("react");
const LanguageAgnosticIcon = require("./Icons/LanguageAgnostic");

const LanguageAgnostic = () => (
  <section className="section" id="language-agnostic">
    <div className="prose" data-animation="fadeIn">
      <h2>Language Agnostic</h2>
      <p className="home-section-content">
        Hkube is a container-based framework and designed to facilitate the use
        of any language for your algorithm
      </p>
    </div>
    <LanguageAgnosticIcon />
  </section>
);

module.exports = LanguageAgnostic;
