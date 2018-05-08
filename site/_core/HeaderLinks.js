/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

var React = require('react');

const links = [
  { section: 'start', text: 'Get Started', href: '/start/' },
  { section: 'learn', text: 'Restful API', href: '/learn/' },
  { section: 'algorithms', text: 'Algorithms', href: '/algorithms/' },
  { section: 'tutorial', text: 'Tutorial', href: '/tutorial/' },
  { section: 'gitHub', text: 'GitHub', href: 'https://github.com/kube-HPC' }
];

export default ({ section }) =>
  <nav>
    {links.map(link =>
      <a
        key={link.section}
        href={link.href}
        target={link.href.slice(0, 4) === 'http' ? '_blank' : null}
        rel={link.href.slice(0, 4) === 'http' ? 'noopener noreferrer' : null}
        className={link.section === section ? 'active' : null}>
        {link.text}
      </a>
    )}
  </nav>
