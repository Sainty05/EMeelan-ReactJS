import React from "react";

export default function CTA() {
  return (
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">
        <div className="row">
          <div className="col-lg-9 text-center text-lg-start">
            <h3>Call To Action</h3>
            <p>
              {" "}
              Ready to take your business to the next level? Contact us now!
            </p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" href="/">
              Call To Action
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
