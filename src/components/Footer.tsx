import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src="/images/logo.png" alt="ShareHopes Logo" className="w-10 h-10 object-contain" referrerPolicy="no-referrer" />
              <span className="text-2xl font-bold tracking-tight">
                Share<span className="text-emerald-600">Hopes</span>
              </span>
            </div>
            <p className="text-gray-400 text-lg max-w-sm mb-8">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/activities" className="hover:text-white transition-colors">{t('nav.activities')}</Link></li>
              <li><Link to="/volunteer" className="hover:text-white transition-colors">{t('nav.volunteer')}</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">{t('nav.about')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">{t('footer.contactUs')}</h4>
            <ul className="space-y-4 text-gray-400">
              <li>+49 176 878 20948</li>
              <li>+34 610 6073 95</li>
              <li>info@sharehopes.org</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            {t('footer.rights')}
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-white transition-colors">{t('footer.privacy')}</Link>
            <Link to="/terms" className="hover:text-white transition-colors">{t('footer.terms')}</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">{t('footer.cookie')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
