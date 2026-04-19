import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { FileText } from 'lucide-react';

export function TermsPage() {
  const { t } = useTranslation();

  React.useEffect(() => {
    document.title = t('terms.title');
  }, [t]);

  return (
    <div className="bg-white">
      <PageHeader 
        title={t('terms.title')}
        subtitle={t('terms.lastUpdated')}
      />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                <FileText className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold m-0">{t('terms.s1.title')}</h2>
            </div>
            
            <div className="space-y-16">
              <p className="text-gray-600 bg-gray-50 p-6 rounded-xl border-l-4 border-emerald-600">
                {t('terms.s1.text')}
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">{t('terms.s2.title')}</h3>
                <p className="text-gray-600 mb-8">{t('terms.s2.text')}</p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-bold text-emerald-600 mb-4">{t('terms.s2.sub1')}</h4>
                    <p className="text-gray-600 text-sm">{t('terms.s2.item1')}</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-bold text-emerald-600 mb-4">{t('terms.s2.sub2')}</h4>
                    <p className="text-gray-600 text-sm">{t('terms.s2.item2')}</p>
                  </div>
                </div>
              </div>

              {[3, 4, 5, 6, 7, 8, 9].map((num) => (
                <div key={num} className="border-b border-gray-100 pb-12">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">{t(`terms.s${num}.title`)}</h3>
                  <p className="text-gray-600">{t(`terms.s${num}.text`)}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
