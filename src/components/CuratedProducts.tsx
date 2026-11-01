import React, { useState } from 'react';
import { Product, Currency } from '../types';
import { PRODUCTS_DATA, formatPrice } from '../data/mockData';
import { Heart, Star, Eye, ShoppingBag, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface CuratedProductsProps {
  currentCurrency: Currency;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size?: string) => void;
  selectedCategorySlug?: string;
  onSelectCategoryFilter: (categorySlug: string) => void;
}

export const CuratedProducts: React.FC<CuratedProductsProps> = ({
  currentCurrency,
  wishlistIds,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
  selectedCategorySlug,
  onSelectCategoryFilter
}) => {
  const [activeTab, setActiveTab] = useState<string>(selectedCategorySlug || 'all');
  const [activeSlide, setActiveSlide] = useState(0);

  // Sync tab with external category selection if passed
  React.useEffect(() => {
    if (selectedCategorySlug) {
      setActiveTab(selectedCategorySlug);
    }
  }, [selectedCategorySlug]);

  const categoriesFilterList = [
    { label: 'All Curations', value: 'all' },
    { label: 'Embroidered Sets', value: 'embroidered-sets' },
    { label: 'Heritage Dresses', value: 'heritage-dresses' },
    { label: 'Scarves & Dupattas', value: 'scarves' },
    { label: 'Artisan Accessories', value: 'artisan-accessories' },
    { label: 'Occasion Wear', value: 'occasion-wear' }
  ];

  const filteredProducts = activeTab === 'all'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter(p => p.categorySlug === activeTab);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    onSelectCategoryFilter(value);
    setActiveSlide(0);
  };

  return (
    <section id="curated-products" className="py-20 sm:py-24 bg-[#FAF7F2] border-b border-[#EDE4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row: Centered Heading with View All link aligned right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          
          <div className="sm:w-1/4 hidden sm:block">
            {/* Empty space for true optical centering */}
            <span className="text-xs uppercase tracking-[0.25em] text-[#9E4733] font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bespoke Heirlooms</span>
            </span>
          </div>

          <div className="text-center flex-1">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#221B17] tracking-tight">
              Curated For You
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#705F55] font-light max-w-md mx-auto">
              Masterfully designed Pakistani ethnic garments tailored with hand-done embellishments.
            </p>
          </div>

          <div className="sm:w-1/4 flex sm:justify-end">
            <button
              onClick={() => handleTabChange('all')}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9E4733] hover:text-[#863826] transition-colors underline underline-offset-4 cursor-pointer"
            >
              View All ({PRODUCTS_DATA.length})
            </button>
          </div>

        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar">
          {categoriesFilterList.map((tab) => {
            const isActive = activeTab === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => handleTabChange(tab.value)}
                className={`px-4 py-2 text-xs font-medium tracking-wider uppercase rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#10342F] text-[#FAF7F2] shadow-sm'
                    : 'bg-[#F2ECE5] text-[#5C4D44] hover:bg-[#E8DFD8] hover:text-[#2C2420]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 5 Premium Product Cards in Horizontal Row on Desktop (or clean grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredProducts.slice(0, 5).map((product) => {
            const isWishlisted = wishlistIds.includes(product.id);
            return (
              <div
                key={product.id}
                className="group flex flex-col justify-between bg-[#FDFBF7] rounded-lg border border-[#EDE4DC] overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Large Product Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#EDE4DC]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* Top Badges & Wishlist */}
                  <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between">
                    {product.badge ? (
                      <span className="bg-[#FAF7F2]/95 backdrop-blur-xs text-[#9E4733] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-xs border border-[#9E4733]/20">
                        {product.badge}
                      </span>
                    ) : <span />}

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(product.id);
                      }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-sm ${
                        isWishlisted
                          ? 'bg-[#9E4733] text-[#FAF7F2]'
                          : 'bg-[#FAF7F2]/90 text-[#3D332D] hover:text-[#9E4733] hover:bg-[#FAF7F2]'
                      }`}
                      aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  {/* Hover Quick Actions */}
                  <div className="absolute inset-x-2.5 bottom-2.5 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button
                      onClick={() => onQuickView(product)}
                      className="flex-1 bg-[#FAF7F2]/95 hover:bg-[#FAF7F2] text-[#2C2420] text-[11px] font-semibold tracking-wider uppercase py-2 px-2 rounded shadow-md flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Quick View</span>
                    </button>
                    <button
                      onClick={() => onAddToCart(product, product.sizes[0])}
                      className="bg-[#9E4733] hover:bg-[#863826] text-[#FAF7F2] p-2 rounded shadow-md flex items-center justify-center transition-colors cursor-pointer"
                      title="Quick Add to Bag"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Product Information */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    {/* Category & Region */}
                    <div className="flex items-center justify-between text-[11px] text-[#7A6B62] uppercase tracking-wider mb-1">
                      <span>{product.category}</span>
                      <span className="font-light truncate max-w-[80px]">{product.sizes.join(' · ')}</span>
                    </div>

                    {/* Product Name */}
                    <h3 
                      onClick={() => onQuickView(product)}
                      className="font-serif text-base font-medium text-[#221B17] line-clamp-1 group-hover:text-[#9E4733] transition-colors cursor-pointer"
                    >
                      {product.name}
                    </h3>

                    {/* Star Rating & Review Count */}
                    <div className="flex items-center gap-1.5 mt-1 text-xs text-[#7A6B62]">
                      <div className="flex items-center text-[#D4A373]">
                        <Star className="w-3 h-3 fill-current" />
                      </div>
                      <span className="font-medium text-[#2C2420] tabular-nums">
                        {product.rating.toFixed(1)}
                      </span>
                      <span className="text-[11px] text-[#8C7A70] tabular-nums">
                        ({product.reviewCount})
                      </span>
                    </div>
                  </div>

                  {/* Price Baseline in PKR */}
                  <div className="pt-2 border-t border-[#EDE4DC] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#8C7A70] block">Price</span>
                      <span className="text-sm font-semibold text-[#2C2420] tabular-nums">
                        {formatPrice(product.pricePKR, currentCurrency)}
                      </span>
                    </div>

                    <button
                      onClick={() => onAddToCart(product, product.sizes[0])}
                      className="text-xs font-semibold text-[#9E4733] hover:text-[#863826] uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <span>Add</span>
                      <ShoppingBag className="w-3 h-3" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Carousel Navigation Dots & Indicators */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <div className="flex items-center gap-2">
            {[0, 1, 2].map((dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => setActiveSlide(dotIndex)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  activeSlide === dotIndex
                    ? 'w-7 bg-[#9E4733]'
                    : 'w-2 bg-[#D9C4B3] hover:bg-[#B3A295]'
                }`}
                aria-label={`Slide ${dotIndex + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
