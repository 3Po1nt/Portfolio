import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience, certifications, achievements } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-800 mb-4">
              Experience & <span className="text-gradient">Achievements</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              My professional journey, leadership experience, and notable accomplishments
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Experience Column */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <h3 className="text-2xl font-display font-semibold text-slate-800 mb-8">Professional Experience</h3>
              
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-slate-800 mb-1">{exp.role}</h4>
                        <a href={exp.website} target="_blank" rel="noopener noreferrer" className="text-primary-600 font-medium hover:underline">
                          {exp.organization}
                        </a>
                      </div>
                      <span className="text-sm text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    {exp.achievements && (
                      <div>
                        <h5 className="font-semibold text-slate-700 mb-2">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-slate-600">
                              <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Leadership & Community Involvement */}
              <motion.div variants={itemVariants} className="mt-12">
                <h3 className="text-2xl font-display font-semibold text-slate-800 mb-8">Leadership & Community</h3>
                
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border border-primary-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2V18h2v-4h3v4h2v2H2v-2h2zm8-13c-2.21 0-4 1.79-4 4v4h2v-4c0-1.1.9-2 2-2s2 .9 2 2v4h2v-4c0-2.21-1.79-4-4-4z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-2">Young Adults Life Group Leader</h4>
                      <p className="text-slate-600 mb-3">
                        Leading a young adults' life group at church, demonstrating commitment to leadership, personal growth, and community building. This role has enhanced my communication, mentoring, and organizational skills.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['Leadership', 'Mentoring', 'Communication', 'Community Building', 'Event Planning'].map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-primary-200 text-primary-800 text-sm font-medium rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Certifications & Achievements */}
            <motion.div variants={itemVariants}>
              {/* Certifications */}
              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold text-slate-800 mb-8">Certifications</h3>
                
                <div className="space-y-6">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 431.17 431.17">
                            	<path d="M68.831,99.602h255.814c7.878,0,14.265-6.387,14.265-14.265c0-7.878-6.387-14.265-14.265-14.265H68.831
		c-7.878,0-14.265,6.387-14.265,14.265C54.566,93.215,60.953,99.602,68.831,99.602z"/>
	<path d="M68.831,160.465h255.814c7.878,0,14.265-6.387,14.265-14.265c0-7.878-6.387-14.265-14.265-14.265H68.831
		c-7.878,0-14.265,6.387-14.265,14.265C54.566,154.078,60.953,160.465,68.831,160.465z"/>
	<path d="M204.549,192.799H68.831c-7.878,0-14.265,6.387-14.265,14.265c0,7.878,6.387,14.265,14.265,14.265h135.718
		c7.878,0,14.265-6.387,14.265-14.265C218.814,199.186,212.427,192.799,204.549,192.799z"/>
	<path d="M430.373,409.679l-37.295-73.843l14.431-5.759c3.79-1.513,6.97-5.888,7.24-9.96l1.229-18.516
		c0.206-3.102,1.778-7.941,3.434-10.569l9.886-15.702c2.175-3.452,2.175-8.861,0.001-12.314l-9.887-15.702
		c-1.654-2.628-3.227-7.469-3.433-10.569l-1.228-18.516c-0.232-3.486-2.6-7.188-5.652-9.132V37.438
		c0-15.732-12.798-28.53-28.529-28.53H28.529C12.798,8.908,0,21.706,0,37.438v244.381c0,15.732,12.798,28.529,28.529,28.529h224.396
		l0.648,9.77c0.271,4.072,3.45,8.446,7.24,9.959l13.549,5.407l-37.474,74.195c-1.153,2.284-0.844,3.66-0.381,4.412
		c0.293,0.477,1.011,1.275,2.523,1.275c0.756,0,1.627-0.204,2.589-0.606l30.697-12.852c0.755-0.316,1.653-0.483,2.597-0.483
		c2.255,0,4.553,0.933,5.854,2.374l14.746,16.349c1.229,1.363,2.751,2.114,4.283,2.114c2.022,0,3.836-1.307,4.85-3.494l28.89-62.32
		c0.063-0.001,0.125-0.001,0.188-0.002l28.891,62.322c1.014,2.188,2.827,3.494,4.851,3.494c1.531,0,3.053-0.751,4.282-2.115
		l14.745-16.347c1.302-1.442,3.6-2.375,5.854-2.375c0.943,0,1.842,0.167,2.597,0.483l30.697,12.852
		c0.962,0.402,1.833,0.606,2.589,0.606c1.513,0,2.23-0.799,2.523-1.275C431.217,413.339,431.526,411.963,430.373,409.679z
		 M28.529,37.438h352.039l0.002,156.56l-11.152-13.417c-2.036-2.449-5.764-4.094-9.275-4.094c-0.855,0-1.673,0.098-2.433,0.291
		l-17.998,4.581c-2.867,0.729-8.236,0.729-11.104,0l-17.996-4.581c-0.76-0.193-1.578-0.291-2.433-0.291
		c-3.512,0-7.239,1.645-9.275,4.094l-11.866,14.277c-1.984,2.389-6.099,5.379-8.983,6.53l-17.24,6.882
		c-3.791,1.513-6.971,5.887-7.241,9.959l-1.229,18.516c-0.205,3.102-1.777,7.941-3.433,10.569l-9.886,15.702
		c-2.175,3.452-2.175,8.862,0,12.314l4.085,6.488H28.529V37.438z M334.16,329.825c-33.497,0-60.652-27.154-60.652-60.652
		c0-33.498,27.155-60.652,60.652-60.652c33.498,0,60.654,27.154,60.654,60.652C394.815,302.671,367.658,329.825,334.16,329.825z"/>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-1">{cert.name}</h4>
                          <p className="text-blue-600 font-medium text-sm mb-2">{cert.issuer}</p>
                          <p className="text-slate-600 text-sm mb-3">{cert.description}</p>
                          <span className="text-xs text-slate-500 bg-white px-3 py-1 rounded-full border border-blue-200">
                            {cert.date}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Achievements - BLUE THEME IMPROVED */}
              <div>
                <h3 className="text-3xl font-display font-bold text-slate-800 mb-6 border-b border-slate-200 pb-2">
                  Key Achievements
                </h3>
                
                <div className="space-y-4">
                  {/* Assuming 'achievements' array and 'itemVariants' are defined */}
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover={{ 
                        y: -2, // Subtle lift
                        boxShadow: '0 8px 15px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' // Professional shadow lift
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }} // Smoother transition
                      // ** Blue Theme Styles Applied Here **
                      className="bg-blue-50 p-5 rounded-xl shadow-md border border-blue-200 flex items-start space-x-4 cursor-pointer" 
                    >
                      {/* Icon container using a darker blue for contrast */}
                      <div className="w-8 h-8 mt-0.5 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          {/* Professional 'Badge' or 'Trophy' icon */}
                          <path d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z"/>
                        </svg>
                      </div>
                      
                      {/* Content text */}
                      <p className="text-base text-slate-700 leading-relaxed">
                        {achievement}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;