// CustomVideo.js
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import playIcon from '../assets/images/play-icon.png'; // Import the play icon PNG image
import '../card.css';

function CustomVideo({ title, text, image, videoUrl, play }) {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
    play(); // Call the play function passed from the parent
  };

  return (
    <div className="ui-row mb-5">
      <div className="ui-col-mb-4">
        <Card style={{ width: '20rem' }}>
          {/* Image or video */}
          {showVideo ? (
            <div className="ui-video-container">
              <iframe
                width="100%"
                height="auto"
                src={`https://www.youtube.com/embed/${videoUrl}`}
                frameBorder="0"
                allowFullScreen
                title={title}
              ></iframe>
            </div>
          ) : (
            <div style={{ position: 'relative' }}>
              <Card.Img variant="top" src={image} />
              {/* Play button */}
              <div
                className="ui-play-button"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 1,
                }}
                onClick={handlePlayClick}
              >
                <img src={playIcon} alt="Play Icon" style={{ width: '50px', height: '50px' }} />
              </div>
            </div>
          )}

          <Card.Body>
            {/* Description */}
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default CustomVideo;
