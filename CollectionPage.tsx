import { useState, useEffect, useRef } from 'react';
import { MessageCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Category = 'All' | 'Jewellery' | 'Sarees' | 'Accessories' | 'Gift Items';

const categories: Category[] = ['All', 'Jewellery', 'Sarees', 'Accessories', 'Gift Items'];

const products = [
  { image: '/images/product-jewellery-1.jpg', category: 'Jewellery' as Category, name: 'Elegant Pearl Necklace Set', price: 'Rs. 499' },
  { image: '/images/product-jewellery-2.jpg', category: 'Jewellery' as Category, name: 'Traditional Jhumka Earrings', price: 'Rs. 299' },
  { image: '/images/product-saree-1.jpg', category: 'Sarees' as Category, name: 'Banarasi Silk Saree', price: 'Rs. 1,499' },
  { image: '/images/product-saree-2.jpg', category: 'Sarees' as Category, name: 'Chiffon Printed Saree', price: 'Rs. 899' },
  { image: '/images/product-accessory-1.jpg', category: 'Accessories' as Category, name: 'Crystal Hair Clips Set', price: 'Rs. 199' },
  { image: '/images/product-accessory-2.jpg', category: 'Accessories' as Category, name: 'Fashion Sunglasses', price: 'Rs. 349' },
  { image: '/images/product-gift-1.jpg', category: 'Gift Items' as Category, name: 'Decorative Gift Box', price: 'Rs. 249' },
  { image: '/images/product-gift-2.jpg', category: 'Gift Items' as Category, name: 'LED Photo Frame', price: 'Rs. 599' },
  { image: '/images/product-jewellery-3.jpg', category: 'Jewellery' as Category, name: 'Kundan Maang Tikka', price: 'Rs. 399' },
  { image: '/images/product-saree-3.jpg', category: 'Sarees' as Category, name: 'Cotton Handloom Saree', price: 'Rs. 699' },
  { image: '/images/portfolio-jewellery-display.jpg', category: 'Accessories' as Category, name: 'Trendy Handbags', price: 'Rs. 449' },
  { image: '/images/portfolio-gift-box.jpg', category: 'Gift Items' as Category, name: 'Personalized Keychains (Set of 5)', price: 'Rs. 199' },
];

export default function CollectionPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo('.product-grid-item',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.08, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [activeCategory]);

  return (
    <>
      {/* Collection Hero */}
      <section className="gradient-soft" style={{ padding: '120px clamp(16px, 4vw, 64px) 64px' }}>
        <div className="content-max-width">
          <h1 className="font-display text-deep-purple font-bold" style={{ fontSize: 'clamp(36px, 7vw, 80px)' }}>
            Fancy Collection
          </h1>
          <p className="text-dark-text/70 font-body mt-4" style={{ fontSize: 'clamp(14px, 1.2vw, 18px)', lineHeight: 1.7 }}>
            Artificial jewellery, sarees, accessories, and gift decorations
          </p>
        </div>
      </section>

      {/* Category Filter Bar */}
      <div className="sticky top-[72px] z-40 bg-white shadow-sm border-b border-deep-purple/5">
        <div className="content-max-width px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
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

      {/* Product Grid */}
      <section className="bg-white section-padding">
        <div className="content-max-width">
          <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {filteredProducts.map((p, i) => (
              <div
                key={`${activeCategory}-${i}`}
                className="product-grid-item group bg-white border border-deep-purple/[0.08] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-magenta-pink/0 group-hover:bg-magenta-pink/60 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <span className="text-white font-semibold text-sm">Quick View</span>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-hot-pink text-[10px] font-semibold uppercase tracking-wider">{p.category}</span>
                  <h4 className="font-display text-charcoal font-semibold text-sm mt-1 leading-snug">{p.name}</h4>
                  <p className="text-deep-purple font-bold text-sm mt-1">{p.price}</p>
                  <a
                    href="https://wa.me/919535933173"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full mt-3 bg-whatsapp text-white text-xs font-semibold py-2.5 rounded-lg hover:shadow-[0_4px_16px_rgba(37,211,102,0.35)] transition-all"
                  >
                    <MessageCircle size={14} />
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="gradient-warm" style={{ padding: '64px clamp(16px, 4vw, 64px)' }}>
        <div className="content-max-width text-center">
          <h2 className="font-display text-white font-bold mb-3" style={{ fontSize: 'clamp(24px, 4vw, 40px)' }}>
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-white/90 font-body" style={{ fontSize: 'clamp(14px, 1.1vw, 18px)' }}>
            We can source special items just for you. Chat with us on WhatsApp!
          </p>
          <a
            href="https://wa.me/919535933173"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-white text-deep-purple font-semibold px-10 py-4 rounded-full hover:bg-cream transition-all"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
