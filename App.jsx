import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Sections from './components/Sections.jsx';
import RegistrationModal from './components/RegistrationModal.jsx';
import Dashboard from './components/Dashboard.jsx';
import QuizGame from './components/QuizGame.jsx';
import CaseStudy from './components/CaseStudy.jsx';

const App = () => {
  // State: 'landing', 'quiz', 'case-study'
  const [view, setView] = useState('landing');
  const [user, setUser] = useState(null); // { name, email, branch, rollNo, avatar }
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Progress State
  const [progress, setProgress] = useState({
    quizCompleted: false,
    caseStudyCompleted: false
  });

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  const handleRegisterSuccess = (userData) => {
    setUser(userData);
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    setView('landing');
    setProgress({ quizCompleted: false, caseStudyCompleted: false });
  };

  const startQuiz = () => setView('quiz');
  const startCaseStudy = () => setView('case-study');

  const handleQuizSubmit = () => {
    setProgress(prev => ({ ...prev, quizCompleted: true }));
    setView('landing');
  };

  const handleCaseStudySubmit = () => {
    setProgress(prev => ({ ...prev, caseStudyCompleted: true }));
    setView('landing');
  };

  // Simple Footer Component
  const Footer = () => (
    <footer id="contact" className="py-12 bg-black border-t border-gray-900 text-center relative z-10">
      <h2 className="text-3xl font-display font-bold mb-8">Get in Touch</h2>
      <p className="text-gray-400 mb-8 max-w-xl mx-auto">
        Have questions? We'd love to hear from you. Reach out to the Model Club team.
      </p>
      <div className="flex justify-center gap-8 mb-8">
        {['Instagram', 'Email', 'LinkedIn', 'Facebook'].map((social) => (
          <div key={social} className="flex flex-col items-center gap-2 group cursor-pointer">
            <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-neon-purple group-hover:bg-neon-purple/10 transition-all duration-300">
               <span className="text-sm font-bold">{social[0]}</span>
            </div>
            <span className="text-xs text-gray-500 group-hover:text-white transition-colors">{social}</span>
          </div>
        ))}
      </div>
      <div className="text-gray-600 text-sm">
        &copy; 2025 Model Club - All Rights Reserved. <br/>
        <span className="font-mono text-xs text-neon-cyan/50 mt-2 block">Be Technical by Technique</span>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-neon-dark text-white font-sans selection:bg-neon-purple selection:text-white overflow-x-hidden">
      <Navbar user={user} onLogin={handleLoginClick} onLogout={handleLogout} />

      {view === 'landing' && (
        <>
          <Hero user={user} onRegisterClick={handleLoginClick} />
          
          {user ? (
            <Dashboard 
              user={user} 
              progress={progress} 
              onStartQuiz={startQuiz}
              onStartCaseStudy={startCaseStudy}
            />
          ) : (
            <Sections />
          )}
        </>
      )}

      {view === 'quiz' && (
        <QuizGame onComplete={handleQuizSubmit} />
      )}

      {view === 'case-study' && (
        <CaseStudy onComplete={handleCaseStudySubmit} />
      )}

      {view === 'landing' && <Footer />}

      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={handleRegisterSuccess} 
      />
    </div>
  );
};

export default App;