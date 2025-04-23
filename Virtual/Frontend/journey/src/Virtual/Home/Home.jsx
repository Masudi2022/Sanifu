import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import masud from '../../assets/massudy.png';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiCode, FiCloud, FiDatabase, FiLayers } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaJava, FaPython } from 'react-icons/fa';
import { SiMongodb, SiFirebase, SiTailwindcss } from 'react-icons/si';
import { FiMessageSquare } from 'react-icons/fi';

function Home() {
  const sayings = [
    "Coding between coconut trees—Zanzibar's student developer turning caffeine into clean code. 🌴☕",
    "IT student by day, problem-solver by night: 50% debugging, 50% wondering why it worked. Based in Zanzibar.",
    "Writing if/else statements between lectures—where syntax errors meet ocean views.",
    "Student developer spilling console.logs instead of coconut water. Zanzibar's code surfer! 🏄‍♂️",
    "Building the web's future between semesters—Zanzibar's answer to digital student projects.",
  ];

  const [currentSaying, setCurrentSaying] = useState(0);
  const [showStudentBadge, setShowStudentBadge] = useState(true);

  useEffect(() => {
    const sayingInterval = setInterval(() => {
      setCurrentSaying((prev) => (prev + 1) % sayings.length);
    }, 8000);
    const badgeInterval = setInterval(() => {
      setShowStudentBadge(prev => !prev);
    }, 5000);
    return () => {
      clearInterval(sayingInterval);
      clearInterval(badgeInterval);
    };
  }, [sayings.length]);

  const skills = [
    { name: "Frontend", icon: <FiLayers size={24} />, items: ["React", "JavaScript", "HTML/CSS", "Tailwind", "Bootstrap"] },
    { name: "Backend", icon: <FiDatabase size={24} />, items: ["Node.js", "Express", "Java", "Python"] },
    { name: "Cloud/DB", icon: <FiCloud size={24} />, items: ["MongoDB", "Firebase", "AWS Basics", "REST APIs"] },
  ];

  const projects = [
    { title: "E-Commerce Platform", description: "Full-stack e-commerce solution with React and Node.js", tags: ["React", "Node", "MongoDB"] },
    { title: "Student Portal", description: "University portal for course management and resources", tags: ["Java", "Spring Boot", "MySQL"] },
    { title: "Weather Dashboard", description: "Real-time weather application with API integration", tags: ["React", "API", "Tailwind"] },
  ];

  return (
    <div className="portfolio-app" style={{
      background: 'linear-gradient(135deg, #0f172a, #1e293b)',
      color: '#f8fafc',
      minHeight: '100vh',
      fontFamily: "'Inter', sans-serif",
      overflowX: 'hidden'
    }}>
     

      {/* Hero Section */}
      <section className="hero-section" style={{ padding: '6rem 0' }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <div style={{ position: 'relative' }}>
                {showStudentBadge && (
                  <span style={{
                    position: 'absolute',
                    top: -25,
                    left: 0,
                    background: 'linear-gradient(90deg, #00f5d4, #00bbf9)',
                    color: '#0f172a',
                    padding: '8px 20px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(0, 245, 212, 0.3)',
                    zIndex: 1,
                    animation: 'fadeIn 0.5s ease-in-out'
                  }}>
                    🎓 Currently Enrolled @ University of Zanzibar
                  </span>
                )}
                <h1 style={{ 
                  fontSize: '3.5rem', 
                  fontWeight: 'bold', 
                  marginBottom: '1.5rem',
                  lineHeight: '1.2'
                }}>
                  <span style={{ color: '#00f5d4' }}>Building Digital</span><br />
                  Experiences That Matter
                </h1>
                <p style={{ 
                  fontSize: '1.2rem', 
                  color: '#94a3b8', 
                  lineHeight: '1.6',
                  marginBottom: '2rem'
                }}>
                  {sayings[currentSaying]}
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Button
                    variant="primary"
                    as={Link}
                    to="/projects"
                    style={{
                      padding: '0.8rem 1.8rem',
                      borderRadius: '8px',
                      fontWeight: '600',
                      background: 'linear-gradient(90deg, #00f5d4, #00bbf9)',
                      border: 'none',
                      color: '#0f172a',
                      boxShadow: '0 4px 15px rgba(0, 245, 212, 0.3)'
                    }}
                  >
                    View Projects
                  </Button>
                  <Button
                    variant="outline-light"
                    as={Link}
                    to="/contact"
                    style={{
                      padding: '0.8rem 1.8rem',
                      borderRadius: '8px',
                      fontWeight: '600',
                      border: '2px solid #00f5d4',
                      color: '#00f5d4',
                      background: 'transparent'
                    }}
                  >
                    Contact Me
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
               
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}>
              <img
                src={masud}
                alt="Masud Salum - Student Developer"
                style={{
                  width: '80%',
                  height: 'auto',
                  display: 'block',
                  marginLeft: 'auto', // Pushes the image to the right
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/600x400?text=Masud+Salum';
                }}
              />

                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))',
                  padding: '1.5rem',
                  color: 'white',
                  textAlign: 'center'
                }}>
                  <h3 style={{ margin: 0 }}>Masud Salum</h3>
                  <p style={{ margin: 0, color: '#00f5d4' }}>IT Student & Developer</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className="about-section py-6" style={{ background: '#1e293b', padding: '6rem 0' }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center mb-5">
              <h2 className="section-title" style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                position: 'relative',
                display: 'inline-block'
              }}>
                <span style={{ color: '#00f5d4' }}>About</span> Me
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
                I'm an Information Technology student at the University of Zanzibar with a passion for creating impactful digital solutions. My journey in tech combines formal education with hands-on experience in building web applications and solving real-world problems.
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            {skills.map((skill, index) => (
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
                      {skill.icon}
                    </div>
                    <Card.Title style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: '600',
                      marginBottom: '1rem',
                      color: '#f8fafc'
                    }}>
                      {skill.name}
                    </Card.Title>
                    <ul style={{ 
                      paddingLeft: '1.25rem',
                      color: '#94a3b8'
                    }}>
                      {skill.items.map((item, i) => (
                        <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          
          <Row className="justify-content-center mt-5">
            <Col lg={8} className="text-center">
              <Button
                as={Link}
                to="/about"
                variant="outline-primary"
                style={{
                  padding: '0.8rem 2rem',
                  borderRadius: '8px',
                  fontWeight: '600',
                  border: '2px solid #00f5d4',
                  color: '#00f5d4',
                  background: 'transparent',
                  transition: 'all 0.3s ease'
                }}
                className="hover-effect"
              >
                More About Me
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects Section */}
      <section className="projects-section py-6" style={{ padding: '6rem 0', background: '#0f172a' }}>
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="section-title" style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                position: 'relative',
                display: 'inline-block'
              }}>
                My <span style={{ color: '#00f5d4' }}>Projects</span>
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
                A selection of projects I've worked on, ranging from academic assignments to personal passion projects.
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            {projects.map((project, index) => (
              <Col md={4} key={index}>
                <Card style={{ 
                  height: '100%',
                  background: 'rgba(30, 41, 59, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                className="hover-effect"
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={{
                    height: '200px',
                    background: `linear-gradient(135deg, ${index % 3 === 0 ? '#00f5d4' : index % 3 === 1 ? '#00bbf9' : '#f472b6'}, ${index % 3 === 0 ? '#00bbf9' : index % 3 === 1 ? '#f472b6' : '#00f5d4'})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '3rem'
                  }}>
                    <FiCode />
                  </div>
                  <Card.Body className="p-4">
                    <Card.Title style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: '600',
                      marginBottom: '0.75rem',
                      color: '#f8fafc'
                    }}>
                      {project.title}
                    </Card.Title>
                    <Card.Text style={{ 
                      color: '#94a3b8',
                      marginBottom: '1.5rem'
                    }}>
                      {project.description}
                    </Card.Text>
                    <div className="d-flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} style={{
                          background: 'rgba(0, 245, 212, 0.1)',
                          color: '#00f5d4',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '0.75rem',
                          fontWeight: '500'
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          
          <Row className="justify-content-center mt-5">
            <Col lg={8} className="text-center">
              <Button
                as={Link}
                to="/projects"
                variant="primary"
                style={{
                  padding: '0.8rem 2rem',
                  borderRadius: '8px',
                  fontWeight: '600',
                  background: 'linear-gradient(90deg, #00f5d4, #00bbf9)',
                  border: 'none',
                  color: '#0f172a',
                  boxShadow: '0 4px 15px rgba(0, 245, 212, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                className="hover-effect"
              >
                View All Projects
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-section py-6" style={{ padding: '6rem 0', background: '#1e293b' }}>
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="section-title" style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                position: 'relative',
                display: 'inline-block'
              }}>
                My <span style={{ color: '#00f5d4' }}>Tech Stack</span>
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
                Technologies I've worked with and continue to learn as part of my academic and personal development.
              </p>
            </Col>
          </Row>
          
          <Row className="justify-content-center g-4">
            <Col xs={6} sm={4} md={3} lg={2} className="text-center">
              <div className="tech-icon" style={{
                background: 'rgba(15, 23, 42, 0.5)',
                borderRadius: '12px',
                padding: '1.5rem',
                transition: 'transform 0.3s ease',
                height: '100%'
              }}>
                <FaReact size={40} color="#61DAFB" />
                <p style={{ marginTop: '1rem', marginBottom: 0, color: '#f8fafc' }}>React</p>
              </div>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2} className="text-center">
              <div className="tech-icon" style={{
                background: 'rgba(15, 23, 42, 0.5)',
                borderRadius: '12px',
                padding: '1.5rem',
                transition: 'transform 0.3s ease',
                height: '100%'
              }}>
                <FaNodeJs size={40} color="#68A063" />
                <p style={{ marginTop: '1rem', marginBottom: 0, color: '#f8fafc' }}>Node.js</p>
              </div>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2} className="text-center">
              <div className="tech-icon" style={{
                background: 'rgba(15, 23, 42, 0.5)',
                borderRadius: '12px',
                padding: '1.5rem',
                transition: 'transform 0.3s ease',
                height: '100%'
              }}>
                <SiMongodb size={40} color="#47A248" />
                <p style={{ marginTop: '1rem', marginBottom: 0, color: '#f8fafc' }}>MongoDB</p>
              </div>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2} className="text-center">
              <div className="tech-icon" style={{
                background: 'rgba(15, 23, 42, 0.5)',
                borderRadius: '12px',
                padding: '1.5rem',
                transition: 'transform 0.3s ease',
                height: '100%'
              }}>
                <FaJava size={40} color="#007396" />
                <p style={{ marginTop: '1rem', marginBottom: 0, color: '#f8fafc' }}>Java</p>
              </div>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2} className="text-center">
              <div className="tech-icon" style={{
                background: 'rgba(15, 23, 42, 0.5)',
                borderRadius: '12px',
                padding: '1.5rem',
                transition: 'transform 0.3s ease',
                height: '100%'
              }}>
                <SiTailwindcss size={40} color="#38B2AC" />
                <p style={{ marginTop: '1rem', marginBottom: 0, color: '#f8fafc' }}>Tailwind</p>
              </div>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2} className="text-center">
              <div className="tech-icon" style={{
                background: 'rgba(15, 23, 42, 0.5)',
                borderRadius: '12px',
                padding: '1.5rem',
                transition: 'transform 0.3s ease',
                height: '100%'
              }}>
                <SiFirebase size={40} color="#FFCA28" />
                <p style={{ marginTop: '1rem', marginBottom: 0, color: '#f8fafc' }}>Firebase</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="contact-section py-6" style={{ padding: '6rem 0', background: '#0f172a' }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center mb-5">
              <h2 className="section-title" style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                position: 'relative',
                display: 'inline-block'
              }}>
                Let's <span style={{ color: '#00f5d4' }}>Connect</span>
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
                lineHeight: '1.8',
                marginBottom: '2rem'
              }}>
                Whether you have a project idea, want to collaborate, or just want to say hello, I'd love to hear from you!
              </p>
              <div className="d-flex justify-content-center gap-3">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#f8fafc',
                  fontSize: '1.5rem',
                  transition: 'all 0.3s ease'
                }}>
                  <FiGithub />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#f8fafc',
                  fontSize: '1.5rem',
                  transition: 'all 0.3s ease'
                }}>
                  <FiLinkedin />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#f8fafc',
                  fontSize: '1.5rem',
                  transition: 'all 0.3s ease'
                }}>
                  <FiTwitter />
                </a>
                <a href="mailto:your.email@example.com" style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#f8fafc',
                  fontSize: '1.5rem',
                  transition: 'all 0.3s ease'
                }}>
                  <FiMail />
                </a>
              </div>
            </Col>
          </Row>
          
          <Row className="justify-content-center">
            <Col lg={6}>
              <div style={{
                background: 'rgba(30, 41, 59, 0.5)',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '600',
                  marginBottom: '1.5rem',
                  color: '#f8fafc',
                  textAlign: 'center'
                }}>
                  Send me a message
                </h3>
                <Button
                  as={Link}
                  to="/contact"
                  variant="primary"
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '8px',
                    fontWeight: '600',
                    background: 'linear-gradient(90deg, #00f5d4, #00bbf9)',
                    border: 'none',
                    color: '#0f172a',
                    boxShadow: '0 4px 15px rgba(0, 245, 212, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  className="hover-effect"
                >
                  Contact
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    

    

      <Link
        to="/chat"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          zIndex: 1000,
          background: 'linear-gradient(135deg, #00f5d4, #00bbf9)',
          padding: '12px 20px',
          borderRadius: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          boxShadow: '0 4px 20px rgba(0, 245, 212, 0.4)',
          transition: 'transform 0.3s ease',
          color: '#0f172a',
          fontWeight: '600',
          fontSize: '16px',
          whiteSpace: 'nowrap'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <FiMessageSquare size={20} />
        <span className="d-none d-sm-inline">Ask me</span>
      </Link>


      {/* Add some global styles */}
      <style>{`
        .hover-effect:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(29, 151, 135, 0.2);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default Home;