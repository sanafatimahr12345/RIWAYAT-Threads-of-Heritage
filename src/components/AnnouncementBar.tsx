import React from 'react';
import { Currency } from '../types';
import { Globe, Truck, Sparkles } from 'lucide-react';

interface AnnouncementBarProps {
  currentCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
  onTrackOrderClick: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  currentCurrency,
  onCurrencyChange,
  onTrackOrderClick
}) => {
  return (
    <div className="bg-[#9E4733] text-[#FAF7F2] text-xs font-medium tracking-wider uppercase py-2 px-4 border-b border-[#8A3A26]/50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left message */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <Sparkles className="w-3.5 h-3.5 text-[#F3C99F] shrink-0" />
          <span className="font-serif italic capitalize tracking-normal text-sm font-normal text-[#FBF6F0]">
            Celebrating Heritage. Empowering Artisans.
          </span>
          <span className="hidden md:inline text-[#E8BFA8]">·</span>
          <span className="hidden md:inline text-[11px] tracking-widest text-[#FBF6F0]/90">
            Handcrafted with Pride across Pakistan
          </span>
        </div>

        {/* Center message: Free Shipping */}
        <div className="flex items-center gap-1.5 text-[11px] tracking-wider text-[#FAF7F2]">
          <Truck className="w-3.5 h-3.5 text-[#F3C99F] shrink-0" />
          <span>Complimentary Nationwide Express Shipping on Orders Above PKR 15,000</span>
        </div>

        {/* Right tools */}
        <div className="flex items-center gap-4 text-[11px]">
          <button 
            onClick={onTrackOrderClick}
            className="hover:text-[#F3C99F] transition-colors cursor-pointer underline underline-offset-2"
          >
            Track Order
          </button>
          
          <div className="flex items-center gap-1 bg-[#863826] px-2 py-0.5 rounded border border-[#B35438]/40">
            <Globe className="w-3 h-3 text-[#F3C99F]" />
            <select
              value={currentCurrency}
              onChange={(e) => onCurrencyChange(e.target.value as Currency)}
              className="bg-transparent text-[#FAF7F2] text-xs font-semibold focus:outline-none cursor-pointer pr-1"
              aria-label="Select currency"
            >
              <option value="PKR" className="text-stone-900">PKR (Rs)</option>
              <option value="USD" className="text-stone-900">USD ($)</option>
              <option value="GBP" className="text-stone-900">GBP (£)</option>
              <option value="AED" className="text-stone-900">AED (Dirham)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
