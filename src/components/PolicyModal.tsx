import React from 'react';
import { X, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  policyType: 'privacy' | 'terms' | 'shipping';
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  isOpen,
  onClose,
  policyType
}) => {
  if (!isOpen) return null;

  const contentMap = {
    privacy: {
      title: 'Privacy & Data Protection',
      subtitle: 'Your confidentiality and digital security are sacred to us.',
      icon: <ShieldCheck className="w-5 h-5 text-[#9E4733]" />,
      body: [
        'At RIWAYAT, we handle your personal data, delivery addresses, and payment information with rigorous security protocols.',
        'We never sell, rent, or trade customer contact details with third-party advertisers. Information collected is used strictly to fulfill bespoke orders, courier notifications, and client concierge services.',
        'All online transactions are encrypted via 256-bit SSL protocols. Cash on Delivery records are purged after courier settlement reconciliation.'
      ]
    },
    terms: {
      title: 'Terms & Conditions',
      subtitle: 'Guidelines governing handcrafted purchases and custom sizing.',
      icon: <RotateCcw className="w-5 h-5 text-[#9E4733]" />,
      body: [
        'Each RIWAYAT piece is an artisan-crafted product. Subtle organic variations in handloom weave texture, block-print alignment, and natural vegetable dye depth are hallmarks of genuine handmade luxury, not defects.',
        'We offer a 14-day hassle-free return and exchange policy on all unworn, unwashed pret garments with original security tags and heirloom dustbags intact.',
        'Custom-stitched or bespoke bridal kalidars may require up to 4 weeks of handcrafting and cannot be cancelled once cutting of pure silk commences.'
      ]
    },
    shipping: {
      title: 'Shipping & Delivery Timelines',
      subtitle: 'Complimentary express transit across all major Pakistani cities.',
      icon: <Truck className="w-5 h-5 text-[#10342F]" />,
      body: [
        'Complimentary Express Courier on all domestic orders exceeding PKR 15,000. For orders below this threshold, a flat courier rate of PKR 600 applies.',
        'Domestic orders in Lahore, Karachi, and Islamabad/Rawalpindi arrive within 2 to 3 business days via TCS / Leopard Courier.',
        'International shipments to the United States, United Kingdom, UAE, and Canada are dispatched via DHL Express with complete door-to-door tracking.'
      ]
    }
  };

  const activeContent = contentMap[policyType] || contentMap.shipping;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-[#FAF7F2] rounded-xl max-w-xl w-full shadow-2xl border border-[#EDE4DC] relative animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[#EDE4DC] hover:bg-[#D9C4B3] text-[#2C2420] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 mb-1">
            {activeContent.icon}
            <span className="text-xs uppercase tracking-[0.2em] text-[#9E4733] font-semibold">
              RIWAYAT Policy
            </span>
          </div>

          <h3 className="font-serif text-2xl font-medium text-[#221B17]">
            {activeContent.title}
          </h3>
          <p className="text-xs text-[#7A6B62]">
            {activeContent.subtitle}
          </p>

          <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#5C4D44] font-light leading-relaxed">
            {activeContent.body.map((para, i) => (
              <p key={i} className="p-3 bg-[#FDFBF7] rounded border border-[#EDE4DC]">
                {para}
              </p>
            ))}
          </div>

          <div className="pt-4">
            <button
              onClick={onClose}
              className="w-full bg-[#9E4733] text-[#FAF7F2] py-2.5 rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#863826] cursor-pointer"
            >
              I Understand
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
