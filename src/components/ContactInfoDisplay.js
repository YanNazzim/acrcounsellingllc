import React from 'react';
import './ContactInfoDisplay.css';

function ContactInfoDisplay({ onStartForm }) {
  return (
    <section className="contact-info-section">
      <div className="contact-info-container">
        <h1>CONTACT US</h1>
        <p className="tagline">Emotional wellbeing and growth is possible.</p>
        <p className="description">
          Contact us to learn more about our work or to become a client.
        </p>

        <div className="office-hours">
          <h3>Office Hours:</h3>
          <p>Monday-Friday 9am-5pm</p>
        </div>

        <div className="contact-details">
          {/* Phone Number 1 with icon */}
          <p className="contact-item">
            <span className="icon phone-icon" aria-label="Phone">📞</span> 203-859-8708
          </p>
          {/* Email Address with icon */}
          <p className="contact-item">
            <span className="icon email-icon" aria-label="Email">📧</span> contact@acrcounselingllc.com
          </p>
          {/* Fax Number with icon */}
          <p className="contact-item">
            <span className="icon fax-icon" aria-label="Fax">📠</span> 508-492-1149
          </p>
        </div>

        <button className="start-form-button" onClick={onStartForm}>
          Have Us Contact You
        </button>
      </div>
    </section>
  );
}

export default ContactInfoDisplay;