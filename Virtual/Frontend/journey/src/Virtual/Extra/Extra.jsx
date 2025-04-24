import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLaptopCode, FaUsers, FaMedal, FaChalkboardTeacher } from 'react-icons/fa';

const ExtraCurricular = () => {
  const activityList = [
    {
      title: 'Hackathons & Coding Events',
      description: 'Participated in multiple state and national-level hackathons, building innovative tech solutions',
      icon: <FaLaptopCode size={24} />,
      color: '#00f5d4',
      achievements: [
        '2nd place in National Hackathon 2022',
        'Top 10 in State Coding Competition',
        'Built 15+ prototypes in 48-hour events'
      ]
    },
    {
      title: 'Technical Workshops & Seminars',
      description: 'Attended and organized sessions on full stack development, AI/ML basics, and modern web frameworks.',
      icon: <FaChalkboardTeacher size={24} />,
      color: '#00bbf9',
      achievements: [
        'Organized 5+ campus workshops',
        'Guest speaker at 3 tech events',
        'Trained 100+ students in web development'
      ]
    },
    {
      title: 'Student Clubs & Volunteering',
      description: 'Actively involved in tech clubs, college fests, and volunteered in campus development programs.',
      icon: <FaUsers size={24} />,
      color: '#8b5cf6',
      achievements: [
        'Tech club president for 2 years',
        'Lead organizer of annual tech fest',
        '100+ hours of community service'
      ]
    },
  ];

  return (
    <section id="extracurricular" style={{ 
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
                display: 'inline-block'
              }}
            >
              <span style={{ 
                background: 'linear-gradient(90deg, #00f5d4, #00bbf9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Extra-Curricular
              </span>{' '}
              Activities
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
                lineHeight: '1.6',
                maxWidth: '700px',
                margin: '0 auto'
              }}
            >
              Leadership, learning, and experiences beyond academics that shaped my growth.
            </motion.p>
          </Col>
        </Row>

        <Row className="g-4 justify-content-center">
          {activityList.map((activity, index) => (
            <Col lg={4} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <Card style={{ 
                  height: '100%',
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.3s ease'
                }}>
                  <Card.Body className="p-4 d-flex flex-column">
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: `rgba(${activity.color === '#00f5d4' ? '0, 245, 212' : activity.color === '#00bbf9' ? '0, 187, 249' : '139, 92, 246'}, 0.1)`,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      color: activity.color
                    }}>
                      {activity.icon}
                    </div>
                    <h3 style={{ 
                      fontSize: '1.5rem',
                      fontWeight: '600',
                      marginBottom: '1rem',
                      color: '#f8fafc'
                    }}>
                      {activity.title}
                    </h3>
                    <p style={{ 
                      color: '#e2e8f0',
                      fontSize: '1rem',
                      marginBottom: '1.5rem',
                      flexGrow: 1
                    }}>
                      {activity.description}
                    </p>
                    
                    <div className="mt-auto">
                      <h6 style={{
                        color: '#94a3b8',
                        fontSize: '0.9rem',
                        marginBottom: '0.75rem',
                        fontWeight: '600'
                      }}>
                        Key Achievements:
                      </h6>
                      <ul style={{
                        paddingLeft: '1.25rem',
                        marginBottom: 0,
                        color: '#cbd5e1',
                        fontSize: '0.9rem'
                      }}>
                        {activity.achievements.map((achievement, i) => (
                          <li key={i} style={{ marginBottom: '0.5rem' }}>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default ExtraCurricular;