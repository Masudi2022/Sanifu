import React from 'react';
import { Container, Row, Col, Card, ProgressBar, Badge } from 'react-bootstrap';
import {
  FaCode,
  FaServer,
  FaMobile,
  FaCloud,
  FaProjectDiagram,
  FaTools,
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaTrello
} from 'react-icons/fa';
import { SiDjango, SiPostgresql, SiNotion } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode />,
      skills: [
        { name: "JavaScript", icon: <FaJs />, level: 90 },
        { name: "React.js", icon: <FaReact />, level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Responsive Design", level: 90 }
      ]
    },
    {
      title: "Backend Development",
      icon: <FaServer />,
      skills: [
        { name: "Python", icon: <FaPython />, level: 88 },
        { name: "Django", icon: <SiDjango />, level: 85 },
        { name: "Node.js", icon: <FaNodeJs />, level: 75 },
        { name: "REST APIs", level: 85 }
      ]
    },
    {
      title: "Database & DevOps",
      icon: <FaDatabase />,
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql />, level: 80 },
        { name: "MySQL", level: 75 },
        { name: "Git", icon: <FaGitAlt />, level: 85 },
        { name: "Docker", level: 70 }
      ]
    },
    {
      title: "UI/UX Design",
      icon: <FaTools />,
      skills: [
        { name: "Wireframing", level: 80 },
        { name: "Prototyping", level: 70 }
      ]
    },
    {
      title: "Cloud Services",
      icon: <FaCloud />,
      skills: [
        { name: "Firebase", level: 65 },
        { name: "Deployment", level: 75 }
      ]
    },
    {
      title: "Project Management",
      icon: <FaProjectDiagram />,
      skills: [
        { name: "Agile Methodology", level: 80 },
        { name: "Trello", icon: <FaTrello />, level: 85 },
        { name: "Notion", icon: <SiNotion />, level: 80 }
      ]
    }
  ];

  return (
    <section
      className="skills-section py-6"
      style={{ background: '#1e293b', padding: '6rem 0' }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center mb-5">
            <h2
              style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                position: 'relative',
                display: 'inline-block',
                color: '#f8fafc'
              }}
            >
              <span style={{ color: '#00f5d4' }}>Technical</span> Skills
              <span
                style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #00f5d4, #00bbf9)',
                  borderRadius: '2px'
                }}
              ></span>
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: '1.8' }}>
              My expertise across the full development stack, including frontend, backend,
              database, DevOps, cloud, and project management tools.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {skillCategories.map((category, index) => (
            <Col md={4} key={index}>
              <Card
                style={{
                  height: '100%',
                  background: 'rgba(15, 23, 42, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                className="hover-effect"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = 'translateY(-5px)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = 'translateY(0)')
                }
              >
                <Card.Body className="p-4">
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      background: 'rgba(0, 245, 212, 0.1)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      color: '#00f5d4'
                    }}
                  >
                    {category.icon}
                  </div>
                  <Card.Title
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      marginBottom: '1rem',
                      color: '#f8fafc'
                    }}
                  >
                    {category.title}
                  </Card.Title>
                  <ul style={{ paddingLeft: '1.25rem', color: '#94a3b8' }}>
                    {category.skills.map((skill, i) => (
                      <li key={i} style={{ marginBottom: '0.5rem' }}>
                        {skill.icon && (
                          <span style={{ marginRight: '8px' }}>{skill.icon}</span>
                        )}
                        {skill.name}
                        <ProgressBar
                          now={skill.level}
                          style={{
                            height: '8px',
                            borderRadius: '5px',
                            background: '#334155',
                            marginTop: '5px'
                          }}
                          variant="info"
                        />
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
