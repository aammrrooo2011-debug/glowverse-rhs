
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import Logo from './Logo.jsx';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  return (
    <footer className="bg-foreground text-background py-32 border-t border-border/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-20">
          
          {/* Brand & Newsletter */}
          <div className="md:col-span-6 lg:col-span-5">
            <Logo className="mb-8 invert" />
            <p className="text-muted-foreground mb-12 text-lg leading-relaxed max-w-md">
              Radiant Healthy Skin (RHS) is a clinical-grade protocol for the modern skin minimalist. Join the movement for longevity.
            </p>
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full border border-border/20 hover:border-white hover:text-white flex items-center justify-center transition-all duration-500"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-1 border-l border-border/10 hidden md:block" />

          {/* Navigation Links */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase mb-8 text-white">Registry</h4>
            <nav className="space-y-6">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-white transition-colors">The Protocol</Link>
              <Link to="/" className="block text-sm text-muted-foreground hover:text-white transition-colors">Ingredient Lab</Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-white transition-colors">Daily Rituals</Link>
            </nav>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase mb-8 text-white">Compliance</h4>
            <nav className="space-y-6">
              <Link to="/privacy" className="block text-sm text-muted-foreground hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms" className="block text-sm text-muted-foreground hover:text-white transition-colors">Terms</Link>
              <Link to="/cookies" className="block text-sm text-muted-foreground hover:text-white transition-colors">Cookies</Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold tracking-widest uppercase text-muted-foreground/50">
          <p>© {currentYear} Glowverse Skincare. Radiant Healthy Skin Protocol.</p>
          <div className="flex gap-8">
            <p>Clinically Designed</p>
            <p>Science-Backed</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
