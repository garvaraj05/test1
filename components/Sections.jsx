import React from 'react';
import { Terminal, Cpu, Zap, Award, Users, Monitor } from 'lucide-react';

const Sections = () => {
  return (
    <>
      <section id="about" className="py-24 bg-neon-card/50 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan text-xs font-bold mb-6">
              DISCOVER THE FUTURE
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Innovation Starts <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-blue-500">With You</span>
            </h2>
            <div className="border-l-4 border-gray-700 pl-6 py-2">
              <p className="text-gray-400 text-lg leading-relaxed">
                The XYZ Contest is the premier tech-innovation challenge hosted by Model Club. 
                It serves as a battleground for aspiring developers, designers, and problem solvers. 
                Participants will face real-world challenges designed to test their technical prowess 
                and creative thinking.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FeatureCard icon={<Users />} title="Open to all branches" />
            <FeatureCard icon={<Monitor />} title="Individual participation" />
            <FeatureCard icon={<Award />} title="Exciting rewards" />
            <FeatureCard icon={<Zap />} title="Guidance from seniors" />
          </div>
        </div>
      </section>

      <section id="flow" className="py-24 bg-black relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
            Event Flow
            <div className="h-1 w-24 bg-neon-purple mx-auto mt-4 rounded-full" />
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <FlowCard 
              number="01" 
              icon={<Cpu size={32} />}
              title="Round 1: The Quiz"
              desc="A fast-paced online quiz testing your fundamental knowledge in logic, tech trends, and aptitude."
              meta={['Duration: 45 Mins', 'Mode: Online', 'Top 50% advance']}
              color="border-neon-purple"
            />
             <FlowCard 
              number="02" 
              icon={<Terminal size={32} />}
              title="Round 2: Case Study"
              desc="Dive deep into a real-world problem statement. Analyze, innovate, and present your solution."
              meta={['Duration: 2 Days', 'Mode: Offline Presentation', 'Jury Evaluation']}
              color="border-neon-cyan"
            />
          </div>
        </div>
      </section>
    </>
  );
};

const FeatureCard = ({ icon, title }) => (
  <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors group">
    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-6 text-neon-cyan group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold">{title}</h3>
  </div>
);

const FlowCard = ({ number, icon, title, desc, meta, color }) => (
  <div className={`relative bg-gray-900/40 p-10 rounded-3xl border border-gray-800 hover:${color} transition-all duration-300 group overflow-hidden`}>
    <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
    
    <div className="flex justify-between items-start mb-6 relative z-10">
      <div className="p-4 rounded-xl bg-gray-800 text-white">
        {icon}
      </div>
      <span className="text-6xl font-display font-bold text-gray-800 group-hover:text-gray-700 transition-colors">
        {number}
      </span>
    </div>

    <h3 className="text-2xl font-bold mb-4 relative z-10">{title}</h3>
    <p className="text-gray-400 mb-8 relative z-10">{desc}</p>

    <ul className="space-y-3 relative z-10">
      {meta.map((m, i) => (
        <li key={i} className="flex items-center text-sm text-gray-300">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan mr-3" />
          {m}
        </li>
      ))}
    </ul>
  </div>
);

export default Sections;