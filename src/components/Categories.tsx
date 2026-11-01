import React from 'react';
import { CATEGORIES_DATA } from '../data/mockData';
import { Product } from '../types';
import { ArrowRight } from 'lucide-react';

interface CategoriesProps {
  onSelectCategory: (categorySlug: Product['categorySlug']) => void;
  selectedCategorySlug?: string;
}

export const Categories: React.FC<CategoriesProps> = ({
  onSelectCategory,
  selectedCategorySlug
}) => {
  return (
    <section id="categories" className="py-16 sm:py-20 bg-[#FDFBF7] border-b border-[#EDE4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-px bg-[#B35438]/50"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#9E4733] font-medium">
              Curated Wardrobe
            </span>
            <span className="w-8 h-px bg-[#B35438]/50"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#221B17] tracking-tight">
            Explore Our Categories
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-[#6E5D53] font-light">
            From hand-embellished lawn suites to gossamer jamdani dupattas and antique zardozi accessories, 
            discover time-honored Pakistani craft silhouettes.
          </p>
        </div>

        {/* 6 Circular Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {CATEGORIES_DATA.map((cat) => {
            const isSelected = selectedCategorySlug === cat.slug;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.slug)}
                className="group flex flex-col items-center text-center cursor-pointer focus-visible:outline-none"
              >
                {/* Circular Image Container with Ornamental Rings */}
                <div className="relative mb-4">
                  {/* Subtle outer decorative ring */}
                  <div 
                    className={`absolute -inset-1.5 rounded-full transition-all duration-300 ${
                      isSelected
                        ? 'border-2 border-[#9E4733] scale-105'
                        : 'border border-transparent group-hover:border-[#9E4733]/50 group-hover:scale-105'
                    }`} 
                  />
                  
                  {/* Circular Image Wrapper */}
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden bg-[#EDE4DC] shadow-md border-2 border-[#FAF7F2] transition-transform duration-500 group-hover:scale-100">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-115"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#10342F]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="w-7 h-7 rounded-full bg-[#FAF7F2] text-[#9E4733] flex items-center justify-center shadow-sm">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Caption Title */}
                <h3 className={`text-sm sm:text-base font-medium tracking-wide transition-colors ${
                  isSelected ? 'text-[#9E4733] font-semibold' : 'text-[#2C2420] group-hover:text-[#9E4733]'
                }`}>
                  {cat.title}
                </h3>

                {/* Subtitle / Item Count */}
                <span className="text-[12px] text-[#7A6B62] mt-0.5 font-light">
                  {cat.itemCount} Designs
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
