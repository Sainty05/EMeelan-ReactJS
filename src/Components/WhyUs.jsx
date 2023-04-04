import React from "react";

export default function WhyUs() {
  return (
    <section id="why-us" className="why-us section-bg">
      <div className="container-fluid" data-aos="fade-up">
        <div className="section-title">
          <h2>WhyUS</h2>
          <p>
            At EMeelan, we are committed to making a positive impact on the
            world through our services. We believe that our diverse background
            and experience in matrimonial services, social service, education,
            and software development uniquely position us to provide
            comprehensive solutions that meet the needs of our customers. What
            sets us apart is our unwavering dedication to delivering exceptional
            quality and value, and our commitment to standing with our customers
            every step of the way to ensure their success. We take pride in
            working closely with our clients to understand their specific needs
            and challenges, and providing tailored solutions that help them
            achieve their goals. At EMeelan, we are not just another vendor - we
            are your partner for success.
          </p>
          <p>
            Below points highlight the broad range of skills and expertise that
            our team brings to the table, covering everything from software
            development and automation to monitoring and cloud infrastructure.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
            <div className="content">
              <h3>
                EMeelan believe in <strong>Customers success</strong>
              </h3>
              <p>
                At EMeelan, we believe that our success is directly tied to the
                success of our customers. We are committed to providing
                exceptional service and support to help our customers achieve
                their goals. Our team is dedicated to understanding our
                customers' unique needs and challenges, and we work closely with
                them to develop customized solutions that drive results. We are
                passionate about building strong, long-term relationships with
                our customers and providing them with the tools and resources
                they need to succeed. Whether it's through our innovative
                products, expert guidance, or exceptional customer service, we
                are always focused on helping our customers achieve their
                desired outcomes.
              </p>
            </div>

            <div className="accordion-list">
              <ul>
                <li>
                  <a href="/"
                    data-bs-toggle="collapse"
                    className="collapse"
                    data-bs-target="#accordion-list-1"
                  >
                    <span>01</span> Testing{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="accordion-list-1"
                    className="collapse show"
                    data-bs-parent=".accordion-list"
                  >
                    <p>
                      Our team has extensive experience in software automation,
                      with expertise in all levels of testing, including unit
                      tests, functional tests, and non-functional tests.
                    </p>
                  </div>
                </li>

                <li>
                  <a href="/"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-list-2"
                    className="collapsed"
                  >
                    <span>02</span> Development
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="accordion-list-2"
                    className="collapse"
                    data-bs-parent=".accordion-list"
                  >
                    <p>
                      We specialize in the development of a variety of
                      programming languages, including JAVA, Python, ReactJS,
                      and Angular.
                    </p>
                  </div>
                </li>

                <li>
                  <a href="/"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-list-3"
                    className="collapsed"
                  >
                    <span>03</span> Advance technologies{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="accordion-list-3"
                    className="collapse"
                    data-bs-parent=".accordion-list"
                  >
                    <p>
                      Our team is well-versed in a range of advanced
                      technologies, including machine learning, deep learning,
                      DevOps, Kubernetes, Terraform, Argocd, and Pipelines.
                    </p>
                  </div>
                </li>
                <li>
                  <a href="/"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-list-4"
                    className="collapsed"
                  >
                    <span>04</span> Monitoring and Dashboard{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="accordion-list-4"
                    className="collapse"
                    data-bs-parent=".accordion-list"
                  >
                    <p>
                      Our team has experience working with a range of report and
                      monitoring tools, including Nagios, Grafana, Redash, Power
                      BI, and Linkerd.
                    </p>
                  </div>
                </li>
                <li>
                  <a href="/"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-list-5"
                    className="collapsed"
                  >
                    <span>05</span> Cloud Platforms
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="accordion-list-5"
                    className="collapse"
                    data-bs-parent=".accordion-list"
                  >
                    <p>
                      We are familiar with a variety of cloud platforms,
                      including Azure, GCP, and EC2, and can help you optimize
                      your cloud infrastructure for your specific needs.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
            style={{backgroundImage: `url("assets/img/why-us.png")`}}
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            &nbsp;
          </div>
        </div>
      </div>
    </section>
  );
}
