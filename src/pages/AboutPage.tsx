import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageHeader } from '@/src/components/PageHeader';
import { About } from '@/src/components/About';

export function AboutPage() {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeader 
        label={t('aboutPage.hero.label')}
        title={t('aboutPage.hero.title')} 
        subtitle={t('aboutPage.hero.subtitle')}
        accent="bg-emerald-600"
      />
      <About />
    </div>
  );
}
