import React, { useState } from 'react';
import { SUMMER_CAMPAIGN_IMAGE, FABRIC_FOCUS_IMAGE, FABRICS_LIST } from '../data/mockData';
import { ArrowUpRight, Sparkles, Feather, Layers, Shield, Droplets } from 'lucide-react';

interface PromotionalBannersProps {
  onShopLaunchClick: () => void;
  onOpenFabricGuide: (fabricId?: string) => void;
}

export const PromotionalBanners: React.FC<PromotionalBannersProps> = ({
  onShopLaunchClick,
  onOpenFabricGuide
}) => {
  const [selectedFabricIndex, setSelectedFabricIndex] = useState(0);
  const currentFabric = FABRICS_LIST[selectedFabricIndex] || FABRICS_LIST[0];

  const fabricIcons = [
    <Droplets className="w-4 h-4 text-[#9E4733]" />,
    <Sparkles className="w-4 h-4 text-[#D4A373]" />,
    <Feather className="w-4 h-4 text-[#10342F]" />,
    <Layers className="w-4 h-4 text-[#7C6A5F]" />
  ];

  return (
    <section id="promotions" className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#EDE4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two side-by-side promotional banners */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Banner One: Summer Launch */}
          <div className="group relative rounded-xl overflow-hidden bg-[#2C2420] min-h-[460px] sm:min-h-[500px] flex flex-col justify-end p-6 sm:p-10 shadow-lg border border-[#EDE4DC]">
            
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={SUMMER_CAMPAIGN_IMAGE}
                alt="Pakistani model in light pastel summer embroidered lawn suit in traditional brick courtyard"
                className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              {/* Refined gradient scrim for readable typography */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1714]/90 via-[#1F1714]/40 to-transparent" />
            </div>

            {/* Banner One Content */}
            <div className="relative z-10 max-w-lg space-y-3 sm:space-y-4 text-[#FAF7F2]">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#F3C99F] uppercase">
                <span className="w-6 h-px bg-[#F3C99F]"></span>
                <span>Editorial Launch</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#FAF7F2]">
                New Collection – <br />
                <span className="italic font-light text-[#F3C99F]">SUMMER HERITAGE '24</span>
              </h3>

              <p className="text-sm sm:text-base text-[#E5D8CF] font-light leading-relaxed max-w-md">
                Light fabrics, timeless craft, modern silhouettes. Designed for soaring summer 
                afternoons and breezy cultural festivities.
              </p>

              <div className="pt-2">
                <button
                  onClick={onShopLaunchClick}
                  className="inline-flex items-center gap-3 bg-[#9E4733] hover:bg-[#863826] text-[#FAF7F2] px-6 py-3 rounded text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-md cursor-pointer group-hover:shadow-lg"
                >
                  <span>Shop the Launch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Banner Two: Fabric Focus */}
          <div className="group relative rounded-xl overflow-hidden bg-[#241F1C] min-h-[460px] sm:min-h-[500px] flex flex-col justify-between p-6 sm:p-10 shadow-lg border border-[#EDE4DC]">
            
            {/* Background Image: Luxurious Fabric Macro */}
            <div className="absolute inset-0">
              <img
                src={FABRIC_FOCUS_IMAGE}
                alt="Close-up macro of handcrafted Pakistani fabrics, raw silk, lawn, and gold zardozi threadwork"
                className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614]/95 via-[#1A1614]/60 to-[#1A1614]/40" />
            </div>

            {/* Banner Top Content */}
            <div className="relative z-10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#D4A373] uppercase">
                <span className="w-6 h-px bg-[#D4A373]"></span>
                <span>Tactile Mastery</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#FAF7F2]">
                Fabric Focus
              </h3>

              <p className="text-xs sm:text-sm text-[#D8CCC2] font-light max-w-md leading-relaxed">
                Premium fabrics, handpicked for comfort and elegance. Each weave is selected directly from regional master looms.
              </p>
            </div>

            {/* Banner Bottom: Interactive Fabric Tabs & Specs */}
            <div className="relative z-10 space-y-4 mt-6 pt-4 border-t border-[#FAF7F2]/20">
              
              {/* Fabric Buttons (Cotton, Silk, Khaddi, Organza) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {FABRICS_LIST.map((fabric, idx) => {
                  const isActive = idx === selectedFabricIndex;
                  return (
                    <button
                      key={fabric.id}
                      onClick={() => setSelectedFabricIndex(idx)}
                      className={`flex items-center gap-1.5 p-2 rounded text-left transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#FAF7F2] text-[#2C2420] shadow-sm font-semibold'
                          : 'bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/20 text-[#FAF7F2] font-medium'
                      }`}
                    >
                      <div className="shrink-0">{fabricIcons[idx % fabricIcons.length]}</div>
                      <span className="text-[11px] truncate tracking-wider uppercase">
                        {fabric.name.split(' ')[0]}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Fabric Snippet */}
              <div className="bg-[#10342F]/80 backdrop-blur-md p-3.5 rounded border border-[#FAF7F2]/20 text-[#FAF7F2]">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-semibold text-[#F3C99F]">{currentFabric.name}</span>
                  <span className="text-[11px] text-[#D8CCC2] font-light">{currentFabric.origin}</span>
                </div>
                <p className="text-xs text-[#FAF7F2]/90 line-clamp-2 font-light">
                  {currentFabric.description}
                </p>
              </div>

              {/* Action Button to Open Full Fabric Guide */}
              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={() => onOpenFabricGuide(currentFabric.id)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#F3C99F] hover:text-[#FAF7F2] transition-colors uppercase tracking-[0.18em] cursor-pointer"
                >
                  <span>Explore Textile Origins</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] text-[#A8988D]">
                  Zero Synthetic Fibers
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
