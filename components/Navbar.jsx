import React, { useState } from 'react';
import { User, LogOut, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ user, onLogin, onLogout }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-neon-dark/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-neon-purple font-bold text-2xl">&gt;_</span>
          <span className="font-display font-bold text-xl tracking-wider text-white">XYZ Contest</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {!user && ['Home', 'About', 'Flow', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-neon-cyan transition-colors">
              {item}
            </a>
          ))}
        </div>

        <div className="relative">
          {user ? (
            <div className="relative">
              <button 
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-3 bg-gray-900 border border-gray-700 hover:border-neon-purple rounded-full pl-2 pr-4 py-1 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neon-purple to-blue-600 flex items-center justify-center text-xs font-bold">
                  {user.name.charAt(0)}
                </div>
                <span className="text-sm font-semibold max-w-[100px] truncate">{user.name}</span>
              </button>

              <AnimatePresence>
                {showProfileMenu && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl p-2"
                  >
                    <div className="px-4 py-2 border-b border-gray-800 mb-2">
                      <p className="text-xs text-gray-500">Signed in as</p>
                      <p className="text-sm font-bold text-white truncate">{user.email}</p>
                    </div>
                    <button 
                      onClick={onLogout}
                      className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-white/5 rounded-lg transition-colors"
                    >
                      <LogOut size={16} /> Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <button 
              onClick={onLogin}
              className="bg-neon-purple hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-bold transition-all shadow-[0_0_15px_rgba(176,38,255,0.4)] hover:shadow-[0_0_25px_rgba(176,38,255,0.6)]"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;