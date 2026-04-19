import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageHeader } from '@/src/components/PageHeader';
import { VolunteerForm } from '@/src/components/VolunteerForm';

export function VolunteerPage() {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeader 
        label={t('volunteer.label')}
        title={t('volunteer.title')} 
        subtitle={t('volunteer.subtitle')}
        accent="bg-emerald-600"
      />
      <VolunteerForm />
    </div>
  );
}
