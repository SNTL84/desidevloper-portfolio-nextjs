'use client';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/motion';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark"
    >
      {/* Animated background orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-3xl" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
      >
        {/* Badge */}
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for projects · Surat, India 🇮🇳
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl font-black tracking-tight mb-4"
        >
          <span className="text-white">desi</span>
          <span className="text-gold-gradient">devloper</span>
          <span className="ml-3 text-4xl md:text-6xl">🇮🇳</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-2xl text-gold font-semibold mb-4"
        >
          AI Workflow Pro & Full-Stack Builder
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={fadeInUp}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Built for founders who{' '}
          <span className="text-gold font-semibold">move fast</span>,{' '}
          <span className="text-gold font-semibold">automate smart</span>, and{' '}
          <span className="text-gold font-semibold">waste nothing</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-gold text-black font-bold rounded-full hover:bg-gold-light transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-gold/30"
          >
            View My Work
          </a>
          <a
            href="https://wa.me/919727413309"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-gold/50 text-gold font-bold rounded-full hover:bg-gold/10 transition-all duration-200 hover:scale-105"
          >
            Let's Talk 💬
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div variants={fadeInUp} className="flex gap-6 justify-center">
          {[
            { href: 'https://github.com/SNTL84', icon: FaGithub, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/sntl2784', icon: FaLinkedin, label: 'LinkedIn' },
            { href: 'https://wa.me/919727413309', icon: FaWhatsapp, label: 'WhatsApp' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-black transition-all duration-200 hover:scale-110"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 text-xs"
      >
        <span>scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
          className="w-0.5 h-6 bg-gold/40 rounded-full"
        />
      </motion.div>
    </section>
  );
}
