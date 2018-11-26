/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

var React = require('react');

const links = [
  { section: 'learn', text: 'Get Started', href: '/learn/' },
  { section: 'tutorial', text: 'Tutorial', href: '/tutorial/' },
  { section: 'dashboard', text: 'Dashboard', href: '/dashboard/' },
  { section: 'media', text: 'Media', href: '/media/' },
  { section: 'gitHub', text: 'GitHub', href: 'https://github.com/kube-HPC' },
  { section: 'spec', text: 'Spec', href: '/spec/', target: '_blank' }
];

export default ({ section }) =>
  <nav>
    {links.map(link =>
      <a
        key={link.section}
        href={link.href}
        target={link.href.slice(0, 4) === 'http' ? '_blank' : link.target || null}
        rel={link.href.slice(0, 4) === 'http' ? 'noopener noreferrer' : null}
        className={link.section === section ? 'active' : null}>
        {link.text}
      </a>
    )}
  </nav>
