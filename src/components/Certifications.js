import React, { useState } from 'react';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certifications = [
    {
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      description: "Comprehensive certification covering modern web development practices, responsive design principles, and accessibility standards.",
      icon: "fas fa-certificate",
      image: `${process.env.PUBLIC_URL}/certificate/responsive-web-design.jpg.jpg`
    },
    {
      title: "Computer Communication & Networking",
      issuer: "Saylor Academy",
      description: "Advanced networking concepts, protocols, and system integration principles for modern computing environments.",
      icon: "fas fa-network-wired",
      image: `${process.env.PUBLIC_URL}/certificate/networking.jpg.jpg`
    },
    {
      title: "Software Engineering",
      issuer: "Saylor Academy",
      description: "Software development lifecycle, Agile methodologies, and best practices for building scalable applications.",
      icon: "fas fa-code-branch",
      image: `${process.env.PUBLIC_URL}/certificate/software-engineering.jpg.jpg`
    }
  ];

  const openModal = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
  };

  return (
    <div>
      <div className="section-header">
        <h2>Certifications</h2>
        <p>Professional development and learning achievements</p>
      </div>
      
      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <i className={cert.icon} style={{ fontSize: '3rem', color: '#b74b4b', marginBottom: '2rem' }}></i>
            <h3>{cert.title}</h3>
            <p><strong>{cert.issuer}</strong></p>
            <p>{cert.description}</p>
            <button className="btn" onClick={() => openModal(cert)}>
              <i className="fas fa-eye"></i>
              View Certificate
            </button>
          </div>
        ))}
      </div>

      {/* Certificate Modal */}
      {isModalOpen && selectedCert && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedCert.title}</h3>
              <button className="modal-close" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <img 
                src={selectedCert.image} 
                alt={`${selectedCert.title} Certificate`}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x400/b74b4b/ffffff?text=Certificate+Image';
                }}
              />
              <div className="cert-details">
                <p><strong>Issuer:</strong> {selectedCert.issuer}</p>
                <p>{selectedCert.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;
