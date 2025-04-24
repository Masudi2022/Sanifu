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
      ]
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
      ]
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
      ]
    }
  ];

  return (
    <section id="projects" style={{ 
      background: 'linear-gradient(to bottom, #0f172a, #1e293b)',
      padding: '6rem 0',
      position: 'relative'
    }}>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="display-5 fw-bold mb-3"
              style={{
                background: 'linear-gradient(90deg, #00f5d4, #00bbf9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              My Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="lead"
              style={{ color: '#ffffff' }}
            >
              Here are some featured projects I've worked on. Each represents unique technical challenges and creative solutions.
            </motion.p>
          </Col>
        </Row>

        <Row className="g-4">
          {projectList.map((project, index) => (
            <Col key={index} lg={4} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-100 border-0 shadow-lg overflow-hidden" style={{
                  background: 'rgba(15, 23, 42, 0.7)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '15px'
                }}>
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                    <Card.Img 
                      variant="top" 
                      src={project.image} 
                      alt={project.title}
                      style={{ 
                        objectFit: 'cover',
                        height: '100%',
                        width: '100%',
                        transition: 'transform 0.5s ease'
                      }}
                      className="project-image"
                    />
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3" style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {project.icon}
                      </div>
                      <div>
                        <h5 className="mb-0 text-white">{project.title}</h5>
                        <div className="d-flex flex-wrap gap-1 mt-2">
                          {project.techStack.map((tech, i) => (
                            <Badge key={i} style={{
                              background: 'rgba(255, 255, 255, 0.1)',
                              color: '#ffffff',
                              fontWeight: '500',
                              fontSize: '0.7rem',
                              padding: '0.25rem 0.5rem',
                              border: '1px solid rgba(255, 255, 255, 0.2)'
                            }}>
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <p className="flex-grow-1" style={{ color: '#ffffff' }}>{project.description}</p>
                    
                    <div className="mt-3">
                      <h6 style={{ color: '#ffffff' }}>Features:</h6>
                      <ul className="small ps-3 mb-4" style={{ color: '#ffffff' }}>
                        {project.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="d-flex gap-2 mt-auto">
                      <Button 
                        href={project.githubLink}
                        target="_blank"
                        variant={project.title === 'Football Club Manager' ? 'outline-light' : 'primary'}
                        size="sm"
                        className="d-flex align-items-center gap-2 flex-grow-1 fw-semibold"
                      >
                        <FaGithub /> View Code
                      </Button>
                      {project.demoLink !== '#' && (
                        <Button 
                          href={project.demoLink}
                          variant="outline-light"
                          size="sm"
                          className="d-flex align-items-center gap-2 flex-grow-1"
                        >
                          <FaExternalLinkAlt /> Live Demo
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-5"
        >
          <Button
            href="https://github.com/Masudi2022"
            target="_blank"
            variant="outline-primary"
            size="lg"
            className="px-4 py-2 rounded-pill d-inline-flex align-items-center gap-2"
          >
            <FaGithub /> View All Projects
          </Button>
        </motion.div>
      </Container>

      <style jsx global>{`
        .project-image:hover {
          transform: scale(1.1);
        }
        .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 245, 212, 0.1) !important;
        }
      `}</style>
    </section>
  );
};

export default Projects;