import React, { useState, useEffect, useRef } from 'react';
import { Container, Form, Button, Card, Spinner } from 'react-bootstrap';
import { FaPaperPlane, FaRobot, FaUser } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_BASE_URL}/api/chat/`;


function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

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
      text: "Hey there! 👋 I'm Masud. Ask me anything about my background, skills, or experiences!" 
    }]);
    
    // Progressive suggestions about you
    const timer1 = setTimeout(() => {
      setMessages(prev => [...prev, { 
        from: 'bot', 
        text: `Want to know more about me? Try asking:
• What's your technical background?
• What projects have you worked on?
• What are your strongest skills?`,
        isPrompt: true 
      }]);
    }, 2000);
    
    const timer2 = setTimeout(() => {
      setMessages(prev => [...prev, { 
        from: 'bot', 
        text: `Or be more specific:
"Tell me about your experience with [technology]"
"What's your approach to [problem type]?"
"Can you share a challenging project you worked on?"`,
        isPrompt: true
      }]);
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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

  return (
    <section style={{ 
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      minHeight: '100vh',
      padding: '2rem 0',
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
            width: 6px;
          }
          .chat-container::-webkit-scrollbar-track {
            background: rgba(255,255,255,0.05);
          }
          .chat-container::-webkit-scrollbar-thumb {
            background: #00f5d4;
            border-radius: 3px;
          }
          .typing-indicator span {
            height: 8px;
            width: 8px;
            background: #94a3b8;
            border-radius: 50%;
            display: inline-block;
            margin: 0 2px;
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
            40% { transform: translateY(-5px); }
          }
        `}
      </style>

      <Container style={{ 
        maxWidth: '800px',
        width: '100%',
        padding: '0 20px'
      }}>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            marginBottom: '1rem',
            background: 'linear-gradient(90deg, #00f5d4, #00bbf9)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}>
            Chat With Masud
          </h1>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#94a3b8', 
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Ask me anything about my professional background and expertise!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          style={{ height: '60vh', minHeight: '400px' }}
        >
          <Card style={{
            backgroundColor: 'rgba(15, 23, 42, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '18px',
            padding: '1.25rem 1.5rem',
            height: '100%',
            overflowY: 'auto',
            boxShadow: '0 12px 24px rgba(0,0,0,0.25)',
            backdropFilter: 'blur(12px)',
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
                      margin: '12px 0'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '4px',
                      flexDirection: msg.from === 'user' ? 'row-reverse' : 'row'
                    }}>
                      <div style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        background: msg.from === 'user' 
                          ? 'linear-gradient(135deg, #00f5d4, #00bbf9)' 
                          : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontSize: '13px'
                      }}>
                        {msg.from === 'user' ? <FaUser /> : <FaRobot />}
                      </div>
                      <span style={{
                        fontSize: '0.85rem',
                        color: '#94a3b8',
                        fontWeight: '600'
                      }}>
                        {msg.from === 'user' ? 'You' : 'Masud'}
                      </span>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      style={{
                        padding: '12px 16px',
                        borderRadius: '18px',
                        background: msg.isPrompt 
                          ? 'rgba(0, 245, 212, 0.15)' 
                          : msg.from === 'user' 
                            ? 'linear-gradient(135deg, #00f5d4, #00bbf9)' 
                            : 'rgba(30, 41, 59, 0.7)',
                        color: msg.from === 'user' ? '#0f172a' : '#f8fafc',
                        maxWidth: '80%',
                        wordWrap: 'break-word',
                        fontSize: '1rem',
                        border: msg.isPrompt 
                          ? '1px dashed rgba(0, 245, 212, 0.5)'
                          : msg.from === 'user' 
                            ? 'none' 
                            : '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: msg.isPrompt
                          ? '0 0 0 2px rgba(0, 245, 212, 0.2)'
                          : msg.from === 'user' 
                            ? '0 4px 12px rgba(0, 245, 212, 0.2)' 
                            : '0 4px 12px rgba(0, 0, 0, 0.1)',
                        lineHeight: '1.5'
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
                      margin: '12px 0'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '4px'
                    }}>
                      <div style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontSize: '13px'
                      }}>
                        <FaRobot />
                      </div>
                      <span style={{
                        fontSize: '0.85rem',
                        color: '#94a3b8',
                        fontWeight: '600'
                      }}>
                        Masud
                      </span>
                    </div>
                    <div style={{
                      padding: '12px 16px',
                      borderRadius: '18px',
                      background: 'rgba(30, 41, 59, 0.7)',
                      color: '#f8fafc',
                      maxWidth: '80%',
                      wordWrap: 'break-word',
                      fontSize: '1rem',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <div className="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      Typing...
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </AnimatePresence>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ marginTop: '16px' }}
        >
          <Form onSubmit={handleSend} className="d-flex align-items-center gap-2">
            <Form.Control
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
              className="custom-placeholder"
              style={{
                borderRadius: '14px',
                background: 'rgba(15, 23, 42, 0.7)',
                color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '0.85rem 1.25rem',
                fontSize: '1rem',
                flex: 1,
                backdropFilter: 'blur(8px)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                height: '52px'
              }}
            />
            <Button
              type="submit"
              disabled={loading || !input.trim()}
              style={{
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #00f5d4, #00bbf9)',
                border: 'none',
                color: '#0f172a',
                padding: '0',
                fontSize: '1.2rem',
                fontWeight: '600',
                boxShadow: '0 4px 12px rgba(0, 245, 212, 0.3)',
                transition: 'all 0.3s ease',
                height: '52px',
                width: '52px',
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
      </Container>
    </section>
  );
}

export default Chat;