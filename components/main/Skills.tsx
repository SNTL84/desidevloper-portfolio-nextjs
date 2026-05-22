'use client';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, scaleIn } from '@/utils/motion';
import { SKILLS } from '@/constants';

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Tech Stack
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-white">
            Skills & <span className="text-gold-gradient">Tools</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.name}
              variants={scaleIn}
              whileHover={{ scale: 1.05, borderColor: '#c9a84c' }}
              className="p-4 rounded-2xl border border-gold/20 bg-dark-2 hover:bg-dark-3 transition-all duration-300 text-center group"
            >
              <p className="text-white text-sm font-semibold mb-3 group-hover:text-gold transition-colors">
                {skill.name}
              </p>
              {/* Skill level bar */}
              <div className="w-full h-1 bg-dark-3 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                  className="h-full bg-gold rounded-full"
                />
              </div>
              <p className="text-gold text-xs mt-1 font-medium">{skill.level}%</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
