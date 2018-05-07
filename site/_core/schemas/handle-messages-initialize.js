import React from 'react';
import Prism from '../Prism';

const items = [
  {
    name: 'Js',
    content: <div><div><Prism language="js">
      {`
  _initialize(payload) {
    this._input = payload.data.input;  // store the input
    this._send(messages.outgoing.initialized);  // send ack event
  }
`}
    </Prism>
    </div>
      <div><a href="https://github.com/kube-HPC/algorithm-node-example/blob/aa5f7b38c1df45c29c752e7d6c70ede00169b994/lib/algorithm-ws.js#L23" target="_blank">code</a></div>
    </div>
  },
  {
    name: 'Java',
    content: <Prism language="js">
      {`
_initialize(payload) {
  this._input = payload.data.input;  // store the input
  this._send(messages.outgoing.initialized);  // send ack event
}
`}
    </Prism>
  },
  {
    name: 'Python',
    content: <Prism language="js">
      {`
_initialize(payload) {
  this._input = payload.data.input;  // store the input
  this._send(messages.outgoing.initialized);  // send ack event
}
`}
    </Prism>
  }];


module.exports = items;