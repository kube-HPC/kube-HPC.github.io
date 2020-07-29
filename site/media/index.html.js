var React = require("react");
var Site = require("../_core/Site");
var Box = require("../_core/Box");

export default ({ page, site }) => (
  <Site section="media" title="Media" page={page}>
    <section className="point1 column" id="predictable-results">
      <div className="documentationContent">
        <div className="inner-content">
          <h1>Media</h1>
          <div>
            <h2>
              <a className="anchor" name="jane"></a>Meet Jane, she is a Data
              Scientist{" "}
              <a className="hash-link" href="#jane">
                #
              </a>
            </h2>
          </div>
          <div>
            <iframe
              width="100%"
              height="600"
              src="https://www.youtube.com/embed/fmDDzIDie-A"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <h2>
              <a className="anchor" name="distributed"></a>Distributed pipeline
              of algorithms{" "}
              <a className="hash-link" href="#distributed">
                #
              </a>
            </h2>
          </div>
          <div>
            <iframe
              width="100%"
              height="600"
              src="https://www.youtube.com/embed/NRE-SYNsX_k"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <h2>
              <a className="anchor" name="hpc"></a>HPC over Kubernetes{" "}
              <a className="hash-link" href="#hpc">
                #
              </a>
            </h2>
          </div>
          <div>
            <iframe
              width="100%"
              height="600"
              src="https://www.youtube.com/embed/jngDoHjF8Xc"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <h2>
              <a className="anchor" name="architecture"></a>Hkube Architecture{" "}
              <a className="hash-link" href="#architecture">
                #
              </a>
            </h2>
          </div>
          <div>
            <iframe
              src="//www.slideshare.net/slideshow/embed_code/key/C61U8DDUTShe2d"
              width="100%"
              height="600"
              frameborder="0"
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              style={{
                border: "1px solid #CCC",
                borderWidth: "1px",
                marginBottom: "5px",
                maxWidth: "100%",
              }}
              allowfullscreen
            ></iframe>
            <div style={{ marginBottom: "5px" }}>
              <strong>
                <a
                  href="//www.slideshare.net/hkube/hkube-124131504"
                  title="Hkube"
                  target="_blank"
                >
                  Hkube
                </a>{" "}
              </strong>{" "}
              from{" "}
              <strong>
                <a href="https://www.slideshare.net/hkube" target="_blank">
                  hkube
                </a>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Site>
);
