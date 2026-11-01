import React from 'react';
import { ARTISANS_DATA } from '../data/mockData';
import { X, MapPin, Award, CheckCircle, HeartHandshake } from 'lucide-react';

interface ArtisanModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedArtisanId?: string;
}

export const ArtisanModal: React.FC<ArtisanModalProps> = ({
  isOpen,
  onClose,
  selectedArtisanId
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-[#FAF7F2] rounded-xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#EDE4DC] relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#FAF7F2] hover:bg-[#EDE4DC] text-[#2C2420] flex items-center justify-center transition-colors cursor-pointer border border-[#E8DFD8] shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="bg-[#10342F] text-[#FAF7F2] p-6 sm:p-8 rounded-t-xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#F3C99F] mb-1">
            <HeartHandshake className="w-4 h-4" />
            <span>Riwayat Artisan Foundation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF7F2]">
            Meet the Master Guild
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#D4C3B7] max-w-2xl font-light leading-relaxed">
            Preserving centuries of Pakistani artisanal mastery through ethical wages, apprentice training, 
            and direct royal court needlework traditions.
          </p>
        </div>

        {/* Artisans List */}
        <div className="p-6 sm:p-8 space-y-8">
          {ARTISANS_DATA.map((artisan) => (
            <div
              key={artisan.id}
              className={`p-6 rounded-xl border transition-all ${
                selectedArtisanId === artisan.id
                  ? 'bg-[#F4ECE4] border-[#9E4733] shadow-md'
                  : 'bg-[#FDFBF7] border-[#EDE4DC]'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Photo */}
                <div className="md:col-span-4 aspect-[4/3] rounded-lg overflow-hidden bg-[#2C2420] shadow-sm">
                  <img
                    src={artisan.image}
                    alt={artisan.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="md:col-span-8 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#9E4733] font-semibold flex items-center gap-1">
                        <Award className="w-3.5 h-3.5" />
                        {artisan.craftSpecialty}
                      </span>
                      <h3 className="font-serif text-2xl font-medium text-[#221B17]">
                        {artisan.name}
                      </h3>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-[#705F55] bg-[#FAF7F2] px-2.5 py-1 rounded border border-[#EDE4DC]">
                      <MapPin className="w-3.5 h-3.5 text-[#9E4733]" />
                      <span>{artisan.location}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5C4D44] font-light leading-relaxed">
                    {artisan.bio}
                  </p>

                  <div className="p-3 bg-[#FAF7F2] rounded border-l-2 border-[#9E4733] italic font-serif text-xs text-[#6B5A50]">
                    "{artisan.quote}"
                  </div>

                  <div className="pt-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#705F55] block mb-1.5">
                      Signature Techniques:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {artisan.signatureTechniques.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-[#EDE4DC] text-[#4A3E37] text-[11px] px-2.5 py-0.5 rounded font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="p-6 bg-[#F2ECE5] border-t border-[#EDE4DC] rounded-b-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#705F55]">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#10342F]" />
            <span>100% of fair wages paid directly to artisan family bank accounts without intermediaries.</span>
          </div>
          <button
            onClick={onClose}
            className="bg-[#9E4733] text-[#FAF7F2] px-6 py-2 rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#863826] cursor-pointer"
          >
            Close Guild Guide
          </button>
        </div>

      </div>
    </div>
  );
};
