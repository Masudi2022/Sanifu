import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { FaGithub, FaRobot, FaHospitalAlt, FaFutbol, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const placeholderImages = {
    chatbot: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    hospital: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    football: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  };

  const projectList = [
    {
      title: 'Shifaa Chatbot',
      description: 'An intelligent healthcare chatbot that helps patients with symptom checking and appointment scheduling using natural language processing.',
      icon: <FaRobot className="text-info" size={24} />,
      techStack: ['React', 'Django', 'Dialogflow', 'PostgreSQL'],
      githubLink: 'https://github.com/Masudi2022/Shifaa',
      demoLink: '#',
      image: placeholderImages.chatbot,
      features: [
        'AI-powered symptom analysis',
        'Appointment management',
        'Multi-language support',
        'Secure patient data handling'
      ],
      accentColor: '#00f5d4'
    },
    {
      title: 'Hospital ERP System',
      description: 'Comprehensive hospital management system covering patient records, staff scheduling, inventory, and billing with robust reporting.',
      icon: <FaHospitalAlt className="text-success" size={24} />,
      techStack: ['Django', 'React', 'PostgreSQL', 'REST API'],
      githubLink: 'https://github.com/Masudi2022/Hospital-Resource-Planning',
      demoLink: '#',
      image: placeholderImages.hospital,
      features: [
        'Electronic health records',
        'Staff management portal',
        'Inventory tracking',
        'Financial reporting'
      ],
      accentColor: '#00bbf9'
    },
    {
      title: 'Football Club Manager',
      description: 'Comprehensive football club management system for tracking players, matches, training sessions, and club finances.',
      icon: <FaFutbol className="text-danger" size={24} />,
      techStack: ['Python', 'Django', 'PostgreSQL', 'React'],
      githubLink: 'https://github.com/Masudi2022/Mouse',
      demoLink: '#',
      image: placeholderImages.football,
      features: [
        'Player performance tracking',
        'Match scheduling system',
        'Training session planner',
        'Financial management'
      ],
      accentColor: '#f72585'
    }
  ];

  return (
    <section id="projects" style={{ 
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
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge bg="dark" className="mb-3" style={{ 
                color: '#00f5d4',
                fontSize: '0.9rem',
                padding: '0.5rem 1rem',
                border: '1px solid rgba(0, 245, 212, 0.3)'
              }}>
                PORTFOLIO
              </Badge>
              <h2 className="display-4 fw-bold mb-3 text-white">
                My <span style={{ 
                  background: 'linear-gradient(90deg, #00f5d4, #00bbf9)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Projects</span>
              </h2>
              <p className="lead mb-0" style={{ 
                color: '#94a3b8',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Each project represents unique technical challenges and creative solutions I've developed.
              </p>
            </motion.div>
          </Col>
        </Row>

        <Row className="g-4 justify-content-center">
          {projectList.map((project, index) => (
            <Col key={index} lg={4} md={6} className="d-flex">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="w-100"
              >
                <Card className="h-100 border-0 shadow-lg overflow-hidden" style={{
                  background: 'rgba(15, 23, 42, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}>
                  <div style={{ 
                    height: '200px', 
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: `linear-gradient(to bottom, transparent 60%, ${project.accentColor}20)`,
                      zIndex: 1
                    }}></div>
                    <Card.Img 
                      variant="top" 
                      src={project.image} 
                      alt={project.title}
                      style={{ 
                        objectFit: 'cover',
                        height: '100%',
                        width: '100%',
                        transition: 'transform 0.5s ease',
                        filter: 'brightness(0.9)'
                      }}
                      className="project-image"
                    />
                  </div>
                  <Card.Body className="d-flex flex-column p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3" style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `1px solid ${project.accentColor}30`
                      }}>
                        {project.icon}
                      </div>
                      <div>
                        <h5 className="mb-0 text-white">{project.title}</h5>
                        <div className="d-flex flex-wrap gap-1 mt-2">
                          {project.techStack.map((tech, i) => (
                            <Badge key={i} style={{
                              background: 'rgba(255, 255, 255, 0.05)',
                              color: '#e2e8f0',
                              fontWeight: '500',
                              fontSize: '0.7rem',
                              padding: '0.25rem 0.5rem',
                              border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}>
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <p className="flex-grow-1 mb-4" style={{ 
                      color: '#94a3b8',
                      lineHeight: '1.6'
                    }}>{project.description}</p>
                    
                    <div className="mb-4">
                      <h6 style={{ 
                        color: '#ffffff',
                        marginBottom: '1rem',
                        position: 'relative',
                        display: 'inline-block'
                      }}>
                        <span style={{
                          position: 'absolute',
                          bottom: '-5px',
                          left: 0,
                          width: '40px',
                          height: '2px',
                          background: project.accentColor,
                          borderRadius: '2px'
                        }}></span>
                        Key Features
                      </h6>
                      <ul className="small ps-3 mb-0" style={{ color: '#e2e8f0' }}>
                        {project.features.map((feature, i) => (
                          <li key={i} className="mb-2" style={{
                            position: 'relative',
                            paddingLeft: '1.5rem'
                          }}>
                            <span style={{
                              position: 'absolute',
                              left: 0,
                              top: '0.4rem',
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              background: project.accentColor
                            }}></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="d-flex gap-2 mt-auto">
                      <Button 
                        href={project.githubLink}
                        target="_blank"
                        variant="outline-primary"
                        size="sm"
                        className="d-flex align-items-center gap-2 flex-grow-1 fw-semibold"
                        style={{
                          borderColor: project.accentColor,
                          color: project.accentColor,
                          background: 'transparent',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <FaGithub /> Code
                      </Button>
                      {project.demoLink !== '#' && (
                        <Button 
                          href={project.demoLink}
                          variant="primary"
                          size="sm"
                          className="d-flex align-items-center gap-2 flex-grow-1 fw-semibold"
                          style={{
                            background: project.accentColor,
                            borderColor: project.accentColor,
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <FaExternalLinkAlt /> Demo
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-5 pt-4"
        >
          <Button
            href="https://github.com/Masudi2022"
            target="_blank"
            variant="outline-light"
            size="lg"
            className="px-5 py-3 rounded-pill d-inline-flex align-items-center gap-2 fw-semibold"
            style={{
              borderWidth: '2px',
              transition: 'all 0.3s ease'
            }}
          >
            <FaGithub /> Explore More Projects
          </Button>
        </motion.div>
      </Container>

      <style jsx global>{`
        .project-image:hover {
          transform: scale(1.1) rotate(1deg);
        }
        .card {
          transition: all 0.3s ease !important;
        }
        .card:hover {
          transform: translateY(-10px) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3) !important;
          border-color: rgba(255, 255, 255, 0.1) !important;
        }
        .btn-outline-primary:hover {
          background: transparent !important;
          color: white !important;
          border-color: white !important;
        }
        .btn-primary:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};

export default Projects;