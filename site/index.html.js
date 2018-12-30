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

    <div id="particles-js" className="hero">
      <div className="abs">
        <header aria-hidden>
          <section>
            <HeaderLinks section={section} />
          </section>
        </header>

        <section className="intro">
          <div className="named-logo">
            <img src="/img/home/HkubeBlue.svg" />
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
{
  "body": {
    "pipeline": "MyPipeline"
  }
}`}
            </Prism>
          </div>
        </section>
        <div className="buttons-unit">
          <a className="button" href="/learn/">
            Get Started
          </a>
          <a className="button" href="/tutorial/">
            Learn More
          </a>
        </div>
      </div>
    </div>
    <section className="lead">
      <h1>HPC over Kubernetes</h1>
      <p>
        Hkube is a cloud-native open source framework to run distributed pipeline of algorithms built on Kubernetes.
        Hkube allows running pipelines of algorithms on Kubernetes cluster optimally utilizing the available resources,
        based on user priorities and AI heuristics.
        </p>
    </section>
    <section className="point1" id="predictable-results">
      <div className="prose">
        <h2>Distributed pipeline of algorithms</h2>
        <p>
          Hkube receives input DAG graph and automatically parallelizes your algorithms(nodes) over the cluster.
              you can keep your code simple (even single threaded) and let Hkube worry about
            the complications of distributed processing.
          </p>
      </div>
      <div >
        <img src="/img/home/pipeline.svg" width="250" height="250" />
      </div>
    </section>
    <div className="grayWash">
      <section className="point2" id="single-request">
        <div className="prose">
          <h2>Language Agnostic</h2>
          <p>
            Hkube is a container based framework and designed to facilitate the use of any language for your algorithm
            </p>
        </div>
        <div >
          <img src="/img/home/container.svg" width="300" height="300" />
        </div>
      </section>
    </div>

    <section className="point3" id="type-system">
      <div className="prose">
        <h2>Optimize Hardware utilization</h2>
        <p>
          Hkube Automatically places containers based on their resource requirements and other constraints, while not sacrificing availability.
            Mix critical and best-effort workloads in order to drive up utilization and save even more resources.
            Hkube has metrics and AI engines that helps learn about your algorithm (like run-time, cpu usage, priority ..) which makes execution and clustering efficiency.
        </p>
      </div>
      <div >
        <img src="/img/home/hardware.svg" width="300" height="300"/>
      </div>
    </section>

    <div className="grayWash">
      <section className="point2" id="single-request">
        <div className="prose">
          <h2>Simple API</h2>
          <p>
            Hkube has simple API with a low learning curve: <br />
            - CLI for storing algorithms.<br />
            - Restful API for describe pipeline schema
            </p>
        </div>
        <div >
          <img src="/img/home/api.svg" width="300" height="300" />
        </div>
      </section>
    </div>
    <section className="point5" id="without-versions">
      <div className="prose">
        <h2>Algorithm monitoring</h2>
        <p>
          Hkube lets you quickly and easily understand complex problems over the cluster by CNCF technologies (such as Prometheus, Jaeger and more) for monitoring the cluster.
          Hkube exposes algorithm logs through stdout and integrates them with Hkube logs to get the whole picture.
          </p>
      </div>
      <div >
        <img src="/img/home/algorithm.svg" width="300" height="300" />
      </div>
    </section>

    <script type="text/javascript" src="/vendor/particles.min.js"></script>
  </Site>
