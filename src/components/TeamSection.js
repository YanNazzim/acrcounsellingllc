import React, { useState } from 'react';
import './TeamSection.css'; // Assuming you'll create a TeamSection.css
import TeamMemberModal from './TeamMemberModal'; // Import the new modal component

// Import images directly
import AlyiaImage from '../images/Alyia.png';
import RaulImage from '../images/Raul.png';
import SamImage from '../images/Sam.png';
import AmandaImage from '../images/Amanda.png';
import AmoreImage from '../images/Amore.png';

// A sub-component for individual team members
function TeamMemberCard({ name, role, specialties, image, onLearnMore }) {
  return (
    <div className="team-member-card">
      <div className="member-image-container">
        <img src={image} alt={name} className="member-image" />
      </div>
      <h3>{name}</h3>
      <p className="role">{role}</p>
      {/* Conditionally render specialties only if the array is not empty */}
      {specialties && specialties.length > 0 && (
        <p>Specialties include: {specialties.join(', ')}</p>
      )}
      <button onClick={onLearnMore}>Learn More</button>
    </div>
  );
}

function TeamSection() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const teamMembers = [
    {
      name: 'Amor Colombres',
      role: 'Clinical Director',
      specialties: ['Depression', 'Eating Disorders', 'OCD'],
      image: AmoreImage,
      yearsInPractice: 10,
      bio: "Amor is the heart of ACR Counseling, dedicating a decade to guiding clients through complex emotional landscapes. Her empathetic approach fosters a safe space for healing and growth, specializing in mood disorders, body image issues, and anxiety spectrum challenges. She believes in empowering individuals to discover their inner strength."
    },
    {
      name: 'Amanda Page',
      role: 'Clinical Supervisor',
      specialties: ['Trauma Processing', 'Depression', 'Anxiety Disorders'],
      image: AmandaImage,
      yearsInPractice: 8,
      bio: "Amanda brings extensive experience in trauma-informed care, helping clients process difficult experiences and build resilience. As a supervisor, she mentors other clinicians, ensuring high standards of care. Her passion lies in helping individuals reclaim their narratives and live fulfilling lives free from past burdens."
    },
    {
      name: 'Alyia Pothemont',
      role: 'Clinician',
      specialties: ['Depression', 'Anxiety Disorders', 'Trauma Processing'],
      image: AlyiaImage,
      yearsInPractice: 5,
      bio: "Alyia is a compassionate clinician focused on providing client-centered care for anxiety and depression. She utilizes evidence-based practices to support individuals in developing coping mechanisms and fostering self-compassion. Alyia is committed to creating a collaborative therapeutic relationship."
    },
    {
      name: 'Sam Croteau',
      role: 'Clinician',
      specialties: ['Anxiety/Mood disorders', 'ADHD', 'ASD', 'Trauma Processing', 'Problematic Sexualized Behaviors'],
      image: SamImage,
      yearsInPractice: 7,
      bio: "Sam is a versatile clinician with a broad range of expertise, including working with neurodivergent individuals. They employ a holistic approach, tailoring therapy to each client's unique needs and strengths. Sam is particularly skilled in navigating complex behavioral patterns and fostering positive change."
    },
    {
      name: 'Raul Colombres',
      role: 'Director of Operations',
      specialties: [], // This is correctly an empty array
      image: RaulImage,
      yearsInPractice: 12,
      bio: "Raul ensures the smooth functioning of ACR Counseling, managing all administrative and operational aspects. His dedication allows the clinical team to focus solely on client care. With a background in healthcare administration, he is committed to providing an accessible and efficient experience for all clients."
    }
  ];

  const handleLearnMore = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

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
            image={member.image}
            onLearnMore={() => handleLearnMore(member)}
          />
        ))}
      </div>
      {isModalOpen && selectedMember && (
        <TeamMemberModal member={selectedMember} onClose={handleCloseModal} />
      )}
    </section>
  );
}

export default TeamSection;