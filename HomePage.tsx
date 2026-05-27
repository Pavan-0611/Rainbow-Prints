import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Sunrise, Zap, Gift, BadgeIndianRupee, Heart,
  Printer, Film, ArrowRight, ChevronLeft, ChevronRight,
  Star, CheckCircle, CloudUpload, MessageCircle,
  Clock, MapPin, Phone, Smartphone, CreditCard, Share2,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  { icon: Sunrise, title: 'Open Early at 7:30 AM', desc: 'Start your day with us — we\'re open before most shops for your convenience.' },
  { icon: Zap, title: 'Fast Printing Support', desc: 'Quick turnaround on all printing jobs. Business cards ready while you wait.' },
  { icon: Gift, title: 'Same-Day Custom Orders', desc: 'Last minute gift? We create personalized items on the same day.' },
  { icon: BadgeIndianRupee, title: 'Affordable Pricing', desc: 'Premium quality at prices that won\'t break your budget.' },
  { icon: Heart, title: 'Friendly Customer Service', desc: 'Our team treats every customer like family with a personal touch.' },
];

const services = [
  { image: '/images/service-printing.jpg', icon: Printer, title: 'Printing Services', desc: 'Business cards, posters, ID cards, banners, flyers, brochures, and all types of professional printing with high-quality finishes.' },
  { image: '/images/service-gifts.jpg', icon: Gift, title: 'Customized Gifts', desc: 'Personalized gift boxes, memory albums, photo frames, mugs, t-shirts, and unique surprise gifts for every occasion.' },
  { image: '/images/service-video.jpg', icon: Film, title: 'Video Editing', desc: 'Birthday edits, YouTube videos, Instagram reels, promotional clips, and professional video editing services.' },
];

const products = [
  { image: '/images/product-jewellery-1.jpg', category: 'Artificial Jewellery', name: 'Elegant Necklace Set' },
  { image: '/images/product-saree-1.jpg', category: 'Sarees', name: 'Designer Silk Saree' },
  { image: '/images/product-accessory-1.jpg', category: 'Accessories', name: 'Trendy Hair Bands' },
  { image: '/images/product-gift-1.jpg', category: 'Gift Decorations', name: 'Premium Gift Hamper' },
  { image: '/images/product-jewellery-2.jpg', category: 'Artificial Jewellery', name: 'Traditional Earrings' },
];

const reviews = [
  { stars: 5, text: 'Best print quality and best clothes for affordable price. The team went above and beyond to make sure everything was perfect. Highly recommend!', author: 'Pavan Mahadesh' },
  { stars: 5, text: 'I love this place… they made my visiting cards and have amazing collections. The fancy jewellery selection is beautiful and so reasonably priced.', author: 'Neha Kishor' },
  { stars: 5, text: 'Same day service for my urgent printing needs. The customized gift box they made for my friend\'s birthday was absolutely stunning. Will definitely come back!', author: 'Priya Sharma' },
];

const qrFeatures = ['WhatsApp Business QR', 'Instagram Profile QR', 'UPI Payment QR', 'Digital Business Card QR', 'Menu & Catalog QR', 'WiFi Sharing QR'];

const qrCards = [
  { icon: Smartphone, title: 'Business QR', desc: 'Digital visiting cards that share your contact info with a scan' },
  { icon: CreditCard, title: 'Payment QR', desc: 'Accept UPI payments instantly with a framed QR stand' },
  { icon: Share2, title: 'Social Media QR', desc: 'Direct links to Instagram, WhatsApp, and Facebook' },
];

