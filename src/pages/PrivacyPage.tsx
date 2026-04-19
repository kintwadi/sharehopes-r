import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { ShieldCheck } from 'lucide-react';

export function PrivacyPage() {
  const { t } = useTranslation();

  React.useEffect(() => {
    document.title = t('privacy.title');
  }, [t]);

  return (
    <div className="bg-white">
      <PageHeader 
        title={t('privacy.title')}
        subtitle={t('privacy.lastUpdated')}
        accent="bg-blue-600"
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
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold m-0">{t('privacy.commitment.title')}</h2>
            </div>
            
            <p className="text-gray-600 mb-12 italic border-l-4 border-blue-600 pl-6 py-2 bg-gray-50 rounded-r-lg">
              {t('privacy.commitment.text')}
            </p>

            <div className="space-y-12">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">{t('privacy.sections.s1.title')}</h3>
                <p className="text-gray-600 mb-6">{t('privacy.sections.s1.text')}</p>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">{t('privacy.sections.s1.sub1')}</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>{t('privacy.sections.s1.item1')}</li>
                      <li>{t('privacy.sections.s1.item2')}</li>
                      <li>{t('privacy.sections.s1.item3')}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">{t('privacy.sections.s1.sub2')}</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>{t('privacy.sections.s1.item4')}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {[2, 3, 4, 6, 7, 8].map((num) => (
                <div key={num} className="border-b border-gray-100 pb-12">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">{t(`privacy.sections.s${num}.title`)}</h3>
                  <p className="text-gray-600 mb-6">{t(`privacy.sections.s${num}.text`)}</p>
                  {t(`privacy.sections.s${num}.item1`) !== `privacy.sections.s${num}.item1` && (
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>{t(`privacy.sections.s${num}.item1`)}</li>
                      {t(`privacy.sections.s${num}.item2`) !== `privacy.sections.s${num}.item2` && <li>{t(`privacy.sections.s${num}.item2`)}</li>}
                      {t(`privacy.sections.s${num}.item3`) !== `privacy.sections.s${num}.item3` && <li>{t(`privacy.sections.s${num}.item3`)}</li>}
                    </ul>
                  )}
                </div>
              ))}

              <div className="border-b border-gray-100 pb-12">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">{t('privacy.sections.s5.title')}</h3>
                <ul className="list-disc pl-6 space-y-4 text-gray-600">
                  <li>{t('privacy.sections.s5.item1')}</li>
                  <li>{t('privacy.sections.s5.item2')}</li>
                  <li>{t('privacy.sections.s5.item3')}</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
