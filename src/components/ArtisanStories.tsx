import React, { useState } from 'react';
import { ARTISANS_DATA } from '../data/mockData';
import { ChevronLeft, ChevronRight, Award, MapPin, Sparkles, ArrowRight } from 'lucide-react';

interface ArtisanStoriesProps {
  onMeetArtisans: (artisanId?: string) => void;
}

export const ArtisanStories: React.FC<ArtisanStoriesProps> = ({ onMeetArtisans }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? ARTISANS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === ARTISANS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="artisan-stories" className="py-20 sm:py-24 bg-[#10342F] text-[#FAF7F2] relative overflow-hidden">
      
      {/* Decorative Mughal Paisley / Arch background vector overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#F3C99F 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header row with heading, description, and navigation arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16 border-b border-[#FAF7F2]/15 pb-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2 text-[#F3C99F] text-xs font-medium uppercase tracking-[0.25em]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Living Heritage Guild</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FAF7F2] tracking-tight">
              Stories in Every Stitch
            </h2>
            
            <p className="mt-3 text-sm sm:text-base text-[#D4C3B7] font-light leading-relaxed">
              Every curve of zardozi wire and every hand-stamped block print carries generations of devotion. 
              We partner directly with master artisans across Pakistan, ensuring ethical living wages, 
              healthcare support, and the survival of endangered indigenous craft traditions.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => onMeetArtisans()}
              className="inline-flex items-center gap-2 bg-[#9E4733] hover:bg-[#B35438] text-[#FAF7F2] px-5 py-2.5 rounded text-xs font-semibold tracking-[0.18em] uppercase transition-colors shadow-sm cursor-pointer"
            >
              <span>Meet the Artisans</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Subtle Carousel Navigation Arrows */}
            <div className="flex items-center gap-1.5 ml-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-[#FAF7F2]/30 hover:border-[#F3C99F] hover:bg-[#FAF7F2]/10 flex items-center justify-center transition-colors text-[#FAF7F2] cursor-pointer"
                aria-label="Previous artisan profile"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-[#FAF7F2]/30 hover:border-[#F3C99F] hover:bg-[#FAF7F2]/10 flex items-center justify-center transition-colors text-[#FAF7F2] cursor-pointer"
                aria-label="Next artisan profile"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Artisan Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTISANS_DATA.map((artisan, index) => {
            const isHighlight = index === currentIndex;
            return (
              <div
                key={artisan.id}
                onClick={() => onMeetArtisans(artisan.id)}
                className={`group cursor-pointer rounded-lg overflow-hidden bg-[#16423C] border transition-all duration-300 flex flex-col ${
                  isHighlight 
                    ? 'border-[#F3C99F]/70 shadow-xl ring-1 ring-[#F3C99F]/40' 
                    : 'border-[#FAF7F2]/15 hover:border-[#F3C99F]/50 shadow-md'
                }`}
              >
                {/* Authentic Photography */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0C2421]">
                  <img
                    src={artisan.image}
                    alt={`${artisan.name} practicing ${artisan.craftSpecialty}`}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Location badge overlay */}
                  <div className="absolute bottom-3 left-3 bg-[#10342F]/90 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-medium text-[#F3C99F] flex items-center gap-1.5 border border-[#FAF7F2]/20">
                    <MapPin className="w-3 h-3" />
                    <span>{artisan.location}</span>
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute top-3 right-3 bg-[#9E4733] text-[#FAF7F2] px-2.5 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase">
                    {artisan.experienceYears}+ Yrs Mastery
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Specialty */}
                    <div className="flex items-center gap-1.5 text-xs text-[#F3C99F] font-medium tracking-wider uppercase mb-1">
                      <Award className="w-3.5 h-3.5" />
                      <span>{artisan.craftSpecialty}</span>
                    </div>

                    {/* Name */}
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#FAF7F2] group-hover:text-[#F3C99F] transition-colors">
                      {artisan.name}
                    </h3>

                    {/* Bio excerpt */}
                    <p className="mt-2 text-xs sm:text-sm text-[#D4C3B7] line-clamp-3 font-light leading-relaxed">
                      {artisan.bio}
                    </p>
                  </div>

                  {/* Quote & CTA */}
                  <div className="pt-4 border-t border-[#FAF7F2]/10">
                    <p className="font-serif italic text-xs text-[#E8DACF]/90 leading-relaxed">
                      "{artisan.quote}"
                    </p>
                    
                    <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#F3C99F] group-hover:text-[#FAF7F2] transition-colors uppercase tracking-wider">
                      <span>Read Artisan's Story</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
