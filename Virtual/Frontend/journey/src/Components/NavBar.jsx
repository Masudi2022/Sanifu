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
import { motion } from 'framer-motion';
import LogoImage from '../Components/../assets/Sanifu.png';

const NavBar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
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
        className={`nav-glass ${isScrolled ? 'scrolled' : ''} ${expanded ? 'expanded' : ''}`}
      >
        <Container fluid className="nav-container">
          <BootstrapNavbar.Brand
            as={Link}
            to="/"
            className="brand-container"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="logo-wrapper"
            >
              <img
                src={LogoImage}
                alt="Logo"
                className={`nav-logo ${isScrolled ? 'scaled' : ''}`}
              />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="brand-name"
            >
              Masud Salum
            </motion.span>
          </BootstrapNavbar.Brand>

          <BootstrapNavbar.Toggle 
            aria-controls="responsive-navbar-nav"
            className="nav-toggle"
          >
            {expanded ? (
              <FiX size={28} className="toggle-icon" />
            ) : (
              <FiMenu size={28} className="toggle-icon" />
            )}
          </BootstrapNavbar.Toggle>

          <BootstrapNavbar.Collapse 
            id="responsive-navbar-nav"
            className={`nav-collapse ${isMobile ? 'mobile' : ''}`}
          >
            <Nav 
              className={`nav-links ${isMobile ? 'mobile' : ''}`}
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
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    <span className="nav-icon">
                      {item.icon}
                    </span>
                    {item.name}
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="active-indicator"
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
                  className="hire-btn"
                >
                  Get In Touch
                </Button>
              </motion.div>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>

      {/* Spacer div to account for fixed navbar height */}
      <div className="nav-spacer" />
      
      {/* CSS Styles */}
      <style jsx global>{`
        :root {
          --primary: #00bfff;
          --accent:rgb(61, 64, 224);
          --dark: #0a0a23;
          --light: #f8f9fa;
          --card-bg: #1a1a40;
        }
        
        .nav-glass {
          background-color: var(--dark);
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 15px rgba(0,0,0,0.3);
          transition: all 0.3s ease;
        }
        
        .nav-glass.scrolled,
        .nav-glass.expanded {
          background-color: rgba(10, 10, 35, 0.98);
          backdrop-filter: blur(10px);
        }
        
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .brand-container {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        
        .nav-logo {
          height: 50px;
          width: auto;
          border-radius: 10px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        
        .nav-logo.scaled {
          transform: scale(0.9);
        }
        
        .brand-name {
          color: #fff;
          font-weight: 700;
          font-size: 1.5rem;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .nav-toggle {
          border: none;
          padding: 0.5rem;
          color: var(--primary);
          background: transparent;
          order: 1;
        }
        
        .toggle-icon {
          color: var(--primary);
        }
        
        .nav-collapse {
          background-color: transparent;
          flex-grow: 0;
        }
        
        .nav-collapse.mobile {
          background-color: var(--dark);
          margin-top: 1rem;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
        }
        
        .nav-links {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          justify-content: flex-end;
        }
        
        .nav-links.mobile {
          flex-direction: column;
          gap: 0.75rem;
          align-items: flex-start;
        }
        
        .nav-link {
          position: relative;
          color: var(--light) !important;
          font-weight: 500;
          padding: 0.75rem 1.25rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          white-space: nowrap;
        }
        
        .nav-link:hover {
          color: var(--primary) !important;
          background: rgba(0, 191, 255, 0.1);
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
        
        .nav-link.active {
          color: var(--primary) !important;
          font-weight: 600;
        }
        
        .nav-icon {
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }
        
        .nav-link.active .nav-icon {
          transform: scale(1.1);
        }
        
        .active-indicator {
          position: absolute;
          bottom: 5px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 3px;
          background: var(--primary);
          border-radius: 3px;
        }
        
        .nav-links.mobile .active-indicator {
          left: 0;
          transform: none;
          width: 4px;
          height: 100%;
          border-radius: 0 3px 3px 0;
        }
        
        .hire-btn {
          margin: 0 0 0 1rem;
          border-radius: 8px;
          border: 2px solid var(--primary);
          color: var(--primary);
          font-weight: 600;
          padding: 0.75rem 1.75rem;
          transition: all 0.3s ease;
          background: transparent;
          white-space: nowrap;
        }
        
        .hire-btn:hover {
          background: rgba(0, 191, 255, 0.1);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 191, 255, 0.3);
        }
        
        .nav-links.mobile .hire-btn {
          margin: 1rem 0 0;
        }
        
        .nav-spacer {
          height: 80px;
        }
        
        @media (max-width: 992px) {
          .nav-glass {
            padding: 1rem;
          }
          
          .nav-container {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </>
  );
};

export default NavBar;