import React from 'react';
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
    gpa: "3.7/4.0",
    description: "Comprehensive program covering software engineering, database systems, networking, and IT project management. Specialized in web application development and cloud computing.",
    courses: [
      { name: "Advanced Web Development", progress: 90, icon: <FaLaptopCode /> },
      { name: "Database Systems", progress: 88, icon: <FaBook /> },
      { name: "Cloud Computing", progress: 85, icon: <FaChartLine /> },
      { name: "Machine Learning", progress: 80, icon: <SiTensorflow /> },
      { name: "Software Engineering", progress: 87, icon: <FaCodeBranch /> }
    ],
    technologies: [
      { name: "Django", icon: <SiDjango /> },
      { name: "React", icon: <SiReact /> },
      { name: "Python", icon: <SiPython /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Git", icon: <SiGit /> }
    ]
  };

  return (
    <section className="education-section py-6" style={{ background: '#1e293b', padding: '6rem 0' }}>
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
            <span style={{ color: '#00f5d4' }}>Education</span> <span style={{ color: '#ffffff' }}>& Credentials</span>
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
              My academic journey and technologies I’ve worked with.
            </p>
          </Col>
        </Row>

        {/* First Row: Degree Info + Courses */}
        <Row className="justify-content-center mb-4 g-4">
          <Col md={6} className="d-flex align-items-stretch">
            <Card style={{ ...cardStyle, width: '100%' }} className="h-100">
              <Card.Body>
                <h5 style={{ color: '#00f5d4' }}>
                  <FaUniversity className="me-2" /> {education.degree}
                </h5>
                <p className="mb-1 text-muted">{education.institution}</p>
                <p className="small text-light">
                  <FaCalendarAlt className="me-2 text-muted" />
                  {education.year} | <span className="text-warning">GPA: {education.gpa}</span>
                </p>
                <p style={{ color: '#94a3b8' }}>{education.description}</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="d-flex align-items-stretch">
            <Card style={{ ...cardStyle, width: '100%' }} className="h-100">
              <Card.Body>
                <h6 style={titleStyle}>📘 Key Courses</h6>
                {education.courses.map((course, i) => (
                  <div key={i} className="mb-2">
                    <div className="d-flex justify-content-between small">
                      <span>{course.icon} {course.name}</span>
                      <span style={{ color: '#00f5d4' }}>{course.progress}%</span>
                    </div>
                    <ProgressBar now={course.progress} variant="info" style={{ height: '5px' }} className="rounded-pill bg-dark" />
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Second Row: Technologies */}
        <Row className="justify-content-center mb-4">
          <Col md={10}>
            <Card style={cardStyle}>
              <Card.Body>
                <h6 style={titleStyle}>💻 Technologies</h6>
                <div className="d-flex flex-wrap gap-2">
                  {education.technologies.map((tech, i) => (
                    <Badge key={i} bg="dark" className="d-flex align-items-center py-1 px-2">
                      <span className="me-1">{tech.icon}</span>
                      <span className="small">{tech.name}</span>
                    </Badge>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
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

const titleStyle = {
  color: '#00bbf9',
  marginBottom: '1rem',
  fontSize: '1.1rem'
};

export default Education;
