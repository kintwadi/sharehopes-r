import React from 'react';
import { motion } from 'motion/react';

interface PageHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  accent?: string;
}

export function PageHeader({ label, title, subtitle, accent = "bg-emerald-600" }: PageHeaderProps) {
  return (
    <div className="relative pt-32 pb-20 bg-gray-900 overflow-hidden">
      <div className={`absolute top-0 right-0 w-1/2 h-full ${accent} opacity-10 skew-x-12 translate-x-1/4`} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {label && (
            <div className={`inline-block px-3 py-1 rounded-full ${accent} text-white text-[10px] font-extrabold uppercase tracking-[0.2em] mb-6 shadow-sm`}>
              {label}
            </div>
          )}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-white max-w-2xl leading-relaxed opacity-85">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
