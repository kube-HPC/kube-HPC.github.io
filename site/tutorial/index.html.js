/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

var React = require('react');
var Site = require('../_core/Site');
var Box = require('../_core/Box');

export default ({ page, site }) =>
  <Site section="code" title="Code" page={page}>
    <section className="point1" id="predictable-results">
      <div className="documentationContent">
        <div className="inner-content">
          <h1>Tutorial</h1>
          <h2 style={{ textAlign: "center" }}>What kind of use?</h2>
          <div style={{ paddingLeft: 200, width: "70%" }}>
            <div style={{ float: "left" }}>
              <Box url="/tutorial/stand-alone.html" title="Cluster" text="Stand Alone"></Box>
            </div>
            <div style={{ float: "right" }}>
              <Box url="/tutorial/cluster.html" title="Cluster" text="Kubernetes Cluster"></Box>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Site>
