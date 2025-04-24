import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Badge, ProgressBar } from 'react-bootstrap';
import {
  FaUniversity, FaCalendarAlt,
  FaLaptopCode, FaBook, FaChartLine, FaCodeBranch
} from 'react-icons/fa';
import {
  SiDjango, SiReact, SiPython, SiJavascript,
  SiPostgresql, SiDocker, SiGit, SiTensorflow
} from 'react-icons/si';

const Education = () => {
  const education = {
    degree: "Bachelor's in Information Technology",
    institution: "State University of Zanzibar",
    year: "2021 - 2025 (Expected)",
    description: "Comprehensive program covering software engineering, database systems, networking, and IT project management. Specialized in web application development and cloud computing.",
    courses: [
      { name: "Advanced Web Development", progress: 90, icon: <FaLaptopCode />, color: "#00f5d4" },
      { name: "Database Systems", progress: 88, icon: <FaBook />, color: "#00bbf9" },
      { name: "Cloud Computing", progress: 85, icon: <FaChartLine />, color: "#8b5cf6" },
      { name: "Machine Learning", progress: 80, icon: <SiTensorflow />, color: "#ec4899" },
      { name: "Software Engineering", progress: 87, icon: <FaCodeBranch />, color: "#10b981" }
    ],
    technologies: [
      { name: "Django", icon: <SiDjango />, color: "#092e20" },
      { name: "React", icon: <SiReact />, color: "#61dafb" },
      { name: "Python", icon: <SiPython />, color: "#3776ab" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
      { name: "Docker", icon: <SiDocker />, color: "#2496ed" },
      { name: "Git", icon: <SiGit />, color: "#f05032" }
    ]
  };

  return (
    <section id="education" style={{ 
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
                Education
              </span>{' '}
              <span style={{ color: '#ffffff' }}>& Credentials</span>
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
              My academic journey and the technologies I've mastered along the way.
            </motion.p>
          </Col>
        </Row>

        {/* First Row: Degree Info + Courses */}
        <Row className="justify-content-center mb-4 g-4">
          <Col md={6} className="d-flex align-items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-100"
            >
              <Card style={{ 
                background: 'rgba(15, 23, 42, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '1.5rem',
                backdropFilter: 'blur(10px)',
                height: '100%',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
              }}>
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '12px',
                      background: 'rgba(0, 245, 212, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '1rem',
                      color: '#00f5d4'
                    }}>
                      <FaUniversity size={20} />
                    </div>
                    <div>
                      <h5 style={{ color: '#00f5d4', marginBottom: '0.25rem' }}>{education.degree}</h5>
                      <p className="mb-0" style={{ color: '#94a3b8' }}>{education.institution}</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3" style={{ color: '#cbd5e1' }}>
                    <FaCalendarAlt className="me-2" />
                    <span>{education.year}</span>
                  </div>
                  <p style={{ color: '#e2e8f0' }}>{education.description}</p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md={6} className="d-flex align-items-stretch">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-100"
            >
              <Card style={{ 
                background: 'rgba(15, 23, 42, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '1.5rem',
                backdropFilter: 'blur(10px)',
                height: '100%',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
              }}>
                <Card.Body>
                  <h5 style={{ 
                    color: '#00bbf9',
                    marginBottom: '1.5rem',
                    fontSize: '1.25rem',
                    fontWeight: '600'
                  }}>
                    Key Courses
                  </h5>
                  {education.courses.map((course, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="mb-3"
                    >
                      <div className="d-flex justify-content-between mb-1">
                        <span style={{ color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ color: course.color }}>{course.icon}</span>
                          {course.name}
                        </span>
                        <span style={{ color: course.color, fontWeight: '500' }}>{course.progress}%</span>
                      </div>
                      <ProgressBar 
                        now={course.progress} 
                        style={{ 
                          height: '6px',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)'
                        }} 
                        className="rounded-pill"
                        variant="custom"
                      />
                      <style type="text/css">{`
                        .progress-bar-custom {
                          background-color: ${course.color};
                        }
                      `}</style>
                    </motion.div>
                  ))}
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        {/* Second Row: Technologies */}
        <Row className="justify-content-center mb-4">
          <Col md={10}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card style={{ 
                background: 'rgba(15, 23, 42, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '1.5rem',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
              }}>
                <Card.Body>
                  <h5 style={{ 
                    color: '#00bbf9',
                    marginBottom: '1.5rem',
                    fontSize: '1.25rem',
                    fontWeight: '600'
                  }}>
                    Technologies & Tools
                  </h5>
                  <div className="d-flex flex-wrap gap-3">
                    {education.technologies.map((tech, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge 
                          style={{ 
                            background: 'rgba(255, 255, 255, 0.1)',
                            color: '#ffffff',
                            padding: '0.75rem 1rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontSize: '0.9rem'
                          }}
                        >
                          <span style={{ color: tech.color }}>{tech.icon}</span>
                          {tech.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <style jsx global>{`
        .card {
          transition: all 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 245, 212, 0.1) !important;
          border-color: rgba(0, 245, 212, 0.3) !important;
        }
      `}</style>
    </section>
  );
};

export default Education;