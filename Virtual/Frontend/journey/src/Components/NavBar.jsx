import React, { useState, useEffect } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
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
import LogoImage from '../Components/../assets/Sanifu.png'; // ✅ Import the logo image

const NavBar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);

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
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);

    // Animate logo on load
    setTimeout(() => {
      setLogoVisible(true);
    }, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <BootstrapNavbar
        expand="lg"
        fixed="top"
        variant="dark"
        expanded={expanded}
        onToggle={(expanded) => setExpanded(expanded)}
        style={{
          padding: '1.2rem 2rem',
          backgroundColor: isScrolled ? 'rgba(4, 4, 40, 0.9)' : '#0d0d2b',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          transition: 'all 0.3s ease',
          boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.2)' : 'none',
          height: isScrolled ? '100px' : '100px',
          zIndex: 1050
        }}
      >
        <Container fluid>
          <BootstrapNavbar.Brand
            as={Link}
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transform: logoVisible ? 'translateY(0)' : 'translateY(-20px)',
              opacity: logoVisible ? 1 : 0,
              transition: 'opacity 0.8s ease, transform 0.8s ease'
            }}
          >
           <img
              src={LogoImage}
              alt="Logo"
              style={{
                height: isScrolled ? '70px' : '70px',
                width: 'auto',
                borderRadius: '6px',
                transition: 'height 0.3s ease-in-out'
              }}
            />

            <span
              style={{
                color: '#00f5d4',
                fontWeight: 'bold',
                fontFamily: "'Fira Code', monospace",
                fontSize: '1.2rem'
              }}
            >
              &lt;Masud_Salum/&gt;
            </span>
          </BootstrapNavbar.Brand>

          <BootstrapNavbar.Toggle 
            aria-controls="basic-navbar-nav" 
            style={{ borderColor: '#00f5d4' }}
          />

          <BootstrapNavbar.Collapse 
            id="basic-navbar-nav" 
            className="justify-content-end"
            style={{
              backgroundColor: '#0d0d2b',
              marginTop: expanded ? '1rem' : 0,
              borderRadius: '0.5rem',
              padding: expanded ? '1rem' : 0,
              boxShadow: expanded ? '0 5px 15px rgba(0,0,0,0.3)' : 'none'
            }}
          >
            <Nav style={{ gap: '0.5rem' }}>
              {navItems.map((item, index) => (
                <Nav.Link
                  key={index}
                  as={Link}
                  to={item.path}
                  active={location.pathname === item.path}
                  onClick={() => setExpanded(false)}
                  style={{
                    color: location.pathname === item.path ? '#00f5d4' : 'white',
                    fontWeight: location.pathname === item.path ? '600' : '500',
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '4px',
                    padding: '0.5rem 1rem',
                    transition: 'all 0.3s ease',
                    ':hover': {
                      backgroundColor: 'rgba(0, 245, 212, 0.1)'
                    }
                  }}
                >
                  <span style={{
                    marginRight: '0.5rem',
                    color: location.pathname === item.path ? '#00f5d4' : 'inherit'
                  }}>
                    {item.icon}
                  </span>
                  {item.name}
                </Nav.Link>
              ))}
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>

      {/* Spacer div to account for fixed navbar height */}
      <div style={{ height: isScrolled ? '70px' : '90px' }}></div>
    </>
  );
};

export default NavBar;
