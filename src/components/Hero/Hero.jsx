import { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingTexts = [
    "Intelligent Solutions",
    "AI-Powered Systems", 
    "Modern Technology",
    "Innovation & Growth"
  ];

  // useEffect(() => {
  //   // Clean up any previous animation instance
  //   if (lottieContainer.current) {
  //     lottie.destroy();
  //   }
  //   lottie.loadAnimation({
  //     container: lottieContainer.current,
  //     renderer: 'svg',
  //     loop: true,
  //     autoplay: true,
  //     path: '/animations/hero.json',
  //   });
  //   return () => lottie.destroy();
  // }, []);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;

    const typeText = () => {
      const currentText = typingTexts[textIndex];
      
      if (isDeleting) {
        setCharIndex(prev => prev - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % typingTexts.length);
        }
      } else {
        setCharIndex(prev => prev + 1);
        if (charIndex === currentText.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const timer = setTimeout(typeText, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, typingTexts]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  const lottieVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const currentText = typingTexts[textIndex];
  const displayText = currentText.substring(0, charIndex);

  return (
    <section className="hero" id="home">
      <video
        className="hero-video-bg"
        src="/videos/newvideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero-bg-overlay"></div>
      <div className="hero-container">
        <motion.div
          className="hero-left content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={textVariants}>
            Empowering Businesses with{' '}
            <span className="typing-text">
              {displayText}
              <span className="cursor">|</span>
            </span>
          </motion.h1>
          <motion.p variants={textVariants}>
            We transform ideas into reality by leveraging AI, automation, and modern technology to drive innovation and growth.
          </motion.p>
          <motion.div className="buttons" variants={textVariants}>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Link to="/contact" className="secondaryBtn">
                Get in Touch
                <motion.span
                  className="btn-arrow"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;