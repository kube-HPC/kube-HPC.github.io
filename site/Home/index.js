const React = require("react");
const Site = require("../_core/Site");
const Search = require("../_core/Search");
const Hero = require("./Hero");

const Sections = {
  HPC: require("./HPC.section"),
  Distributed: require("./Distributed.section"),
  LanguageAgnostic: require("./LanguageAgnostic.section"),
  HardwareUtilization: require("./HardwareUtilization.section"),
  Api: require("./Api.section"),
  Monitoring: require("./Monitoring.section"),
};

module.exports = ({ page, section }) => (
  <Site className="index" noSearch={true} page={page}>
    <section className="fixedSearch">
      <Search />
    </section>
    <Hero section={section} />
    <Sections.HPC />
    <Sections.Distributed />
    <Sections.LanguageAgnostic />
    <Sections.HardwareUtilization />
    <Sections.Api />
    <Sections.Monitoring />
    <script type="text/javascript" src="/vendor/particles.min.js" />
  </Site>
);