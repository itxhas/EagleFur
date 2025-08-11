import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FiArrowRight, FiTarget, FiTrendingUp, FiUsers, FiAward, FiZap, FiShield, FiHeart } from 'react-icons/fi';
import './About.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import React, { useRef, useEffect, useState } from 'react';

const About = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // If on homepage, show basic info with "Learn More" link
  if (isHomePage) {
    return (
      <section className="about-section">
        <div className="about-container">
          <div className="about-header">
            <h2 className="about-title">
              Transforming your ideas into digital reality
            </h2>
            <p className="about-subtitle">
              We are a passionate team of innovators, developers, and designers dedicated to creating cutting-edge solutions that drive business growth and digital transformation.
            </p>
          </div>

          <motion.div
            className="about-highlights"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="highlights-grid">
              <motion.div
                className="highlight-card"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="highlight-icon">
                  <FiTarget />
                </div>
                <h3>Mission-Driven</h3>
                <p>Empowering businesses with innovative technology solutions that create lasting impact.</p>
              </motion.div>

              <motion.div
                className="highlight-card"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="highlight-icon">
                  <FiTrendingUp />
                </div>
                <h3>Growth Focused</h3>
                <p>Scalable solutions designed to grow with your business and adapt to changing needs.</p>
              </motion.div>

              <motion.div
                className="highlight-card"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="highlight-icon">
                  <FiUsers />
                </div>
                <h3>Client-Centric</h3>
                <p>Your success is our priority. We work closely with you to deliver exactly what you need.</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="about-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Link to="/about" className="learn-more-btn">
              <span>Learn More About Us</span>
              <FiArrowRight className="arrow-icon" />
              <div className="btn-glow"></div>
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  // If on about page, show detailed information
  return (
    <section className="about-detail-section">
      <div className="about-detail-container">
        {/* Hero Section */}
        <div className="about-hero">
          <h1 className="about-hero-title">
            About <span className="gradient-text">EagleFur</span>
          </h1>
          <p className="about-hero-subtitle">
            We are a forward-thinking technology company that specializes in creating innovative digital solutions. Our mission is to transform businesses through cutting-edge technology, data-driven insights, and exceptional user experiences.
          </p>
        </div>

        {/* Values Section */}
        <motion.div
          className="values-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            {[
              {
                icon: <FiZap />,
                title: "Innovation",
                description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions."
              },
              {
                icon: <FiShield />,
                title: "Quality",
                description: "Every project is crafted with attention to detail and commitment to excellence."
              },
              {
                icon: <FiHeart />,
                title: "Passion",
                description: "We're passionate about technology and dedicated to making a positive impact."
              },
              {
                icon: <FiAward />,
                title: "Excellence",
                description: "We strive for excellence in everything we do, from code quality to client relationships."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          className="process-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Process</h2>
          <div className="process-steps">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We start by understanding your business goals, challenges, and vision for the project."
              },
              {
                step: "02",
                title: "Strategy",
                description: "Our team develops a comprehensive strategy and technical roadmap for your solution."
              },
              {
                step: "03",
                title: "Development",
                description: "We build your solution using modern technologies and best practices."
              },
              {
                step: "04",
                title: "Launch",
                description: "We deploy your solution and provide ongoing support to ensure success."
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                className="process-step"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="step-number">{process.step}</div>
                <div className="step-content">
                  <h3>{process.title}</h3>
                  <p>{process.description}</p>
                </div>
                {index < 3 && <div className="step-connector"></div>}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <div className="team-section">
          <h2 className="section-title">Our Team</h2>
          <p className="team-description">
            Our team consists of experienced developers, designers, and strategists who are passionate about creating exceptional digital experiences. We combine technical expertise with creative thinking to deliver solutions that exceed expectations.
          </p>
          <div className="team-stats">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>

        {/* Client Reviews Section - Animated, Stacking, Scroll-triggered */}
        <AnimatedReviewsSection />
      </div>
    </section>
  );
};

export default About;

// --- AnimatedReviewsSection: Scroll-triggered, stacking reviews ---
function AnimatedReviewsSection() {
  const reviews = [
    {
      text: '"Working with Eaglefur was a game-changer for our business. Their innovative solutions and dedication to quality exceeded our expectations."',
      author: '- Sarah J., CEO, Visionary Brands'
    },
    {
      text: '"The team at Eaglefur delivered our project on time and with exceptional attention to detail. Their expertise in tech and design is unmatched."',
      author: '- Michael T., CTO, NextGen Solutions'
    },
    {
      text: '"From start to finish, Eaglefur provided outstanding support and creative ideas. We saw measurable growth thanks to their work."',
      author: '- Priya S., Founder, DataSpark'
    },
    {
      text: '"Professional, responsive, and truly invested in our success. We felt like partners every step of the way."',
      author: '- Ahmed R., COO, InnovateX'
    },
    {
      text: '"Eaglefur transformed our vision into reality. We highly recommend them for any digital project!"',
      author: '- Emily W., Marketing Director, BrightPath'
    }
  ];

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { margin: '-40% 0px -40% 0px', amount: 0.5 });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 900;
  const prev = useRef(current);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // On mobile, always auto-advance. On desktop, only if in view.
    if ((isMobile || isSectionInView) && !paused) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % reviews.length);
      }, 5000); // 5 seconds per review for smoother experience
      return () => clearInterval(interval);
    }
  }, [isMobile, isSectionInView, reviews.length, paused]);

  // For sliding animation direction
  useEffect(() => { prev.current = current; }, [current]);

  // Only show up to 3 reviews in the stack for desktop, 1 for mobile
  const stacked = isMobile
    ? [{ ...reviews[current], stackIndex: 0, key: `${current}-0` }]
    : [0, 1, 2].map((offset) => {
        const idx = (current + offset) % reviews.length;
        return { ...reviews[idx], stackIndex: offset, key: `${idx}-${offset}` };
      });

  return (
    <section ref={sectionRef} className="reviews-section about-detail-container" style={{ marginTop: '4rem', background: 'linear-gradient(135deg, #00247d 0%, #cf142b 100%)', borderRadius: '24px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '4rem 2rem' }}>
      <div className="reviews-left" style={{ flex: 1, minWidth: 320, maxWidth: 520, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', marginRight: '2.5rem' }}>
        <h3 className="reviews-main-heading" style={{ fontSize: '3.2rem', fontWeight: 800, color: '#cf142b', marginBottom: '1.2rem', letterSpacing: '-1px', lineHeight: 1.1, textAlign: 'center', width: '100%' }}>
          What our clients say
        </h3>
        <p className="reviews-subheading" style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 500, margin: 0, maxWidth: 480, textAlign: 'center', width: '100%' }}>
          Don&apos;t just take our word for it – hear it straight from our clients!
        </p>
      </div>
      <div
        className="reviews-right"
        onMouseEnter={!isMobile ? () => setPaused(true) : undefined}
        onMouseLeave={!isMobile ? () => setPaused(false) : undefined}
        style={{ flex: 1.2, minWidth: 320, maxWidth: 600, position: 'relative', height: isMobile ? 'auto' : 320, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {!isMobile && (
          <>
            <button onClick={() => setCurrent((current - 1 + reviews.length) % reviews.length)} className="arrow left">‹</button>
            <button onClick={() => setCurrent((current + 1) % reviews.length)} className="arrow right">›</button>
          </>
        )}
        <AnimatePresence initial={false} key={isMobile ? current : undefined}>
          {stacked.map((review) => {
            // console.log('Current:', current);
            return (
              <motion.div
                key={isMobile ? current : review.key}
                className="review-card-stacked"
                initial={isMobile ? { opacity: 0, x: 100 } : { opacity: 0, y: 60, scale: 0.96 }}
                animate={isMobile ? { opacity: 1, x: 0 } : {
                  opacity: 1 - review.stackIndex * 0.25,
                  y: review.stackIndex * 24,
                  scale: 1 - review.stackIndex * 0.04,
                  zIndex: 10 - review.stackIndex,
                  filter: review.stackIndex === 0 ? 'none' : 'blur(1px)',
                }}
                exit={isMobile ? { opacity: 0, x: -100 } : { opacity: 0, y: 60, scale: 0.96 }}
                transition={{ duration: 0.9, type: 'spring', stiffness: 80, damping: 18 }}
                style={isMobile ? {
                  background: '#fff',
                  borderRadius: '18px',
                  boxShadow: '0 4px 32px rgba(0,36,125,0.13)',
                  padding: '2.2rem 2rem 2rem 2rem',
                  color: '#00247d',
                  fontSize: '1.15rem',
                  fontWeight: 500,
                  border: '1.5px solid #ececec',
                  width: '100%',
                  maxWidth: 400,
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: 120,
                  overflow: 'hidden',
                  alignItems: 'center',
                  textAlign: 'center',
                  pointerEvents: 'auto',
                  position: 'static',
                  margin: '0 auto',
                } : {
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  margin: '0 auto',
                  background: '#fff',
                  borderRadius: '18px',
                  boxShadow: '0 4px 32px rgba(0,36,125,0.13)',
                  padding: '2.2rem 2rem 2rem 2rem',
                  color: '#00247d',
                  fontSize: '1.15rem',
                  fontWeight: 500,
                  border: '1.5px solid #ececec',
                  width: '100%',
                  maxWidth: 520,
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: 180,
                  overflow: 'hidden',
                  alignItems: 'center',
                  textAlign: 'center',
                  pointerEvents: review.stackIndex === 0 ? 'auto' : 'none',
                }}
              >
                <p style={{ marginBottom: '2.2rem', color: '#cf142b', fontWeight: 600, lineHeight: 1.6 }}>{review.text}</p>
                <span style={{ color: '#00247d', fontWeight: 700, fontSize: '1.05rem' }}>{review.author}</span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
