import React, { useState, useEffect } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import {
  AiOutlineCode,
  AiOutlineBook,
  AiOutlineProject,
  AiOutlineBranches,
  AiOutlineTeam,
  AiOutlineMail,
  AiOutlineHome
} from 'react-icons/ai';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import LogoImage from '../Components/../assets/Sanifu.png';

const NavBar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [activeHover, setActiveHover] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  const navItems = [
    { name: 'Home', icon: <AiOutlineHome />, path: '/' },
    { name: 'Skills', icon: <AiOutlineCode />, path: '/skills' },
    { name: 'Education', icon: <AiOutlineBook />, path: '/education' },
    { name: 'Projects', icon: <AiOutlineProject />, path: '/projects' },
    { name: 'Open Source', icon: <AiOutlineBranches />, path: '/opensource' },
    { name: 'Activities', icon: <AiOutlineTeam />, path: '/extracurricular' },
    { name: 'Contact', icon: <AiOutlineMail />, path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
      if (window.innerWidth >= 992) {
        setExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <BootstrapNavbar
        expand="lg"
        fixed="top"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
        style={{
          padding: isMobile ? '1rem' : '1rem 2rem',
          backgroundColor: expanded ? '#0f172a' : isScrolled ? 'rgba(15, 23, 42, 0.98)' : 'rgba(15, 23, 42, 0.9)',
          backdropFilter: 'blur(12px)',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: isScrolled || expanded ? '0 4px 30px rgba(0, 0, 0, 0.3)' : 'none',
          borderBottom: isScrolled || expanded ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
          height: '80px',
          zIndex: 1050
        }}
      >
        <Container fluid style={{ maxWidth: '1400px' }}>
          <BootstrapNavbar.Brand
            as={Link}
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              transition: 'all 0.3s ease',
              marginRight: 'auto'
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={LogoImage}
                alt="Logo"
                style={{
                  height: '50px',
                  width: 'auto',
                  borderRadius: '10px',
                  transition: 'all 0.3s ease',
                  transform: isScrolled ? 'scale(0.9)' : 'scale(1)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                }}
              />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                color: '#fff',
                fontWeight: '700',
                fontSize: '1.4rem',
                fontFamily: "'Inter', sans-serif",
                background: 'linear-gradient(90deg, #00f5d4, #00bbf9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.5px',
                textShadow: '0 2px 10px rgba(0, 245, 212, 0.2)'
              }}
            >
              Masud Salum
            </motion.span>
          </BootstrapNavbar.Brand>

          <BootstrapNavbar.Toggle 
            aria-controls="responsive-navbar-nav"
            style={{
              border: 'none',
              padding: '0.5rem',
              color: '#00f5d4',
              background: 'transparent',
              order: isMobile ? 2 : 1,
              marginLeft: isMobile ? 'auto' : '1rem'
            }}
          >
            {expanded ? (
              <FiX size={28} color="#00f5d4" />
            ) : (
              <FiMenu size={28} color="#00f5d4" />
            )}
          </BootstrapNavbar.Toggle>

          <BootstrapNavbar.Collapse 
            id="responsive-navbar-nav"
            style={{
              backgroundColor: isMobile ? '#0f172a' : 'transparent',
              marginTop: isMobile && expanded ? '1rem' : 0,
              borderRadius: isMobile ? '12px' : 0,
              padding: isMobile && expanded ? '1.5rem' : 0,
              boxShadow: isMobile && expanded ? '0 10px 25px rgba(0, 0, 0, 0.4)' : 'none'
            }}
          >
            <Nav 
              className={isMobile ? 'flex-column' : 'ms-auto align-items-lg-center'}
              style={{ gap: isMobile ? '0.75rem' : '0.5rem' }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={isMobile ? { opacity: 0, y: -10 } : {}}
                  animate={isMobile ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: isMobile ? index * 0.1 : 0 }}
                >
                  <Nav.Link
                    as={Link}
                    to={item.path}
                    onClick={() => setExpanded(false)}
                    onMouseEnter={() => setActiveHover(index)}
                    onMouseLeave={() => setActiveHover(null)}
                    style={{
                      position: 'relative',
                      color: location.pathname === item.path ? '#00f5d4' : '#e2e8f0',
                      fontWeight: location.pathname === item.path ? '600' : '500',
                      padding: isMobile ? '0.75rem 1.5rem' : '0.75rem 1.25rem',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      fontSize: isMobile ? '1.1rem' : '0.95rem',
                      background: activeHover === index ? 'rgba(0, 245, 212, 0.1)' : 'transparent',
                      ':hover': {
                        background: 'rgba(0, 245, 212, 0.1)',
                        transform: isMobile ? 'none' : 'translateY(-2px)'
                      }
                    }}
                  >
                    <span style={{
                      fontSize: '1.2rem',
                      transition: 'all 0.3s ease',
                      ...(location.pathname === item.path && {
                        transform: 'scale(1.1)'
                      })
                    }}>
                      {item.icon}
                    </span>
                    {item.name}
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="activeIndicator"
                        style={{
                          position: 'absolute',
                          bottom: '5px',
                          left: isMobile ? '0' : '50%',
                          transform: isMobile ? 'none' : 'translateX(-50%)',
                          width: isMobile ? '4px' : '20px',
                          height: isMobile ? '100%' : '3px',
                          background: '#00f5d4',
                          borderRadius: isMobile ? '0 3px 3px 0' : '3px'
                        }}
                      />
                    )}
                  </Nav.Link>
                </motion.div>
              ))}
              <motion.div
                initial={isMobile ? { opacity: 0, y: -10 } : {}}
                animate={isMobile ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: isMobile ? navItems.length * 0.1 : 0 }}
              >
                <Button
                  variant="outline-primary"
                  as={Link}
                  to="/contact"
                  onClick={() => setExpanded(false)}
                  style={{
                    margin: isMobile ? '1rem 0 0' : '0 0 0 1rem',
                    borderRadius: '8px',
                    border: '2px solid #00f5d4',
                    color: '#00f5d4',
                    fontWeight: '600',
                    padding: '0.75rem 1.75rem',
                    transition: 'all 0.3s ease',
                    fontSize: isMobile ? '1.1rem' : '0.95rem',
                    background: 'transparent',
                    ':hover': {
                      background: 'rgba(0, 245, 212, 0.1)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 15px rgba(0, 245, 212, 0.3)'
                    }
                  }}
                >
                  Hire Me
                </Button>
              </motion.div>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>

      {/* Spacer div to account for fixed navbar height */}
      <div style={{ height: '80px' }} />
    </>
  );
};

export default NavBar;