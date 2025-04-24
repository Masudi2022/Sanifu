import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaGithub, FaCode } from 'react-icons/fa';

const OpenSource = () => {
  const contributions = [
    {
      name: 'Shifaa Chatbot',
      description: 'An AI-powered healthcare chatbot built with React and Django. It helps patients with basic queries and appointment scheduling.',
      link: 'https://github.com/Masudi2022/Shifaa',
      tech: ['React', 'Django', 'Dialogflow']
    },
    {
      name: 'Asset Management System',
      description: 'A collaborative web application for tracking and managing organizational assets effectively.',
      link: 'https://github.com/hassan-buruhani/AMS',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      name: 'Football Management System',
      description: 'A portfolio project to manage club operations, including team registration, match scheduling, and performance tracking.',
      link: 'https://github.com/Masudi2022/Mouse',
      tech: ['Django', 'PostgreSQL', 'React']
    },
    {
      name: 'Hospital Resource Planning',
      description: 'An ERP system prototype for hospitals to manage resources, patient records, and administrative tasks.',
      link: 'https://github.com/Masudi2022/Hospital-Resource-Planning',
      tech: ['Django', 'React', 'REST API']
    },
  ];

  return (
    <section id="opensource" style={{ 
      background: 'linear-gradient(to bottom, #0f172a, #1e293b)',
      padding: '6rem 0',
      position: 'relative'
    }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center mb-5">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: '2.8rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <span style={{ 
                background: 'linear-gradient(90deg, #00f5d4, #00bbf9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                <FaGithub className="me-2" />
                Open Source
              </span>
              <span style={{
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '120px',
                height: '4px',
                background: 'linear-gradient(90deg, #00f5d4, #00bbf9)',
                borderRadius: '2px'
              }}></span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{ 
                fontSize: '1.2rem', 
                color: '#94a3b8',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}
            >
              Projects and contributions I've made to the open-source world.
            </motion.p>
          </Col>
        </Row>

        <Row className="g-4 justify-content-center">
          {contributions.map((project, index) => (
            <Col key={index} lg={6} md={6} className="d-flex align-items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="w-100"
              >
                <Card style={{
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  backdropFilter: 'blur(10px)',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
                }}>
                  <Card.Body className="d-flex flex-column">
                    <div className="d-flex align-items-start mb-3">
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'rgba(0, 245, 212, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '1rem',
                        color: '#00f5d4',
                        flexShrink: 0
                      }}>
                        <FaCode size={20} />
                      </div>
                      <div>
                        <h5 className="text-white mb-3" style={{ fontWeight: '600' }}>{project.name}</h5>
                      </div>
                    </div>
                    
                    <p className="text-white mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>{project.description}</p>
                    
                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} style={{
                          background: 'rgba(0, 245, 212, 0.1)',
                          color: '#00f5d4',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          border: '1px solid rgba(0, 245, 212, 0.3)'
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <Button 
                      variant="outline-primary"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto align-self-start"
                      style={{
                        borderRadius: '8px',
                        padding: '0.5rem 1.25rem',
                        fontWeight: '500',
                        borderColor: 'rgba(0, 245, 212, 0.5)',
                        color: '#00f5d4',
                        background: 'rgba(0, 245, 212, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <FaGithub /> View Repository
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx global>{`
        .card:hover {
          transform: translateY(-5px) !important;
          box-shadow: 0 15px 30px rgba(0, 245, 212, 0.1) !important;
          border-color: rgba(0, 245, 212, 0.3) !important;
        }
      `}</style>
    </section>
  );
};

export default OpenSource;