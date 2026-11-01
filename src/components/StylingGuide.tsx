import React, { useState } from 'react';
import { STYLING_GUIDE_DATA } from '../data/mockData';
import { StylingLook } from '../types';
import { Sparkles, ArrowRight, X, CheckCircle2 } from 'lucide-react';

interface StylingGuideProps {
  onShopLookProduct: (productName: string) => void;
}

export const StylingGuide: React.FC<StylingGuideProps> = ({ onShopLookProduct }) => {
  const [activeModalLook, setActiveModalLook] = useState<StylingLook | null>(null);

  return (
    <section id="styling-guide" className="py-20 sm:py-24 bg-[#F4ECE4] border-b border-[#E5D7CB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-2 text-[#9E4733] text-xs font-medium uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Atelier Lookbook</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#221B17] tracking-tight">
            Styling Guide
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#6B5A50] font-light leading-relaxed">
            From everyday elegance to celebration looks, we've got you styled. 
            Curated combinations honoring Pakistan's sartorial traditions for modern occasions.
          </p>
        </div>

        {/* Four Visual Editorial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STYLING_GUIDE_DATA.map((look) => (
            <div
              key={look.id}
              onClick={() => setActiveModalLook(look)}
              className="group cursor-pointer rounded-lg overflow-hidden bg-[#FAF7F2] border border-[#E5D7CB] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Editorial Fashion Photography */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#EDE4DC]">
                <img
                  src={look.image}
                  alt={look.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Subtle scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#221B17]/75 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 inset-x-4 text-[#FAF7F2]">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#F3C99F] font-semibold block mb-1">
                    Occasion Look
                  </span>
                  <h3 className="font-serif text-xl font-medium leading-tight">
                    {look.title}
                  </h3>
                </div>
              </div>

              {/* Card Footer Information */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-xs text-[#6B5A50] line-clamp-2 font-light leading-relaxed">
                  {look.tagline}
                </p>

                <div className="pt-2 border-t border-[#EDE4DC] flex items-center justify-between text-xs font-semibold text-[#9E4733] uppercase tracking-wider group-hover:text-[#863826]">
                  <span>View Style Edit</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Styling Guide Modal */}
      {activeModalLook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#FAF7F2] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E8DFD8] relative animate-in fade-in zoom-in-95 duration-200">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalLook(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#2C2420]/70 hover:bg-[#2C2420] text-[#FAF7F2] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Header */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#2C2420]">
              <img
                src={activeModalLook.image}
                alt={activeModalLook.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1714] via-black/40 to-transparent flex items-end p-6">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#F3C99F] font-semibold">
                    Atelier Styling Note
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF7F2] mt-1">
                    {activeModalLook.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#9E4733] font-semibold mb-2">
                  Occasion & Aesthetic
                </h4>
                <p className="text-sm text-[#4A3E37] font-normal leading-relaxed">
                  {activeModalLook.description}
                </p>
                <div className="mt-2 text-xs text-[#7A6B62] italic">
                  Ideal for: {activeModalLook.occasion}
                </div>
              </div>

              {/* Styling Tips */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#9E4733] font-semibold mb-3">
                  How to Style This Look
                </h4>
                <ul className="space-y-2.5">
                  {activeModalLook.stylingTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5C4D44]">
                      <CheckCircle2 className="w-4 h-4 text-[#10342F] shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Items in this edit */}
              <div className="pt-4 border-t border-[#EDE4DC]">
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#2C2420] font-semibold mb-3">
                  Recommended Pieces in this Edit:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalLook.recommendedProducts.map((prodName, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveModalLook(null);
                        onShopLookProduct(prodName);
                      }}
                      className="inline-flex items-center gap-1.5 bg-[#FAF7F2] border border-[#B35438]/50 hover:bg-[#9E4733] hover:text-white text-[#9E4733] px-3 py-1.5 rounded text-xs font-medium transition-colors cursor-pointer"
                    >
                      <span>Shop {prodName}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
