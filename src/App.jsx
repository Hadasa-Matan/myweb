import React, { useState } from 'react';
import { BsChatDots } from 'react-icons/bs';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import ConsultationCard from './components/ConsultationCard';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';

function App() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <ConsultationCard />
        <Contact />
      </main>

      <div className="chatbot-container">
        <div className="chat-button" onClick={() => setShowChat(!showChat)}>
          <BsChatDots size={24} />
        </div>
        {showChat && (
          <div className="chat-window">
            <ChatBot />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;