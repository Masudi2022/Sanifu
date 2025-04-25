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
      tech: ['React', 'Django', 'Dialogflow'],
      accentColor: '#00f5d4'
    },
    {
      name: 'Asset Management System',
      description: 'A collaborative web application for tracking and managing organizational assets effectively.',
      link: 'https://github.com/hassan-buruhani/AMS',
      tech: ['React', 'Node.js', 'MongoDB'],
      accentColor: '#00f5d4'
    },
    {
      name: 'Football Management System',
      description: 'A portfolio project to manage club operations, including team registration, match scheduling, and performance tracking.',
      link: 'https://github.com/Masudi2022/Mouse',
      tech: ['Django', 'PostgreSQL', 'React'],
      accentColor: '#00f5d4'
    },
    {
      name: 'Hospital Resource Planning',
      description: 'An ERP system prototype for hospitals to manage resources, patient records, and administrative tasks.',
      link: 'https://github.com/Masudi2022/Hospital-Resource-Planning',
      tech: ['Django', 'React', 'REST API'],
      accentColor: '#00f5d4'
    },
  ];

  return (
    <section id="opensource" style={{ 
      background: 'linear-gradient(to bottom, #0f172a, #1e293b)',
      padding: '8rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '-200px',
        right: '-200px',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 245, 212, 0.1) 0%, rgba(0, 245, 212, 0) 70%)',
        zIndex: 0
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '-300px',
        left: '-300px',
        width: '800px',
        height: '800px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 187, 249, 0.1) 0%, rgba(0, 187, 249, 0) 70%)',
        zIndex: 0
      }}></div>

      <Container style={{ position: 'relative', zIndex: 1 }}>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center mb-5">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <FaGithub 
                  size={48} 
                  style={{ 
                    color: 'white',
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '0.75rem',
                    borderRadius: '50%',
                    backdropFilter: 'blur(5px)'
                  }} 
                />
                <h2 style={{
                  fontSize: '2.8rem',
                  fontWeight: 'bold',
                  margin: 0,
                  background: 'linear-gradient(90deg, #00f5d4, #00bbf9)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Open Source
                </h2>
              </div>
              <div style={{
                position: 'relative',
                width: '150px',
                height: '4px',
                background: 'linear-gradient(90deg, #00f5d4, #00bbf9)',
                borderRadius: '2px',
                margin: '0 auto 1.5rem'
              }}></div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
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
            </motion.div>
          </Col>
        </Row>

        <Row className="g-4 justify-content-center">
          {contributions.map((project, index) => (
            <Col key={index} lg={6} md={6} className="d-flex align-items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="w-100"
              >
                <Card style={{
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  backdropFilter: 'blur(10px)',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Project accent color indicator */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '5px',
                    height: '100%',
                    background: project.accentColor
                  }}></div>
                  
                  <Card.Body className="d-flex flex-column" style={{ paddingLeft: '1.5rem' }}>
                    <div className="d-flex align-items-start mb-3">
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: `${project.accentColor}20`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '1rem',
                        color: project.accentColor,
                        flexShrink: 0,
                        border: `1px solid ${project.accentColor}40`
                      }}>
                        <FaCode size={20} />
                      </div>
                      <div>
                        <h5 className="text-white mb-3" style={{ fontWeight: '600' }}>{project.name}</h5>
                      </div>
                    </div>
                    
                    <p className="text-white mb-4" style={{ 
                      fontSize: '0.95rem', 
                      lineHeight: '1.6',
                      color: '#e2e8f0'
                    }}>{project.description}</p>
                    
                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} style={{
                          background: `${project.accentColor}20`,
                          color: project.accentColor,
                          padding: '0.25rem 0.75rem',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          border: `1px solid ${project.accentColor}30`,
                          fontWeight: '500'
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
                        borderColor: `${project.accentColor}80`,
                        color: project.accentColor,
                        background: `${project.accentColor}10`,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <FaGithub style={{ color: 'white' }} /> 
                      <span>View Repository</span>
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
          transform: translateY(-8px) !important;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3) !important;
          border-color: rgba(255, 255, 255, 0.2) !important;
        }
        .btn-outline-primary:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          border-color: white !important;
          color: white !important;
        }
        .btn-outline-primary:hover svg {
          color: white !important;
        }
      `}</style>
    </section>
  );
};

export default OpenSource;