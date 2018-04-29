/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

var React = require('react');
var Site = require('../_core/Site');
var Katacoda = require('../_core/Katacoda');

export default ({ page, site }) =>
  <Site section="code" title="Code" page={page}>
    <section class="point1" id="predictable-results">
      <div className="documentationContent">
        <div className="inner-content">
          <h1>Code</h1>
          <Katacoda scenario="stand-alone"></Katacoda>
        </div>
      </div>
    </section>
  </Site>
