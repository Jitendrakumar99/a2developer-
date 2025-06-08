import React, { useState } from 'react';
import './HeroSection.css'; 

const HeroSection = () => {
  const [contentIndex, setContentIndex] = useState(0);

  const content = [
    {
      title: "All Your Information in One Place",
      subtitle: "Simplify Management with a Unified Data Platform.",
      video: "https://a2developers.org/images/homepage/new_c.mp4"
    },
    {
      title: "Access Anytime, Anywhere",
      subtitle: "Empowering You with Data on Demand Across Devices.",
      video: "https://a2developers.org/images/homepage/video2.mp4"
    },
    {
      title: "Lower Costs, Higher Value",
      subtitle: "Offering Premium Features at a Fraction of the Price.",
      video: "https://a2developers.org/images/homepage/less.mp4"
    }
  ];
console.log(content[contentIndex].video);

  const handleDotClick = (index) => {
    console.log(index);
    
    setContentIndex(index);
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="title">{content[contentIndex].title}</h1>
        <p className="subtitle">{content[contentIndex].subtitle}</p>
          <video   key={content[contentIndex].video} autoPlay muted  className="hero-video" 
           onEnded={() =>
            setContentIndex((prevIndex) => (prevIndex + 1) % content.length)
          }>
            <source src={content[contentIndex].video} type="video/mp4" />
          </video>
      </div>
      <div className="pagination-dots">
        {content.map((_, index) => (
          <span
            key={index}
            className={`dot ${contentIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSection; 