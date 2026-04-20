import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Calendar, Star, X, Maximize2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const timelineImages = {
  '2025': Array.from({ length: 24 }, (_, i) => 
    `${import.meta.env.BASE_URL}images/p${i + 1}.jpeg`
  ),
  '2026': [
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200',
    'https://unsplash.com/photos/young-female-volunteer-in-uniform-holding-ladle-with-cooked-food-over-big-pan-before-putting-it-into-plastic-container-for-refugees-L16RFw7Ce4w'
  ]
};

const years = ['2025', '2026'];

export function ActivityTimeline() {
  const { t } = useTranslation();
  const [activeStage, setActiveStage] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const stages = useMemo(() => years.map(year => ({
    year,
    title: t(`timeline.stages.${year}.title`),
    description: t(`timeline.stages.${year}.description`),
    images: timelineImages[year as keyof typeof timelineImages]
  })), [t]);

  const stage = stages[activeStage];

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % stage.images.length);
  }, [stage.images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + stage.images.length) % stage.images.length);
  }, [stage.images.length]);

  useEffect(() => {
    if (isLightboxOpen) return;
    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, [nextImage, isLightboxOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') setIsLightboxOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, nextImage, prevImage]);

  return (
    <section className="py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Timeline Navigation */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-3 h-3" />
              {t('timeline.label')}
            </div>
            
            <div className="relative space-y-12 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
              {stages.map((item, index) => (
                <button
                  key={item.year}
                  onClick={() => {
                    setActiveStage(index);
                    setCurrentImageIndex(0);
                  }}
                  className={cn(
                    "relative pl-12 text-left transition-all group",
                    activeStage === index ? "opacity-100" : "opacity-50 hover:opacity-80"
                  )}
                >
                  <div className={cn(
                    "absolute left-0 top-1 w-10 h-10 rounded-full border-4 border-white shadow-md flex items-center justify-center transition-all",
                    activeStage === index ? "bg-emerald-600 scale-110" : "bg-gray-200 group-hover:bg-gray-300"
                  )}>
                    <Star className={cn("w-4 h-4", activeStage === index ? "text-white" : "text-gray-500")} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{item.year}</div>
                  <div className="text-lg font-semibold text-emerald-600 mb-2">{item.title}</div>
                  {activeStage === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-gray-600 leading-relaxed text-sm"
                    >
                      {item.description}
                    </motion.p>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Slideshow Display */}
          <div className="w-full lg:w-2/3 relative group">
            <div className="relative aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-100">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${activeStage}-${currentImageIndex}`}
                  src={stage.images[currentImageIndex]}
                  alt={`${stage.year} ${t('timeline.accessibility.activity')}`}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => setIsLightboxOpen(true)}
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Expand Button Overlay */}
              <button 
                onClick={() => setIsLightboxOpen(true)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white/40"
              >
                <Maximize2 className="w-5 h-5" />
              </button>

              {/* Controls */}
              <div className="absolute bottom-8 right-8 flex gap-3">
                <button
                  onClick={prevImage}
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Indicators */}
              <div className="absolute bottom-8 left-8 flex gap-2">
                {stage.images.map((_, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "h-1.5 rounded-full transition-all cursor-pointer",
                      currentImageIndex === idx ? "w-8 bg-emerald-600" : "w-2 bg-white/50"
                    )}
                    onClick={() => setCurrentImageIndex(idx)}
                  />
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-100 rounded-full -z-10 blur-2xl opacity-50" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-100 rounded-full -z-10 blur-3xl opacity-50" />
          </div>

        </div>
      </div>

      {/* Lightbox / Fullscreen Slide Show */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 lg:p-12"
          >
            {/* Header / Actions */}
            <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between text-white bg-gradient-to-b from-black/80 to-transparent">
              <div>
                <h3 className="text-xl font-bold">{stage.year}</h3>
                <p className="text-gray-400 text-sm">{stage.title}</p>
              </div>
              <button 
                onClick={() => setIsLightboxOpen(false)}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Stage */}
            <div className="relative w-full h-full flex items-center justify-center group/stage">
              <button
                onClick={prevImage}
                className="absolute left-4 lg:left-8 z-10 w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all opacity-0 group-hover/stage:opacity-100"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <div className="relative w-full h-full max-w-5xl max-h-[70vh] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={stage.images[currentImageIndex]}
                    alt={t('timeline.accessibility.currentActivity')}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="max-h-full max-w-full object-contain shadow-2xl rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
              </div>

              <button
                onClick={nextImage}
                className="absolute right-4 lg:right-8 z-10 w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all opacity-0 group-hover/stage:opacity-100"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="w-full mt-8 overflow-x-auto pb-4 scrollbar-hide">
              <div className="flex gap-4 px-12 mx-auto justify-center min-w-max">
                {stage.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={cn(
                      "relative w-20 h-20 lg:w-24 lg:h-24 rounded-xl overflow-hidden shrink-0 transition-all border-2",
                      currentImageIndex === idx 
                        ? "border-emerald-600 scale-105 shadow-lg shadow-emerald-600/20" 
                        : "border-transparent opacity-50 hover:opacity-100"
                    )}
                  >
                    <img
                      src={img}
                      alt={`${t('timeline.accessibility.thumbnail')} ${idx}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
