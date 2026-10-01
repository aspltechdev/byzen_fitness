// import React from 'react';
// import './Contact.css';

// const Contact = () => {
//   return (
//     <section id="contact" className="b-c-section">
//       {/* Subtle background dots for premium texture */}
//       <div className="b-c-dots"></div>

//       <div className="b-c-container">
        
//         <div className="b-c-header">
//           <span className="b-c-badge">GET IN TOUCH</span>
//           <h2 className="b-c-title">
//             <span className="b-c-white">CONTACT</span>
//             <span className="b-c-orange">BYSEN</span>
//           </h2>
//           <p className="b-c-desc">
//             Have questions about our memberships, training programs, or facility? Reach out to our team and we'll get back to you within 24 hours.
//           </p>
//         </div>

//         <div className="b-c-grid">
          
//           {/* --- Left Column: Contact Information Cards --- */}
//           <div className="b-c-info-col">
//             <div className="b-c-card">
//               <div className="b-c-icon-box">
//                 <svg className="b-c-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
//               </div>
//               <div className="b-c-card-text">
//                 <h4>Phone</h4>
//                 <p>+918667309414</p>
//               </div>
//             </div>

//             <div className="b-c-card">
//               <div className="b-c-icon-box">
//                 <svg className="b-c-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
//               </div>
//               <div className="b-c-card-text">
//                 <h4>Email</h4>
//                 <p>info@bysenfitness.com</p>
//               </div>
//             </div>

//             <div className="b-c-card">
//               <div className="b-c-icon-box">
//                 <svg className="b-c-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
//               </div>
//               <div className="b-c-card-text">
//                 <h4>Location</h4>
//                 <p>5, 1st Cross St, Vanathu Nagar, Reddiarpalayam, Puducherry, 605010</p>
//               </div>
//             </div>

//             <div className="b-c-card">
//               <div className="b-c-icon-box">
//                 <svg className="b-c-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
//               </div>
//               <div className="b-c-card-text">
//                 <h4>Working Hours</h4>
//                 <p>Mon - Sun | 5AM - 12AM</p>
//               </div>
//             </div>
//           </div>

//           {/* --- Right Column: Inquiry Form --- */}
//           <div className="b-c-form-col">
//             <div className="b-c-form-wrapper">
//               <h3 className="b-c-form-title">Send An Inquiry</h3>
              
//               <form className="b-c-form">
//                 <div className="b-c-input-group">
//                   <input type="text" placeholder="Full Name" className="b-c-input" required />
//                 </div>
                
//                 <div className="b-c-input-group">
//                   <input type="email" placeholder="Email Address" className="b-c-input" required />
//                 </div>
                
//                 <div className="b-c-input-group">
//                   <input type="tel" placeholder="Phone Number" className="b-c-input" required />
//                 </div>
                
//                 <div className="b-c-input-group">
//                   <select className="b-c-select" required>
//                     <option value="" disabled selected>Select Program</option>
//                     <option value="membership">Membership Plan</option>
//                     <option value="crossfit">CrossFit Training</option>
//                     <option value="zumba">Zumba Classes</option>
//                     <option value="personal">Personal Training</option>
//                     <option value="protein">Protein HUB</option>
//                   </select>
//                 </div>
                
//                 <div className="b-c-input-group">
//                   <textarea rows="4" placeholder="Tell us about your requirement..." className="b-c-textarea" required></textarea>
//                 </div>
                
//                 <button type="submit" className="b-c-submit-btn">
//                   Send Inquiry 
//                   <span className="b-c-send-icon">
//                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
//                   </span>
//                 </button>
//               </form>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* --- Floating WhatsApp Button (Themed Orange) --- */}
//       <a href="https://wa.me/+918667309414" target="_blank" rel="noopener noreferrer" className="b-c-whatsapp-btn" aria-label="Contact us on WhatsApp">
//         <svg fill="#ffffff" viewBox="0 0 24 24" width="28" height="28"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
//       </a>
//     </section>
//   );
// };

