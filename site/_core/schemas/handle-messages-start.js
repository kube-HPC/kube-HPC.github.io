import React from 'react';
import Prism from '../Prism';

const items = [
  {
    name: 'Js',
    content: <div><div><Prism language="js">
      {`
  _start() {
    this._send(messages.outgoing.started);   // send ack event
    try {
        // your code goes here...
        const output = await myAlgorithm.process(this._input);  // use the input
        // your code goes here...

        // send response
        this._send(messages.outgoing.done, {
            data: output
        });
    }
    catch (error) {
        this._onError(error); // send error event
    }
}`}
    </Prism>
    </div>
      <div><a href="https://github.com/kube-HPC/algorithm-node-example/blob/aa5f7b38c1df45c29c752e7d6c70ede00169b994/lib/algorithm-ws.js#L23" target="_blank">code</a></div>
    </div>
  },
  {
    name: 'Java',
    content: <Prism language="js">
      {`{
  this._socket = new WebSocket(this._url);
  this._socket.on('open', () => {
     log.debug("connected");
  });
}`}
    </Prism>
  },
  {
    name: 'Python',
    content: <Prism language="js">
      {`{
  this._socket = new WebSocket(this._url);
  this._socket.on('open', () => {
     log.debug("connected");
  });
}`}
    </Prism>
  }];


module.exports = items;