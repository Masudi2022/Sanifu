import React, { useState, useEffect } from 'react';
import { 
  Form, 
  Button, 
  Container, 
  Alert, 
  FloatingLabel, 
  Spinner,
  Row,
  Col,
  Card
} from 'react-bootstrap';
import { 
  FaEnvelope, 
  FaCommentDots, 
  FaStar, 
  FaPaperPlane,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter
} from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import axios from 'axios';
import './Contact.css';

const API_URL = `${import.meta.env.VITE_API_BASE_URL}/api/feedaback/`;

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
    rating: null
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const [activeTab, setActiveTab] = useState('form'); // 'form' or 'social'

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      await axios.post(API_ENDPOINT, formData);
      setStatus({ loading: false, success: true, error: null });
      setFormData({ 
        email: '',
        message: '',
        rating: null
      });
    } catch (err) {
      setStatus({ 
        loading: false, 
        success: false, 
        error: err.response?.data?.message || 'Submission failed. Please try again later.' 
      });
    }
  };

  useEffect(() => {
    if (status.success) {
      const timer = setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      return () => clearTimeout(timer);
    }
  }, [status.success]);

  // Color scheme
  const colors = {
    primary: '#00f5d4',
    secondary: '#00bbf9',
    dark: '#0f172a',
    light: '#f8fafc',
    gray: '#94a3b8'
  };

  return (
    <div
      style={{
        padding: '4rem 0',
        backgroundColor: colors.dark,
        minHeight: '100vh',
        color: colors.light,
        fontFamily: "'Inter', sans-serif"
      }}
    >
      <Container className="py-5" style={{ maxWidth: '1200px' }}>
        {/* Header Section */}
        <div className="text-center mb-5">
          <h2 style={{ 
            color: colors.primary,
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '1rem'
          }}>
            Let's Connect
          </h2>
          <p style={{
            color: colors.gray,
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Whether you have a project idea, want to collaborate, or just want to say hello, 
            I'd love to hear from you!
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="d-flex justify-content-center mb-5">
          <Button
            variant={activeTab === 'form' ? 'primary' : 'outline-primary'}
            onClick={() => setActiveTab('form')}
            style={{
              borderRadius: '30px 0 0 30px',
              padding: '0.75rem 2rem',
              borderColor: colors.primary,
              backgroundColor: activeTab === 'form' ? colors.primary : 'transparent',
              color: activeTab === 'form' ? colors.dark : colors.primary,
              fontWeight: '600'
            }}
          >
            <FaEnvelope className="me-2" />
            Send Message
          </Button>
          <Button
            variant={activeTab === 'social' ? 'primary' : 'outline-primary'}
            onClick={() => setActiveTab('social')}
            style={{
              borderRadius: '0 30px 30px 0',
              padding: '0.75rem 2rem',
              borderColor: colors.primary,
              backgroundColor: activeTab === 'social' ? colors.primary : 'transparent',
              color: activeTab === 'social' ? colors.dark : colors.primary,
              fontWeight: '600'
            }}
          >
            <FaCommentDots className="me-2" />
            Social Links
          </Button>
        </div>

        {/* Status Alerts */}
        {status.success && (
          <Alert
            variant="success"
            className="fade show rounded-pill text-center mb-4"
            style={{
              backgroundColor: colors.primary,
              border: 'none',
              color: colors.dark,
              fontWeight: '500',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            <FaPaperPlane className="me-2" />
            Thanks for your feedback! I appreciate your message.
          </Alert>
        )}

        {status.error && (
          <Alert 
            variant="danger" 
            className="fade show rounded-pill text-center mb-4"
            style={{
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            {status.error}
          </Alert>
        )}

        {/* Main Content */}
        {activeTab === 'form' ? (
          <Row className="justify-content-center">
            <Col lg={8}>
              <Form
                onSubmit={handleSubmit}
                className="p-4 p-lg-5 rounded-3 shadow"
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.8)',
                  border: `1px solid rgba(255, 255, 255, 0.1)`,
                  backdropFilter: 'blur(10px)',
                  color: '#fffff'
                }}
              >
                {/* Email Input */}
                <FloatingLabel
                  controlId="email"
                  label="Email Address"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    placeholder=" "
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      backgroundColor: 'rgba(15, 23, 42, 0.5)',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      color: colors.light
                    }}
                  />
                </FloatingLabel>

                {/* Message Input */}
                <FloatingLabel
                  controlId="message"
                  label="Your Message"
                  className="mb-4"
                >
                  <Form.Control
                    as="textarea"
                    style={{ 
                      height: '150px',
                      backgroundColor: 'rgba(15, 23, 42, 0.5)',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      color: colors.light
                    }}
                    placeholder=" "
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength="10"
                  />
                </FloatingLabel>

                {/* Rating (Optional) */}
                <Form.Group className="mb-4 text-center">
                  <Form.Label className="d-flex align-items-center justify-content-center mb-2">
                    <FaStar className="me-2" style={{ color: colors.primary }} />
                    How would you rate my portfolio?
                    <span className="text-muted ms-2">(Optional)</span>
                  </Form.Label>
                  <div className="d-flex justify-content-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        onClick={() => setFormData({ ...formData, rating: star })}
                        title={`Rate ${star} star${star > 1 ? 's' : ''}`}
                        style={{
                          cursor: 'pointer',
                          fontSize: '1.8rem',
                          margin: '0 0.5rem',
                          color: star <= (formData.rating || 0) ? colors.primary : colors.gray,
                          transition: 'all 0.2s ease',
                          transform: star <= (formData.rating || 0) ? 'scale(1.1)' : 'scale(1)'
                        }}
                      />
                    ))}
                  </div>
                </Form.Group>

                {/* Submit Button */}
                <div className="text-center mt-4">
                  <Button
                    type="submit"
                    disabled={status.loading}
                    className="submit-btn hover-effect"
                    style={{
                      width: '220px',
                      borderRadius: '50px',
                      padding: '12px',
                      fontWeight: '600',
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                      border: 'none',
                      color: colors.dark,
                      boxShadow: '0 4px 15px rgba(0, 245, 212, 0.3)'
                    }}
                  >
                    {status.loading ? (
                      <>
                        <Spinner 
                          as="span" 
                          animation="border" 
                          size="sm" 
                          className="me-2" 
                          style={{ color: colors.dark }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="me-2" />
                        Send Feedback
                      </>
                    )}
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        ) : (
          <Row className="justify-content-center g-4">
            {/* Social Media Links Cards */}
            <Col md={6} lg={4}>
              <Card 
                className="h-100 text-center p-4 hover-effect"
                style={{
                  background: 'rgba(30, 41, 59, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => window.open('masudsalum@sanifutech.com')}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'rgba(0, 245, 212, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: colors.primary
                }}>
                  <SiGmail size={32} />
                </div>
                <Card.Title style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: colors.light
                }}>
                  Email Me
                </Card.Title>
                <Card.Text style={{ color: colors.gray }}>
                  Reach me directly through email.
                </Card.Text>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card 
                className="h-100 text-center p-4 hover-effect"
                style={{
                  background: 'rgba(30, 41, 59, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => window.open('https://www.linkedin.com/in/Masudi Salum/')}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'rgba(0, 245, 212, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: '#0077B5'
                }}>
                  <FaLinkedin size={32} />
                </div>
                <Card.Title style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: colors.light
                }}>
                  LinkedIn
                </Card.Title>
                <Card.Text style={{ color: colors.gray }}>
                  Connect with me on LinkedIn.
                </Card.Text>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card 
                className="h-100 text-center p-4 hover-effect"
                style={{
                  background: 'rgba(30, 41, 59, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => window.open('https://github.com/Masudi2022/')}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'rgba(0, 245, 212, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: '#24292F'
                }}>
                  <FaGithub size={32} />
                </div>
                <Card.Title style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: colors.light
                }}>
                  GitHub
                </Card.Title>
                <Card.Text style={{ color: colors.gray }}>
                  Explore my repositories on GitHub.
                </Card.Text>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Contact;
