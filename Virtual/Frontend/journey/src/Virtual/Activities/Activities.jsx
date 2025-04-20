import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLaptopCode, FaUsers, FaCertificate, FaChalkboardTeacher } from 'react-icons/fa';

const Activities = () => {
  const activityList = [
    {
      title: 'Hackathons & Coding Events',
      description: 'Participated in several national-level hackathons and coding competitions to solve real-world problems using tech.',
      icon: <FaLaptopCode size={24} />,
    },
    {
      title: 'Technical Workshops',
      description: 'Attended and organized hands-on workshops on Django, React, REST APIs, and more.',
      icon: <FaChalkboardTeacher size={24} />,
    },
    {
      title: 'Community & Volunteering',
      description: 'Active member in college tech clubs and volunteering in student-led community initiatives.',
      icon: <FaUsers size={24} />,
    },
    {
      title: 'Certifications',
      description: 'Earned certifications in Full Stack Web Development, AWS Cloud Fundamentals, and Python.',
      icon: <FaCertificate size={24} />,
    },
  ];

  return (
    <section className="activities-section py-6" style={{ background: '#1e293b', padding: '6rem 0' }}>
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
              <span style={{ color: '#00f5d4' }}>Activities</span>
              <span style={{ 
                position: 'absolute', 
                bottom: '-10px', 
                left: '50%', 
                transform: 'translateX(-50%)', 
                width: '80px', 
                height: '4px', 
                background: 'linear-gradient(90deg, #00f5d4, #00bbf9)', 
                borderRadius: '2px' 
              }}></span>
            </h2>
            <p style={{ 
              fontSize: '1.1rem', 
              color: '#94a3b8', 
              lineHeight: '1.8' 
            }}>
              Beyond the code — my learning journey, events, and contributions.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {activityList.map((activity, index) => (
            <Col md={4} key={index}>
              <Card style={{ 
                height: '100%', 
                background: 'rgba(15, 23, 42, 0.5)', 
                border: '1px solid rgba(255, 255, 255, 0.1)', 
                borderRadius: '12px', 
                transition: 'transform 0.3s ease, box-shadow 0.3s ease' 
              }}
              className="hover-effect"
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <Card.Body className="p-4">
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'rgba(0, 245, 212, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    color: '#00f5d4'
                  }}>
                    {activity.icon}
                  </div>
                  <Card.Title style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: '600', 
                    marginBottom: '1rem', 
                    color: '#f8fafc' 
                  }}>
                    {activity.title}
                  </Card.Title>
                  <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>{activity.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Activities;
