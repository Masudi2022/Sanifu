import React, { useState, useEffect, useRef } from 'react';
import { Container, Form, Button, Card, Spinner } from 'react-bootstrap';
import { FaPaperPlane } from 'react-icons/fa';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/chat/';

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
    setMessages([{ from: 'bot', text: "Hey! 👋 I'm Masud. What would you like to ask?" }]);
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
        setMessages(prev => [...prev, { from: 'bot', text: botText }]);
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
    <section style={{ background: '#1e293b', minHeight: '100vh', padding: '6rem 0', color: '#eaeaea' }}>
      <style>
        {`
          .custom-placeholder::placeholder {
            color: #cbd5e1;
            opacity: 1;
          }
        `}
      </style>

      <Container style={{ maxWidth: '800px' }}>
        <div className="text-center mb-5">
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            position: 'relative',
            display: 'inline-block'
          }}>
            <span style={{ color: '#00f5d4' }}>Chat</span> With Me
            <span style={{
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '4px',
              background: 'linear-gradient(90deg, #00f5d4, #00bbf9)',
              borderRadius: '2px'
            }}></span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: '1.8' }}>
            Start a conversation — I’m here to help!
          </p>
        </div>

        <Card style={{
          backgroundColor: 'rgba(15, 23, 42, 0.6)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          padding: '1.5rem',
          height: '500px',
          overflowY: 'auto',
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          backdropFilter: 'blur(10px)'
        }}>
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                textAlign: msg.from === 'user' ? 'right' : 'left',
                margin: '10px 0'
              }}
            >
              <span style={{
                display: 'inline-block',
                padding: '10px 15px',
                borderRadius: '20px',
                backgroundColor: msg.from === 'user' ? '#00f5d4' : '#2b2e68',
                color: msg.from === 'user' ? '#0a1931' : '#eaeaea',
                maxWidth: '75%',
                wordWrap: 'break-word',
                fontSize: '0.95rem'
              }}>
                {msg.text}
              </span>
            </div>
          ))}

          {loading && (
            <div style={{ textAlign: 'left', margin: '10px 0' }}>
              <span style={{
                display: 'inline-block',
                padding: '10px 15px',
                borderRadius: '20px',
                backgroundColor: '#2b2e68',
                color: '#eaeaea'
              }}>
                <Spinner animation="border" size="sm" className="me-2" />
                Typing...
              </span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </Card>

        <Form onSubmit={handleSend} className="d-flex align-items-center gap-3 mt-4">
          <Form.Control
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
            className="custom-placeholder"
            style={{
              borderRadius: '30px',
              backgroundColor: '#2a2d5c',
              color: '#fff',
              border: '1px solid #444',
              padding: '0.75rem 1rem'
            }}
          />
          <Button
            type="submit"
            disabled={loading}
            style={{
              borderRadius: '30px',
              backgroundColor: '#00f5d4',
              border: 'none',
              color: '#0a1931',
              padding: '0.6rem 1.2rem',
              fontSize: '1rem',
              boxShadow: '0 0 10px rgba(0, 245, 212, 0.3)'
            }}
          >
            <FaPaperPlane />
          </Button>
        </Form>
      </Container>
    </section>
  );
}

export default Chat;
