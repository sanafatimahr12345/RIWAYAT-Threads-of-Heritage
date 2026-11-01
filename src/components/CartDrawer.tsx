import React, { useState } from 'react';
import { CartItem, Currency } from '../types';
import { formatPrice } from '../data/mockData';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, selectedSize: string, newQuantity: number) => void;
  onRemoveItem: (productId: string, selectedSize: string) => void;
  onProceedToCheckout: () => void;
  currentCurrency: Currency;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  currentCurrency
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  if (!isOpen) return null;

  const FREE_SHIPPING_THRESHOLD_PKR = 15000;
  const rawSubtotalPKR = items.reduce((sum, item) => sum + item.product.pricePKR * item.quantity, 0);
  const discountAmountPKR = Math.round(rawSubtotalPKR * appliedDiscount);
  const subtotalPKR = rawSubtotalPKR - discountAmountPKR;
  const isFreeShipping = rawSubtotalPKR >= FREE_SHIPPING_THRESHOLD_PKR;
  const amountNeededForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD_PKR - rawSubtotalPKR);
  const shippingProgress = Math.min(100, Math.round((rawSubtotalPKR / FREE_SHIPPING_THRESHOLD_PKR) * 100));

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    setPromoSuccess('');
    const code = promoCode.trim().toUpperCase();
    if (code === 'HERITAGE10' || code === 'RIWAYAT10') {
      setAppliedDiscount(0.10);
      setPromoSuccess('10% Heritage discount applied!');
    } else {
      setPromoError('Invalid coupon code. Try HERITAGE10');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] text-[#2C2420] shadow-2xl flex flex-col border-l border-[#EDE4DC] animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-5 border-b border-[#EDE4DC] flex items-center justify-between bg-[#FDFBF7]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#9E4733]" />
              <h3 className="font-serif text-lg font-semibold tracking-wide text-[#221B17]">
                Your Shopping Bag
              </h3>
              <span className="text-xs bg-[#EDE4DC] text-[#705F55] font-semibold px-2 py-0.5 rounded-full">
                {items.reduce((total, i) => total + i.quantity, 0)}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#705F55] hover:text-[#221B17] transition-colors rounded-full hover:bg-[#EDE4DC]"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Meter */}
          <div className="p-4 bg-[#F2ECE5] border-b border-[#EDE4DC] text-xs">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-medium text-[#4A3E37]">
                {isFreeShipping ? (
                  <span className="text-[#10342F] font-semibold">
                    ✓ You have unlocked Complimentary Express Shipping!
                  </span>
                ) : (
                  <span>
                    Add <strong className="text-[#9E4733]">{formatPrice(amountNeededForFreeShipping, currentCurrency)}</strong> more for Free Shipping
                  </span>
                )}
              </span>
              <span className="text-[11px] font-mono text-[#7A6B62]">{shippingProgress}%</span>
            </div>
            <div className="w-full bg-[#E0D5CA] h-1.5 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-500 ${isFreeShipping ? 'bg-[#10342F]' : 'bg-[#9E4733]'}`}
                style={{ width: `${shippingProgress}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EDE4DC] text-[#9E4733] flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-xl text-[#221B17]">Your bag is currently empty</h4>
                <p className="text-xs text-[#705F55] max-w-xs mx-auto">
                  Explore our curated collections of pure lawn, handwoven dupattas, and handcrafted heirloom pieces.
                </p>
                <button
                  onClick={onClose}
                  className="inline-flex items-center gap-2 bg-[#9E4733] text-[#FAF7F2] px-6 py-2.5 rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#863826] transition-colors cursor-pointer"
                >
                  <span>Explore Shop</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}`}
                  className="flex gap-4 p-3 bg-[#FDFBF7] rounded-lg border border-[#EDE4DC] relative group"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-24 rounded bg-[#EDE4DC] overflow-hidden shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif text-sm font-medium text-[#221B17] line-clamp-1 pr-6">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id, item.selectedSize)}
                          className="text-[#99877E] hover:text-[#9E4733] p-1 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[11px] text-[#7A6B62] mt-0.5">
                        Size: <span className="font-semibold text-[#2C2420]">{item.selectedSize}</span> · {item.product.category}
                      </div>

                      <div className="text-xs font-semibold text-[#9E4733] mt-1 tabular-nums">
                        {formatPrice(item.product.pricePKR, currentCurrency)}
                      </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-[#D9C4B3] rounded bg-[#FAF7F2]">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, item.quantity - 1)}
                          className="p-1 text-[#705F55] hover:text-[#2C2420] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-semibold text-[#2C2420] tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, item.quantity + 1)}
                          className="p-1 text-[#705F55] hover:text-[#2C2420] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-xs font-semibold text-[#2C2420] tabular-nums">
                        {formatPrice(item.product.pricePKR * item.quantity, currentCurrency)}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {items.length > 0 && (
            <div className="p-5 border-t border-[#EDE4DC] bg-[#FDFBF7] space-y-4">
              
              {/* Promo Code Form */}
              <form onSubmit={handleApplyPromo} className="space-y-1">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-[#8C7A70] absolute left-3 top-2.5" />
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Coupon Code (HERITAGE10)"
                      className="w-full bg-[#FAF7F2] text-xs pl-8 pr-3 py-2 border border-[#D9C4B3] rounded focus:outline-none focus:border-[#9E4733] uppercase"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-3 py-2 bg-[#4A3E37] hover:bg-[#2C2420] text-[#FAF7F2] text-xs font-semibold rounded uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
                {promoSuccess && <p className="text-[11px] text-[#10342F] font-medium">{promoSuccess}</p>}
                {promoError && <p className="text-[11px] text-[#9E4733] font-medium">{promoError}</p>}
              </form>

              {/* Subtotal Calculations */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#705F55]">
                  <span>Subtotal</span>
                  <span className="font-mono tabular-nums">{formatPrice(rawSubtotalPKR, currentCurrency)}</span>
                </div>

                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-[#10342F] font-medium">
                    <span>Discount (10%)</span>
                    <span className="font-mono tabular-nums">-{formatPrice(discountAmountPKR, currentCurrency)}</span>
                  </div>
                )}

                <div className="flex justify-between text-[#705F55]">
                  <span>Estimated Shipping</span>
                  <span className="font-medium text-[#10342F]">
                    {isFreeShipping ? 'FREE' : formatPrice(600, currentCurrency)}
                  </span>
                </div>

                <div className="flex justify-between text-sm font-semibold text-[#221B17] pt-2 border-t border-[#EDE4DC]">
                  <span>Total</span>
                  <span className="font-serif text-base text-[#9E4733] tabular-nums">
                    {formatPrice(subtotalPKR + (isFreeShipping ? 0 : 600), currentCurrency)}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={onProceedToCheckout}
                className="w-full bg-[#9E4733] hover:bg-[#863826] text-[#FAF7F2] py-3.5 rounded text-xs font-semibold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#7A6B62]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10342F]" />
                <span>Cash on Delivery & Secure Bank Transfers</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
