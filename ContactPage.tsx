import { Clock, MapPin, Phone, MessageCircle, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      {/* Contact Hero */}
      <section className="gradient-primary" style={{ padding: '120px clamp(16px, 4vw, 64px) 64px' }}>
        <div className="content-max-width">
          <h1 className="font-display text-white font-bold" style={{ fontSize: 'clamp(36px, 7vw, 80px)' }}>
            Get in Touch
          </h1>
          <p className="text-white/85 font-body mt-4 max-w-2xl" style={{ fontSize: 'clamp(14px, 1.2vw, 18px)', lineHeight: 1.7 }}>
            Visit our store or reach out to us anytime
          </p>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="bg-white section-padding">
        <div className="content-max-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Details */}
            <div className="bg-light-pink rounded-3xl p-8 lg:p-10">
              {/* Store Hours */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                  <Clock size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display text-deep-purple font-semibold text-xl">Store Timings</h3>
                  <p className="text-dark-text font-semibold mt-1">Open Daily: 7:30 AM – 9:00 PM</p>
                  <p className="text-dark-text/60 text-sm mt-1">We&apos;re open early for your convenience</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                  <MapPin size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display text-deep-purple font-semibold text-xl">Our Location</h3>
                  <p className="text-dark-text mt-1">
                    Keerthi Layout, Terracon Doctors Enclave,<br />
                    Chandapura, Karnataka 560099
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                  <Phone size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display text-deep-purple font-semibold text-xl">Call Us</h3>
                  <a href="tel:9535933173" className="text-dark-text font-semibold mt-1 hover:text-hot-pink transition-colors block">
                    9535933173
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-whatsapp flex items-center justify-center shrink-0">
                  <MessageCircle size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display text-deep-purple font-semibold text-xl">WhatsApp</h3>
                  <a
                    href="https://wa.me/919535933173"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-text font-semibold mt-1 hover:text-whatsapp transition-colors block"
                  >
                    +91 95359 33173
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                  <Mail size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display text-deep-purple font-semibold text-xl">Email</h3>
                  <a href="mailto:rainbowfancyprints@gmail.com" className="text-dark-text mt-1 hover:text-hot-pink transition-colors block">
                    rainbowfancyprints@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-3xl overflow-hidden h-[400px] lg:h-auto shadow-[0_8px_40px_rgba(107,33,168,0.15)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.5!2d77.7014!3d12.8018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6e53f50b1e4b%3A0x8e0b9e8e8e8e8e8e!2sChandapura%2C%20Bengaluru%2C%20Karnataka%20560099!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rainbow Fancy & Prints Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="gradient-warm" style={{ padding: '64px clamp(16px, 4vw, 64px)' }}>
        <div className="content-max-width text-center">
          <h2 className="font-display text-white font-bold mb-3" style={{ fontSize: 'clamp(28px, 5vw, 44px)' }}>
            We&apos;d Love to See You!
          </h2>
          <p className="text-white/90 font-body" style={{ fontSize: 'clamp(14px, 1.1vw, 18px)' }}>
            Early birds welcome — we&apos;re open from 7:30 AM
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="https://maps.google.com/?q=Keerthi+Layout+Chandapura+Bangalore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-deep-purple font-semibold px-8 py-3.5 rounded-full hover:bg-cream transition-all"
            >
              <MapPin size={18} />
              Get Directions
            </a>
            <a
              href="tel:9535933173"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/15 transition-all"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
