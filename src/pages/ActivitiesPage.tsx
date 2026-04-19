import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageHeader } from '@/src/components/PageHeader';
import { Activities } from '@/src/components/Activities';
import { ActivityTimeline } from '@/src/components/ActivityTimeline';

export function ActivitiesPage() {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeader 
        label={t('activities.label')}
        title={t('activities.title')} 
        subtitle={t('activities.subtitle')}
        accent="bg-blue-600"
      />
      <ActivityTimeline />
      <Activities showTitle={false} />
    </div>
  );
}
