import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Play, Pause, Film as FilmIcon, Youtube, Instagram, Clapperboard, Smartphone, CreditCard, Share2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const printingServices = [
  { name: 'Business Cards', desc: 'Premium quality visiting cards with matte, glossy, or velvet finishes. Single and double-sided printing available.', price: 'From Rs. 200/100 cards' },
  { name: 'Posters & Banners', desc: 'High-resolution posters, flex banners, rollup stands, and hoardings for events and promotions.', price: 'From Rs. 150' },
  { name: 'ID Cards', desc: 'PVC ID cards with lanyards, perfect for schools, offices, and events.', price: 'From Rs. 80' },
  { name: 'Brochures & Flyers', desc: 'Multi-fold brochures, pamphlets, and flyers for marketing campaigns.', price: 'From Rs. 5/page' },
  { name: 'Photo Prints', desc: 'Lab-quality photo printing in all sizes from passport to A3+.', price: 'From Rs. 10' },
];

const giftProducts = [
  { image: '/images/gift-mug.jpg', name: 'Personalized Mug', price: 'Rs. 299' },
  { image: '/images/gift-frame.jpg', name: 'Photo Frame', price: 'Rs. 449' },
  { image: '/images/gift-tshirt.jpg', name: 'Custom T-Shirt', price: 'Rs. 399' },
  { image: '/images/service-gifts.jpg', name: 'Gift Box Set', price: 'Rs. 599' },
  { image: '/images/portfolio-gift-box.jpg', name: 'Memory Album', price: 'Rs. 699' },
  { image: '/images/product-gift-1.jpg', name: 'Photo Cushion', price: 'Rs. 349' },
];

const videoServices = [
  { icon: FilmIcon, title: 'Birthday Videos', desc: 'Cinematic birthday edits with music, effects, and titles' },
  { icon: Youtube, title: 'YouTube Content', desc: 'Professional vlog editing, thumbnails, and intros' },
  { icon: Instagram, title: 'Instagram Reels', desc: 'Trendy reel editing with transitions and captions' },
  { icon: Clapperboard, title: 'Event Coverage', desc: 'Full event highlight videos and photo slideshows' },
];

const qrCards = [
  { icon: Smartphone, title: 'Business QR', desc: 'Digital visiting cards that share your contact info with a scan' },
  { icon: CreditCard, title: 'Payment QR', desc: 'Accept UPI payments instantly with a framed QR stand' },
  { icon: Share2, title: 'Social Media QR', desc: 'Direct links to Instagram, WhatsApp, and Facebook' },
];

