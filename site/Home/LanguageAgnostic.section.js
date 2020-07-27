const React = require("react");

const LanguageAgnostic = () => (
  <div className="grayWash">
    <section className="section" id="single-request">
      <div className="prose">
        <h2>Language Agnostic</h2>
        <p>
          Hkube is a container-based framework and designed to facilitate the
          use of any language for your algorithm
        </p>
      </div>
      <div>
        <img className="section-image" src="/img/home/container.svg" />
      </div>
    </section>
  </div>
);

module.exports = LanguageAgnostic;
