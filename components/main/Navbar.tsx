'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NAV_LINKS } from '@/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark/90 backdrop-blur-md border-b border-gold/20 shadow-lg shadow-gold/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group"
        >
          <span className="text-2xl font-black text-gold-gradient tracking-tight">
            desi<span className="text-white">devloper</span>
          </span>
          <span className="text-lg">🇮🇳</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-gray-400 hover:text-gold transition-colors duration-200 text-sm font-medium tracking-wide"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/919727413309"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-gold text-black text-sm font-bold rounded-full hover:bg-gold-light transition-all duration-200 hover:scale-105"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-gold transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gold transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gold transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-dark-2 border-t border-gold/20 px-6 py-4 flex flex-col gap-4"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className="text-gray-400 hover:text-gold transition-colors text-sm font-medium"
            >
              {link.title}
            </a>
          ))}
          <a
            href="https://wa.me/919727413309"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center px-5 py-2 bg-gold text-black text-sm font-bold rounded-full"
          >
            Hire Me
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
