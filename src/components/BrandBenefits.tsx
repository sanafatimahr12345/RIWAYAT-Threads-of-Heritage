import React from 'react';
import { ShieldCheck, RotateCcw, HeartHandshake, Leaf } from 'lucide-react';

export const BrandBenefits: React.FC = () => {
  const benefits = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#9E4733]" />,
      title: 'Secure Payment',
      description: '100% protected checkout via Cash on Delivery, Bank Transfer, & Cards.'
    },
    {
      icon: <RotateCcw className="w-6 h-6 text-[#9E4733]" />,
      title: 'Easy Returns',
      description: 'Hassle-free 14-day return policy with doorstep pickup in major cities.'
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#9E4733]" />,
      title: 'Support Artisans',
      description: 'Empowering 250+ indigenous craft families with fair living wages.'
    },
    {
      icon: <Leaf className="w-6 h-6 text-[#9E4733]" />,
      title: 'Ethical & Sustainable',
      description: 'Conscious natural vegetable dyes & plastic-free heirloom packaging.'
    }
  ];

  return (
    <section className="py-14 sm:py-16 bg-[#FAF7F2] border-b border-[#EDE4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-lg bg-[#FDFBF7] border border-[#EFE8E2] transition-colors hover:border-[#D9C4B3]"
            >
              <div className="p-2.5 rounded-md bg-[#FAF7F2] border border-[#E8DFD8] shrink-0">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-base font-semibold text-[#221B17]">
                  {item.title}
                </h4>
                <p className="text-xs text-[#6B5A50] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
