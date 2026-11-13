import React, { useState, useRef, useCallback, useEffect } from 'react';
import { clinicData } from '../config/clinicData';
import { MoveHorizontal, Check, Sparkles } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(800);

  const activeCase = clinicData.beforeAfterCases[activeCaseIndex];

  // Measure container width so the clipped before image matches the after image 1:1 perfectly
  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(containerRef.current);
    window.addEventListener('resize', updateWidth);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percentage = (clampedX / rect.width) * 100;
    setSliderPos(percentage);
  }, []);

  // Global drag listener so fast cursor movement doesn't drop the slider
  useEffect(() => {
    const handleGlobalMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = 'touches' in e ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
      handleMove(clientX);
    };

    const handleGlobalUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleGlobalMove);
      window.addEventListener('mouseup', handleGlobalUp);
      window.addEventListener('touchmove', handleGlobalMove, { passive: true });
      window.addEventListener('touchend', handleGlobalUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleGlobalMove);
      window.removeEventListener('mouseup', handleGlobalUp);
      window.removeEventListener('touchmove', handleGlobalMove);
      window.removeEventListener('touchend', handleGlobalUp);
    };
  }, [isDragging, handleMove]);

  return (
    <section id="smile-gallery" className="scroll-mt-36 lg:scroll-mt-28 py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Documented Smile Transformations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            See the Life-Changing Smile Makeovers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Drag the comparison slider left and right to inspect real close-up smile transformations, in-office laser teeth whitening, and aesthetic porcelain veneer restorations completed at Apex Dental.
          </p>

          {/* Case Selector Tabs */}
          {clinicData.beforeAfterCases.length > 1 && (
            <div className="flex flex-wrap items-center gap-2 mt-8">
              {clinicData.beforeAfterCases.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveCaseIndex(idx);
                    setSliderPos(50);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeCaseIndex === idx
                      ? 'bg-slate-900 text-white shadow-md shadow-slate-900/15'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {item.tag}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Main Transformation Showcase Card */}
        <div className="max-w-4xl mx-auto bg-slate-50/80 rounded-3xl p-4 sm:p-8 border border-slate-200 shadow-card">
          
          {/* Active Case Meta Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-2">
            <div>
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wide">
                Case Study: {activeCase.tag}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                {activeCase.title}
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full shadow-sm">
              <Check className="w-3.5 h-3.5 text-teal-600" />
              <span>{activeCase.treatmentDuration}</span>
            </div>
          </div>

          {/* Interactive Drag Viewport - Native 4:3 Aspect Matching the 1024x768 Photos */}
          <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden select-none cursor-ew-resize bg-slate-900 shadow-inner"
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              handleMove(e.touches[0].clientX);
            }}
          >
            {/* AFTER Image: Real Outcome (No synthetic CSS filter) */}
            <img
              src={activeCase.afterImg}
              alt={`After smile transformation - ${activeCase.title}`}
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />
            <div className="absolute top-4 right-4 bg-teal-950/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg pointer-events-none border border-teal-400/30 flex items-center gap-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>{activeCase.afterLabel || 'After Treatment'}</span>
            </div>

            {/* BEFORE Image (Clipped layer - Real authentic clinical presentation, no synthetic CSS filter) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={activeCase.beforeImg}
                alt={`Before smile presentation - ${activeCase.title}`}
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none pointer-events-none"
                style={{
                  width: `${containerWidth}px`,
                }}
              />
              <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg pointer-events-none border border-white/20 flex items-center gap-1.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>{activeCase.beforeLabel || 'Before Treatment'}</span>
              </div>
            </div>

            {/* Drag Divider & Glowing Handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none transform -translate-x-1/2 flex items-center justify-center z-20"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center border-2 border-white shadow-xl shadow-slate-900/40">
                <MoveHorizontal className="w-4 h-4 text-teal-400" />
              </div>
            </div>
          </div>

          {/* Hint & Case Description */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-4 text-xs sm:text-sm text-slate-600">
            <span className="flex items-center gap-1.5 text-teal-700 font-semibold">
              <MoveHorizontal className="w-4 h-4 text-teal-600" />
              <span>Drag slider left or right to inspect tooth shade, enamel polish, and alignment</span>
            </span>
            <span className="text-slate-500 italic">
              {activeCase.description}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
