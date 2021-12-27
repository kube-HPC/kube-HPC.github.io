import React from 'react';
import Prism from '../Prism';

const items = [
  {
    name: 'Python',
    content: <Prism language="python">
      {`
  def start(args):
    name = args.get('input')[0]
    return f'Hello, {name}!'
  `}
    </Prism>
  },
  {
    name: 'Java',
    content: <Prism language="java">
      {`
      
   
      `}
    </Prism>
  },
  {
    name: 'JavaScript',
    content: <Prism language="js">
      {`
  const start = (args) => {
        name = args.get('input')[0]
        return "Hello, {name}!"
  }`}
    </Prism>
  }];


module.exports = items;