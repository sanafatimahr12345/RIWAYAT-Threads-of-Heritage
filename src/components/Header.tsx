import React, { useState, useEffect } from 'react';
import { Menu, Search, Heart, User, ShoppingBag } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onOpenMobileMenu: () => void;
  onOpenSearch: () => void;
  onOpenWishlist: () => void;
  onOpenAccount: () => void;
  onOpenCart: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  onOpenMobileMenu,
  onOpenSearch,
  onOpenWishlist,
  onOpenAccount,
  onOpenCart,
  onNavigateSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E8DFD8] py-3'
          : 'bg-[#FAF7F2] border-b border-[#EDE4DC] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left Zone: Hamburger + Quick Nav Links */}
          <div className="flex items-center gap-6 flex-1">
            <button
              onClick={onOpenMobileMenu}
              className="flex items-center gap-2 p-1.5 text-[#2C2420] hover:text-[#9E4733] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E4733] rounded"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
              <span className="hidden sm:inline text-xs font-medium uppercase tracking-widest text-[#5C4D44]">
                Menu
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium tracking-wider text-[#4A3E37]">
              <button
                onClick={() => onNavigateSection('curated-products')}
                className="hover:text-[#9E4733] transition-colors uppercase tracking-widest cursor-pointer"
              >
                Collection
              </button>
              <button
                onClick={() => onNavigateSection('categories')}
                className="hover:text-[#9E4733] transition-colors uppercase tracking-widest cursor-pointer"
              >
                Categories
              </button>
              <button
                onClick={() => onNavigateSection('artisan-stories')}
                className="hover:text-[#9E4733] transition-colors uppercase tracking-widest cursor-pointer"
              >
                Artisans
              </button>
              <button
                onClick={() => onNavigateSection('promotions')}
                className="hover:text-[#9E4733] transition-colors uppercase tracking-widest cursor-pointer"
              >
                Fabric Focus
              </button>
              <button
                onClick={() => onNavigateSection('styling-guide')}
                className="hover:text-[#9E4733] transition-colors uppercase tracking-widest cursor-pointer"
              >
                Styling Guide
              </button>
            </nav>
          </div>

          {/* Center Zone: Centered RIWAYAT Logo */}
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex flex-col items-center focus-visible:outline-none"
            >
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-[0.22em] text-[#2C2420] uppercase transition-colors group-hover:text-[#9E4733]">
                  RIWAYAT
                </span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="h-px w-3 bg-[#B35438]/40"></span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.3em] font-medium text-[#7C6A5F] uppercase font-sans">
                  Threads of Heritage
                </span>
                <span className="h-px w-3 bg-[#B35438]/40"></span>
              </div>
            </a>
          </div>

          {/* Right Zone: Search, Wishlist, Account, Shopping Bag */}
          <div className="flex items-center justify-end gap-2 sm:gap-4 flex-1">
            {/* Search */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#3D332D] hover:text-[#9E4733] transition-colors rounded-full hover:bg-[#F2ECE5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E4733]"
              aria-label="Search collection"
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2 text-[#3D332D] hover:text-[#9E4733] transition-colors rounded-full hover:bg-[#F2ECE5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E4733]"
              aria-label={`Wishlist with ${wishlistCount} items`}
              title="Saved Items"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 bg-[#9E4733] text-[#FAF7F2] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center tabular-nums leading-none">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Account */}
            <button
              onClick={onOpenAccount}
              className="p-2 text-[#3D332D] hover:text-[#9E4733] transition-colors rounded-full hover:bg-[#F2ECE5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E4733]"
              aria-label="User account"
              title="My Account"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Shopping Bag */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 bg-[#9E4733] text-[#FAF7F2] hover:bg-[#863826] transition-colors px-3 py-2 rounded shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E4733]"
              aria-label={`Shopping bag with ${cartCount} items`}
              title="View Bag"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline text-xs font-semibold tracking-wider uppercase">
                Bag
              </span>
              <span className="bg-[#FAF7F2] text-[#9E4733] text-[11px] font-bold px-1.5 py-0.5 rounded-full tabular-nums leading-none">
                {cartCount}
              </span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
