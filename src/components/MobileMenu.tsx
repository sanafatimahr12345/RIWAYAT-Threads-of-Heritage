import React from 'react';
import { CATEGORIES_DATA } from '../data/mockData';
import { Product } from '../types';
import { X, Sparkles, ChevronRight, Phone, Mail, Instagram, Facebook } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (categorySlug: Product['categorySlug']) => void;
  onNavigateSection: (sectionId: string) => void;
  onOpenArtisans: () => void;
  onOpenFabrics: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onSelectCategory,
  onNavigateSection,
  onOpenArtisans,
  onOpenFabrics
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity" 
      />

      <div className="fixed inset-y-0 left-0 max-w-full flex pr-10">
        <div className="w-screen max-w-sm bg-[#FAF7F2] text-[#2C2420] shadow-2xl flex flex-col border-r border-[#EDE4DC] animate-in slide-in-from-left duration-300">
          
          {/* Header */}
          <div className="p-5 border-b border-[#EDE4DC] flex items-center justify-between bg-[#FDFBF7]">
            <div>
              <span className="font-serif text-xl font-bold tracking-[0.2em] text-[#2C2420] uppercase">
                RIWAYAT
              </span>
              <span className="text-[9px] tracking-[0.3em] font-sans text-[#7C6A5F] block uppercase">
                Threads of Heritage
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#705F55] hover:text-[#221B17] transition-colors rounded-full hover:bg-[#EDE4DC]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            
            {/* Primary Sections */}
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E4733] font-bold block mb-2">
                Navigation
              </span>
              <button
                onClick={() => {
                  onClose();
                  onNavigateSection('curated-products');
                }}
                className="w-full text-left py-2 text-sm font-medium text-[#2C2420] hover:text-[#9E4733] flex items-center justify-between border-b border-[#EDE4DC]/60 cursor-pointer"
              >
                <span>Curated Collection</span>
                <ChevronRight className="w-4 h-4 text-[#8C7A70]" />
              </button>
              <button
                onClick={() => {
                  onClose();
                  onNavigateSection('styling-guide');
                }}
                className="w-full text-left py-2 text-sm font-medium text-[#2C2420] hover:text-[#9E4733] flex items-center justify-between border-b border-[#EDE4DC]/60 cursor-pointer"
              >
                <span>Styling Guide & Lookbook</span>
                <ChevronRight className="w-4 h-4 text-[#8C7A70]" />
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenArtisans();
                }}
                className="w-full text-left py-2 text-sm font-medium text-[#2C2420] hover:text-[#9E4733] flex items-center justify-between border-b border-[#EDE4DC]/60 cursor-pointer"
              >
                <span>Stories in Every Stitch (Artisans)</span>
                <ChevronRight className="w-4 h-4 text-[#8C7A70]" />
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenFabrics();
                }}
                className="w-full text-left py-2 text-sm font-medium text-[#2C2420] hover:text-[#9E4733] flex items-center justify-between border-b border-[#EDE4DC]/60 cursor-pointer"
              >
                <span>Fabric Focus Archive</span>
                <ChevronRight className="w-4 h-4 text-[#8C7A70]" />
              </button>
            </div>

            {/* Categories */}
            <div className="space-y-2 pt-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E4733] font-bold block mb-2">
                Browse Silhouettes
              </span>
              {CATEGORIES_DATA.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    onClose();
                    onSelectCategory(cat.slug);
                  }}
                  className="w-full text-left py-2 text-xs font-medium text-[#5C4D44] hover:text-[#9E4733] flex items-center justify-between cursor-pointer"
                >
                  <span>{cat.title}</span>
                  <span className="text-[10px] text-[#8C7A70]">{cat.itemCount}</span>
                </button>
              ))}
            </div>

            {/* Special Highlight */}
            <div className="p-4 rounded-lg bg-[#F4ECE4] border border-[#E5D7CB] space-y-2">
              <div className="flex items-center gap-1.5 text-xs text-[#9E4733] font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Summer Heritage '24</span>
              </div>
              <p className="text-xs text-[#5C4D44] font-light leading-snug">
                Pure cotton lawn and hand-stamped block prints crafted for radiant weather.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onNavigateSection('promotions');
                }}
                className="text-xs font-semibold text-[#9E4733] underline hover:text-[#863826] cursor-pointer"
              >
                Explore Launch
              </button>
            </div>

          </div>

          {/* Footer Contact */}
          <div className="p-5 border-t border-[#EDE4DC] bg-[#FDFBF7] space-y-2 text-xs text-[#705F55]">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#9E4733]" />
              <span>Concierge: +92 300 8472910</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#9E4733]" />
              <span>care@riwayatheritage.pk</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
