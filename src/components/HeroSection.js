import React, { useState } from 'react';
import './HeroSection.css'; // Assuming you'll create a HeroSection.css
import VideoModal from './VideoModal'; // Import the VideoModal component
import teletherapy from '../images/teletherapy 1080P.mp4'; // Import your video file

function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  // A placeholder video URL. Replace with your actual video file.
  const teletherapyVideo = teletherapy;

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h2>Teletherapy for Individuals of all Ages</h2>
          <p>Teletherapy allows individuals the flexibility to connect through a secure platform with a licensed therapist whenever they are ready to begin their journey towards healing, growth, and discovery.</p>
          <div className="hero-buttons">
            <button onClick={openVideoModal} className="hero-button video-button">Watch Our Video</button>
            <button className="hero-button appointment-button">Schedule an Appointment</button>
          </div>
        </div>
      </section>
      {isVideoModalOpen && (
        <VideoModal videoSrc={teletherapyVideo} onClose={closeVideoModal} />
      )}
    </>
  );
}

export default HeroSection;