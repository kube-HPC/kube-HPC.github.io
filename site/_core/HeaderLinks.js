/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

var React = require("react");
var config = require('../../config/main/config.base');

const links = [
  { section: "learn", text: "Get Started", href: config.base_url + "/learn/" },
  { section: "tech", text: "Tech", href: config.base_url + "/tech/" },
  { section: "media", text: "Media", href: config.base_url + "/media/" },
  { section: "blog", text: "Blog", href: config.base_url + "/blog/" },
  {
    section: "playground",
    text: "Playground",
    href: "https://playground.hkube.io/",
  },
  { section: "gitHub", text: "GitHub", href: "https://github.com/kube-HPC" },
  { section: "spec", text: "Spec", href: config.base_url + "/spec/", target: "_blank" },
];

export default ({ section }) => (
  <nav id="nav-links">
    {links.map((link) => (
      <a
        key={link.section}
        href={link.href}
        target={
          link.href.slice(0, 4) === "http" ? "_blank" : link.target || null
        }
        rel={link.href.slice(0, 4) === "http" ? "noopener noreferrer" : null}
        className={link.section === section ? "active" : null}
      >
        {link.text}
      </a>
    ))}
  </nav>
);
