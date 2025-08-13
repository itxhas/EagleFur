import { useState, useEffect } from 'react';
// ...existing code...
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
  <section className="team-section">
      <div className="team-section-background">
        <div className="team-container">
          <div className="team-header">
            <h2 className="team-title" style={{ color: '#cf142b', fontWeight: 800 ,marginTop:'5rem'}}>
              Meet Our <span style={{ color: '#010e2e' }}>Leader</span>
            </h2>
            <p className="team-subtitle" style={{ color: 'white',marginBottom:'2rem' }}>
              The driving force behind our success
            </p>
            <h3 style={{ color: 'white', fontWeight: 700, marginTop: '2.5rem', textAlign: 'center' }}>
              Let's Create Something Amazing Together
            </h3>
          </div>
          <div className="team-display" style={{ justifyContent: 'center' }}>
            <div className="team-member" style={{ background: '#fff', borderRadius: '22px', boxShadow: '0 8px 32px #010e2e22', border: '2px solid #cf142b', color: '#010e2e', maxWidth: 340, padding: '2.5rem 2rem', margin: '0 auto', marginBottom:'5rem' }}>
              <img src={member.image} alt={member.name} style={{ width: '140px', height: '180px', borderRadius: '20%', objectFit: 'cover', margin: '1.2rem auto 1.2rem auto', border: '4px solid #010e2e', display: 'block' }} />
              <h3 style={{ color: '#cf142b', fontWeight: 700 }}>{member.name}</h3>
              <p style={{ color: '#010e2e', fontWeight: 600 }}>{member.role}</p>
              <p style={{ color: '#010e2e', fontSize: '1rem', margin: '1rem 0' }}>{member.bio}</p>
              {member.skills && member.skills.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                  {member.skills.map(skill => (
                    <span key={skill} style={{ background: '#010e2e', color: '#fff', borderRadius: '12px', padding: '6px 16px', fontWeight: 600, fontSize: '0.98rem' }}>{skill}</span>
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