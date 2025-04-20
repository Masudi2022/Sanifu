import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLaptopCode, FaUsers, FaMedal, FaChalkboardTeacher } from 'react-icons/fa';

const ExtraCurricular = () => {
  const activityList = [
    {
      title: 'Hackathons & Coding Events',
      description: 'Participated in multiple state and national-level hackathons, building innovative tech solutions in tight deadlines.',
      icon: <FaLaptopCode size={24} />,
    },
    {
      title: 'Technical Workshops & Seminars',
      description: 'Attended and organized sessions on full stack development, AI/ML basics, and modern web frameworks.',
      icon: <FaChalkboardTeacher size={24} />,
    },
    {
      title: 'Student Clubs & Volunteering',
      description: 'Actively involved in tech clubs, college fests, and volunteered in campus development programs.',
      icon: <FaUsers size={24} />,
    },
    {
      title: 'Achievements & Certifications',
      description: 'Secured top ranks in coding contests and earned online certifications in web development and cloud computing.',
      icon: <FaMedal size={24} />,
    },
  ];

  return (
    <section className="extra-curricular-section py-6" style={{ background: '#1e293b', padding: '6rem 0' }}>
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
              <span style={{ color: '#00f5d4' }}>Extra-Curricular</span> Activities
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
              Leadership, learning, and experiences beyond academics.
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

export default ExtraCurricular;
