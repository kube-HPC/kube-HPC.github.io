/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

var React = require('react');
var Site = require('../_core/Site');
var Marked = require('../_core/Marked');
var Prism = require('../_core/Prism');
var CodeTabs = require('../_core/CodeTabs');
var connectSchema = require('../_core/schemas/connect');

export default ({ page, site }) =>
  <Site section="code" title="Code" page={page}>
    <section>
      <div className="documentationContent">
        <div className="inner-content">
          <h2>Websocket Example</h2>
          <p>
            Before you build your algorithm and push it <a href="https://kube-hpc.github.io/api-server/docs.html">docker registry</a>,
            you need to expose it to the outer world. <br />
            The algorithms communicate with the worker via websocket
            </p>

          <div>
            <CodeTabs schema={connectSchema} />
          </div>
          <p>
            Each message is defined like:
            <Prism language="json">
              {`{
message = {
command: "command",
data:{},
error:{}
}`}
            </Prism>
          </p>
          for incoming messages (worker to wrapper) the valid messages are:
            <ul>
            <li>'pingMessage'</li>
            <li>'initialize'</li>
            <li>'start'</li>
            <li>'stop</li>
          </ul>

          <ul>
            for outgoing messages (wrapper to worker) the valid messages are:
             <li>'pongMessage'</li>
            <li>'initialized'</li>
            <li>'started'</li>
            <li>'stopped'</li>
            <li>'progress'</li>
            <li>'errorMessage'</li>
            <li>'done'</li>
          </ul>


          <div>
            <CodeTabs schema={connectSchema} />
          </div>

        </div>
      </div>

    </section>

  </Site >
