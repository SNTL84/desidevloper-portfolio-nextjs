'use client';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/utils/motion';
import { PROJECTS } from '@/constants/Project';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-dark-2">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Portfolio
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-white">
            Featured <span className="text-gold-gradient">Projects</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className={`p-6 rounded-2xl border transition-all duration-300 bg-dark-3 flex flex-col ${
                project.featured
                  ? 'border-gold/40 hover:border-gold'
                  : 'border-gold/15 hover:border-gold/40'
              }`}
            >
              {project.featured && (
                <span className="inline-block mb-3 text-xs font-bold text-black bg-gold px-3 py-1 rounded-full w-fit">
                  ⭐ Featured
                </span>
              )}
              <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded border border-gold/20 text-gold/70 bg-gold/5">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-gray-400 hover:text-gold text-xs font-medium transition-colors"
                >
                  <FaGithub size={14} /> Source
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-gray-400 hover:text-gold text-xs font-medium transition-colors"
                  >
                    <FaExternalLinkAlt size={12} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/SNTL84"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gold/40 text-gold rounded-full hover:bg-gold/10 transition-all duration-200 font-medium text-sm"
          >
            <FaGithub size={16} /> View All 50+ Repos on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
