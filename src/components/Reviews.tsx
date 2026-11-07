import React from 'react';
import { Star, CheckCircle, Sparkles } from 'lucide-react';
import { clinicData } from '../config/clinicData';

export const Reviews: React.FC = () => {
  const meta = clinicData.googleReviewsMeta;

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Verified Patient Proof</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Patient Experiences & Trust
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Unfiltered feedback from Mumbai residents who overcame dental anxiety through gentle, computer-guided treatment at Apex Dental.
            </p>
          </div>

          {/* Google Rating Badge */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center font-extrabold text-amber-600 text-xl">
              {meta.rating}
            </div>
            <div>
              <div className="flex items-center text-amber-400 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-slate-900 block">
                {meta.reviewCount}+ Verified Reviews
              </span>
              <span className="text-xs text-slate-500 font-medium">Google Maps Verified Clinic</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clinicData.reviews.map((rev) => (
            <div 
              key={rev.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Treatment Pill & Stars */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-800 border border-teal-200/60">
                    {rev.treatmentTag}
                  </span>
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Verification */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <span>{rev.author}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
                  </h4>
                  <p className="text-xs text-slate-500">{rev.location}</p>
                </div>
                <span className="text-xs text-slate-400">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
