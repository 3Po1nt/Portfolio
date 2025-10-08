import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skills = {
  programmingLanguages: [
    { name: 'Python', level: 60 },
    { name: 'C# / .NET', level: 65 },
    { name: 'Java', level: 70 },
    { name: 'JavaScript', level: 55 },
    { name: 'SQL', level: 85 },
    { name: 'HTML/CSS', level: 80 }
  ],
  tools: {
    'Frontend & Mobile Development': [
      'React (with Router, TailwindCSS)',
      'EJS Templating Engine',
      '.NET MAUI (Cross-Platform Apps)'
    ],
    'Backend & Runtime Frameworks': [
      'ASP.NET Core Web API',
      'Node.js with Express.js',
      'Java Servlets'
    ],
    'AI, Machine Learning & Data Processing': [
      'scikit-learn',
      'XGBoost',
      'PyMuPDF (PDF Parsing)',
      'Regex-Based PDF Extraction',
      'OpenAI API (RAG Implementation)'
    ],
    'Data Management, Storage & Authentication': [
      'Weaviate (Vector Search)',
      'AWS DynamoDB',
      'PostgreSQL',
      'Apache Derby',
      'Auth0 (Identity Management)',
      'JWT Authentication',
      'OAuth 2.0'
    ],
    'Build, DevOps & Testing Tools': [
      'GitHub (Desktop & CLI)',
      'Visual Studio Code / NetBeans IDE',
      '.NET CLI',
      'Maven / npm Package Managers'
    ]
  },
  other: [
    'Problem-Solving: Troubleshoots build errors, PDF parsing challenges, and deployment issues effectively',
    'Adaptability: Quickly transitions between Python, C#, Java, and JavaScript while learning new stacks on the go',
    'Time Management: Balances academics, business development, church leadership, and extracurricular commitments',
    'Collaboration: Works seamlessly across teams, coordinating projects and negotiating tasks and responsibilities',
    'Teaching & Mentoring: Facilitates Bible study sessions and provides technical guidance to peers',
    'Critical Thinking: Analyzes problems logically and asks precise questions to drive effective solutions'
  ]
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' }
  },
  exit: { y: -10, opacity: 0, transition: { duration: 0.2 } }
};

const categoryIcons = {
  languages: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
    </svg>
  ),
  tools: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
    </svg>
  ),
  other: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  )
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('languages');
  const [animatedSkills, setAnimatedSkills] = useState({});
  const [langRenderId, setLangRenderId] = useState(0); // forces clean remount of bars

  const onTab = (id) => {
    setActiveCategory(id);
    if (id === 'languages') setLangRenderId((n) => n + 1);
  };

  // Always repopulate bar targets when returning to languages
  useEffect(() => {
    if (activeCategory === 'languages') {
      const map = {};
      skills.programmingLanguages.forEach((s) => { map[s.name] = s.level; });
      setAnimatedSkills(map);
    }
  }, [activeCategory]);

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-800 mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Technologies, tools and strengths I use to build and deliver projects
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div variants={itemVariants} className="flex justify-center mb-12">
            <div className="bg-slate-100 p-2 rounded-xl flex space-x-2">
              {[
                { id: 'languages', label: 'Programming Languages' },
                { id: 'tools', label: 'Tools & Frameworks' },
                { id: 'other', label: 'Other Skills' }
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => onTab(c.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeCategory === c.id
                      ? 'bg-white text-primary-600 shadow-sm'
                      : 'text-slate-600 hover:text-slate-800'
                  }`}
                >
                  {categoryIcons[c.id]}
                  <span className="hidden sm:inline">{c.label}</span>
                  <span className="inline sm:hidden">{c.label.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory} // hard swap per tab
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {activeCategory === 'languages' && (
                <div key={`lang-${langRenderId}`} className="grid md:grid-cols-2 gap-8">
                  {skills.programmingLanguages.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="bg-slate-50 p-6 rounded-xl"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-semibold text-slate-800">{skill.name}</h3>
                        <span className="text-sm font-medium text-primary-600">
                          {animatedSkills[skill.name] ?? 0}%
                        </span>
                      </div>
                      <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                        <motion.div
                          className="h-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${animatedSkills[skill.name] ?? 0}%` }}
                          transition={{ duration: 1, delay: index * 0.05, ease: 'easeOut' }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeCategory === 'tools' && (
                <motion.div
                  className="space-y-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {Object.entries(skills.tools).map(([category, toolList]) => (
                    <motion.div key={category} variants={itemVariants}>
                      <h4 className="text-xl font-bold text-slate-700 mb-4 border-b pb-2 border-slate-200">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {toolList.map((tool) => (
                          <motion.span
                            key={tool}
                            className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium transition-all duration-200 hover:bg-primary-100 hover:text-primary-800 shadow-sm"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.25 }}
                          >
                            {tool}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeCategory === 'other' && (
                <motion.div
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {skills.other.map((entry) => {
                    const [title, description] = entry.includes(':')
                      ? entry.split(':', 2)
                      : [entry, null];
                    return (
                      <motion.div
                        key={entry}
                        variants={itemVariants}
                        whileHover={{
                          scale: 1.02,
                          boxShadow:
                            '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)'
                        }}
                        className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 transition-shadow duration-300"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 mt-1 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-800 mb-1">{title.trim()}</h3>
                            {description && (
                              <p className="text-sm text-slate-600">{description.trim()}</p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-display font-bold mb-2">Technical Proficiency</h3>
              <p className="text-primary-100">Core competencies and areas of expertise</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{skills.programmingLanguages.length}</div>
                <div className="text-primary-100">Programming Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">
                  {Object.values(skills.tools).reduce((t, list) => t + list.length, 0)}
                </div>
                <div className="text-primary-100">Tools & Frameworks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{skills.other.length}</div>
                <div className="text-primary-100">Other Skills</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
