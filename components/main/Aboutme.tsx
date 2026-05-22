'use client';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/utils/motion';
import { SERVICES } from '@/constants';

export default function AboutMe() {
  return (
    <section id="about" className="section-padding bg-dark-2">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            About Me
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-white">
            Who is <span className="text-gold-gradient">SNTL84</span>?
          </motion.h2>
        </motion.div>

        {/* Bio Block */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div variants={fadeInLeft}>
            <h3 className="text-2xl font-bold text-white mb-4">
              Golden Lotus · <span className="text-gold">Desi Developer</span> 🇮🇳
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              I&apos;m an AI Workflow Professional and Full-Stack Builder based in Surat, Gujarat, India.
              I build systems that <span className="text-gold font-semibold">think, automate, and scale</span> — from LLM-powered pipelines to production-ready web applications.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Under the brand <span className="text-gold font-semibold">SNTL84</span>, I serve founders and businesses who want to move fast without breaking things.
              Every system I build is designed to run lean, generate leads, and deliver ROI from day one.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Next.js', 'TypeScript', 'n8n', 'Claude AI', 'Supabase', 'Vercel'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-semibold border border-gold/30 text-gold rounded-full bg-gold/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInRight} className="grid grid-cols-2 gap-4">
            {[{ label: 'Projects Built', value: '50+' }, { label: 'GitHub Repos', value: '50+' }, { label: 'Automations', value: '100+' }, { label: 'Years Building', value: '3+' }].map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl border border-gold/20 bg-dark-3 hover:border-gold/50 transition-colors duration-300 text-center"
              >
                <p className="text-3xl font-black text-gold-gradient mb-1">{stat.value}</p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Services */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={fadeInUp} className="text-center text-gold text-sm font-semibold tracking-widest uppercase mb-8">
            What I Do
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="p-6 rounded-2xl border border-gold/20 bg-dark-3 hover:border-gold/50 hover:bg-dark-2 transition-all duration-300 group"
              >
                <span className="text-3xl mb-4 block">{service.icon}</span>
                <h4 className="text-white font-bold text-sm mb-2 group-hover:text-gold transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
