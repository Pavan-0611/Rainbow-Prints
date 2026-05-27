import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Category = 'All' | 'Printing' | 'Customized Gifts' | 'Fancy Collection' | 'Video Editing' | 'QR Designs';

const categories: Category[] = ['All', 'Printing', 'Customized Gifts', 'Fancy Collection', 'Video Editing', 'QR Designs'];

const portfolioItems = [
  { image: '/images/portfolio-business-cards.jpg', category: 'Printing' as Category, title: 'Premium Business Card Set' },
  { image: '/images/portfolio-gift-box.jpg', category: 'Customized Gifts' as Category, title: 'Wedding Memory Album' },
  { image: '/images/portfolio-jewellery-display.jpg', category: 'Fancy Collection' as Category, title: 'Bridal Jewellery Display' },
  { image: '/images/portfolio-video-edit.jpg', category: 'Video Editing' as Category, title: 'Birthday Cinematic Edit' },
  { image: '/images/portfolio-qr-stand.jpg', category: 'QR Designs' as Category, title: 'Restaurant Menu QR Stand' },
  { image: '/images/service-printing.jpg', category: 'Printing' as Category, title: 'Event Banner & Poster' },
  { image: '/images/service-gifts.jpg', category: 'Customized Gifts' as Category, title: 'Corporate Gift Hampers' },
  { image: '/images/product-saree-1.jpg', category: 'Fancy Collection' as Category, title: 'Festive Saree Collection' },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(p => p.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.portfolio-item', {
        opacity: 0, scale: 0.95, stagger: 0.1, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 80%' },
      });
    });
    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <>
      {/* Portfolio Hero */}
      <section className="bg-charcoal" style={{ padding: '120px clamp(16px, 4vw, 64px) 64px' }}>
        <div className="content-max-width">
          <h1 className="font-display text-white font-bold" style={{ fontSize: 'clamp(36px, 7vw, 80px)' }}>
            Our Portfolio
          </h1>
          <p className="text-white/70 font-body mt-4 max-w-2xl" style={{ fontSize: 'clamp(14px, 1.2vw, 18px)', lineHeight: 1.7 }}>
            A glimpse of our creative work across printing, gifting, and video editing
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="bg-white border-b border-deep-purple/5">
        <div className="content-max-width px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === cat
                    ? 'gradient-primary text-white'
                    : 'bg-light-pink text-deep-purple hover:bg-lavender'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Masonry Grid */}
      <section className="bg-white section-padding">
        <div className="content-max-width">
          <div ref={gridRef} className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredItems.map((item, i) => (
              <div
                key={`${activeCategory}-${i}`}
                className="portfolio-item group relative overflow-hidden rounded-xl break-inside-avoid"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    i % 3 === 0 ? 'aspect-[4/3]' : i % 3 === 1 ? 'aspect-[3/4]' : 'aspect-[4/3]'
                  }`}
                />
                <div className="absolute inset-0 bg-[rgba(107,33,168,0.85)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                  <span className="text-gold text-xs font-semibold uppercase tracking-wider">{item.category}</span>
                  <h3 className="font-display text-white font-semibold text-xl mt-2">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
