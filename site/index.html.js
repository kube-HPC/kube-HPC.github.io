var React = require('react');
var Site = require('./_core/Site');
var HeaderLinks = require('./_core/HeaderLinks');
var Prism = require('./_core/Prism');
var Search = require('./_core/Search');

module.exports = ({ page, section }) =>
  <Site className="index" noSearch={true} page={page}>
    <section className="fixedSearch">
      <Search />
    </section>

    <div className="hero">
      <div className="abs">
        <header aria-hidden>
          <section>
            <HeaderLinks section={section} />
          </section>
        </header>

        <section className="intro">
          <div className="named-logo">
            <img src="/img/logo.png" />
            <h1>Hkube</h1>
          </div>

          <div className="marketing-col">
            <h3>Dockerize</h3>
            <Prism language="docker">
              {`
 FROM ubuntu
 CMD ["/usr/bin/wc","--help"]
 docker build -t myuser/green-alg .
 docker push <<Repository>>
`}
            </Prism>
          </div>

          <div className="marketing-col">
            <h3>Create Pipeline</h3>
            <Prism language="json">
              {`{
  "name": "MyPipeline",
  "nodes": [{
    "nodeName": "green",
    "algorithmName": "green-alg",
    "input": [256, true]
  }]
}`}
            </Prism>
          </div>
          <div className="marketing-col">
            <h3>Restful</h3>
            <Prism language="json">
              {`
GET: /api/v1/status
POST: /api/v1/exec
    `}
            </Prism>
            <Prism language="json">
              {`{
  "body": {
    "pipeline": "MyPipeline"
  }
}`}
            </Prism>
          </div>
        </section>
        <div className="buttons-unit">
          <a className="button" href="/start/">
            Get Started
          </a>
          <a className="button" href="/learn/">
            Learn More
          </a>
        </div>
      </div>
    </div>
    <section className="lead">
      <h1>HPC over kubernetes</h1>
      <p>
        Hkube is a cloud native open source framework to run distributed pipeline of algorithms that is built on Kubernetes.
        Hkube allows to run pipelines of algorithms on kubernetes cluster optimally utilizing the available resources,
        based on user priorities and automatic role based and AI heuristics.
        </p>
    </section>
    <section className="point1" id="predictable-results">
      <div className="prose">
        <h2>Distributed pipeline of algorithms</h2>
        <p>
          HKUBE receive as input DAG graph and automatically parallelizes your algorithms(nodes) over the cluster.
          you can keep your code simple (even single threaded) and let HKUBE worry about
          the complications of distributed processing.</p>
      </div>
      <div >
        <img src="/img/pipeline.png" />
      </div>
    </section>
    <div className="grayWash">
      <section className="point2" id="single-request">
        <div className="prose">
          <h2>Language Agnostic</h2>
          <p>
            Hkube is a container based framework and designed to facilitate the use of any language for your algorithm</p>
        </div>
        <div >
          <img src="/img/lang-agnostic.png" width="383" height="314" />
        </div>
      </section>
    </div>

    <section className="point3" id="type-system">
      <div className="prose">
        <h2>Optimize Hardware utilization</h2>
        <p> HKUBE Automatically places containers based on their resource requirements and other constraints, while not sacrificing availability.
          Mix critical and best-effort workloads in order to drive up utilization and save even more resources.
          HKUBE has metrics and AI engines that helps learn about your algorithm (like run-time, cpu usage, priority ..) which makes execution and clustering efficiency.
        </p>
      </div>
      <div >
        <img src="/img/optimize-hardware.png" width="300" height="300" />
      </div>
    </section>

    <div className="grayWash">
      <section className="point2" id="single-request">
        <div className="prose">
          <h2>Simple API</h2>
          <p>
            HKUBE has simple-api with low learning curve :
            - CLI for stroing algorithms
            - JSON API for describe pipeline schema
            </p>
        </div>
        <div >
          <img src="/img/api.png" width="496" height="370" />
        </div>
      </section>
    </div>
    <section className="point5" id="without-versions">
      <div className="prose">
        <h2>Algorithm monitoring</h2>
        <p>HKUBE let's you quickly and easily understand complex problems over the cluster by CNCF technologies (such as promethues, Jaeger and more) for monitoring the cluster.
          HKUBE expose algorithm logs through stdout and integrate them with HKUBE logs to get the whole picture.
          </p>
      </div>
      <div >
        <img src="/img/monitor.png" width="496" height="370" />
      </div>
    </section>
  </Site>
