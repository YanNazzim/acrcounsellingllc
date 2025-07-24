import React from 'react';
import './ServicesSection.css'; // Assuming you'll create a ServicesSection.css

function ServicesSection() {
  const services = [
    'Anxiety', 'ADHD', 'Depression', 'Bipolar Depression', 'Eating Disorders',
    'Gender Dysphoria', 'Grief', 'Trauma and PTSD', 'OCD',
    'Identity Development', 'LGBTQIA+', 'Life Transitions', 'Relationship Challenges',
    'Personality Disorders'
  ]; //

  return (
    <section className="services-section">
      <h2>Services Provided</h2>
      <h3>​Our licensed therapists' provide individual, couple, and family therapy. <br/><br/>Treatment Specializations include:</h3>
      <div className="services-list">
        {services.map((service, index) => (
          <p key={index}>{service}</p>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;