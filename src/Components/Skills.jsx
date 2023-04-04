import React from 'react'

export default function Skills() {
  return (
    <section id="skills" class="skills">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
            <img src="assets/img/skills.png" class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
            <h3>Experience ultra-speed development and release with <b>Tech Meelan Engine</b>. </h3>
            <p class="fst-italic">
              At Tech Meelan, we take pride in our homegrown product that is designed to simplify the software development process. Our product includes a unique pipeline concept that seamlessly takes care of build, unit testing, quality gate checks, deployments, and various stages of testing. The entire pipeline is defined as code, making it easy to manage and maintain. Additionally, our product includes a mock service that enables users to mock APIs, Kafka, authentication, and other essential services. This is particularly useful for testing applications before they are deployed. Our product also includes a range of utilities, including data generation tools, data backups, and other configuration options, to ensure that testing is as comprehensive as possible. Furthermore, we offer a monitoring service that provides complete visibility into logs, containers, API health, errors, and performance. Users can easily access this information through our user-friendly dashboard, which provides a comprehensive view of the system's health and performance. At Tech Meelan, we are committed to simplifying the software development process and making it more efficient for our customers.
            </p>
            <p>At Tech Meelan, we understand the importance of streamlining the software development process and allowing our customers to focus on what they do best - developing software. That's why our TechEngine product is designed to take care of all the necessary processes required for software development, in a 100% automated way. This means that our customers only need to focus on developing their code with unit test cases, while our product takes care of everything else, including the automation of testing. Our TechEngine supports both on-premises and cloud-based environments, and it includes hooks that can connect to any existing system, such as Git, Confluence, LDAP, and more. This allows our customers to integrate TechEngine into their existing systems and processes seamlessly, without disrupting their workflow. With TechEngine, our customers can rest assured that their software development process will be streamlined and automated, freeing up time for them to focus on what really matters - delivering high-quality software.</p>
            <div class="skills-content">

              <div class="progress">
                <span class="skill">Pipeline <i class="val">100%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">Testing Tools <i class="val">70%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">Deployment <i class="val">100%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="progress">
                <span class="skill">Monitoring <i class="val">85%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">Reporting <i class="val">80%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
