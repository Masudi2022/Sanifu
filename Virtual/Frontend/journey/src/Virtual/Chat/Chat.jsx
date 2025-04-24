import React, { useState, useEffect, useRef } from 'react';
import { Container, Form, Button, Card, Spinner } from 'react-bootstrap';
import { FaPaperPlane, FaRobot, FaUser, FaLightbulb } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';

const API_URL = `${import.meta.env.VITE_API_BASE_URL}/api/chat/`;

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const suggestionsRef = useRef(null);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const allSuggestions = [
    "What's your technical background?",
    "What projects have you worked on?",
    "What are your strongest skills?",
    "Tell me about your education",
    "What technologies are you currently learning?",
    "What's your experience with React?",
    "Can you describe a challenging project?",
    "What's your approach to problem solving?"
  ];

  const [sessionId] = useState(() => {
    const existing = localStorage.getItem("chat_session");
    if (existing) return existing;
    const newId = '_' + Math.random().toString(36).substring(2, 11);
    localStorage.setItem("chat_session", newId);
    return newId;
  });

  useEffect(() => {
    // Initial welcome message
    setMessages([{ 
      from: 'bot', 
      text: "Hey there! 👋 I'm Masud. Ask me anything about my background, skills, or experiences!",
      isWelcome: true
    }]);

    // Auto-scroll suggestions
    const interval = setInterval(() => {
      setActiveSuggestionIndex(prev => (prev + 1) % allSuggestions.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (suggestionsRef.current) {
      suggestionsRef.current.scrollTo({
        left: activeSuggestionIndex * 250,
        behavior: 'smooth'
      });
    }
  }, [activeSuggestionIndex]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { from: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post(API_URL, {
        sender: sessionId,
        message: input
      });

      const botText = response.data.response;

      if (botText) {
        setTimeout(() => {
          setMessages(prev => [...prev, { from: 'bot', text: botText }]);
        }, 800);
      } else {
        setMessages(prev => [...prev, {
          from: 'bot',
          text: "🤔 Hmm... I didn't get a reply from the bot."
        }]);
      }

    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, {
        from: 'bot',
        text: "Oops! Something went wrong. 😓"
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
  };

  return (
    <section style={{ 
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      minHeight: '100vh',
      padding: '3rem 0',
      color: '#f8fafc',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <style>
        {`
          .custom-placeholder::placeholder {
            color: #94a3b8;
            opacity: 1;
          }
          .chat-container::-webkit-scrollbar {
            width: 8px;
          }
          .chat-container::-webkit-scrollbar-track {
            background: rgba(255,255,255,0.05);
          }
          .chat-container::-webkit-scrollbar-thumb {
            background: #00f5d4;
            border-radius: 4px;
          }
          .typing-indicator span {
            height: 10px;
            width: 10px;
            background: #94a3b8;
            border-radius: 50%;
            display: inline-block;
            margin: 0 3px;
            animation: bounce 1.5s infinite ease-in-out;
          }
          .typing-indicator span:nth-child(2) {
            animation-delay: 0.2s;
          }
          .typing-indicator span:nth-child(3) {
            animation-delay: 0.4s;
          }
          @keyframes bounce {
            0%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-6px); }
          }
          .suggestion-chip {
            transition: all 0.3s ease;
            cursor: pointer;
          }
          .suggestion-chip:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(0, 245, 212, 0.3);
          }
          .suggestions-container {
            display: flex;
            overflow-x: auto;
            gap: 12px;
            padding-bottom: 10px;
            scrollbar-width: none;
          }
          .suggestions-container::-webkit-scrollbar {
            display: none;
          }
          @media (max-width: 768px) {
            .chat-title {
              font-size: 2rem !important;
            }
            .chat-subtitle {
              font-size: 1rem !important;
            }
          }
        `}
      </style>

      <Container style={{ 
        maxWidth: '1400px',
        width: '100%',
        padding: '0 20px'
      }}>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <h1 className="chat-title" style={{
            fontSize: '2.8rem',
            fontWeight: '800',
            // marginBottom: '1rem',
            background: 'linear-gradient(90deg, #00f5d4, #00bbf9)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}>
            Chat With Masud
          </h1>
        </motion.div>

        <div style={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row',
          gap: '24px',
          marginBottom: isMobile ? '0' : '24px'
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            style={{ 
              width: isMobile ? '100%' : '80%',
              height: isMobile ? '60vh' : '80vh',
              minHeight: isMobile ? '200px' : '500px'
            }}
          >
            <Card style={{
              backgroundColor: 'rgba(15, 23, 42, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: isMobile ? '1rem' : '1.5rem 2rem',
              height: '100%',
              overflowY: 'auto',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              backdropFilter: 'blur(16px)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column'
            }} className="chat-container">
              <div style={{ flex: 1 }}>
                <AnimatePresence>
                  {messages.map((msg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: msg.from === 'user' ? 'flex-end' : 'flex-start',
                        margin: isMobile ? '12px 0' : '16px 0'
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: isMobile ? '8px' : '12px',
                        marginBottom: isMobile ? '4px' : '6px',
                        flexDirection: msg.from === 'user' ? 'row-reverse' : 'row'
                      }}>
                        <div style={{
                          width: isMobile ? '30px' : '36px',
                          height: isMobile ? '30px' : '36px',
                          borderRadius: '50%',
                          background: msg.from === 'user' 
                            ? 'linear-gradient(135deg, #00f5d4, #00bbf9)' 
                            : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                          fontSize: isMobile ? '12px' : '14px',
                          boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                        }}>
                          {msg.from === 'user' ? <FaUser /> : <FaRobot />}
                        </div>
                        <span style={{
                          fontSize: isMobile ? '0.8rem' : '0.9rem',
                          color: '#94a3b8',
                          fontWeight: '600'
                        }}>
                          {msg.from === 'user' ? 'You' : 'Masud'}
                        </span>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        style={{
                          padding: isMobile ? '10px 14px' : '14px 18px',
                          borderRadius: '20px',
                          background: msg.isWelcome
                            ? 'rgba(0, 245, 212, 0.2)'
                            : msg.from === 'user' 
                              ? 'linear-gradient(135deg, #00f5d4, #00bbf9)' 
                              : 'rgba(30, 41, 59, 0.8)',
                          color: msg.from === 'user' ? '#0f172a' : '#f8fafc',
                          maxWidth: isMobile ? '90%' : '85%',
                          wordWrap: 'break-word',
                          fontSize: isMobile ? '1rem' : '1.05rem',
                          border: msg.isWelcome
                            ? '1px dashed rgba(0, 245, 212, 0.5)'
                            : msg.from === 'user' 
                              ? 'none' 
                              : '1px solid rgba(255, 255, 255, 0.15)',
                          boxShadow: msg.isWelcome
                            ? '0 0 0 3px rgba(0, 245, 212, 0.2)'
                            : msg.from === 'user' 
                              ? '0 6px 16px rgba(0, 245, 212, 0.25)' 
                              : '0 6px 16px rgba(0, 0, 0, 0.15)',
                          lineHeight: '1.6'
                        }}
                      >
                        {msg.text}
                      </motion.div>
                    </motion.div>
                  ))}

                  {loading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        margin: isMobile ? '12px 0' : '16px 0'
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: isMobile ? '8px' : '12px',
                        marginBottom: isMobile ? '4px' : '6px'
                      }}>
                        <div style={{
                          width: isMobile ? '30px' : '36px',
                          height: isMobile ? '30px' : '36px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                          fontSize: isMobile ? '12px' : '14px',
                          boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                        }}>
                          <FaRobot />
                        </div>
                        <span style={{
                          fontSize: isMobile ? '0.8rem' : '0.9rem',
                          color: '#94a3b8',
                          fontWeight: '600'
                        }}>
                          Masud
                        </span>
                      </div>
                      <div style={{
                        padding: isMobile ? '10px 14px' : '14px 18px',
                        borderRadius: '20px',
                        background: 'rgba(30, 41, 59, 0.8)',
                        color: '#f8fafc',
                        maxWidth: isMobile ? '90%' : '85%',
                        wordWrap: 'break-word',
                        fontSize: isMobile ? '1rem' : '1.05rem',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: isMobile ? '8px' : '12px'
                      }}>
                        <div className="typing-indicator">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <span>Thinking...</span>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </AnimatePresence>
              </div>
            </Card>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ marginTop: isMobile ? '16px' : '20px' }}
            >
              <Form onSubmit={handleSend} className="d-flex align-items-center gap-3">
                <Form.Control
                  type="text"
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={loading}
                  className="custom-placeholder"
                  style={{
                    borderRadius: '16px',
                    background: 'rgba(15, 23, 42, 0.7)',
                    color: '#fff',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    padding: isMobile ? '0.8rem 1.2rem' : '1rem 1.5rem',
                    fontSize: isMobile ? '1rem' : '1.05rem',
                    flex: 1,
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
                    height: isMobile ? '48px' : '56px'
                  }}
                />
                <Button
                  type="submit"
                  disabled={loading || !input.trim()}
                  style={{
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #00f5d4, #00bbf9)',
                    border: 'none',
                    color: '#0f172a',
                    padding: '0',
                    fontSize: isMobile ? '1.1rem' : '1.3rem',
                    fontWeight: '600',
                    boxShadow: '0 6px 16px rgba(0, 245, 212, 0.3)',
                    transition: 'all 0.3s ease',
                    height: isMobile ? '48px' : '56px',
                    width: isMobile ? '48px' : '56px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  className="send-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPaperPlane />
                </Button>
              </Form>
            </motion.div>
          </motion.div>

          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              style={{ 
                width: '20%',
                height: '65vh',
                minHeight: '500px'
              }}
            >
              <Card style={{
                backgroundColor: 'rgba(15, 23, 42, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '1.5rem',
                height: '100%',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                backdropFilter: 'blur(16px)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '1.5rem'
                }}>
                  <FaLightbulb style={{ 
                    color: '#00f5d4',
                    fontSize: '1.3rem'
                  }} />
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    margin: '0',
                    background: 'linear-gradient(90deg, #00f5d4, #00bbf9)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    Quick Suggestions
                  </h3>
                </div>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  {allSuggestions.slice(0, 5).map((suggestion, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="suggestion-chip"
                      style={{
                        padding: '12px 16px',
                        background: 'rgba(30, 41, 59, 0.8)',
                        borderRadius: '14px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#e2e8f0',
                        fontSize: '0.95rem',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {suggestion}
                    </motion.div>
                  ))}
                </div>

                <div style={{
                  marginTop: 'auto',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#94a3b8',
                    lineHeight: '1.6',
                    marginBottom: '0'
                  }}>
                    Try asking about specific technologies, projects, or my approach to problem solving.
                  </p>
                </div>
              </Card>
            </motion.div>
          )}
        </div>

        {/* Mobile Suggestions - Horizontal Scroll */}
        {isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{ marginTop: '24px' }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '50px',
              marginBottom: '1rem',
              marginTop: '5rem'
            }}>
              <FaLightbulb style={{ 
                color: '#00f5d4',
                fontSize: '1.2rem'
              }} />
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                margin: '0',
                background: 'linear-gradient(90deg, #00f5d4, #00bbf9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Quick Suggestions
              </h3>
            </div>

            <div 
              ref={suggestionsRef}
              className="suggestions-container"
            >
              {allSuggestions.map((suggestion, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="suggestion-chip"
                  style={{
                    padding: '10px 14px',
                    background: 'rgba(30, 41, 59, 0.8)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#e2e8f0',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    minWidth: 'fit-content'
                  }}
                >
                  {suggestion}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </Container>
    </section>
  );
}

export default Chat;