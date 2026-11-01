import React, { useState } from 'react';
import { X, User, Package, Heart, LogIn, Sparkles, CheckCircle } from 'lucide-react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewWishlist: () => void;
  wishlistCount: number;
}

export const AccountModal: React.FC<AccountModalProps> = ({
  isOpen,
  onClose,
  onViewWishlist,
  wishlistCount
}) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'orders'>('profile');
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-[#FAF7F2] rounded-xl max-w-md w-full shadow-2xl border border-[#EDE4DC] relative animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[#EDE4DC] hover:bg-[#D9C4B3] text-[#2C2420] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="bg-[#FAF7F2] border-b border-[#EDE4DC] p-6 text-center">
          <div className="w-16 h-16 rounded-full bg-[#10342F] text-[#F3C99F] flex items-center justify-center mx-auto mb-3 font-serif text-2xl font-bold shadow-md">
            S
          </div>
          <h3 className="font-serif text-xl font-medium text-[#221B17]">
            Sana Fatima
          </h3>
          <p className="text-xs text-[#7A6B62]">
            Heritage Circle Member · sanafatimahr1@gmail.com
          </p>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mt-4">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeTab === 'profile'
                  ? 'bg-[#9E4733] text-[#FAF7F2]'
                  : 'bg-[#F2ECE5] text-[#5C4D44] hover:bg-[#EDE4DC]'
              }`}
            >
              Membership
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeTab === 'orders'
                  ? 'bg-[#9E4733] text-[#FAF7F2]'
                  : 'bg-[#F2ECE5] text-[#5C4D44] hover:bg-[#EDE4DC]'
              }`}
            >
              Order History
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {activeTab === 'profile' ? (
            <div className="space-y-4 text-xs text-[#5C4D44]">
              <div className="bg-[#F4ECE4] p-3.5 rounded-lg border border-[#E5D7CB] space-y-1">
                <div className="flex items-center gap-1.5 text-[#9E4733] font-semibold uppercase tracking-wider text-[11px]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Riwayat Privileges</span>
                </div>
                <p className="text-[12px] text-[#4A3E37]">
                  You have <strong className="text-[#9E4733]">420 Heritage Loyalty Points</strong> accrued. Free express delivery on all orders unlocked.
                </p>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => {
                    onClose();
                    onViewWishlist();
                  }}
                  className="w-full flex items-center justify-between p-3 bg-[#FDFBF7] rounded-lg border border-[#EDE4DC] hover:border-[#9E4733] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[#9E4733]" />
                    <span className="font-medium text-[#2C2420]">Saved Wishlist</span>
                  </div>
                  <span className="text-xs bg-[#EDE4DC] text-[#705F55] px-2 py-0.5 rounded-full font-semibold">
                    {wishlistCount}
                  </span>
                </button>

                <div className="p-3 bg-[#FDFBF7] rounded-lg border border-[#EDE4DC] space-y-1">
                  <span className="text-[10px] uppercase font-semibold text-[#8C7A70] block">Default Address</span>
                  <p className="text-[#2C2420]">House 42, Street 7, Sector F-8/3, Islamabad, Pakistan</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="p-3.5 bg-[#FDFBF7] rounded-lg border border-[#EDE4DC] text-xs space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-mono font-bold text-[#9E4733]">#RW-PK-7821</span>
                  <span className="bg-[#10342F]/10 text-[#10342F] px-2 py-0.5 rounded text-[10px] font-semibold">
                    Delivered
                  </span>
                </div>
                <div className="text-[#2C2420] font-medium">
                  Floral Embroidered Lawn Suit (Size: M)
                </div>
                <div className="flex justify-between text-[#7A6B62] text-[11px]">
                  <span>Delivered via TCS Express</span>
                  <span>PKR 18,500</span>
                </div>
              </div>

              <div className="p-3.5 bg-[#FDFBF7] rounded-lg border border-[#EDE4DC] text-xs space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-mono font-bold text-[#9E4733]">#RW-PK-6340</span>
                  <span className="bg-[#10342F]/10 text-[#10342F] px-2 py-0.5 rounded text-[10px] font-semibold">
                    Delivered
                  </span>
                </div>
                <div className="text-[#2C2420] font-medium">
                  Handwoven Jamdani Dupatta
                </div>
                <div className="flex justify-between text-[#7A6B62] text-[11px]">
                  <span>Delivered via Leopard Courier</span>
                  <span>PKR 12,200</span>
                </div>
              </div>
            </div>
          )}

          <div className="pt-2">
            <button
              onClick={onClose}
              className="w-full bg-[#EDE4DC] hover:bg-[#D9C4B3] text-[#2C2420] py-2 rounded text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Close Account
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
