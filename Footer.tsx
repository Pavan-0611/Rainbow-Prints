import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Collection', path: '/collection' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Upload', path: '/upload' },
  { name: 'Contact', path: '/contact' },
];

const serviceLinks = [
  'Business Cards',
  'Posters & Banners',
  'Customized Gifts',
  'Video Editing',
  'QR Solutions',
  'Fancy Items',
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="content-max-width px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 4C14 4 6 10 6 16C6 19 8 22 14 22C20 22 22 19 22 16C22 10 14 4 14 4Z" fill="url(#rainbow-footer)" opacity="0.9"/>
                <defs>
                  <linearGradient id="rainbow-footer" x1="6" y1="4" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F43F5E"/>
                    <stop offset="0.25" stopColor="#FBBF24"/>
                    <stop offset="0.5" stopColor="#22C55E"/>
                    <stop offset="0.75" stopColor="#3B82F6"/>
                    <stop offset="1" stopColor="#7E22CE"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-display text-lg font-semibold">Rainbow Fancy & Prints</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Your one-stop creative studio in Chandapura for printing, gifts, fashion, and video editing.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="text-white/50 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/50 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a
                href="https://wa.me/919535933173"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-gold transition-colors"
                aria-label="WhatsApp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold text-xs font-semibold uppercase tracking-[0.08em] mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/60 text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gold text-xs font-semibold uppercase tracking-[0.08em] mb-4">Our Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <span className="text-white/60 text-sm hover:text-white transition-colors cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold text-xs font-semibold uppercase tracking-[0.08em] mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <p className="text-white/60 text-sm">
                  Keerthi Layout, Terracon Doctors Enclave, Chandapura, Karnataka 560099
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-gold shrink-0" />
                <a href="tel:9535933173" className="text-white/60 text-sm hover:text-white transition-colors">
                  9535933173
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock size={16} className="text-gold shrink-0" />
                <p className="text-white/60 text-sm">Open Daily: 7:30 AM – 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-sm">
            &copy; 2025 Rainbow Fancy & Prints. All rights reserved.
          </p>
          <p className="font-script text-white/40 text-base">
            Designed with love in Chandapura
          </p>
        </div>
      </div>
    </footer>
  );
}
