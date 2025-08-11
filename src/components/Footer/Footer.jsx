import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiMapPin, FiGlobe } from 'react-icons/fi';
import { FiPhone } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* First Column - Brand Info */}
            <motion.div
              className="footer-column brand-column"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="brand-name">EagleFur</h2>
              <p className="brand-description">
                Empowering businesses with intelligent, scalable solutions that drive innovation and growth.
              </p>
              <div className="social-links">
                <a href="#" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <FiGithub />
                </a>
                <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <FiLinkedin />
                </a>
                <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <FiTwitter />
                </a>
              </div>
            </motion.div>

            {/* Second Column - Quick Links */}
            <motion.div
              className="footer-column links-column"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="column-title">Quick Links</h3>
              <ul className="footer-links">
                <li>
                  <NavLink
                    to="/"
                    onClick={e => {
                      // If already on home, scroll to hero section
                      if (window.location.pathname === "/") {
                        e.preventDefault();
                        const hero = document.getElementById("home");
                        if (hero) {
                          hero.scrollIntoView({ behavior: "smooth" });
                        } else {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/team">Team</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </motion.div>

            {/* Third Column - Contact Info */}
            <motion.div
              className="footer-column contact-column"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="column-title">Contact Info</h3>
              <ul className="contact-info">
                <li>
                  <a href="https://www.eaglefur.com/" target="_blank" rel="noopener noreferrer">
                    <FiGlobe className="contact-icon" />
                    www.eaglefur.com
                  </a>
                </li>
                <li>
                  <a href="mailto:axioms.solutions.3@gmail.com">
                    <FiMail className="contact-icon" />
                    contact@cogxioms.com
                  </a>
                </li>
                <li>
                  <a>
                    <FiPhone className="contact-icon" />
                    +1 (407) 967-2303
                  </a>
                </li>
                <li>
                  <a href='#' target='_blank'>
                  <FiMapPin className="contact-icon" />
                   Winter Park , United States
                   </a>
                   
                </li>
               
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <div className="container">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            © 2025 EagleFur. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;