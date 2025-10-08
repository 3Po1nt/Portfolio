import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import profilePic from '../assets/images/profile.jpg';

const About = () => {
  const { personal, education } = portfolioData;

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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="section-padding bg-slate-50">
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
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Get to know me better - My journey, Education, and Passion for Technology
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left Column - Profile Image */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary-500">
                        <img src={profilePic} alt="William Saunderson" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xl font-semibold text-slate-800">{personal.name}</p>
                      <p className="text-primary-600 font-medium">{personal.title.split('|')[0].trim()}</p>
                      <div className="flex items-center justify-center space-x-4 text-sm text-slate-600 mt-4">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                          </svg>
                          Pretoria, SA
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                          3rd Year Student
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <div className="space-y-8">
                {/* Personal Description */}
                <div>
                  <h3 className="text-2xl font-display font-semibold text-slate-800 mb-4">My Story</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {personal.about}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-primary-600">3+</div>
                      <div className="text-sm text-slate-600">Years of Coding</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-primary-600">15+</div>
                      <div className="text-sm text-slate-600">Projects Completed</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-primary-600">8+</div>
                      <div className="text-sm text-slate-600">Programming Languages</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-primary-600">2026</div>
                      <div className="text-sm text-slate-600">Graduation Year</div>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h3 className="text-2xl font-display font-semibold text-slate-800 mb-6">Education</h3>
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="text-lg font-semibold text-slate-800">
                              {edu.degree}
                              {edu.specialization && (
                                <span className="text-primary-600"> - {edu.specialization}</span>
                              )}
                            </h4>
                            <a href={edu.website} target="_blank" rel="noopener noreferrer" className="text-primary-600 font-medium hover:underline">
                              {edu.institution}
                            </a>
                          </div>
                          <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-3">
                          {edu.description}
                        </p>
                        {edu.achievements && (
                          <ul className="space-y-1">
                            {edu.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start text-sm text-slate-600">
                                <svg className="w-4 h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <h3 className="text-2xl font-display font-semibold text-slate-800 mb-4">Interests</h3>
                  <div className="flex flex-wrap gap-3">
                    {['Artificial Intelligence', 'Cloud Computing', 'Cybersecurity', 'Web Development', 'Mobile Apps', 'Database Systems', 'Machine Learning', 'DevOps'].map((interest) => (
                      <span key={interest} className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;