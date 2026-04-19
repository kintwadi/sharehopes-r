import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { Cookie } from 'lucide-react';

export function CookiePage() {
  const { t } = useTranslation();

  React.useEffect(() => {
    document.title = t('cookies.title');
  }, [t]);

  return (
    <div className="bg-white">
      <PageHeader 
        title={t('cookies.title')}
        subtitle={t('cookies.lastUpdated')}
        accent="bg-emerald-600"
      />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Cookie className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold m-0">{t('cookies.explanation.title')}</h2>
            </div>
            
            <div className="space-y-6 mb-12 italic border-l-4 border-emerald-600 pl-6 py-2 bg-gray-50 rounded-r-lg">
              <p className="text-gray-600 m-0">{t('cookies.explanation.p1')}</p>
              <p className="text-gray-600 m-0">{t('cookies.explanation.p2')}</p>
            </div>

            <div className="space-y-12">
              <div className="border-b border-gray-100 pb-12">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">{t('cookies.why.title')}</h3>
                <p className="text-gray-600">{t('cookies.why.text')}</p>
              </div>

              {[1, 2, 3].map((num) => (
                <div key={num} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mb-12 last:mb-0">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">{t(`cookies.sections.s${num}.title`)}</h3>
                  <p className="text-gray-600 mb-6">{t(`cookies.sections.s${num}.desc`)}</p>
                  
                  <div className="space-y-4">
                    {t(`cookies.sections.s${num}.examples`) !== `cookies.sections.s${num}.examples` && (
                      <div className="bg-white p-4 rounded-lg border border-gray-100">
                        <strong className="text-gray-900 block mb-1">Examples:</strong>
                        <p className="text-gray-600 m-0">{t(`cookies.sections.s${num}.examples`)}</p>
                      </div>
                    )}
                    
                    {t(`cookies.sections.s${num}.data`) !== `cookies.sections.s${num}.data` && (
                      <div className="bg-white p-4 rounded-lg border border-gray-100">
                        <strong className="text-gray-900 block mb-1">Impact Tracking:</strong>
                        <p className="text-gray-600 m-0">{t(`cookies.sections.s${num}.data`)}</p>
                      </div>
                    )}

                    {t(`cookies.sections.s${num}.optOut`) !== `cookies.sections.s${num}.optOut` && (
                      <p className="text-sm font-medium text-emerald-700 m-0">
                        {t(`cookies.sections.s${num}.optOut`)}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              <div className="border-b border-gray-100 pb-12">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">{t('cookies.thirdParty.title')}</h3>
                <p className="text-gray-600">{t('cookies.thirdParty.text')}</p>
              </div>

              <div className="border-b border-gray-100 pb-12">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">{t('cookies.notUsed.title')}</h3>
                <p className="text-gray-600">{t('cookies.notUsed.text')}</p>
              </div>

              <div className="border-b border-gray-100 pb-12">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">{t('cookies.managing.title')}</h3>
                <p className="text-gray-600 mb-8">{t('cookies.managing.text')}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-3">{t('cookies.managing.opt1.title')}</h4>
                    <p className="text-sm text-gray-600 m-0">{t('cookies.managing.opt1.text')}</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-3">{t('cookies.managing.opt2.title')}</h4>
                    <p className="text-sm text-gray-600 m-0">{t('cookies.managing.opt2.text')}</p>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-100 pb-12">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">{t('cookies.updates.title')}</h3>
                <p className="text-gray-600">{t('cookies.updates.text')}</p>
              </div>

              <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">{t('cookies.contact.title')}</h3>
                <p className="text-gray-600 mb-4">{t('cookies.contact.text')}</p>
                <div className="flex flex-col">
                  <span className="font-bold text-gray-900">{t('cookies.contact.team')}</span>
                  <a href="mailto:info@sharehopes.org" className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors">
                    info@sharehopes.org
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
