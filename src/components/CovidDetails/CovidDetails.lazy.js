import React, { lazy, Suspense } from 'react';

const LazyCovidDetails = lazy(() => import('./CovidDetails'));

const CovidDetails = props => (
  <Suspense fallback={null}>
    <LazyCovidDetails {...props} />
  </Suspense>
);

export default CovidDetails;
