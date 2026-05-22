'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '@/utils/motion';
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

type FormState = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormState>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: 'SNTL84',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding bg-dark">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Get In Touch
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-white">
            Let&apos;s <span className="text-gold-gradient">Build Together</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 mt-4 max-w-xl mx-auto">
            Have a project in mind? Let&apos;s talk automation, AI, or full-stack. I respond within 24 hours.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h3 variants={fadeInLeft} className="text-white font-bold text-xl">
              Reach out directly
            </motion.h3>
            {[
              { href: 'https://wa.me/919727413309', icon: FaWhatsapp, label: 'WhatsApp', value: '+91 97274 13309', color: 'text-green-400' },
              { href: 'mailto:3goldenlotusroots@gmail.com', icon: FaEnvelope, label: 'Email', value: '3goldenlotusroots@gmail.com', color: 'text-blue-400' },
              { href: 'https://www.linkedin.com/in/sntl2784', icon: FaLinkedin, label: 'LinkedIn', value: '/in/sntl2784', color: 'text-blue-500' },
              { href: 'https://github.com/SNTL84', icon: FaGithub, label: 'GitHub', value: 'github.com/SNTL84', color: 'text-white' },
            ].map((contact) => (
              <motion.a
                key={contact.label}
                variants={fadeInLeft}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-gold/20 bg-dark-2 hover:border-gold/50 transition-all duration-300 group"
              >
                <contact.icon size={20} className={`${contact.color} group-hover:scale-110 transition-transform`} />
                <div>
                  <p className="text-white text-sm font-semibold">{contact.label}</p>
                  <p className="text-gray-500 text-xs">{contact.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {status === 'sent' && (
              <div className="p-4 rounded-xl bg-gold/10 border border-gold/30 text-gold text-sm font-semibold">
                ✅ Message sent! I&apos;ll get back to you within 24 hours.
              </div>
            )}
            {status === 'error' && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-semibold">
                ❌ Something went wrong. Please try WhatsApp instead.
              </div>
            )}
            <motion.input
              variants={fadeInRight}
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl bg-dark-2 border border-gold/20 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors text-sm"
            />
            <motion.input
              variants={fadeInRight}
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl bg-dark-2 border border-gold/20 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors text-sm"
            />
            <motion.textarea
              variants={fadeInRight}
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-dark-2 border border-gold/20 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors text-sm resize-none"
            />
            <motion.button
              variants={fadeInRight}
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-gold text-black font-bold rounded-xl hover:bg-gold-light transition-all duration-200 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message 🚀'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
