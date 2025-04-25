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
      { name: "Advanced Web Development", progress: 90, icon: <FaLaptopCode />, color: "#00bfff" },
      { name: "Database Systems", progress: 88, icon: <FaBook />, color: "#00bfff" },
      { name: "Cloud Computing", progress: 85, icon: <FaChartLine />, color: "#00bfff" },
      { name: "Machine Learning", progress: 80, icon: <SiTensorflow />, color: "#ff4d6d" },
      { name: "Software Engineering", progress: 87, icon: <FaCodeBranch />, color: "#00bfff" }
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
    <section id="education" className="education-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center mb-5">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-title"
            >
              <span className="gradient-text">Education</span>{' '}
              <span className="text-white">& Credentials</span>
              <span className="title-underline"></span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="section-subtitle"
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
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-100"
            >
              <Card className="education-card">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <div className="education-icon">
                      <FaUniversity />
                    </div>
                    <div>
                      <h5 className="degree-title">{education.degree}</h5>
                      <p className="institution">{education.institution}</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3 year-info">
                    <FaCalendarAlt className="me-2" />
                    <span>{education.year}</span>
                  </div>
                  <p className="education-description">{education.description}</p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md={6} className="d-flex align-items-stretch">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-100"
            >
              <Card className="courses-card">
                <Card.Body>
                  <h5 className="courses-title">Key Courses</h5>
                  {education.courses.map((course, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="course-item"
                    >
                      <div className="d-flex justify-content-between mb-1">
                        <span className="course-name">
                          <span style={{ color: course.color }}>{course.icon}</span>
                          {course.name}
                        </span>
                        <span className="course-percent" style={{ color: course.color }}>
                          {course.progress}%
                        </span>
                      </div>
                      <ProgressBar 
                        now={course.progress} 
                        className="course-progress"
                      />
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="technologies-card">
                <Card.Body>
                  <h5 className="technologies-title">Technologies & Tools</h5>
                  <div className="technologies-container">
                    {education.technologies.map((tech, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge className="technology-badge">
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
        .education-section {
          background: linear-gradient(135deg, #0d0d2b 0%, #1a1a40 100%);
          padding: 6rem 0;
          position: relative;
          overflow: hidden;
        }
        
        .section-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          position: relative;
          display: inline-block;
        }
        
        .gradient-text {
          background: linear-gradient(90deg, #00bfff, #ff4d6d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .title-underline {
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 4px;
          background: linear-gradient(90deg, #00bfff, #ff4d6d);
          border-radius: 2px;
        }
        
        .section-subtitle {
          font-size: 1.2rem;
          color: #adb5bd;
          line-height: 1.6;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .education-card,
        .courses-card,
        .technologies-card {
          background: rgba(26, 26, 64, 0.8);
          border: 1px solid rgba(0, 191, 255, 0.1);
          border-radius: 16px;
          padding: 1.5rem;
          backdrop-filter: blur(10px);
          height: 100%;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        
        .education-card:hover,
        .courses-card:hover,
        .technologies-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0, 191, 255, 0.15);
          border-color: rgba(0, 191, 255, 0.3);
        }
        
        .education-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: rgba(0, 191, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          color: #00bfff;
        }
        
        .degree-title {
          color: #00bfff;
          margin-bottom: 0.25rem;
          font-size: 1.25rem;
        }
        
        .institution {
          color: #adb5bd;
          margin-bottom: 0;
        }
        
        .year-info {
          color: #ced4da;
        }
        
        .education-description {
          color: #e9ecef;
          line-height: 1.7;
        }
        
        .courses-title,
        .technologies-title {
          color: #00bfff;
          margin-bottom: 1.5rem;
          font-size: 1.25rem;
          font-weight: 600;
        }
        
        .course-item {
          margin-bottom: 1.5rem;
        }
        
        .course-name {
          color: #e9ecef;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .course-percent {
          font-weight: 500;
        }
        
        .course-progress {
          height: 6px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        
        .course-progress .progress-bar {
          background: linear-gradient(90deg, #00bfff, #ff4d6d);
          border-radius: 3px;
        }
        
        .technologies-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        
        .technology-badge {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 400;
          transition: all 0.3s ease;
        }
        
        .technology-badge:hover {
          background: rgba(0, 191, 255, 0.1);
          border-color: rgba(0, 191, 255, 0.4);
        }
        
        @media (max-width: 768px) {
          .section-title {
            font-size: 2.5rem;
          }
          
          .education-section {
            padding: 4rem 0;
          }
          
          .technologies-container {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;