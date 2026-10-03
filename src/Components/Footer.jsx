import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Academy Info */}
        <div className="footer-column footer-about">
          <h2>ELITE <span>ATHELETICS</span> GROUP</h2>

          <p>
            Train with discipline, build your strength and take
            your next step towards becoming a better athlete.
          </p>

          <a href="#contact" className="footer-join">
            Join Our Academy <span>→</span>
          </a>
        </div>


        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#courses">Courses</a>
          <a href="#students">Students</a>
          <a href="#contact">Contact</a>
        </div>


        {/* Training */}
        <div className="footer-column">
          <h3>Training</h3>

          <a href="#courses">100m Sprint</a>
          <a href="#courses">500m Running</a>
          <a href="#courses">1600m Running</a>
          <a href="#courses">Long Jump</a>
          <a href="#courses">Javelin Throw</a>
        </div>


        {/* Contact */}
        <div className="footer-column footer-contact">
          <h3>Get In Touch</h3>

          <p>
            📍 Saharanpur, Uttar Pradesh
          </p>

          <p>
            📞 +91 XXXXX XXXXX
          </p>

          <p>
            ✉️ eliteathletics@gmail.com
          </p>
        </div>

      </div>


      {/* Bottom Footer */}
      <div className="footer-bottom">

        <p>
          © 2026 ELITE ATHELETICS GROUP. All Rights Reserved.
        </p>

        <p>
          Made with Aditya Panwar
        </p>

      </div>

    </footer>
  );
}

export default Footer;