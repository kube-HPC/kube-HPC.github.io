/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

var path = require("path");
var React = require("react");
var Site = require("./Site");
var Marked = require("./Marked");
var DocsSidebar = require("./DocsSidebar");
var Box = require("../_core/Box");

export default ({ page, site }) => (
  <Site section="docs" title={page.title} page={page}>
    <section className="column">
      <div className="documentationContent">
        <div className="inner-content">
          <h1>{page.title}</h1>
          <Marked>{page.content}</Marked>
          {page.next && (
            <Box
              url={path.resolve(page.url, page.next)}
              title="Next &rarr;"
              text={page.nextPage.title}
            ></Box>
          )}
        </div>
        <DocsSidebar site={site} page={page} />
      </div>
    </section>
  </Site>
);
