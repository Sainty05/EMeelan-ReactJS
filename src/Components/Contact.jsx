import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
          
        </div>

        <div className="row">

          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>EMeelan(GyanStream), RH52, Ramky Serene woods Chikkagubbi Kohthnuru Bengaluru 560077</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>emeelanpvtltd@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+91 91797 19329 </p>
              </div>

             
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3886.3003788741053!2d77.6615431!3d13.0801397!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1a19c848871d%3A0x808322ec058eb477!2sRAMKY%20SERENE%20WOODS%2C%20Chikkagubbi%20Village%2C%20Bengaluru%2C%20Karnataka%20560077!5e0!3m2!1sen!2sin!4v1679909707814!5m2!1sen!2sin" frameBorder="0" style={{border:0, width: '100%', height: '290px'}} title='map' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="forms/contact.php" method="post" className="php-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" name="name" className="form-control" id="name" required/>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email" required/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Subject</label>
                <input type="text" className="form-control" name="subject" id="subject" required/>
              </div>
              <div className="form-group">
                <label htmlFor="name">Message</label>
                <textarea className="form-control" name="message" rows="10" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
  )
}
