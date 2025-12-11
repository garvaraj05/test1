import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = ({ user, onRegisterClick }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3); 
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimerBox = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="w-20 h-24 md:w-24 md:h-32 bg-gray-900/50 border border-gray-700 rounded-xl flex items-center justify-center backdrop-blur-sm glow-box mb-4">
        <span className="text-3xl md:text-5xl font-display font-bold text-white">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs md:text-sm tracking-widest text-gray-400 font-bold uppercase">{label}</span>
    </div>
  );

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 text-center overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[128px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-2xl">
          OPERATION PARADOX
        </h1>
        <h2 className="text-lg md:text-2xl font-bold tracking-[0.5em] text-neon-cyan mb-16 glow-text">
          THE HUNT BEYOND LOGIC
        </h2>

        {!user && (
          <div className="flex gap-6 md:gap-8 justify-center mb-16">
            <TimerBox value={timeLeft.days} label="Days" />
            <TimerBox value={timeLeft.hours} label="Hours" />
            <TimerBox value={timeLeft.minutes} label="Mins" />
            <TimerBox value={timeLeft.seconds} label="Secs" />
          </div>
        )}

        {!user && (
          <button 
            onClick={onRegisterClick}
            className="group relative px-8 py-4 bg-neon-purple rounded-lg overflow-hidden font-display font-bold tracking-wider text-lg shadow-[0_0_30px_rgba(176,38,255,0.4)] transition-all hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 origin-left" />
            REGISTER NOW
          </button>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;