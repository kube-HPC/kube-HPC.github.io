/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

var path = require('path');
var React = require('react');

export default function BlogRSS({ site }) {
  const posts = site.files.blog
    .filter(file => !file.draft && path.extname(file.relPath) === '.md')
    .sort((a, b) => a.date < b.date);
  return (
    <feed>
      <title>Blog | Hkube</title>
      <link href="http://hkube.org/blog/" />
      <id>http://hkube.org/blog/</id>
      <updated>{new Date(posts[0].date).toISOString()}</updated>

      {posts.map(post =>
        <entry key={post.permalink}>
          <title>{post.title}</title>
          <link href={'http://hkube.org' + post.url} />
          <id>http://hkube.org{post.url}</id>
          <updated>{new Date(post.date).toISOString()}</updated>
          <summary>{post.title}</summary>
          <content>{post.title}</content>
          <author>
            <name>{post.byline}</name>
          </author>
        </entry>
      )}
    </feed>
  );
}
