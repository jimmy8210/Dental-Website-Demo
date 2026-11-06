import React, { useState, useRef, useCallback } from 'react';
import { clinicData } from '../config/clinicData';
import { MoveHorizontal, Check } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = clinicData.beforeAfterCases[activeCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percentage = (clampedX / rect.width) * 100;
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section id="smile-gallery" className="py-20 lg:py-24 bg-dental-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 motion-reveal">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dental-ink tracking-tight">
            Smile Transformations & Clinical Outcomes
          </h2>
          <p className="mt-3 text-base sm:text-lg text-dental-ink leading-relaxed">
            Drag the comparison divider to inspect real restorative and aesthetic outcomes achieved at Apex Dental.
          </p>

          {/* Case Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-6">
            {clinicData.beforeAfterCases.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setSliderPos(50);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeCaseIndex === idx
                    ? 'bg-dental-ink text-white'
                    : 'bg-dental-surface text-dental-ink hover:bg-slate-200'
                }`}
              >
                {item.tag}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-tile p-4 sm:p-8 motion-reveal">
          
          {/* Active Case Details */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-2">
            <div>
              <span className="text-sm font-semibold text-dental-accent">
                Case Study: {activeCase.tag}
              </span>
              <h3 className="text-xl font-bold text-dental-ink mt-0.5">
                {activeCase.title}
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-sm font-semibold text-dental-ink bg-dental-surface px-3 py-1.5 rounded-lg">
              <Check className="w-4 h-4 text-dental-accent" />
              <span>{activeCase.treatmentDuration}</span>
            </div>
          </div>

          {/* Viewport with Drag Handle */}
          <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-specimen overflow-hidden select-none cursor-ew-resize bg-slate-200"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onClick={(e) => handleMove(e.clientX)}
          >
            {/* AFTER Image */}
            <img
              src={activeCase.afterImg}
              alt="After dental transformation result"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute top-4 right-4 bg-dental-dark/90 text-white text-sm font-semibold px-3 py-1.5 rounded pointer-events-none">
              Post-treatment outcome
            </div>

            {/* BEFORE Image (Clipped layer) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={activeCase.beforeImg}
                alt="Before dental treatment initial condition"
                className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
                }}
              />
              <div className="absolute top-4 left-4 bg-dental-dark/90 text-white text-sm font-semibold px-3 py-1.5 rounded pointer-events-none">
                Initial presentation
              </div>
            </div>

            {/* Drag Divider */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none transform -translate-x-1/2 flex items-center justify-center z-20"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-9 h-9 rounded-full bg-dental-dark text-white flex items-center justify-center border-2 border-white">
                <MoveHorizontal className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Prompt & Clinical Case Description */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-4 text-sm text-dental-ink">
            <span className="flex items-center gap-1.5">
              <MoveHorizontal className="w-4 h-4 text-dental-accent" />
              <span>Drag slider left or right to inspect tooth shade and gum line contours</span>
            </span>
            <span className="italic text-dental-ink">
              {activeCase.description}
            </span>
          </div>

        </div>

        {/* Clinical Imaging & Macro Documentation Strip (Looping Footage with Poster) */}
        <div className="max-w-4xl mx-auto mt-12 p-6 bg-dental-surface rounded-tile flex flex-col md:flex-row items-center gap-6 motion-reveal">
          <div className="w-full md:w-64 aspect-video rounded-specimen overflow-hidden bg-slate-900 shrink-0">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              preload="metadata" 
              poster="/assets/mirrorless-vs-dslr-in-dental-photography-poster.jpg" 
              className="w-full h-full object-cover"
              aria-hidden="true"
            >
              <source src="/assets/mirrorless-vs-dslr-in-dental-photography.webm" type="video/webm" />
            </video>
          </div>
          <div className="space-y-1.5">
            <span className="text-[13px] font-bold text-dental-accent block">
              Digital Shade Verification & Macro Imaging
            </span>
            <h4 className="text-lg font-bold text-dental-ink">
              Clinical Photographic Calibration
            </h4>
            <p className="text-base text-dental-ink leading-relaxed">
              Every crown, veneer, and composite restoration is cross-calibrated using calibrated clinical photography under standardized operatory lighting for exact natural enamel match.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
