import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

const OpenSource = () => {
  const contributions = [
    {
      name: 'Shifaa Chatbot',
      description: 'An AI-powered healthcare chatbot built with React and Django. It helps patients with basic queries and appointment scheduling.',
      link: 'https://github.com/Masudi2022/Shifaa',
    },
    {
      name: 'Asset Management System',
      description: 'A collaborative web application for tracking and managing organizational assets effectively.',
      link: 'https://github.com/hassan-buruhani/AMS',
    },
    {
      name: 'Football Management System',
      description: 'A portfolio project to manage club operations, including team registration, match scheduling, and performance tracking.',
      link: 'https://github.com/Masudi2022/Mouse',
    },
    {
      name: 'Hospital Resource Planning',
      description: 'An ERP system prototype for hospitals to manage resources, patient records, and administrative tasks.',
      link: 'https://github.com/Masudi2022/Hospital-Resource-Planning',
    },
  ];

  return (
    <section id="opensource" className="py-6" style={{ background: '#1e293b', padding: '6rem 0' }}>
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
              <span style={{ color: '#00f5d4' }}>
                <FaGithub className="me-2" />
                Open Source
              </span>
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
              Projects and contributions I’ve made to the open-source world.
            </p>
          </Col>
        </Row>

        <Row className="g-4 justify-content-center">
          {contributions.map((project, index) => (
            <Col key={index} lg={4} md={6} className="d-flex align-items-stretch">
              <Card style={cardStyle} className="h-100 w-100">
                <Card.Body>
                  <h5 className="text-light mb-2">{project.name}</h5>
                  <p style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>{project.description}</p>
                  <Button 
                    variant="outline-info" 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3"
                  >
                    View on GitHub
                  </Button>
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
  padding: '1.5rem',
  backdropFilter: 'blur(10px)'
};

export default OpenSource;
