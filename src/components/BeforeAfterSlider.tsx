import React, { useState, useRef, useCallback } from 'react';
import { clinicData } from '../config/clinicData';
import { Sparkles, MoveHorizontal, CheckCircle } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 to 100
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
    <section id="smile-gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            Clinical Transformation Gallery
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Real Smiles. Real Confidence.
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Drag the slider to compare real patient transformations before and after care at Apex Dental.
          </p>

          {/* Case Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {clinicData.beforeAfterCases.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setSliderPos(50);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCaseIndex === idx
                    ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {item.tag}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Card */}
        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200/80 rounded-3xl p-4 sm:p-8 shadow-lg">
          
          {/* Active Case Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase text-teal-700 tracking-wider">
                Case Study: {activeCase.tag}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                {activeCase.title}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold bg-white border border-teal-200 px-3 py-1.5 rounded-lg text-teal-800">
              <CheckCircle className="w-4 h-4 text-teal-600" />
              <span>{activeCase.treatmentDuration}</span>
            </div>
          </div>

          {/* Comparison Viewport */}
          <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-2xl overflow-hidden select-none cursor-ew-resize bg-slate-200 shadow-inner"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onClick={(e) => handleMove(e.clientX)}
          >
            {/* AFTER Image (Full background) */}
            <img
              src={activeCase.afterImg}
              alt="After dental transformation result"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            {/* AFTER Label */}
            <div className="absolute top-4 right-4 bg-teal-700/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md shadow-md z-10 pointer-events-none">
              After Treatment ✨
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
              {/* BEFORE Label */}
              <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md shadow-md z-10">
                Initial Condition
              </div>
            </div>

            {/* Divider Handle Bar */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none transform -translate-x-1/2 flex items-center justify-center"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-teal-600 text-white shadow-xl flex items-center justify-center border-2 border-white ring-4 ring-teal-500/30">
                <MoveHorizontal className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* User Prompt / Hint */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-5 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <MoveHorizontal className="w-4 h-4 text-teal-600" />
              Drag the slider left or right to inspect the aesthetic gum line and tooth alignment
            </span>
            <span className="text-slate-600 italic">
              {activeCase.description}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

