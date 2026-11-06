import React from 'react';
import { clinicData } from '../config/clinicData';

export const Reviews: React.FC = () => {
  const meta = clinicData.googleReviewsMeta;
  const [featuredReview, ...otherReviews] = clinicData.reviews;

  return (
    <section id="reviews" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header & Google Score Card */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-14 motion-reveal">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dental-ink tracking-tight">
              Patient Experiences & Trust
            </h2>
            <p className="mt-3 text-base sm:text-lg text-dental-ink leading-relaxed">
              Unfiltered feedback from Mumbai residents who overcame dental anxiety through gentle, computer-guided treatment at Apex Dental.
            </p>
          </div>

          {/* Simple Clean Google Score Strip */}
          <div className="bg-dental-surface rounded-specimen p-4 flex items-center gap-4 shrink-0">
            <div className="text-2xl font-extrabold text-dental-ink">
              {meta.rating} <span className="text-sm font-semibold text-dental-ink">/ 5.0</span>
            </div>
            <div className="text-sm text-dental-ink">
              <strong className="text-dental-ink block">{meta.reviewCount}+ Verified Patient Reviews</strong>
              <span className="text-[13px] text-dental-muted">Google Maps Verified Clinic Profile</span>
            </div>
          </div>
        </div>

        {/* Varied Editorial Composition: Featured First Story (7 cols) + Two Supporting (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 motion-reveal">
          
          {/* Featured In-Depth Review */}
          {featuredReview && (
            <div className="lg:col-span-7 bg-dental-surface rounded-specimen p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-[13px] font-bold text-dental-accent block mb-4">
                  {featuredReview.treatmentTag}
                </span>
                <blockquote className="text-lg sm:text-xl text-dental-ink leading-relaxed font-medium">
                  "{featuredReview.comment}"
                </blockquote>
              </div>

              <div className="pt-6 mt-8 flex items-center justify-between text-sm">
                <div>
                  <h4 className="font-bold text-dental-ink text-base">{featuredReview.author}</h4>
                  <p className="text-[13px] text-dental-ink font-medium">{featuredReview.location}</p>
                </div>
                <span className="text-[13px] text-dental-muted">{featuredReview.date}</span>
              </div>
            </div>
          )}

          {/* Stacked Supporting Testimonials */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {otherReviews.map((rev) => (
              <div 
                key={rev.id}
                className="bg-dental-surface rounded-specimen p-6 sm:p-7 flex flex-col justify-between flex-1"
              >
                <div>
                  <div className="text-[13px] font-bold text-dental-accent mb-2">
                    {rev.treatmentTag}
                  </div>
                  <blockquote className="text-base text-dental-ink leading-relaxed">
                    "{rev.comment}"
                  </blockquote>
                </div>

                <div className="pt-4 mt-4 flex items-center justify-between text-sm">
                  <div>
                    <h4 className="font-bold text-dental-ink">{rev.author}</h4>
                    <p className="text-[13px] text-dental-ink font-medium">{rev.location}</p>
                  </div>
                  <span className="text-[13px] text-dental-muted">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
