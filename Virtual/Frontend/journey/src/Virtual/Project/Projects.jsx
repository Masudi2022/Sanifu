import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaProjectDiagram, FaRobot, FaHospitalAlt, FaTools } from 'react-icons/fa';

const Projects = () => {
  const projectList = [
    {
      title: 'Shifaa Chatbot',
      description: 'An intelligent chatbot for patient engagement and healthcare assistance.',
      icon: <FaRobot className="text-info" size={24} />,
      techStack: ['React', 'Django', 'Dialogflow', 'PostgreSQL'],
    },
    {
      title: 'Hospital ERP System',
      description: 'A comprehensive ERP system for hospital management including scheduling, billing, and patient data.',
      icon: <FaHospitalAlt className="text-success" size={24} />,
      techStack: ['Django', 'React', 'PostgreSQL', 'MySQL'],
    },
    {
      title: 'Other Projects',
      description: 'Includes portfolio website, productivity tools, and experimental apps built using modern stacks.',
      icon: <FaTools className="text-warning" size={24} />,
      techStack: ['React', 'Python', 'MySQL'],
    }
  ];

  return (
    <section id="projects" className="py-6" style={{ background: '#1e293b', padding: '6rem 0' }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center mb-5">
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              position: 'relative',
              display: 'inline-block'
            }}>
              <span style={{ color: '#00f5d4' }}>Projects</span> & Case Studies
              <span style={{
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '4px',
                background: 'linear-gradient(90deg, #00f5d4, #00bbf9)',
                borderRadius: '2px'
              }}></span>
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#94a3b8' }}>
              Featured works that reflect my technical journey and problem-solving approach.
            </p>
          </Col>
        </Row>

        <Row className="g-4 justify-content-center">
          {projectList.map((project, index) => (
            <Col key={index} lg={4} md={6} className="d-flex align-items-stretch">
              <Card style={cardStyle} className="h-100 w-100">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-3">{project.icon}</div>
                    <h5 className="mb-0 text-light">{project.title}</h5>
                  </div>
                  <p style={{ color: '#94a3b8' }}>{project.description}</p>
                  <div className="d-flex flex-wrap gap-2 mt-3">
                    {project.techStack.map((tech, i) => (
                      <Badge key={i} bg="dark" className="d-flex align-items-center py-1 px-2">
                        <span className="small">{tech}</span>
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

const cardStyle = {
  background: 'rgba(15, 23, 42, 0.5)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '12px',
  color: '#f8fafc',
  padding: '1.5rem'
};

export default Projects;
