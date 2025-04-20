import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Virtual/Home/Home';
import Skills from './Virtual/Skill/Skills';
import Contact from './Virtual/Contact.jsx/Contact';
import Education from './Virtual/Education/Education';
import Projects from './Virtual/Project/Projects';
import OpenSource from './Virtual/OpenSource/OpenSource';
import ExtraCarricullar from './Virtual/Extra/Extra';
import Activities from './Virtual/Activities/Activities';
import Chat from './Virtual/Chat/Chat';
import NotFound from './Virtual/NotFound/NotFound'; // 👈 Import the NotFound component
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Add global styles here

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/opensource" element={<OpenSource />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/extracurricular" element={<ExtraCarricullar />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/chat" element={<Chat />} />
            
            {/* Fallback route for unmatched URLs */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