export default function ServicesPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const printingRef = useRef<HTMLDivElement>(null);
  const giftsRef = useRef<HTMLDivElement>(null);
  const videoRef2 = useRef<HTMLDivElement>(null);
  const qrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (printingRef.current) {
        gsap.from('.printing-anim', { opacity: 0, y: 40, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: printingRef.current, start: 'top 80%' } });
      }
      if (giftsRef.current) {
        gsap.from('.gift-card', { opacity: 0, y: 40, stagger: 0.1, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: giftsRef.current, start: 'top 80%' } });
      }
      if (videoRef2.current) {
        gsap.from('.video-anim', { opacity: 0, y: 40, stagger: 0.12, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: videoRef2.current, start: 'top 80%' } });
      }
      if (qrRef.current) {
        gsap.from('.qr-card', { opacity: 0, y: 30, stagger: 0.12, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: qrRef.current, start: 'top 80%' } });
      }
    });
    return () => ctx.revert();
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (videoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setVideoPlaying(!videoPlaying);
    }
  };

  return (
    <>
      {/* Services Hero */}
      <section ref={heroRef} className="gradient-primary" style={{ padding: '120px clamp(16px, 4vw, 64px) 64px' }}>
        <div className="content-max-width">
          <h1 className="font-display text-white font-bold" style={{ fontSize: 'clamp(36px, 7vw, 80px)' }}>
            Our Services
          </h1>
          <p className="text-white/85 font-body mt-4 max-w-3xl" style={{ fontSize: 'clamp(14px, 1.2vw, 18px)', lineHeight: 1.7 }}>
            From printing to video editing — everything you need under one creative roof
          </p>
        </div>
      </section>

      {/* Printing Services */}
      <section ref={printingRef} className="bg-white section-padding">
        <div className="content-max-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="printing-anim">
              <h2 className="font-display text-deep-purple font-bold mb-8" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
                Printing Services
              </h2>
              <div className="space-y-3">
                {printingServices.map((s, i) => (
                  <div key={i} className="border border-deep-purple/10 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-light-pink/30 transition-colors"
                    >
                      <span className="font-display text-deep-purple font-semibold text-lg">{s.name}</span>
                      <ChevronDown
                        size={20}
                        className={`text-deep-purple transition-transform duration-300 ${openAccordion === i ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {openAccordion === i && (
                      <div className="px-5 pb-5">
                        <p className="text-dark-text/70 text-sm leading-relaxed">{s.desc}</p>
                        <span className="inline-block mt-3 px-4 py-1.5 bg-lavender text-deep-purple text-xs font-semibold rounded-full">
                          {s.price}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="printing-anim">
              <img
                src="/images/service-printing-detail.jpg"
                alt="Printing Services"
                className="w-full rounded-3xl shadow-[0_8px_40px_rgba(107,33,168,0.25)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customized Gifts */}
      <section ref={giftsRef} className="gradient-soft section-padding">
        <div className="content-max-width">
          <h2 className="font-display text-deep-purple font-bold mb-8" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
            Customized Gifts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {giftProducts.map((p, i) => (
              <div key={i} className="gift-card bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
                <div className="h-[200px] overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h4 className="font-display text-charcoal font-semibold text-lg">{p.name}</h4>
                  <p className="text-magenta-pink font-semibold mt-1">{p.price}</p>
                  <a
                    href="https://wa.me/919535933173"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-hot-pink text-xs font-semibold uppercase tracking-wider mt-3 hover:underline"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Editing */}
      <section ref={videoRef2} className="bg-white section-padding">
        <div className="content-max-width">
          <h2 className="font-display text-deep-purple font-bold mb-2" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
            Video Editing Services
          </h2>
          <p className="text-dark-text/70 font-body mb-8" style={{ fontSize: 'clamp(14px, 1.1vw, 18px)' }}>
            Professional editing for all your video needs
          </p>

          <div className="video-anim relative aspect-video bg-charcoal rounded-3xl overflow-hidden mb-10">
            <video
              ref={videoRef}
              src="/videos/video-showreel.mp4"
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
            />
            <button
              onClick={toggleVideo}
              className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                {videoPlaying ? <Pause size={28} className="text-white" /> : <Play size={28} className="text-white ml-1" />}
              </div>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoServices.map((v, i) => (
              <div key={i} className="video-anim text-center p-6">
                <v.icon size={32} className="text-magenta-pink mx-auto" />
                <h4 className="font-display text-charcoal font-semibold text-lg mt-4">{v.title}</h4>
                <p className="text-dark-text/70 text-sm mt-2">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QR Solutions */}
      <section ref={qrRef} className="gradient-primary section-padding">
        <div className="content-max-width">
          <h2 className="font-display text-white font-bold text-center mb-12" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
            QR Code Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {qrCards.map((q, i) => (
              <div key={i} className="qr-card glass-card rounded-3xl p-8 text-center">
                <q.icon size={44} className="text-gold mx-auto" />
                <h3 className="font-display text-white font-semibold text-xl mt-4">{q.title}</h3>
                <p className="text-white/80 text-sm mt-2">{q.desc}</p>
                <a
                  href="https://wa.me/919535933173"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 bg-gold text-charcoal font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-light-gold transition-all"
                >
                  Get Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
