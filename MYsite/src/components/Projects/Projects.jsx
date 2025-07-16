import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";
import { useNavigate } from 'react-router-dom';
import projects from './ProjectsData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const techStackVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const techItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <motion.h2
            className="projects-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Our <span>Projects</span>
          </motion.h2>
          <motion.p
            className="projects-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explore our portfolio of successful projects delivering real business value.
          </motion.p>
        </div>
        <div className="projects-list">
          {projects.map((project, index) => {
            const techs = project.techStack.map(t => t.split('–')[0].trim());
            const isEven = index % 2 === 0;
            const cardClass = `project-card alt-layout-${isEven ? 'left' : 'right'}${isMobile ? ' mobile' : ''}`;
            return (
              <div className={cardClass} key={index} style={{ background: '#fff', borderRadius: '22px', boxShadow: '0 8px 32px rgba(0,36,125,0.13)' }}>
                <div className="project-image-card">
                  <div className="project-image-container tilt-image blue-glow">
                    <img src={project.image} alt={project.title} className="project-image" />
                  </div>
                </div>
                <div className="project-info-card">
                  <h3 className="project-title" style={{ color: '#cf142b', fontWeight: 800 }}>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-tech-list">
                    {project.techStack.map((tech, i) => (
                      <li key={i} className="project-tech-item">{tech.split('–')[0].trim()}</li>
                    ))}
                  </ul>
                  <div className="project-button-wrapper">
                    <button className="learn-more-button" onClick={() => navigate(`/projects/${index}`)} style={{ background: 'linear-gradient(135deg, #00247d 0%, #cf142b 100%)', color: '#fff', borderRadius: '12px', fontWeight: 700 }}>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
