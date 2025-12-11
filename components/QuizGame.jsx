import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { quizQuestions } from '../data.js';

const QuizGame = ({ onComplete }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelectedOption(null);
    } else {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-gray-900 border border-green-500/50 p-12 rounded-2xl text-center max-w-lg"
        >
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-green-500" />
          </div>
          <h2 className="text-3xl font-display font-bold mb-4">Round 1 Completed!</h2>
          <p className="text-gray-400 mb-8">Great job. Your responses have been recorded. You can now proceed to Round 2.</p>
          <button 
            onClick={onComplete}
            className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Continue to Dashboard
          </button>
        </motion.div>
      </div>
    );
  }

  const question = quizQuestions[currentQ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 max-w-3xl mx-auto flex flex-col">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <span className="text-neon-purple font-bold tracking-widest text-sm">QUESTION {currentQ + 1} / {quizQuestions.length}</span>
          <div className="h-2 w-64 bg-gray-800 rounded-full mt-2">
            <div 
              className="h-full bg-neon-purple rounded-full transition-all duration-300"
              style={{ width: `${((currentQ + 1) / quizQuestions.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <motion.div 
        key={currentQ}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="bg-gray-900/50 border border-gray-800 p-8 rounded-2xl flex-grow mb-8"
      >
        <h3 className="text-2xl font-bold mb-8 leading-relaxed">{question.text}</h3>
        
        <div className="space-y-4">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedOption(idx)}
              className={`w-full text-left p-4 rounded-xl border transition-all ${
                selectedOption === idx 
                ? 'border-neon-cyan bg-neon-cyan/10 text-white shadow-[0_0_10px_rgba(0,243,255,0.2)]' 
                : 'border-gray-700 hover:border-gray-500 hover:bg-gray-800'
              }`}
            >
              <span className="inline-block w-6 font-bold text-gray-500 mr-2">
                {String.fromCharCode(65 + idx)}.
              </span>
              {option}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="flex justify-end">
        <button
          onClick={handleNext}
          disabled={selectedOption === null}
          className={`flex items-center gap-2 py-3 px-8 rounded-lg font-bold transition-all ${
            selectedOption !== null 
            ? 'bg-neon-purple hover:bg-purple-600 text-white shadow-lg' 
            : 'bg-gray-800 text-gray-500 cursor-not-allowed'
          }`}
        >
          {currentQ === quizQuestions.length - 1 ? 'Submit Quiz' : 'Next Question'}
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default QuizGame;