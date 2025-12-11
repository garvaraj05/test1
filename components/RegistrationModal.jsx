import React, { useState } from 'react';
import { X, Mail, ChevronRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const RegistrationModal = ({ isOpen, onClose, onSuccess }) => {
  const [step, setStep] = useState(1); 
  const [isLoading, setIsLoading] = useState(false);
  const [googleData, setGoogleData] = useState(null);
  const [details, setDetails] = useState({ branch: '', rollNo: '' });

  const handleGoogleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setGoogleData({
        name: 'Alex Developer',
        email: 'alex.dev@college.edu',
        avatar: 'https://picsum.photos/100/100'
      });
      setIsLoading(false);
      setStep(2);
    }, 1500);
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    if(!details.branch || !details.rollNo) return;
    
    setIsLoading(true);
    setTimeout(() => {
      onSuccess({ ...googleData, ...details });
      setIsLoading(false);
      setStep(1); 
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative bg-gray-900 border border-gray-700 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
          <X size={24} />
        </button>

        <div className="p-8">
          <h2 className="text-2xl font-display font-bold mb-2">
            {step === 1 ? 'Sign In' : 'Complete Profile'}
          </h2>
          <p className="text-gray-400 mb-8 text-sm">
            {step === 1 ? 'Join the contest by signing in with your student account.' : 'Just a few more details to get you set up.'}
          </p>

          {step === 1 && (
            <button 
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="w-full bg-white text-black font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-200 transition-colors"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Sign in with Google
                </>
              )}
            </button>
          )}

          {step === 2 && (
            <form onSubmit={handleFinalSubmit} className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg flex items-center gap-3 border border-gray-700">
                <div className="w-10 h-10 bg-neon-purple rounded-full flex items-center justify-center text-white font-bold">
                  {googleData?.name?.[0]}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{googleData?.name}</p>
                  <p className="text-xs text-gray-400">{googleData?.email}</p>
                </div>
                <div className="ml-auto text-green-400">
                  <Check size={20} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Branch</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Computer Science"
                  className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:border-neon-purple focus:outline-none transition-colors"
                  value={details.branch}
                  onChange={e => setDetails({...details, branch: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Roll Number</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. 21CS001"
                  className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:border-neon-purple focus:outline-none transition-colors"
                  value={details.rollNo}
                  onChange={e => setDetails({...details, rollNo: e.target.value})}
                />
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-neon-purple text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-purple-600 transition-colors mt-4"
              >
                {isLoading ? 'Registering...' : 'Complete Registration'}
                {!isLoading && <ChevronRight size={18} />}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default RegistrationModal;