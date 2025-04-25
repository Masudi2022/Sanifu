import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
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
import { motion } from 'framer-motion';

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
      id="skills" 
      className="skills-section py-6"
      style={{ 
        background: '#0d0d2b',
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container>
        <Row className="justify-content-center mb-6">
          <Col lg={8} className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: '3rem',
                fontWeight: '700',
                marginBottom: '1.5rem',
                color: '#f8f9fa',
                position: 'relative',
                display: 'inline-block'
              }}
            >
              <span style={{ 
                background: 'linear-gradient(90deg, #00bfff, #ff4d6d)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Technical Skills
              </span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: '80px' }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  height: '4px',
                  background: 'linear-gradient(90deg, #00bfff, #ff4d6d)',
                  borderRadius: '2px'
                }}
              />
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ 
                fontSize: '1.1rem', 
                color: '#adb5bd', 
                lineHeight: '1.8' 
              }}
            >
              My expertise across the full development stack, including frontend, backend,
              database, DevOps, cloud, and project management tools.
            </motion.p>
          </Col>
        </Row>

        <Row className="g-4">
          {skillCategories.map((category, index) => (
            <Col md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className="h-100 skill-card"
                  style={{
                    background: '#1a1a40',
                    border: '1px solid rgba(0, 191, 255, 0.1)',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Card.Body className="p-4">
                    <div className="skill-icon-container">
                      <div className="skill-icon-wrapper">
                        {React.cloneElement(category.icon, { 
                          className: 'skill-category-icon' 
                        })}
                      </div>
                    </div>
                    <Card.Title
                      className="mb-4"
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        color: '#00bfff'
                      }}
                    >
                      {category.title}
                    </Card.Title>
                    <div className="skill-items">
                      {category.skills.map((skill, i) => (
                        <div key={i} className="skill-item mb-3">
                          <div className="d-flex align-items-center mb-2">
                            {skill.icon && (
                              <span className="skill-item-icon me-2">
                                {skill.icon}
                              </span>
                            )}
                            <span className="skill-name" style={{ color: '#f8f9fa' }}>
                              {skill.name}
                            </span>
                            <span className="ms-auto skill-percent" style={{ color: '#00bfff' }}>
                              {skill.level}%
                            </span>
                          </div>
                          <ProgressBar
                            now={skill.level}
                            style={{
                              height: '6px',
                              borderRadius: '3px',
                              backgroundColor: 'rgba(255, 255, 255, 0.1)'
                            }}
                          >
                            <ProgressBar
                              variant="primary"
                              style={{
                                background: 'linear-gradient(90deg, #00bfff, #ff4d6d)',
                                borderRadius: '3px'
                              }}
                            />
                          </ProgressBar>
                        </div>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx global>{`
        .skills-section {
          background: linear-gradient(135deg, #0d0d2b 0%, #1a1a40 100%);
        }
        
        .skill-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .skill-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0, 191, 255, 0.15);
          border-color: rgba(0, 191, 255, 0.3) !important;
        }
        
        .skill-icon-container {
          display: flex;
          justify-content: flex-start;
          margin-bottom: 1.5rem;
        }
        
        .skill-icon-wrapper {
          width: 60px;
          height: 60px;
          background: rgba(0, 191, 255, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00bfff;
          font-size: 1.5rem;
        }
        
        .skill-category-icon {
          transition: transform 0.3s ease;
        }
        
        .skill-card:hover .skill-category-icon {
          transform: scale(1.1);
        }
        
        .skill-item-icon {
          color: #00bfff;
          font-size: 1.1rem;
        }
        
        .skill-name {
          font-weight: 500;
        }
        
        .skill-percent {
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .skills-section {
            padding: 4rem 0 !important;
          }
          
          .skill-card {
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;