const portfolioItems = [
  { image: '/images/portfolio-business-cards.jpg', category: 'Printing Works', title: 'Business Cards Collection' },
  { image: '/images/portfolio-gift-box.jpg', category: 'Customized Gifts', title: 'Wedding Memory Album' },
  { image: '/images/portfolio-jewellery-display.jpg', category: 'Fancy Collection', title: 'Bridal Jewellery Display' },
  { image: '/images/portfolio-video-edit.jpg', category: 'Video Editing', title: 'Birthday Cinematic Edit' },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const qrRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const uploadRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      if (heroRef.current) {
        gsap.from('.hero-content', { opacity: 0, y: 30, duration: 0.8, delay: 0.3, ease: 'power3.out' });
      }

      // Highlights
      if (highlightsRef.current) {
        gsap.from('.highlight-card', {
          opacity: 0, y: 40, stagger: 0.12, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: highlightsRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        });
      }

      // Services
      if (servicesRef.current) {
        gsap.from('.service-card', {
          opacity: 0, y: 50, stagger: 0.15, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: servicesRef.current, start: 'top 75%', toggleActions: 'play none none none' },
        });
      }

      // Products
      if (productsRef.current) {
        gsap.from('.product-card', {
          opacity: 0, x: 60, stagger: 0.1, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: productsRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        });
      }

      // Reviews
      if (reviewsRef.current) {
        gsap.from('.review-card', {
          opacity: 0, y: 30, stagger: 0.15, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: reviewsRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        });
      }

      // QR
      if (qrRef.current) {
        gsap.from('.qr-left', { opacity: 0, x: -40, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: qrRef.current, start: 'top 75%' } });
        gsap.from('.qr-right', { opacity: 0, x: 40, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: qrRef.current, start: 'top 75%' } });
      }

      // Portfolio
      if (portfolioRef.current) {
        gsap.from('.portfolio-item', {
          opacity: 0, scale: 0.95, stagger: 0.12, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: portfolioRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        });
      }

      // Upload
      if (uploadRef.current) {
        gsap.from('.upload-box', {
          opacity: 0, scale: 0.95, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: uploadRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        });
      }

      // Banner
      if (bannerRef.current) {
        gsap.from('.banner-content', {
          opacity: 0, y: 20, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: bannerRef.current, start: 'top 85%', toggleActions: 'play none none none' },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const scrollProducts = (dir: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 280;
      scrollContainerRef.current.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-xerox-bg.jpg"
            alt="Xerox and Printout Available Here"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(107,33,168,0.75)] via-[rgba(107,33,168,0.55)] to-[rgba(255,251,235,0.95)]" />
        </div>

        {/* Floating Sparkles */}
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gold rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                opacity: 0.4 + Math.random() * 0.4,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="hero-content relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="font-display text-white font-bold leading-tight mb-4"
            style={{ fontSize: 'clamp(36px, 7vw, 80px)', textShadow: '0 4px 30px rgba(0,0,0,0.3)' }}>
            Rainbow Fancy & Prints
          </h1>
          <p className="font-display text-white/90 font-semibold mb-4"
            style={{ fontSize: 'clamp(18px, 3vw, 32px)', textShadow: '0 2px 15px rgba(0,0,0,0.2)' }}>
            Creative Printing, Personalized Gifts & Fashion — All in One Place
          </p>
          <p className="text-white/80 font-body max-w-2xl mx-auto mb-8"
            style={{ fontSize: 'clamp(13px, 1.2vw, 17px)', lineHeight: 1.7 }}>
            From business cards and customized gifts to fancy collections and video editing — we bring creativity to every special moment.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 gradient-primary text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(107,33,168,0.35)]"
            >
              Explore Services
              <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/919535933173"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-magenta-pink text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:bg-magenta-pink"
            >
              <MessageCircle size={18} />
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ===== WHY CUSTOMERS LOVE US ===== */}
      <section ref={highlightsRef} className="gradient-soft section-padding">
        <div className="content-max-width">
          <h2 className="font-display text-deep-purple font-bold text-center mb-12"
            style={{ fontSize: 'clamp(28px, 5vw, 48px)' }}>
            Why Customers Love Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="highlight-card glass-card rounded-2xl p-6 lg:p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-12 h-12 mx-auto rounded-xl gradient-primary flex items-center justify-center">
                  <h.icon className="text-white" size={24} />
                </div>
                <h3 className="font-display text-deep-purple font-semibold text-lg mt-4">{h.title}</h3>
                <p className="text-dark-text/70 text-sm mt-2 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR SERVICES ===== */}
      <section ref={servicesRef} className="bg-white section-padding">
        <div className="content-max-width">
          <h2 className="font-display text-deep-purple font-bold mb-2"
            style={{ fontSize: 'clamp(28px, 5vw, 48px)' }}>
            Our Services
          </h2>
          <p className="text-dark-text/70 font-body mb-10" style={{ fontSize: 'clamp(14px, 1.1vw, 18px)' }}>
            Everything you need under one roof
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((s, i) => (
              <div
                key={i}
                className="service-card bg-white rounded-3xl overflow-hidden border border-deep-purple/10 shadow-[0_4px_24px_rgba(107,33,168,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
              >
                <div className="relative h-[200px] overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
                </div>
                <div className="p-6">
                  <s.icon className="text-magenta-pink mb-3" size={28} />
                  <h3 className="font-display text-deep-purple font-semibold text-xl">{s.title}</h3>
                  <p className="text-dark-text/70 text-sm mt-2 leading-relaxed">{s.desc}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-hot-pink text-xs font-semibold uppercase tracking-wider mt-4 hover:underline"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FANCY COLLECTION PREVIEW ===== */}
      <section ref={productsRef} className="gradient-soft section-padding">
        <div className="content-max-width">
          <h2 className="font-display text-deep-purple font-bold mb-2"
            style={{ fontSize: 'clamp(28px, 5vw, 48px)' }}>
            Fancy Collection
          </h2>
          <p className="text-dark-text/70 font-body mb-8" style={{ fontSize: 'clamp(14px, 1.1vw, 18px)' }}>
            Discover our stunning range of fashion accessories
          </p>

          <div className="relative">
            <button
              onClick={() => scrollProducts('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-deep-purple text-deep-purple bg-white/80 flex items-center justify-center hover:bg-deep-purple hover:text-white transition-all shadow-md"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scrollProducts('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-deep-purple text-deep-purple bg-white/80 flex items-center justify-center hover:bg-deep-purple hover:text-white transition-all shadow-md"
            >
              <ChevronRight size={20} />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory px-12 py-2"
            >
              {products.map((p, i) => (
                <div
                  key={i}
                  className="product-card flex-shrink-0 w-[260px] bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] snap-start transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
                >
                  <div className="aspect-square overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <span className="inline-block px-3 py-1 bg-lavender text-deep-purple text-[10px] font-semibold uppercase tracking-wider rounded-full">
                      {p.category}
                    </span>
                    <h4 className="font-display text-charcoal font-semibold text-base mt-2">{p.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/collection"
              className="inline-flex items-center gap-2 gradient-primary text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              View Full Collection
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CUSTOMER REVIEWS ===== */}
      <section ref={reviewsRef} className="bg-white section-padding">
        <div className="content-max-width">
          <h2 className="font-display text-deep-purple font-bold text-center mb-10"
            style={{ fontSize: 'clamp(28px, 5vw, 48px)' }}>
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="review-card bg-light-pink rounded-2xl p-8 relative">
                <span className="absolute top-4 left-4 font-display text-hot-pink/30 text-6xl leading-none">"</span>
                <div className="flex gap-1 mb-4">
                  {[...Array(r.stars)].map((_, j) => (
                    <Star key={j} size={20} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-charcoal/80 text-sm italic leading-relaxed relative z-10">{r.text}</p>
                <p className="text-deep-purple font-semibold text-sm mt-5">— {r.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SMART QR SOLUTIONS ===== */}
      <section ref={qrRef} className="gradient-primary section-padding">
        <div className="content-max-width">
          <div className="text-center mb-12">
            <h2 className="font-display text-white font-bold mb-3"
              style={{ fontSize: 'clamp(28px, 5vw, 48px)' }}>
              Smart QR Printing Solutions
            </h2>
            <p className="text-white/85 font-body max-w-2xl mx-auto" style={{ fontSize: 'clamp(14px, 1.1vw, 18px)' }}>
              Modern, scannable, and beautifully designed QR codes for your business
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: Feature List */}
            <div className="qr-left">
              <div className="space-y-4">
                {qrFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={22} className="text-gold shrink-0" />
                    <span className="text-white/90 text-base">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: QR Display */}
            <div className="qr-right flex justify-center">
              <div className="glass-card rounded-3xl p-8 lg:p-10 text-center max-w-sm">
                <div className="bg-white p-4 rounded-xl inline-block">
                  <img src="/images/qr-code-store.png" alt="Rainbow Fancy Store QR" className="w-[180px] h-[180px] object-contain" />
                </div>
                <p className="text-white/70 text-xs font-semibold uppercase tracking-wider mt-5">
                  Scan to Visit Our Store
                </p>
                <a
                  href="https://wa.me/919535933173"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-gold text-charcoal font-semibold text-sm px-7 py-3 rounded-full transition-all hover:bg-light-gold"
                >
                  Get Your QR Code
                </a>
              </div>
            </div>
          </div>

          {/* QR Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {qrCards.map((q, i) => (
              <div key={i} className="glass-card rounded-3xl p-8 text-center">
                <q.icon size={44} className="text-gold mx-auto" />
                <h3 className="font-display text-white font-semibold text-xl mt-4">{q.title}</h3>
                <p className="text-white/80 text-sm mt-2">{q.desc}</p>
                <a
                  href="https://wa.me/919535933173"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-gold text-charcoal font-semibold text-xs px-6 py-2.5 rounded-full hover:bg-light-gold transition-all"
                >
                  Get Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO PREVIEW ===== */}
      <section ref={portfolioRef} className="gradient-soft section-padding">
        <div className="content-max-width">
          <h2 className="font-display text-deep-purple font-bold mb-2"
            style={{ fontSize: 'clamp(28px, 5vw, 48px)' }}>
            Our Portfolio
          </h2>
          <p className="text-dark-text/70 font-body mb-8" style={{ fontSize: 'clamp(14px, 1.1vw, 18px)' }}>
            A showcase of our best work
          </p>

          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {portfolioItems.map((p, i) => (
              <div
                key={i}
                className={`portfolio-item group relative overflow-hidden rounded-2xl ${
                  i % 3 === 0 ? 'aspect-[4/3]' : i % 3 === 1 ? 'aspect-[3/4]' : 'aspect-[4/3]'
                }`}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[rgba(107,33,168,0.85)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                  <span className="text-gold text-xs font-semibold uppercase tracking-wider">{p.category}</span>
                  <h3 className="font-display text-white font-semibold text-xl mt-2">{p.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-hot-pink text-xs font-semibold uppercase tracking-wider hover:underline"
            >
              View Full Portfolio <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== UPLOAD & ORDER ===== */}
      <section ref={uploadRef} className="bg-white section-padding">
        <div className="content-max-width">
          <h2 className="font-display text-deep-purple font-bold text-center mb-2"
            style={{ fontSize: 'clamp(28px, 5vw, 48px)' }}>
            Upload Your Designs
          </h2>
          <p className="text-dark-text/70 font-body text-center mb-10" style={{ fontSize: 'clamp(14px, 1.1vw, 18px)' }}>
            Send us your files for printing, editing, or customization
          </p>

          <div className="upload-box max-w-2xl mx-auto">
            <Link
              to="/upload"
              className="block border-2 border-dashed border-deep-purple/30 rounded-3xl p-12 sm:p-16 text-center transition-all duration-300 hover:border-magenta-pink hover:bg-light-pink/50 cursor-pointer"
            >
              <CloudUpload size={64} className="text-magenta-pink mx-auto mb-5" />
              <h3 className="font-display text-deep-purple font-semibold text-xl sm:text-2xl">
                Drag & Drop Your Files Here
              </h3>
              <p className="text-dark-text/70 text-sm mt-2">or click to browse</p>
              <p className="text-dark-text/50 text-xs mt-3">
                Supports: JPG, PNG, PDF, PSD, AI, MP4 — Max 50MB
              </p>
              <span className="inline-block mt-6 gradient-primary text-white font-semibold px-8 py-3.5 rounded-full">
                Browse Files
              </span>
            </Link>
            <p className="text-center text-dark-text/60 text-sm mt-5">
              Or send directly via{' '}
              <a
                href="https://wa.me/919535933173"
                target="_blank"
                rel="noopener noreferrer"
                className="text-hot-pink font-medium inline-flex items-center gap-1 hover:underline"
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ===== CONTACT BANNER ===== */}
      <section ref={bannerRef} className="gradient-warm" style={{ padding: '48px clamp(16px, 4vw, 64px)' }}>
        <div className="banner-content content-max-width text-center">
          <h2 className="font-display text-white font-bold mb-6" style={{ fontSize: 'clamp(28px, 5vw, 48px)' }}>
            Visit Us Today
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 mb-8">
            <div className="flex items-center gap-2 text-white font-semibold">
              <Clock size={20} />
              <span>7:30 AM – 9:00 PM Daily</span>
            </div>
            <div className="flex items-center gap-2 text-white font-semibold">
              <MapPin size={20} />
              <span>Keerthi Layout, Chandapura</span>
            </div>
            <a href="tel:9535933173" className="flex items-center gap-2 text-white font-semibold hover:underline">
              <Phone size={20} />
              <span>9535933173</span>
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://maps.google.com/?q=Keerthi+Layout+Chandapura+Bangalore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-deep-purple font-semibold px-8 py-3.5 rounded-full transition-all hover:bg-cream"
            >
              Get Directions
            </a>
            <a
              href="tel:9535933173"
              className="inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:bg-white/15"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
