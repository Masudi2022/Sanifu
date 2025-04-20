import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaExclamationTriangle, FaArrowLeft, FaRocket, FaSatellite, FaUserAstronaut } from 'react-icons/fa';
import { GiPlanetCore, GiGalaxy } from 'react-icons/gi';

const NotFound = () => {
  // Generate stars dynamically
  const stars = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.5 + 0.1,
    delay: Math.random() * 5
  }));

  return (
    <section className="py-5 position-relative" style={{ 
      backgroundColor: '#0f0c29',
      background: 'linear-gradient(to bottom, #000428, #0f0c29)',
      minHeight: '100vh',
      overflow: 'hidden'
    }}>
      {/* Twinkling Stars Background */}
      {stars.map(star => (
        <div 
          key={star.id}
          className="position-absolute bg-white rounded-circle"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `twinkle ${Math.random() * 3 + 2}s infinite ${star.delay}s alternate`
          }}
        />
      ))}

      {/* Space Background Elements */}
      <GiGalaxy className="position-absolute text-primary opacity-25" style={{
        top: '10%',
        left: '5%',
        fontSize: '8rem',
        animation: 'pulse 8s infinite alternate'
      }} />
      
      <GiPlanetCore className="position-absolute text-danger opacity-40" style={{
        top: '70%',
        left: '10%',
        fontSize: '5rem',
        animation: 'rotate 20s linear infinite'
      }} />
      
      <GiPlanetCore className="position-absolute text-success opacity-40" style={{
        top: '20%',
        right: '15%',
        fontSize: '7rem',
        animation: 'rotate 30s linear infinite reverse'
      }} />
      
      {/* Flying Spaceships */}
      <div className="position-absolute" style={{
        top: '30%',
        right: '-100px',
        animation: 'flyby 15s linear infinite',
        animationDelay: '2s'
      }}>
        <FaRocket className="text-warning" style={{ fontSize: '3rem', transform: 'rotate(-45deg)' }} />
      </div>

      <div className="position-absolute" style={{
        top: '60%',
        right: '-150px',
        animation: 'flyby 20s linear infinite',
        animationDelay: '5s'
      }}>
        <FaRocket className="text-info" style={{ fontSize: '2rem', transform: 'rotate(-30deg)' }} />
      </div>

      <Container className="py-5 position-relative">
        <Row className="justify-content-center align-items-center text-center">
          <Col md={8} lg={6}>
            <Card className="border-0 shadow-lg cosmic-card" style={{ 
              backgroundColor: 'rgba(13, 13, 43, 0.85)',
              borderRadius: '20px',
              padding: '3rem',
              border: '1px solid rgba(138, 43, 226, 0.3)'
            }}>
              <Card.Body>
                <div className="position-relative mb-4">
                  <div className="space-animation">
                    <FaUserAstronaut className="text-light display-1" style={{ fontSize: '5rem' }} />
                    <FaExclamationTriangle className="text-danger position-absolute" style={{ 
                      top: '-10px', 
                      right: '-10px', 
                      fontSize: '2rem',
                      filter: 'drop-shadow(0 0 8px rgba(255,0,0,0.5))'
                    }} />
                  </div>
                </div>
                <h1 className="text-light display-4 fw-bold mb-3 cosmic-title">404 - Lost in Space</h1>
                <p className="text-light lead mb-4 cosmic-text">
                  Houston, we have a problem! This page is nowhere to be found in our galaxy.
                </p>
                <Button 
                  variant="info" 
                  href="/" 
                  className="px-4 py-3 fw-bold mt-3 cosmic-button"
                >
                  <FaArrowLeft className="me-2" />
                  Beam Me Home
                </Button>
              </Card.Body>
              <Card.Footer className="bg-transparent border-0 mt-4">
                <div className="d-flex flex-wrap justify-content-center gap-3 gap-md-4 text-light opacity-75 cosmic-footer">
                  <span><FaUserAstronaut size={20} className="me-2 text-info" />Astronaut</span>
                  <span><FaRocket size={20} className="me-2 text-warning" />Spaceship</span>
                  <span><FaSatellite size={20} className="me-2 text-primary" />Navigation</span>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(3deg); }
          50% { transform: translateY(5px) rotate(-3deg); }
          75% { transform: translateY(-5px) rotate(2deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes flyby {
          0% { right: -100px; transform: scale(0.8) translateY(0); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: scale(1) translateY(-20px); }
          90% { opacity: 1; }
          100% { right: 100%; transform: scale(1.2) translateY(0); opacity: 0; }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        
        .space-animation {
          animation: float 4s ease-in-out infinite;
        }
        
        .cosmic-card {
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }
        
        .cosmic-card:hover {
          box-shadow: 0 0 40px rgba(110, 43, 226, 0.5);
        }
        
        .cosmic-title {
          text-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
        }
        
        .cosmic-text {
          letter-spacing: 0.5px;
        }
        
        .cosmic-button {
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
          border: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .cosmic-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        
        .cosmic-button::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #2575fc 0%, #6a11cb 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }
        
        .cosmic-button:hover::after {
          opacity: 1;
        }
        
        .cosmic-button span {
          position: relative;
          z-index: 2;
        }
        
        .cosmic-footer span {
          transition: all 0.3s ease;
        }
        
        .cosmic-footer span:hover {
          opacity: 1;
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default NotFound;