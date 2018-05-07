import React from 'react';
import Prism from '../Prism';

const items = [
    {
        name: 'Js',
        content: <div><div><Prism language="js">
            {`
      _connect() {
        this._socket = new WebSocket(this._url);
        this._socket.on('close', (code, reason) => {
            switch (code) {
                case 1000:
                    log.debug("socket normal closed");
                    break;
                default:
                    this._reconnect();
                    break;
            }
        });
        this._socket.on('error', (e) => {
            switch (e.code) {
                case 'ECONNREFUSED':
                    this._reconnect();
                    break;
                default:
                    log.error("error");
                    break;
            }
        });
    }
    
    _reconnect() {
      log.debug("socket reconnecting");
      this._socket.removeAllListeners();
      setTimeout(() => {
          this._connect();
      }, this._reconnectInterval);
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