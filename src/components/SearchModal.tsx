import React, { useState } from 'react';
import { Product, Currency } from '../types';
import { PRODUCTS_DATA, formatPrice } from '../data/mockData';
import { Search, X, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  currentCurrency: Currency;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  currentCurrency
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const popularTags = [
    'Lawn Suit',
    'Jamdani',
    'Anarkali',
    'Zardozi',
    'Organza',
    'Peshwas'
  ];

  const results = searchTerm.trim() === ''
    ? []
    : PRODUCTS_DATA.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.fabric.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.technique.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-[#FAF7F2] rounded-xl max-w-2xl w-full shadow-2xl border border-[#EDE4DC] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#EDE4DC] flex items-center gap-3 bg-[#FDFBF7]">
          <Search className="w-5 h-5 text-[#9E4733] shrink-0" />
          <input
            autoFocus
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by silhouette, fabric (e.g. Lawn, Raw Silk) or craft..."
            className="flex-1 bg-transparent text-sm sm:text-base text-[#2C2420] placeholder:text-[#8C7A70] focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-xs text-[#705F55] hover:text-[#2C2420] p-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#EDE4DC] text-[#705F55] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Popular Tags */}
        <div className="p-4 bg-[#F4ECE4] border-b border-[#EDE4DC] flex flex-wrap items-center gap-2 text-xs">
          <span className="text-[#7A6B62] font-medium">Trending Searches:</span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSearchTerm(tag)}
              className="bg-[#FAF7F2] hover:bg-[#9E4733] hover:text-white text-[#4A3E37] px-2.5 py-1 rounded text-[11px] font-medium transition-colors cursor-pointer border border-[#D9C4B3]"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Container */}
        <div className="max-h-96 overflow-y-auto p-4 sm:p-5">
          {searchTerm.trim() === '' ? (
            <div className="text-center py-8 text-xs text-[#705F55]">
              Type a keyword to discover hand-embroidered designs from our archives.
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-8 text-xs text-[#705F55]">
              No exact matches found for "{searchTerm}". Try browsing our categories or trending tags.
            </div>
          ) : (
            <div className="space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#705F55] block">
                Found {results.length} piece{results.length > 1 ? 's' : ''}:
              </span>
              {results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onClose();
                    onSelectProduct(product);
                  }}
                  className="flex items-center gap-4 p-2.5 rounded-lg hover:bg-[#F4ECE4] cursor-pointer transition-colors border border-transparent hover:border-[#EDE4DC]"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-14 h-16 rounded object-cover bg-[#EDE4DC]"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-sm font-medium text-[#221B17] truncate">
                      {product.name}
                    </h4>
                    <span className="text-[11px] text-[#7A6B62] block">
                      {product.category} · {product.fabric}
                    </span>
                    <span className="text-xs font-semibold text-[#9E4733] tabular-nums">
                      {formatPrice(product.pricePKR, currentCurrency)}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#9E4733]" />
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
