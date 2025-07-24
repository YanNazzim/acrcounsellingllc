import React from 'react';
import './TeamMemberModal.css';

function TeamMemberModal({ member, onClose }) {
  if (!member) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Prevent clicks inside from closing */}
        <button className="modal-close-button" onClick={onClose}>&times;</button>
        <div className="modal-header">
          <div className="modal-image-container">
            <img src={member.image} alt={member.name} className="modal-member-image" />
          </div>
          <h2>{member.name}</h2>
          <p className="modal-role">{member.role}</p>
        </div>
        <div className="modal-body">
          {member.yearsInPractice && (
            <p className="modal-detail"><strong>Years in Practice:</strong> {member.yearsInPractice}</p>
          )}
          {member.specialties && member.specialties.length > 0 && (
            <p className="modal-detail"><strong>Specialties:</strong> {member.specialties.join(', ')}</p>
          )}
          {member.bio && (
            <div className="modal-description">
              <h3>Biography</h3>
              <p>{member.bio}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeamMemberModal;