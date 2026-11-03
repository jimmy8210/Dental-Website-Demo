import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { clinicData } from '../config/clinicData';

export const Reviews: React.FC = () => {
  const meta = clinicData.googleReviewsMeta;

  return (
    <section id="reviews" className="py-20 bg-brand-mint/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header & Rating Trust Summary */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-14">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 bg-teal-100/80 text-teal-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              Patient Experiences
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
              Loved by Patients. Trusted by Families.
            </h2>
            <p className="mt-2 text-slate-600 text-base max-w-xl">
              Authentic feedback from real patients across Mumbai who overcame dental anxiety at Apex Dental.
            </p>
          </div>

          {/* Google Review Score Card */}
          <div className="bg-white border border-teal-100 rounded-2xl p-5 shadow-md flex items-center gap-5 shrink-0">
            {/* Google G logo simulation */}
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center font-bold text-xl text-teal-700 shadow-inner">
              G
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold text-slate-900">{meta.rating}</span>
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs font-medium text-slate-500 mt-0.5">
                Based on <strong className="text-slate-800 font-bold">{meta.reviewCount}+ Verified</strong> Google Reviews
              </p>
            </div>
          </div>
        </div>

        {/* 3 Verified Google Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {clinicData.reviews.map((rev) => (
            <div 
              key={rev.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative"
            >
              <div>
                {/* Top: Stars & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">
                    {rev.date}
                  </span>
                </div>

                {/* Treatment Tag */}
                <div className="mb-4">
                  <span className="inline-block text-[11px] font-bold bg-teal-50 text-teal-800 border border-teal-200/60 px-2.5 py-1 rounded-full">
                    {rev.treatmentTag}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <div className="relative mb-6">
                  <Quote className="w-6 h-6 text-teal-100 absolute -top-2 -left-2 -z-0" />
                  <p className="text-sm text-slate-700 leading-relaxed relative z-10 italic">
                    "{rev.comment}"
                  </p>
                </div>
              </div>

              {/* Author & Verification Badge */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${rev.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-sm`}>
                  {rev.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    {rev.author}
                    {rev.verified && (
                      <span title="Google Verified Reviewer" className="inline-flex items-center">
                        <CheckCircle className="w-3.5 h-3.5 text-teal-600 fill-teal-100" />
                      </span>
                    )}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {rev.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
