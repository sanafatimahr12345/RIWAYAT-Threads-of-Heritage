/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Currency, CartItem, Product } from './types';
import { PRODUCTS_DATA } from './data/mockData';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { ArtisanStories } from './components/ArtisanStories';
import { PromotionalBanners } from './components/PromotionalBanners';
import { CuratedProducts } from './components/CuratedProducts';
import { StylingGuide } from './components/StylingGuide';
import { BrandBenefits } from './components/BrandBenefits';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { ArtisanModal } from './components/ArtisanModal';
import { FabricGuideModal } from './components/FabricGuideModal';
import { SearchModal } from './components/SearchModal';
import { MobileMenu } from './components/MobileMenu';
import { PolicyModal } from './components/PolicyModal';
import { Check } from 'lucide-react';

export default function App() {
  // Global State
  const [currentCurrency, setCurrentCurrency] = useState<Currency>('PKR');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS_DATA[0],
      selectedSize: 'M',
      quantity: 1
    }
  ]);
  const [wishlistIds, setWishlistIds] = useState<string[]>(['prod-2', 'prod-3']);
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string>('all');
  
  // Modals & Drawers state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isArtisanModalOpen, setIsArtisanModalOpen] = useState(false);
  const [selectedArtisanId, setSelectedArtisanId] = useState<string | undefined>();
  const [isFabricGuideOpen, setIsFabricGuideOpen] = useState(false);
  const [selectedFabricId, setSelectedFabricId] = useState<string | undefined>();
  const [policyModal, setPolicyModal] = useState<{
    isOpen: boolean;
    type: 'privacy' | 'terms' | 'shipping';
  }>({
    isOpen: false,
    type: 'shipping'
  });

  // Transient Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Cart actions
  const handleAddToCart = (product: Product, size: string = 'M', quantity: number = 1) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (i) => i.product.id === product.id && i.selectedSize === size
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      }
      return [...prev, { product, selectedSize: size, quantity }];
    });
    showToast(`Added ${product.name} (${size}) to your bag`);
  };

  const handleUpdateQuantity = (productId: string, selectedSize: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId, selectedSize);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.selectedSize === selectedSize
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string, selectedSize: string) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.selectedSize === selectedSize))
    );
  };

  // Wishlist actions
  const handleToggleWishlist = (productId: string) => {
    setWishlistIds((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Item removed from your wishlist');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Saved to your wishlist');
        return [...prev, productId];
      }
    });
  };

  // Navigation Smooth Scroll
  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Category Selection
  const handleSelectCategory = (categorySlug: Product['categorySlug']) => {
    setSelectedCategorySlug(categorySlug);
    handleNavigateSection('curated-products');
  };

  // Open Artisan Modal
  const handleOpenArtisans = (artisanId?: string) => {
    setSelectedArtisanId(artisanId);
    setIsArtisanModalOpen(true);
  };

  // Open Fabric Guide Modal
  const handleOpenFabricGuide = (fabricId?: string) => {
    setSelectedFabricId(fabricId);
    setIsFabricGuideOpen(true);
  };

  // Shop specific styling piece
  const handleShopLookProduct = (productName: string) => {
    const found = PRODUCTS_DATA.find((p) => p.name.toLowerCase() === productName.toLowerCase());
    if (found) {
      setQuickViewProduct(found);
    } else {
      handleNavigateSection('curated-products');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C2420] font-sans">
      
      {/* 1. Announcement Bar */}
      <AnnouncementBar
        currentCurrency={currentCurrency}
        onCurrencyChange={setCurrentCurrency}
        onTrackOrderClick={() => setPolicyModal({ isOpen: true, type: 'shipping' })}
      />

      {/* Navigation Header */}
      <Header
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        wishlistCount={wishlistIds.length}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 2. Hero Section */}
        <Hero
          onExploreClick={() => handleNavigateSection('curated-products')}
          onArtisanClick={() => handleOpenArtisans()}
        />

        {/* 3. Explore Our Categories */}
        <Categories
          onSelectCategory={handleSelectCategory}
          selectedCategorySlug={selectedCategorySlug}
        />

        {/* 4. Stories in Every Stitch */}
        <ArtisanStories
          onMeetArtisans={handleOpenArtisans}
        />

        {/* 5. Promotional Banners (Side-by-side) */}
        <PromotionalBanners
          onShopLaunchClick={() => {
            setSelectedCategorySlug('embroidered-sets');
            handleNavigateSection('curated-products');
          }}
          onOpenFabricGuide={handleOpenFabricGuide}
        />

        {/* 6. Curated For You – Product Collection */}
        <CuratedProducts
          currentCurrency={currentCurrency}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onQuickView={(product) => setQuickViewProduct(product)}
          onAddToCart={(product, size) => handleAddToCart(product, size, 1)}
          selectedCategorySlug={selectedCategorySlug}
          onSelectCategoryFilter={(slug) => setSelectedCategorySlug(slug)}
        />

        {/* 7. Styling Guide */}
        <StylingGuide
          onShopLookProduct={handleShopLookProduct}
        />

        {/* 8. Brand Benefits */}
        <BrandBenefits />

      </main>

      {/* 9. Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenPolicyModal={(type) => setPolicyModal({ isOpen: true, type })}
      />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        currentCurrency={currentCurrency}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderCompleted={() => setCartItems([])}
        currentCurrency={currentCurrency}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlistIds}
        onRemoveWishlist={handleToggleWishlist}
        onAddToCart={(product, size) => handleAddToCart(product, size, 1)}
        currentCurrency={currentCurrency}
      />

      {/* Quick View Product Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(product, size, qty) => handleAddToCart(product, size, qty)}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        currentCurrency={currentCurrency}
      />

      {/* Artisan Guild Modal */}
      <ArtisanModal
        isOpen={isArtisanModalOpen}
        onClose={() => setIsArtisanModalOpen(false)}
        selectedArtisanId={selectedArtisanId}
      />

      {/* Fabric Guide Modal */}
      <FabricGuideModal
        isOpen={isFabricGuideOpen}
        onClose={() => setIsFabricGuideOpen(false)}
        selectedFabricId={selectedFabricId}
      />

      {/* Live Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(product) => setQuickViewProduct(product)}
        currentCurrency={currentCurrency}
      />

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onSelectCategory={handleSelectCategory}
        onNavigateSection={handleNavigateSection}
        onOpenArtisans={() => handleOpenArtisans()}
        onOpenFabrics={() => handleOpenFabricGuide()}
      />

      {/* Shipping / Terms / Privacy Policy Modal */}
      <PolicyModal
        isOpen={policyModal.isOpen}
        onClose={() => setPolicyModal({ isOpen: false, type: 'shipping' })}
        policyType={policyModal.type}
      />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#10342F] text-[#FAF7F2] text-xs font-medium py-3 px-4 rounded-lg shadow-xl border border-[#F3C99F]/30 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="w-5 h-5 rounded-full bg-[#FAF7F2]/10 text-[#F3C99F] flex items-center justify-center shrink-0">
            <Check className="w-3 h-3" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
