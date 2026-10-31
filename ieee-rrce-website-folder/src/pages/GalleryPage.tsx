import React, { useState, useEffect, useCallback } from 'react';
import { 
  Camera, 
  Filter, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  AlertCircle, 
  Info, 
  Maximize2 
} from 'lucide-react';
import { GALLERY_DATA, GalleryPhoto } from '../data/branchData';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const categories = ['All', 'TechFest & Symposiums', 'Hands-on Labs', 'Team & Field Visits'];

  const filteredPhotos = selectedCategory === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(p => p.category === selectedCategory);

  const activePhoto = activePhotoIndex !== null ? filteredPhotos[activePhotoIndex] : null;

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (activePhotoIndex === null) return;

    if (e.key === 'Escape') {
      setActivePhotoIndex(null);
    } else if (e.key === 'ArrowRight') {
      setActivePhotoIndex((prev) => (prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowLeft') {
      setActivePhotoIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1));
    }
  }, [activePhotoIndex, filteredPhotos.length]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const openLightbox = (index: number) => {
    setActivePhotoIndex(index);
  };

  const nextPhoto = () => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0));
  };

  const prevPhoto = () => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#00629B] bg-[#00629B]/10 px-3 py-1 rounded-full">
            Visual Documentation
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Branch Photo & Activity Gallery
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
            Moments from IEEE TechFest symposia, electronics laboratory hardware sprints, and student chapter initiatives.
          </p>
        </div>

        {/* Category selector */}
        <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1.5 rounded-xl text-xs shrink-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setActivePhotoIndex(null);
              }}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-white text-[#00629B] font-bold shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Editorial Disclaimer on Image Classification */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-600 flex items-start gap-2.5">
        <Info className="w-4 h-4 text-[#00629B] shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <span className="font-semibold text-slate-800">Visual Identity Note:</span> To maintain genuine representations of student activity, images representing standard conference themes or hands-on laboratory setups are visibly designated with an <em>[Illustrative Engineering Demonstration]</em> label to prevent confusion with official campus archives.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo, index) => (
          <div
            key={photo.id}
            className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            {/* Image Container */}
            <div className="relative aspect-video bg-slate-900 overflow-hidden">
              <img
                src={photo.imageUrl}
                alt={photo.altText}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />

              {/* Badges */}
              <div className="absolute top-3 left-3">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-900/80 backdrop-blur-md text-white px-2 py-0.5 rounded border border-white/20">
                  {photo.category}
                </span>
              </div>

              {photo.isIllustrative && (
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-medium bg-amber-500/90 text-slate-950 px-2 py-0.5 rounded">
                    Illustrative
                  </span>
                </div>
              )}

              <div className="absolute bottom-3 right-3 p-1.5 rounded-lg bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>

            {/* Caption */}
            <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold text-[#00629B]">
                  {photo.dateLabel}
                </span>
                <h3 className="font-bold text-sm text-slate-900 line-clamp-1 mt-0.5">
                  {photo.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
                  {photo.caption}
                </p>
              </div>

              <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-100 flex items-center justify-between">
                <span>Click to view full lightbox</span>
                <span className="font-medium text-[#00629B]">Expand ↗</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ACCESSIBLE LIGHTBOX MODAL */}
      {activePhoto && activePhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox"
        >
          {/* Close button */}
          <button
            onClick={() => setActivePhotoIndex(null)}
            className="absolute top-4 right-4 z-50 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close Lightbox (Escape)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Previous Image (Left Arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Next Image (Right Arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Content Box */}
          <div className="max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col max-h-[90vh]">
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] max-h-[65vh]">
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.altText}
                className="max-h-[65vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="p-5 bg-slate-900 text-white space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="text-[#00B5E2] font-semibold">
                  {activePhoto.category} • {activePhoto.dateLabel}
                </span>
                <span>
                  Photo {activePhotoIndex + 1} of {filteredPhotos.length}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {activePhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activePhoto.caption}
              </p>
              {activePhoto.isIllustrative && (
                <p className="text-[11px] text-amber-400/90 pt-1">
                  * Note: This image serves as an illustrative technical demonstration of student engineering activities.
                </p>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
