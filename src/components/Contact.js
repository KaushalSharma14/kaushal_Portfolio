import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // 🔧 EMAILJS SETUP INSTRUCTIONS:
    // 1. ✅ Public Key: pyyUhnvGIVH0Ihr4A (ALREADY DONE!)
    // 2. ⏳ Service ID: Get from EmailJS → Email Services → Copy Service ID
    // 3. ⏳ Template ID: Get from EmailJS → Email Templates → Copy Template ID
    // 4. Replace the 2 values below with your actual IDs
    
    emailjs.sendForm(
      'YOUR_SERVICE_ID',     // ← Replace with: service_abc123 (from Email Services)
      'YOUR_TEMPLATE_ID',    // ← Replace with: template_xyz789 (from Email Templates)
      form.current,
      'pyyUhnvGIVH0Ihr4A'   // ✅ Your Public Key (ALREADY DONE!)
    )
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setSubmitStatus('success');
        form.current.reset();
      }, (error) => {
        console.log('FAILED...', error.text);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div>
      <div className="section-header">
        <h2>Let's Connect</h2>
        <p>Get in touch with me</p>
      </div>
      
      <div className="contact-content">
        <div className="contact-info">
          <h3>Contact Information</h3>
          
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <a href="mailto:kaushalmdw@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>
              kaushalmdw@gmail.com
            </a>
          </div>
          
          <div className="contact-item">
            <i className="fab fa-linkedin"></i>
            <a href="https://linkedin.com/in/kaushal-sharma-sde" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
              linkedin.com/in/kaushal-sharma-sde
            </a>
          </div>
          
          <div className="contact-item">
            <i className="fab fa-github"></i>
            <a href="https://github.com/KaushalSharma14" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
              github.com/KaushalSharma14
            </a>
          </div>
          
          <div className="contact-item">
            <i className="fab fa-instagram"></i>
            <a href="https://www.instagram.com/kawshal_sharma/?igsh=aGN6emptd3d0eHF2&utm_source=qr#" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
              @kawshal_sharma
            </a>
          </div>
          
          <div className="contact-item">
            <i className="fas fa-camera"></i>
            <a href="https://www.instagram.com/capturedbykaushal/?igsh=MjloMjk3ZHZrdndq&utm_source=qr#" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
              @capturedbykaushal (Photography)
            </a>
          </div>
          
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Mandawa, Rajasthan, India</span>
          </div>
          
          <div className="contact-item">
            <i className="fas fa-graduation-cap"></i>
            <span>MCA Final Year, Lovely Professional University, Punjab</span>
          </div>
        </div>
        
        <div className="contact-form">
          <h3>Send me a message</h3>
          
          {/* 📧 EMAILJS FORM - READY TO USE! */}
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="user_name">Name *</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="user_email">Email *</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message here..."
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Sending...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i> Send Message
                </>
              )}
            </button>
            
            {submitStatus === 'success' && (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                <div>
                  <strong>Message sent successfully!</strong><br/>
                  I'll get back to you within 24 hours.
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="error-message">
                <i className="fas fa-exclamation-circle"></i>
                <div>
                  <strong>Failed to send message.</strong><br/>
                  Please try again or contact me directly at kaushalmdw@gmail.com
                </div>
              </div>
            )}
          </form>
          
          {/* 💡 QUICK SETUP TIP */}
          <div className="setup-tip">
            <p><strong>🎯 Setup Progress:</strong></p>
            <ul style={{ textAlign: 'left', margin: '1rem 0', paddingLeft: '2rem' }}>
              <li>✅ Public Key: <code>pyyUhnvGIVH0Ihr4A</code></li>
              <li>⏳ Service ID: Get from EmailJS → Email Services</li>
              <li>⏳ Template ID: Get from EmailJS → Email Templates</li>
            </ul>
            <p><strong>💡 Next:</strong> Replace the 2 remaining placeholder values to make your contact form work!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
