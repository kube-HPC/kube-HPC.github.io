import React from 'react';
import Prism from '../Prism';

const items = [
  {
    name: 'Js',
    content: <div><div><Prism language="js">
      {`
  _send(command, data, error) {
    try {
      this._socket.send(JSON.stringify({ command, data, error }));
    }
    catch (e) {
        log.error(e);
      }
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
    content: <Prism language="python">
      {`{
  this._socket = new WebSocket(this._url);
  this._socket.on('open', () => {
     log.debug("connected");
  });
}`}
    </Prism>
  }];


module.exports = items;