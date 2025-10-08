import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const { projects, projectsInProgress} = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  // Helper function to render a single project card
  const renderProjectCard = (project, index, isProgress = false) => {
    // Determine a unique key and hover index based on the list
    const key = isProgress ? `progress-${index}` : `completed-${index}`;
    // Use an offset for progress projects' hover state to avoid conflict with completed projects
    const hoverIndex = isProgress ? index + projects.length : index;

    return (
      <motion.div
        key={key}
        variants={itemVariants}
        whileHover={{ y: -8 }}
        onHoverStart={() => setHoveredProject(hoverIndex)}
        onHoverEnd={() => setHoveredProject(null)}
        className="card bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
        onClick={() => setSelectedProject(project)}
      >
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Hover Overlay */}
          <AnimatePresence>
            {hoveredProject === hoverIndex && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-primary-600/90 flex items-center justify-center"
              >
                <div className="text-white text-center">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  </svg>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-slate-800 mb-2">{project.title}</h3>
          <p className="text-slate-600 text-sm mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>

          {/* Project Links */}
          <div className="flex items-center justify-between">
            <div className="flex space-x-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-primary-600 transition-colors duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-primary-600 transition-colors duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="section-padding bg-slate-50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header - Completed Projects */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-800 mb-4">
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              A showcase of my recent work, academic projects, and personal developments
            </p>
          </motion.div>

          {/* Completed Projects Grid */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => renderProjectCard(project, index, false))}
          </motion.div>

          {/* --- Projects In Progress Section --- */}

          {projectsInProgress && projectsInProgress.length > 0 && (
            <>
              {/* Section Header - Projects In Progress */}
              <motion.div variants={itemVariants} className="text-center mt-20 mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-800 mb-4">
                  Projects <span className="text-gradient">In Progress</span>
                </h2>
                <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                  A glimpse into what I'm currently building and learning
                </p>
              </motion.div>

              {/* Projects In Progress Grid */}
              <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsInProgress.map((project, index) => renderProjectCard(project, index, true))}
              </motion.div>
            </>
          )}

          {/* --- End Projects In Progress Section --- */}

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white max-w-2xl mx-auto">
              <h3 className="text-2xl font-display font-bold mb-4">Interested in my work?</h3>
              <p className="text-primary-100 mb-6">
                I'm always open to discussing new projects and opportunities. Let's connect and build something amazing together!
              </p>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-slate-100 transition-colors duration-200"
              >
                Get In Touch
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="Black" viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                </button>
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                  <div className="flex space-x-4">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>GitHub</span>
                      </a>
                    )}
                    {selectedProject.demoUrl && (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                        </svg>
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Project Description</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {selectedProject.description}
                    </p>
                    
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Key Features</h3>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start text-slate-600">
                        <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Modern and responsive user interface
                      </li>
                      <li className="flex items-start text-slate-600">
                        <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Scalable and maintainable codebase
                      </li>
                      <li className="flex items-start text-slate-600">
                        <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Best practices and modern development patterns
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-slate-800 mb-2">Project Stats</h4>
                      <div className="space-y-2 text-sm text-slate-600">
                        <div className="flex justify-between">
                          <span>Technologies:</span>
                          <span className="font-medium">{selectedProject.technologies.length}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>GitHub:</span>
                          <span className="font-medium">
                            {selectedProject.githubUrl ? 'Available' : 'Private'}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Live Demo:</span>
                          <span className="font-medium">
                            {selectedProject.demoUrl ? 'Available' : 'Coming Soon'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;