import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import { motion } from 'motion/react';
import { Link, NavLink } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export function Navbar() {
  const { t } = useTranslation();

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "text-sm font-medium transition-colors",
      isActive ? "text-emerald-600" : "text-gray-600 hover:text-emerald-600"
    );

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="group-hover:scale-110 transition-transform"
            >
              <img src="/images/logo.png" alt="ShareHopes Logo" className="w-10 h-10 object-contain" referrerPolicy="no-referrer" />
            </motion.div>
            <span className="text-2xl font-bold tracking-tight text-gray-900">
              Share<span className="text-emerald-600">Hopes</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={navLinkClass}>
              {t('nav.home')}
            </NavLink>
            <NavLink to="/activities" className={navLinkClass}>
              {t('nav.activities')}
            </NavLink>
            <NavLink to="/volunteer" className={navLinkClass}>
              {t('nav.volunteer')}
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              {t('nav.about')}
            </NavLink>
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link to="/volunteer" className="hidden sm:block bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-600 transition-all active:scale-95">
              {t('nav.volunteer')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