// export default Contact;


import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://api.w3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'w3f_43efcf3f71cbb2d01b85a21671c32426b6869fa0404e7bfc',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          program: formData.program,
          message: formData.message,
          // Optional: Add your website URL for tracking
          // from_url: window.location.href,
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: '✅ Thank you! Your inquiry has been sent successfully. We\'ll get back to you within 24 hours.' 
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          program: '',
          message: ''
        });
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: '❌ Something went wrong. Please try again or contact us directly at info@bysenfitness.com' 
        });
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: '⚠️ Network error. Please check your connection and try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="b-c-section">
      {/* Subtle background dots for premium texture */}
      <div className="b-c-dots"></div>

      <div className="b-c-container">
        
        <div className="b-c-header">
          <span className="b-c-badge">GET IN TOUCH</span>
          <h2 className="b-c-title">
            <span className="b-c-white">CONTACT</span>
            <span className="b-c-orange">BYSEN</span>
          </h2>
          <p className="b-c-desc">
            Have questions about our memberships, training programs, or facility? Reach out to our team and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="b-c-grid">
          
          {/* --- Left Column: Contact Information Cards --- */}
          <div className="b-c-info-col">
            <div className="b-c-card">
              <div className="b-c-icon-box">
                <svg className="b-c-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div className="b-c-card-text">
                <h4>Phone</h4>
                <p>+91 8667309414</p>
                <p>+91 9655221117</p>
              </div>
            </div>

            <div className="b-c-card">
              <div className="b-c-icon-box">
                <svg className="b-c-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div className="b-c-card-text">
                <h4>Email</h4>
                <p>info@bysenfitness.com</p>
                <p>bysen.fitness@gmail.com</p>
              </div>
            </div>

            <div className="b-c-card">
              <div className="b-c-icon-box">
                <svg className="b-c-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div className="b-c-card-text">
                <h4>Location</h4>
                <p>5, 1st Cross St, Vanathu Nagar, Reddiarpalayam, Puducherry, 605010</p>
              </div>
            </div>

            <div className="b-c-card">
              <div className="b-c-icon-box">
                <svg className="b-c-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div className="b-c-card-text">
                <h4>Working Hours</h4>
                <p>Mon - Sat | 5:30 AM - 10:30 PM</p>
                <p>Sun | 6 AM - 12 PM</p>
              </div>
            </div>
          </div>

          {/* --- Right Column: Inquiry Form --- */}
          <div className="b-c-form-col">
            <div className="b-c-form-wrapper">
              <h3 className="b-c-form-title">Send An Inquiry</h3>
              
              {/* Status Message */}
              {submitStatus.message && (
                <div className={`b-c-status ${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <form className="b-c-form" onSubmit={handleSubmit}>
                <div className="b-c-input-group">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Full Name" 
                    className="b-c-input" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="b-c-input-group">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email Address" 
                    className="b-c-input" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="b-c-input-group">
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Phone Number" 
                    className="b-c-input" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="b-c-input-group">
                  <select 
                    className="b-c-select" 
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select Program</option>
                    <option value="Membership Plan">Membership Plan</option>
                    <option value="CrossFit Training">CrossFit Training</option>
                    <option value="Zumba Classes">Zumba Classes</option>
                    <option value="Personal Training">Personal Training</option>
                    <option value="Protein HUB">Protein HUB</option>
                  </select>
                </div>
                
                <div className="b-c-input-group">
                  <textarea 
                    name="message"
                    rows="4" 
                    placeholder="Tell us about your requirement..." 
                    className="b-c-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="b-c-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  <span className="b-c-send-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  </span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* --- Floating WhatsApp Button (Themed Orange) --- */}
      <a href="https://wa.me/+918667309414" target="_blank" rel="noopener noreferrer" className="b-c-whatsapp-btn" aria-label="Contact us on WhatsApp">
        <svg fill="#ffffff" viewBox="0 0 24 24" width="28" height="28"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </section>
  );
};

export default Contact;