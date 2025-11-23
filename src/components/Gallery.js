import React, { useState } from 'react';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('photography');

  const galleryData = {
    photography: [
      {
        id: 1,
        title: "Snake Photography",
        description: "Capturing the beauty and mystery of wildlife",
        image: `${process.env.PUBLIC_URL}/snakephoto.jpg`,
        link: "https://www.instagram.com/capturedbykaushal/?igsh=MjloMjk3ZHZrdndq&utm_source=qr#"
      },
      {
        id: 2,
        title: "Man Photography",
        description: "Portrait photography capturing human emotions",
        image: `${process.env.PUBLIC_URL}/man.jpg`,
        link: "https://www.instagram.com/capturedbykaushal/?igsh=MjloMjk3ZHZrdndq&utm_source=qr#"
      },
      {
        id: 3,
        title: "Stadium Photography",
        description: "Architectural and sports venue photography",
        image: `${process.env.PUBLIC_URL}/stadium.jpg`,
        link: "https://www.instagram.com/capturedbykaushal/?igsh=MjloMjk3ZHZrdndq&utm_source=qr#"
      }
    ],
    videography: [
      {
        id: 1,
        title: "Creative Video Project",
        description: "Exploring new places and sharing experiences",
        video: "https://www.youtube.com/embed/rlqsVfdB2hs",
        link: "https://youtu.be/rlqsVfdB2hs"
      },
      {
        id: 2,
        title: "Event Coverage Video",
        description: "Professional event documentation",
        video: "https://www.youtube.com/embed/LdaPi3alyCE",
        link: "https://youtu.be/LdaPi3alyCE"
      },
      {
        id: 3,
        title: "Short Film Project",
        description: "Creative storytelling through video",
        video: "https://www.youtube.com/embed/Hk4DPBtsQZY",
        link: "https://youtu.be/Hk4DPBtsQZY"
      }
    ]
  };

  return (
    <div>
      <div className="section-header">
        <h2>Photography & Videography</h2>
        <p>Creative content and visual storytelling</p>
      </div>
      
      <div className="gallery-tabs">
        <button 
          className={`tab-btn ${activeTab === 'photography' ? 'active' : ''}`}
          onClick={() => setActiveTab('photography')}
        >
          <i className="fas fa-camera"></i>
          Photography
        </button>
        <button 
          className={`tab-btn ${activeTab === 'videography' ? 'active' : ''}`}
          onClick={() => setActiveTab('videography')}
        >
          <i className="fas fa-video"></i>
          Videography & Editing
        </button>
      </div>

      <div className="gallery-content">
        {activeTab === 'photography' && (
          <div className="gallery-grid">
            {galleryData.photography.map((item) => (
              <div key={item.id} className="gallery-item">
                <img 
                  src={item.image} 
                  alt={item.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `${process.env.PUBLIC_URL}/kaushal.jpg`;
                  }}
                />
                <div className="item-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="gallery-link">
                    <i className="fab fa-instagram"></i>
                    View on @capturedbykaushal
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'videography' && (
          <div className="gallery-grid">
            {galleryData.videography.map((item) => (
              <div key={item.id} className="gallery-item video-item">
                <iframe 
                  src={item.video} 
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="item-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="gallery-link">
                    <i className="fab fa-youtube"></i>
                    Watch on YouTube
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
