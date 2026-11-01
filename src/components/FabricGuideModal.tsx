import React, { useState } from 'react';
import { FABRICS_LIST, FABRIC_FOCUS_IMAGE } from '../data/mockData';
import { X, Feather, CheckCircle, Sparkles, MapPin, Droplets } from 'lucide-react';

interface FabricGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedFabricId?: string;
}

export const FabricGuideModal: React.FC<FabricGuideModalProps> = ({
  isOpen,
  onClose,
  selectedFabricId
}) => {
  const [activeTab, setActiveTab] = useState<string>(selectedFabricId || 'lawn');

  if (!isOpen) return null;

  const currentFabric = FABRICS_LIST.find((f) => f.id === activeTab) || FABRICS_LIST[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-[#FAF7F2] rounded-xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#EDE4DC] relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#FAF7F2] hover:bg-[#EDE4DC] text-[#2C2420] flex items-center justify-center transition-colors cursor-pointer border border-[#E8DFD8] shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="bg-[#241F1C] text-[#FAF7F2] p-6 sm:p-8 rounded-t-xl relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4A373] font-semibold block mb-1">
              Textile Archive & Integrity
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl">
              Pakistani Fabric Compendium
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#D8CCC2] max-w-xl font-light">
              We exclusively commission natural fibers hand-spun and woven on traditional looms across Pakistan.
            </p>
          </div>
          
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-30 pointer-events-none">
            <img src={FABRIC_FOCUS_IMAGE} alt="Textile macro" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Fabric Tabs */}
        <div className="flex border-b border-[#EDE4DC] bg-[#FDFBF7] px-6 overflow-x-auto">
          {FABRICS_LIST.map((fabric) => (
            <button
              key={fabric.id}
              onClick={() => setActiveTab(fabric.id)}
              className={`py-3.5 px-4 text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer border-b-2 ${
                activeTab === fabric.id
                  ? 'border-[#9E4733] text-[#9E4733]'
                  : 'border-transparent text-[#705F55] hover:text-[#221B17]'
              }`}
            >
              {fabric.name}
            </button>
          ))}
        </div>

        {/* Active Fabric Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#9E4733] font-semibold flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                Origin: {currentFabric.origin}
              </span>
              <h3 className="font-serif text-2xl font-medium text-[#221B17] mt-0.5">
                {currentFabric.name}
              </h3>
            </div>
            <div className="p-2.5 rounded-full bg-[#EDE4DC] text-[#9E4733]">
              <Feather className="w-6 h-6" />
            </div>
          </div>

          <p className="text-sm text-[#4A3E37] font-normal leading-relaxed">
            {currentFabric.description}
          </p>

          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#2C2420] mb-3">
              Fiber Characteristics:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {currentFabric.characteristics.map((char, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#5C4D44] bg-[#F4ECE4] p-2.5 rounded">
                  <CheckCircle className="w-3.5 h-3.5 text-[#10342F] shrink-0" />
                  <span>{char}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-[#EDE4DC] rounded-lg text-xs space-y-1">
            <span className="font-semibold text-[#221B17] block">Best Suited For:</span>
            <p className="text-[#6B5A50]">{currentFabric.bestFor}</p>
          </div>
        </div>

      </div>
    </div>
  );
};
