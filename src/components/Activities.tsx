import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Utensils, GraduationCap, TreePine, Heart, Users, ShieldCheck } from 'lucide-react';

interface ActivitiesProps {
  showTitle?: boolean;
}

export function Activities({ showTitle = true }: ActivitiesProps) {
  const { t } = useTranslation();

  const activities = [
    {
      id: 'food-distribution',
      icon: Utensils,
      color: 'bg-emerald-100 text-emerald-600',
      title: t('activities.foodDistribution.title'),
      desc: t('activities.foodDistribution.desc'),
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'hot-meals',
      icon: Heart,
      color: 'bg-red-100 text-red-600',
      title: t('activities.hotMeals.title'),
      desc: t('activities.hotMeals.desc'),
      image: 'https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'school-supplies',
      icon: GraduationCap,
      color: 'bg-blue-100 text-blue-600',
      title: t('activities.schoolSupplies.title'),
      desc: t('activities.schoolSupplies.desc'),
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'hospital-aid',
      icon: ShieldCheck,
      color: 'bg-yellow-100 text-yellow-600',
      title: t('activities.hospitalAid.title'),
      desc: t('activities.hospitalAid.desc'),
      image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'serve-strengthen',
      icon: Users,
      color: 'bg-teal-100 text-teal-600',
      title: t('activities.serveStrengthen.title'),
      desc: t('activities.serveStrengthen.desc'),
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="activities" className="py-24 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              {t('activities.title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              {t('activities.subtitle')}
            </motion.p>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <div className={`${activity.color} p-3 rounded-2xl shadow-lg backdrop-blur-sm`}>
                    <activity.icon className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {activity.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {activity.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
