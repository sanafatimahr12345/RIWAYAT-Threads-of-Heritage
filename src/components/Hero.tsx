import React from 'react';
import { HERO_IMAGE } from '../data/mockData';
import { ArrowUpRight, Sparkles, Compass, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onArtisanClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onArtisanClick }) => {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] border-b border-[#E8DFD8]">
      {/* Subtle Mughal background texture pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#9E4733 1px, transparent 1px), radial-gradient(#10342F 1px, #FAF7F2 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-8 z-10">
            
            {/* Kicker */}
            <div className="flex items-center gap-2.5 text-xs font-medium tracking-[0.25em] text-[#9E4733] uppercase">
              <span className="w-8 h-px bg-[#9E4733]/60"></span>
              <span>Couture & Pret · Spring / Summer '24</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#221B17] leading-[1.12] text-balance">
              Woven by Tradition.{' '}
              <span className="italic font-normal block sm:inline text-[#9E4733]">
                Styled for Today.
              </span>
            </h1>

            {/* Supporting Prose */}
            <p className="text-base sm:text-lg text-[#5C4D44] font-light leading-relaxed max-w-xl">
              Immerse yourself in authentic Pakistani high-fashion where centuries of royal court 
              embroidery, gossamer lawn, and hand-reeled raw silk meet contemporary, effortless silhouettes. 
              Each bespoke garment is meticulously hand-stitched by master artisans across Pakistan.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="group inline-flex items-center gap-3 bg-[#9E4733] hover:bg-[#863826] text-[#FAF7F2] px-7 py-3.5 rounded text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-sm hover:shadow hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Collections</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={onArtisanClick}
                className="inline-flex items-center gap-2 border border-[#B3A295] hover:border-[#10342F] text-[#3D332D] hover:text-[#10342F] px-6 py-3.5 rounded text-xs font-semibold tracking-[0.2em] uppercase transition-colors cursor-pointer"
              >
                <span>Our Heritage Guild</span>
              </button>
            </div>

            {/* Three Feature Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 sm:pt-8 border-t border-[#E8DFD8]">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#9E4733]">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#2C2420]">
                    Artisan Made
                  </span>
                </div>
                <p className="text-[12px] text-[#705F55] leading-snug">
                  4th generation master needleworkers
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#10342F]">
                  <Compass className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#2C2420]">
                    Heritage Inspired
                  </span>
                </div>
                <p className="text-[12px] text-[#705F55] leading-snug">
                  Lahore & Mughal architectural motifs
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#865427]">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#2C2420]">
                    Conscious Fashion
                  </span>
                </div>
                <p className="text-[12px] text-[#705F55] leading-snug">
                  Pure natural fibers & fair-trade wages
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Photograph in Mughal Setting */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative architectural frame border */}
              <div className="absolute -inset-2.5 sm:-inset-4 rounded-xl border border-[#D9C4B3]/60 pointer-events-none" />
              <div className="absolute -inset-1 sm:-inset-2 rounded-lg border border-[#9E4733]/20 pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-xl bg-[#EDE4DC]">
                <img
                  src={HERO_IMAGE}
                  alt="Pakistani female model in luxury embroidered traditional raw silk kameez with colorful dupatta in Mughal architectural courtyard"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#221B17]/80 via-[#221B17]/30 to-transparent pointer-events-none" />

                {/* Floating Editorial Label */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.25em] text-[#F3C99F] font-medium">
                        Spring / Summer '24 Signature Look
                      </p>
                      <p className="font-serif text-lg sm:text-xl font-normal text-[#FAF7F2]">
                        Teal & Antique Zari Silk Peshwas
                      </p>
                    </div>
                    <div className="text-right hidden sm:block">
                      <span className="text-xs font-light text-stone-200">
                        Lahore Old City Atelier
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Subtle architectural arched badge */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-5 bg-[#FAF7F2] border border-[#E8DFD8] p-3 sm:p-4 rounded-lg shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#10342F] text-[#F3C99F] flex items-center justify-center font-serif text-xl font-bold">
                  R
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#9E4733] font-semibold">
                    100% Authentic
                  </div>
                  <div className="text-xs text-[#4A3E37] font-medium">
                    Hand-loomed in Pakistan
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
