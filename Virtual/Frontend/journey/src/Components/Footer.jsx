import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGithub, FaInstagram, FaWhatsapp, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <div style={{ background: '#0a0f2e', padding: '2rem 0', color: '#bbbbbb' }}>
      <Container className="text-center">
        <p className="mb-1">🌍 "Code with purpose, build with passion — from the heart of Zanzibar 🇹🇿"</p>
        <p>© {new Date().getFullYear()} Masud Salum | Built with ❤️ in Tanzania</p>
        
        <div className="d-flex justify-content-center gap-4 mt-3">
          <a href="https://github.com/Masudi2022" target="_blank" rel="noreferrer" style={{ color: '#ffffff' }}>
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer" style={{ color: '#ffffff' }}>
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:salummasud54@gmail.com" style={{ color: '#ffffff' }}>
            <FaEnvelope size={24} />
          </a>
          <a href="https://instagram.com/your-handle" target="_blank" rel="noreferrer" style={{ color: '#ffffff' }}>
            <FaInstagram size={24} />
          </a>
          <a href="https://wa.me/+255777407574" target="_blank" rel="noreferrer" style={{ color: '#ffffff' }}>
            <FaWhatsapp size={24} />
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
