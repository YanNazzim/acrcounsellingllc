import React from 'react';
import './VideoModal.css';

function VideoModal({ videoSrc, onClose }) {
  if (!videoSrc) return null;

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal-close-button" onClick={onClose}>&times;</button>
        <div className="video-player-container">
          <video controls autoPlay>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default VideoModal;