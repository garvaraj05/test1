import React from 'react';
import { motion } from 'framer-motion';
import { Play, Lock, CheckCircle } from 'lucide-react';

const Dashboard = ({ user, progress, onStartQuiz, onStartCaseStudy }) => {
  return (
    <section className="py-20 min-h-[60vh] flex flex-col items-center">
      <div className="max-w-4xl w-full px-6">
        <div className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-2">Welcome, {user.name.split(' ')[0]}</h2>
            <p className="text-gray-400">Your contest progress dashboard.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className={`relative p-8 rounded-2xl border ${progress.quizCompleted ? 'border-green-500/30 bg-green-500/5' : 'border-neon-purple bg-gray-900/40'} overflow-hidden`}>
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-bold tracking-widest text-gray-400">ROUND 01</span>
              {progress.quizCompleted && <CheckCircle className="text-green-500" />}
            </div>
            <h3 className="text-2xl font-bold mb-2">The Tech Quiz</h3>
            <p className="text-gray-400 text-sm mb-8">10 Questions • 15 Minutes • MCQ Format</p>
            
            {progress.quizCompleted ? (
              <button disabled className="w-full py-3 bg-gray-800 text-green-500 font-bold rounded-lg cursor-default">
                Completed
              </button>
            ) : (
              <button 
                onClick={onStartQuiz}
                className="w-full py-3 bg-neon-purple hover:bg-purple-600 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Play size={18} /> Start Round 1
              </button>
            )}
          </div>

          <div className={`relative p-8 rounded-2xl border ${progress.quizCompleted ? 'border-neon-cyan bg-gray-900/40' : 'border-gray-800 bg-gray-900/20'} overflow-hidden`}>
             <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-bold tracking-widest text-gray-400">ROUND 02</span>
              {progress.caseStudyCompleted && <CheckCircle className="text-green-500" />}
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Case Study</h3>
            <p className="text-gray-400 text-sm mb-8">Problem Solving • Analysis • Submission</p>
            
            {progress.caseStudyCompleted ? (
              <button disabled className="w-full py-3 bg-gray-800 text-green-500 font-bold rounded-lg cursor-default">
                Submitted
              </button>
            ) : !progress.quizCompleted ? (
              <button disabled className="w-full py-3 bg-gray-800 text-gray-500 font-bold rounded-lg cursor-not-allowed flex items-center justify-center gap-2">
                <Lock size={18} /> Locked
              </button>
            ) : (
               <button 
                onClick={onStartCaseStudy}
                className="w-full py-3 bg-neon-cyan hover:bg-cyan-400 text-black font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Play size={18} /> Start Round 2
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;