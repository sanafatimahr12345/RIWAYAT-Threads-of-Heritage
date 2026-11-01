import React from 'react';
import { Product, Currency } from '../types';
import { PRODUCTS_DATA, formatPrice } from '../data/mockData';
import { X, Heart, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistIds: string[];
  onRemoveWishlist: (productId: string) => void;
  onAddToCart: (product: Product, size?: string) => void;
  currentCurrency: Currency;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistIds,
  onRemoveWishlist,
  onAddToCart,
  currentCurrency
}) => {
  if (!isOpen) return null;

  const wishlistedProducts = PRODUCTS_DATA.filter((p) => wishlistIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] text-[#2C2420] shadow-2xl flex flex-col border-l border-[#EDE4DC] animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-5 border-b border-[#EDE4DC] flex items-center justify-between bg-[#FDFBF7]">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#9E4733] fill-current" />
              <h3 className="font-serif text-lg font-semibold tracking-wide text-[#221B17]">
                Your Wishlist
              </h3>
              <span className="text-xs bg-[#EDE4DC] text-[#705F55] font-semibold px-2 py-0.5 rounded-full">
                {wishlistedProducts.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#705F55] hover:text-[#221B17] transition-colors rounded-full hover:bg-[#EDE4DC]"
              aria-label="Close wishlist drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {wishlistedProducts.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EDE4DC] text-[#9E4733] flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-xl text-[#221B17]">No saved items yet</h4>
                <p className="text-xs text-[#705F55] max-w-xs mx-auto">
                  Click the heart icon on any piece to save your favorite silhouettes for later.
                </p>
                <button
                  onClick={onClose}
                  className="inline-flex items-center gap-2 bg-[#9E4733] text-[#FAF7F2] px-6 py-2.5 rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#863826] transition-colors cursor-pointer"
                >
                  <span>Explore Catalog</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              wishlistedProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-3 bg-[#FDFBF7] rounded-lg border border-[#EDE4DC] relative group"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-24 rounded bg-[#EDE4DC] overflow-hidden shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif text-sm font-medium text-[#221B17] line-clamp-1 pr-4">
                          {product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveWishlist(product.id)}
                          className="text-[#99877E] hover:text-[#9E4733] p-1 transition-colors"
                          title="Remove from wishlist"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[11px] text-[#7A6B62] mt-0.5">
                        {product.category}
                      </div>

                      <div className="text-xs font-semibold text-[#9E4733] mt-1 tabular-nums">
                        {formatPrice(product.pricePKR, currentCurrency)}
                      </div>
                    </div>

                    {/* Move to bag button */}
                    <div className="pt-2">
                      <button
                        onClick={() => {
                          onAddToCart(product, product.sizes[0]);
                          onRemoveWishlist(product.id);
                        }}
                        className="w-full bg-[#10342F] hover:bg-[#16423C] text-[#FAF7F2] py-1.5 px-3 rounded text-[11px] font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Move to Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
