import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { 
  Heart, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  Utensils, 
  GraduationCap, 
  Activity, 
  Network,
  ArrowRight,
  TrendingUp,
  HandHelping
} from 'lucide-react';

export function About() {
  const { t } = useTranslation();

  return (
    <div className="space-y-0 text-gray-900">
      {/* Our Story Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img
                  src="/images/p10.jpeg"
                  alt="Our movement"
                  className="w-full aspect-[4/3] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-emerald-100 rounded-[2rem] -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8 leading-tight">
                {t('aboutPage.story.title')}
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t('aboutPage.story.p1')}
                </p>
                <div className="bg-emerald-50 border-l-4 border-emerald-600 p-8 rounded-r-2xl">
                  <p className="text-xl font-medium text-emerald-900 italic">
                    "{t('aboutPage.story.quote')}"
                  </p>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t('aboutPage.story.p2')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dual Mission Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6">{t('aboutPage.mission.title')}</h2>
            <p className="text-xl text-gray-600 italic">
              {t('aboutPage.mission.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Front 1: Direct Service */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                  <HandHelping className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">{t('aboutPage.mission.direct.title')}</h3>
              </div>
              <p className="text-gray-600 mb-10 leading-relaxed">
                {t('aboutPage.mission.direct.desc')}
              </p>
              <div className="space-y-6">
                {[
                  { key: 'food', icon: Utensils, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                  { key: 'youth', icon: GraduationCap, color: 'text-blue-600', bg: 'bg-blue-50' },
                  { key: 'health', icon: Activity, color: 'text-green-600', bg: 'bg-green-50' }
                ].map((item) => (
                  <div key={item.key} className="flex gap-4">
                    <div className={`w-12 h-12 shrink-0 rounded-xl ${item.bg} flex items-center justify-center ${item.color}`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{t(`aboutPage.mission.direct.${item.key}.title`)}</h4>
                      <p className="text-sm text-gray-600">{t(`aboutPage.mission.direct.${item.key}.desc`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Front 2: The Hub */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-blue-900 text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Network className="w-48 h-48" />
              </div>
              
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-blue-800 flex items-center justify-center text-blue-300">
                    <Network className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">{t('aboutPage.mission.hub.title')}</h3>
                </div>
                <p className="text-blue-100 mb-8 leading-relaxed text-lg">
                  {t('aboutPage.mission.hub.desc')}
                </p>
                <div className="bg-blue-800/50 p-6 rounded-2xl border border-blue-700/50 mb-8">
                  <p className="text-blue-50 leading-relaxed">
                    {t('aboutPage.mission.hub.detail')}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-blue-800">
                <span className="text-2xl font-bold text-blue-300">{t('aboutPage.mission.hub.tagline')}</span>
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Guiding Principles Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">{t('aboutPage.principles.title')}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 'empathy', icon: Heart, color: 'text-rose-600', bg: 'bg-rose-50' },
              { id: 'power', icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-50' },
              { id: 'dignity', icon: ShieldCheck, color: 'text-teal-600', bg: 'bg-teal-50' },
              { id: 'hope', icon: Sparkles, color: 'text-amber-600', bg: 'bg-amber-50' }
            ].map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-3xl bg-white border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-gray-200 hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl ${p.bg} flex items-center justify-center ${p.color} mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <p.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold mb-3">{t(`aboutPage.principles.${p.id}.title`)}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(`aboutPage.principles.${p.id}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision CTA */}
      <section className="py-24 bg-emerald-600 text-white relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-black/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-10">{t('aboutPage.future.title')}</h2>
            <div className="space-y-6 text-xl text-emerald-50 mb-12 leading-relaxed">
              <p>{t('aboutPage.future.p1')}</p>
              <p className="font-medium text-white">{t('aboutPage.future.p2')}</p>
            </div>
            <div className="inline-flex flex-col items-center gap-6">
              <p className="text-2xl font-bold text-emerald-200 italic">
                {t('aboutPage.future.cta')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
