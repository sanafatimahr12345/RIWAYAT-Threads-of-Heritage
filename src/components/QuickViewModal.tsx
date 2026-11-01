import React, { useState } from 'react';
import { Product, Currency } from '../types';
import { formatPrice } from '../data/mockData';
import { X, Star, Heart, ShoppingBag, Check, MapPin, Sparkles, Shield, Ruler } from 'lucide-react';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, quantity: number) => void;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
  currentCurrency: Currency;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
  currentCurrency
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedImg, setSelectedImg] = useState<string>(product.image);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, quantity);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-[#FAF7F2] rounded-xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#EDE4DC] relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#FAF7F2] hover:bg-[#EDE4DC] text-[#2C2420] flex items-center justify-center transition-colors cursor-pointer border border-[#E8DFD8] shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
          
          {/* Left Column: Image Viewport */}
          <div className="md:col-span-6 space-y-3">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-[#EDE4DC] shadow-sm border border-[#E8DFD8]">
              <img
                src={selectedImg}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              {product.badge && (
                <div className="absolute top-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-xs text-[#9E4733] text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded border border-[#9E4733]/20 shadow-xs">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Thumbnail switcher if secondary image exists */}
            {product.secondaryImage && (
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedImg(product.image)}
                  className={`w-16 h-20 rounded overflow-hidden border-2 cursor-pointer ${selectedImg === product.image ? 'border-[#9E4733]' : 'border-transparent opacity-70'}`}
                >
                  <img src={product.image} alt="Thumbnail 1" className="w-full h-full object-cover" />
                </button>
                <button
                  onClick={() => setSelectedImg(product.secondaryImage!)}
                  className={`w-16 h-20 rounded overflow-hidden border-2 cursor-pointer ${selectedImg === product.secondaryImage ? 'border-[#9E4733]' : 'border-transparent opacity-70'}`}
                >
                  <img src={product.secondaryImage} alt="Thumbnail 2" className="w-full h-full object-cover" />
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Product Detail & Purchase Module */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-5">
            <div>
              {/* Category & Region */}
              <div className="flex items-center gap-2 text-xs text-[#9E4733] font-medium tracking-widest uppercase mb-1">
                <span>{product.category}</span>
                <span>·</span>
                <span className="flex items-center gap-1 text-[#6E5D53]">
                  <MapPin className="w-3 h-3" />
                  {product.artisanRegion}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#221B17] leading-snug">
                {product.name}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2 text-xs text-[#705F55]">
                <div className="flex text-[#D4A373]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-[#2C2420] tabular-nums">{product.rating.toFixed(1)}</span>
                <span>·</span>
                <span className="tabular-nums">({product.reviewCount} verified client reviews)</span>
              </div>

              {/* Price */}
              <div className="mt-4 pt-3 border-t border-[#EDE4DC]">
                <span className="text-2xl font-serif font-bold text-[#9E4733] tabular-nums">
                  {formatPrice(product.pricePKR, currentCurrency)}
                </span>
                <span className="text-[11px] text-[#705F55] ml-2">Taxes included. Free Nationwide Shipping.</span>
              </div>

              {/* Description */}
              <p className="mt-3 text-xs sm:text-sm text-[#5C4D44] font-light leading-relaxed">
                {product.description}
              </p>

              {/* Fabric Specs */}
              <div className="mt-4 p-3 bg-[#F4ECE4] rounded-lg space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#7A6B62]">Fabric Composition:</span>
                  <span className="font-semibold text-[#2C2420]">{product.fabric}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A6B62]">Craft Technique:</span>
                  <span className="font-semibold text-[#2C2420]">{product.technique}</span>
                </div>
              </div>

              {/* Size Selector */}
              <div className="mt-5 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold uppercase tracking-wider text-[#2C2420]">Select Size</span>
                  <button className="text-[11px] text-[#9E4733] underline hover:text-[#863826] cursor-pointer flex items-center gap-1">
                    <Ruler className="w-3 h-3" />
                    <span>Size Guide (inches)</span>
                  </button>
                </div>

                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-11 h-10 rounded text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                        selectedSize === size
                          ? 'bg-[#10342F] text-[#FAF7F2] shadow-sm'
                          : 'bg-[#F2ECE5] text-[#5C4D44] hover:bg-[#E8DFD8]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-5 flex items-center gap-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#2C2420]">Quantity:</span>
                <div className="flex items-center border border-[#D9C4B3] rounded bg-[#FAF7F2]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1.5 text-xs text-[#705F55] hover:text-[#2C2420]"
                  >
                    -
                  </button>
                  <span className="px-3 py-1.5 text-xs font-semibold text-[#2C2420] tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1.5 text-xs text-[#705F55] hover:text-[#2C2420]"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#EDE4DC] flex gap-3">
              <button
                onClick={handleAdd}
                className="flex-1 bg-[#9E4733] hover:bg-[#863826] text-[#FAF7F2] py-3.5 px-4 rounded text-xs font-semibold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                {addedAnimation ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag ({formatPrice(product.pricePKR * quantity, currentCurrency)})</span>
                  </>
                )}
              </button>

              <button
                onClick={() => onToggleWishlist(product.id)}
                className={`p-3.5 rounded border transition-colors cursor-pointer flex items-center justify-center ${
                  isWishlisted
                    ? 'bg-[#9E4733] border-[#9E4733] text-[#FAF7F2]'
                    : 'border-[#D9C4B3] hover:border-[#9E4733] text-[#3D332D]'
                }`}
                aria-label="Toggle Wishlist"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
