import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-dark-2 border-t border-gold/20 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-2xl font-black">
              <span className="text-white">desi</span>
              <span className="text-gold-gradient">devloper</span>
              <span className="ml-2">🇮🇳</span>
            </p>
            <p className="text-gray-600 text-xs mt-1">Built for founders who move fast, automate smart, and waste nothing.</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              { href: 'https://github.com/SNTL84', icon: FaGithub, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/sntl2784', icon: FaLinkedin, label: 'LinkedIn' },
              { href: 'https://wa.me/919727413309', icon: FaWhatsapp, label: 'WhatsApp' },
              { href: 'mailto:3goldenlotusroots@gmail.com', icon: FaEnvelope, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-black transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gold/10 mt-8 pt-6 text-center">
          <p className="text-gray-600 text-xs">
            © 2026{' '}
            <a href="https://desidevloper.com" className="text-gold hover:text-gold-light transition-colors">desidevloper.com</a>
            {' '}·{' '}
            Built by{' '}
            <a href="https://github.com/SNTL84" className="text-gold hover:text-gold-light transition-colors">SNTL84</a>
            {' '}·{' '}
            <a href="https://www.linkedin.com/in/sntl2784" className="text-gold hover:text-gold-light transition-colors">LinkedIn</a>
            {' '}·{' '}
            <a href="https://wa.me/919727413309" className="text-gold hover:text-gold-light transition-colors">WhatsApp</a>
            {' '}·{' '}
            <a href="https://aratt.ai/user/@desidevloper" className="text-gold hover:text-gold-light transition-colors">Arrattai</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
