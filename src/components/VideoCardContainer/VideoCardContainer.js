import React from 'react';
import "../VideoCardContainer/VideoCardContainer.css";
import "./video/"

const VideoCardContainer = () => {
  return (
    <div className="container cent">
      <div className="video-card-container">
        <div className="video-card">
          <img src="https://images.unsplash.com/photo-1622975696911-c1c444035f43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyZHN8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            className="video-card-image"
            alt="img"
          />
          <video
            src=""
            muted
            loop
            className="card-video"
          ></video>
        </div>
        <div className="video-card">
          <img
            src="img/download.png"
            className="video-card-image"
            alt=""
          />
          <video
            src="video/qh3yh_1587393133132.mp4"
            muted
            loop
            className="card-video"
          ></video>
        </div>
        <div className="video-card">
          <img
            src="img/download1.png"
            className="video-card-image"
            alt=""
          />
          <video
            src="video/qh3yh_1587393133132.mp4"
            muted
            loop
            className="card-video"
          ></video>
        </div>
        <div className="video-card">
          <img
            src="img/download1.png"
            className="video-card-image"
            alt=""
          />
          <video
            src="video/qh3yh_1587393133132.mp4"
            muted
            loop
            className="card-video"
          ></video>
        </div>

        {/* Repeat the structure for other video cards */}
        {/* ... */}
      </div>
    </div>
  );
};

export default VideoCardContainer;
