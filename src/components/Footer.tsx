import React, { useState } from 'react';
import { ArrowRight, Check, Instagram, Facebook, Youtube, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenPolicyModal?: (type: 'privacy' | 'terms' | 'shipping') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onOpenPolicyModal }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    setErrorMsg('');
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#853624] text-[#FAF7F2] pt-16 pb-12 border-t border-[#702C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Brand Statement & Newsletter Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-[#FAF7F2]/15">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-semibold tracking-[0.22em] uppercase text-[#FAF7F2]">
                RIWAYAT
              </span>
              <span className="text-[10px] tracking-[0.35em] uppercase font-sans text-[#F3C99F] mt-0.5">
                Threads of Heritage
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#F0E4DC] font-light max-w-md leading-relaxed">
              Celebrating centuries of royal Mughal needlework, handloom textiles, and artisanal mastery. 
              Each bespoke ensemble is a tribute to Pakistan’s rich cultural legacy, styled with modern ease.
            </p>

            <div className="flex items-center gap-4 text-[#F3C99F] pt-2">
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-[#FAF7F2]/20 hover:border-[#F3C99F] hover:bg-[#FAF7F2]/10 flex items-center justify-center transition-colors text-[#FAF7F2] hover:text-[#F3C99F]"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-[#FAF7F2]/20 hover:border-[#F3C99F] hover:bg-[#FAF7F2]/10 flex items-center justify-center transition-colors text-[#FAF7F2] hover:text-[#F3C99F]"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full border border-[#FAF7F2]/20 hover:border-[#F3C99F] hover:bg-[#FAF7F2]/10 flex items-center justify-center transition-colors text-[#FAF7F2] hover:text-[#F3C99F]"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#pinterest"
                aria-label="Pinterest"
                className="w-8 h-8 rounded-full border border-[#FAF7F2]/20 hover:border-[#F3C99F] hover:bg-[#FAF7F2]/10 flex items-center justify-center transition-colors text-[#FAF7F2] hover:text-[#F3C99F] text-xs font-serif font-bold"
              >
                P
              </a>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4 lg:pl-8">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-[#F3C99F] font-semibold uppercase tracking-[0.2em] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Heritage Gazette</span>
              </div>
              <h3 className="font-serif text-2xl font-normal text-[#FAF7F2]">
                Join the Riwayat Inner Circle
              </h3>
              <p className="text-xs text-[#E8DACF] font-light mt-1">
                Receive private invitations to limited artisan drops, private trunk shows, and get 10% off your first heirloom order.
              </p>
            </div>

            {subscribed ? (
              <div className="p-3.5 bg-[#FAF7F2]/10 border border-[#F3C99F]/40 rounded-lg flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-[#10342F] text-[#F3C99F] flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#FAF7F2]">
                    Welcome to Riwayat!
                  </div>
                  <div className="text-[11px] text-[#F3C99F]">
                    Use exclusive promo code <span className="font-mono font-bold bg-[#FAF7F2]/20 px-1 py-0.5 rounded">HERITAGE10</span> at checkout for 10% off.
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-2 max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 bg-[#FAF7F2] text-[#2C2420] text-xs px-4 py-3 rounded placeholder:text-[#8C7A70] focus:outline-none focus:ring-2 focus:ring-[#F3C99F]"
                  />
                  <button
                    type="submit"
                    className="bg-[#10342F] hover:bg-[#16423C] text-[#FAF7F2] px-6 py-3 rounded text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shrink-0"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                {errorMsg && (
                  <p className="text-[11px] text-[#F3C99F] font-medium">{errorMsg}</p>
                )}
              </form>
            )}
          </div>

        </div>

        {/* Four Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-[#FAF7F2]/15 text-xs">
          
          {/* Column 1: Shop */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-[#F3C99F]">
              Shop
            </h4>
            <ul className="space-y-2 text-[#E8DACF] font-light">
              <li>
                <button 
                  onClick={() => onNavigateSection('curated-products')} 
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  New Arrivals '24
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateSection('categories')} 
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  Embroidered Lawn Suits
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateSection('categories')} 
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  Heritage Block Print Anarkalis
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateSection('categories')} 
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  Handwoven Jamdani Dupattas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateSection('categories')} 
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  Zardozi Potlis & Clutches
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Help */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-[#F3C99F]">
              Help
            </h4>
            <ul className="space-y-2 text-[#E8DACF] font-light">
              <li>
                <button 
                  onClick={() => onOpenPolicyModal?.('shipping')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  Track Order & Dispatch
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenPolicyModal?.('shipping')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  Shipping & Courier Timelines
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenPolicyModal?.('terms')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  14-Day Returns & Exchanges
                </button>
              </li>
              <li>
                <span className="hover:text-[#FAF7F2] transition-colors">
                  Custom Sizing & Bespoke Cuts
                </span>
              </li>
              <li>
                <span className="hover:text-[#FAF7F2] transition-colors">
                  Frequently Asked Questions
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: About */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-[#F3C99F]">
              About
            </h4>
            <ul className="space-y-2 text-[#E8DACF] font-light">
              <li>
                <button 
                  onClick={() => onNavigateSection('artisan-stories')} 
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  Our Story & Heritage
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateSection('artisan-stories')} 
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  Master Artisan Guild
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateSection('promotions')} 
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  Pure Fabric Origins
                </button>
              </li>
              <li>
                <span className="hover:text-[#FAF7F2] transition-colors">
                  Ethical Fair Wages Pledge
                </span>
              </li>
              <li>
                <span className="hover:text-[#FAF7F2] transition-colors">
                  Lahore Atelier & Flagship
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Stay Connected */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-[#F3C99F]">
              Stay Connected
            </h4>
            <div className="space-y-2 text-[#E8DACF] font-light">
              <p>Lahore Atelier: Gulberg III, Lahore, Pakistan</p>
              <p>WhatsApp Concierge: +92 300 8472910</p>
              <p>Email: care@riwayatheritage.pk</p>
              <p className="text-[11px] text-[#F3C99F]">Monday – Saturday: 10:00 AM – 8:00 PM PKT</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Payment partners */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8DACF] font-light">
          <div>
            © {new Date().getFullYear()} RIWAYAT – Threads of Heritage. All rights reserved. Handcrafted in Pakistan.
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <button 
              onClick={() => onOpenPolicyModal?.('privacy')}
              className="hover:text-[#FAF7F2] transition-colors underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button 
              onClick={() => onOpenPolicyModal?.('terms')}
              className="hover:text-[#FAF7F2] transition-colors underline cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span>·</span>
            <span className="text-[#F3C99F]">Cash on Delivery Available</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
