import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Team.css';

const teamMembers = [
  {
    id: 1,
    name: 'Dr Abdul Rehman',
    role: 'CEO',
    image: '/Images/drAdulRehman.jpg', // This is correct as per the public/Images directory
    bio: 'I’m  dedicated to delivering top-quality solutions tailored to your business needs. I’m ready to bring my expertise and passion to help you achieve outstanding results.',
    skills: []
  }
];

const Team = () => {
  const member = teamMembers[0];
  return (
    <section className="team-section" style={{ background: '#fff', borderRadius: '32px', boxShadow: '0 8px 32px rgba(0,36,125,0.10)', padding: '4rem 0' }}>
      <div className="team-section-background">
        <div className="team-container">
          <div className="team-header">
            <h2 className="team-title" style={{ color: '#cf142b', fontWeight: 800 }}>
              Meet Our <span style={{ color: '#00247d' }}>Leader</span>
            </h2>
            <p className="team-subtitle" style={{ color: '#00247d' }}>
              The driving force behind our success
            </p>
          </div>
          <div className="team-display" style={{ justifyContent: 'center' }}>
            <div className="team-member" style={{ background: '#fff', borderRadius: '22px', boxShadow: '0 8px 32px #00247d22', border: '2px solid #cf142b', color: '#00247d', maxWidth: 340, padding: '2.5rem 2rem', margin: '0 auto' }}>
              <img src={member.image} alt={member.name} style={{ width: '140px', height: '180px', borderRadius: '20%', objectFit: 'cover', margin: '1.2rem auto 1.2rem auto', border: '4px solid #00247d', display: 'block' }} />
              <h3 style={{ color: '#cf142b', fontWeight: 700 }}>{member.name}</h3>
              <p style={{ color: '#00247d', fontWeight: 600 }}>{member.role}</p>
              <p style={{ color: '#00247d', fontSize: '1rem', margin: '1rem 0' }}>{member.bio}</p>
              {member.skills && member.skills.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                  {member.skills.map(skill => (
                    <span key={skill} style={{ background: '#00247d', color: '#fff', borderRadius: '12px', padding: '6px 16px', fontWeight: 600, fontSize: '0.98rem' }}>{skill}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;