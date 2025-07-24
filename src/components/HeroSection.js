import React from 'react';
import './HeroSection.css'; // Assuming you'll create a HeroSection.css

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>Teletherapy for Individuals of all Ages</h2>
        <p>Teletherapy allows individuals the flexibility to connect through a secure platform with a licensed therapist whenever they are ready to begin their journey towards healing, growth, and discovery.</p>
        <button>Schedule an Appointment</button>
      </div>
    </section>
  );
}

export default HeroSection;