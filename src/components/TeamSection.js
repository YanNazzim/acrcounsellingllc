import React from 'react';
import './TeamSection.css'; // Assuming you'll create a TeamSection.css

// Import images directly
import AlyiaImage from '../images/Alyia.png';
import RaulImage from '../images/Raul.png';
import SamImage from '../images/Sam.png';
import AmandaImage from '../images/Amanda.png';
import AmoreImage from '../images/Amore.png';

// A sub-component for individual team members
function TeamMemberCard({ name, role, specialties, image }) { // Added 'image' prop
  return (
    <div className="team-member-card">
      <div className="member-image-container">
        <img src={image} alt={name} className="member-image" />
      </div>
      <h3>{name}</h3>
      <p className="role">{role}</p>
      <p>Specialties include: {specialties.join(', ')}</p>
      <button>Learn More</button>
    </div>
  );
}

function TeamSection() {
  const teamMembers = [
    { name: 'Amor Colombres', role: 'Clinical Director', specialties: ['Depression', 'Eating Disorders', 'OCD'], image: AmoreImage },
    { name: 'Amanda Page', role: 'Clinical Supervisor', specialties: ['Trauma Processing', 'Depression', 'Anxiety Disorders'], image: AmandaImage },
    { name: 'Alyia Pothemont', role: 'Clinician', specialties: ['Depression', 'Anxiety Disorders', 'Trauma Processing'], image: AlyiaImage },
    { name: 'Sam Croteau', role: 'Clinician', specialties: ['Anxiety/Mood disorders', 'ADHD', 'ASD', 'Trauma Processing', 'Problematic Sexualized Behaviors'], image: SamImage },
    { name: 'Raul Colombres', role: 'Director of Operations', specialties: [], image: RaulImage }
  ];

  return (
    <section className="team-section">
      <h2>Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            role={member.role}
            specialties={member.specialties}
            image={member.image} // Pass the image prop
          />
        ))}
      </div>
    </section>
  );
}

export default TeamSection;