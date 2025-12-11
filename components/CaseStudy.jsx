import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, Send } from 'lucide-react';

const CaseStudy = ({ onComplete }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [solution, setSolution] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-center">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">
            Thank You for Participating!
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            Your case study has been submitted successfully. The results will be announced on the timeline page soon.
          </p>
          <button 
            onClick={onComplete}
            className="bg-white text-black font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-neon-cyan/10 rounded-lg text-neon-cyan border border-neon-cyan/20">
          <FileText size={24} />
        </div>
        <div>
          <h2 className="text-3xl font-display font-bold">The Paradox Problem</h2>
          <p className="text-gray-400">Read the case carefully and submit your approach.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
            <h3 className="text-white font-bold text-xl mb-4">Background</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
            <h3 className="text-white font-bold text-xl mb-4">The Challenge</h3>
            <p className="mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Constraint A: Lorem ipsum dolor sit amet.</li>
              <li>Constraint B: Consectetur adipiscing elit.</li>
              <li>Goal: Maximise efficiency by 200%.</li>
            </ul>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col h-full">
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl flex-grow flex flex-col">
            <h3 className="text-white font-bold text-xl mb-4">Your Solution</h3>
            <textarea
              required
              className="w-full flex-grow bg-black border border-gray-700 rounded-lg p-4 text-white mb-4 focus:border-neon-cyan focus:outline-none transition-colors resize-none"
              placeholder="Describe your approach, algorithms used, and theoretical logic here..."
              value={solution}
              onChange={(e) => setSolution(e.target.value)}
            />
            
            <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-gray-500 transition-colors cursor-pointer mb-6">
              <Upload className="mx-auto mb-2 text-gray-500" />
              <p className="text-sm text-gray-400">Drop supplementary diagrams (Optional)</p>
            </div>

            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-neon-cyan to-blue-500 text-black font-bold py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send size={20} /> Submit Case Study
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CaseStudy;