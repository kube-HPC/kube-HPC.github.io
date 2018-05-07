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
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%', margin: '0 auto' }}>
            <div style={{}}>
              <Box url="/tutorial/stand-alone.html" title="&larr; Go To" text="Stand Alone"></Box>
            </div>
            <div style={{}}>
              <Box url="/tutorial/cluster.html" title="Go To &rarr;" text="Kubernetes Cluster"></Box>
            </div>
          </div>
          <div style={{ clear: "both" }}>   </div>
        </div>
      </div>
    </section>
  </Site>
