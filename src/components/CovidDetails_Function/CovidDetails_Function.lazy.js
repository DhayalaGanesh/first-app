import React, { lazy, Suspense } from 'react';

const LazyCovidDetails_Function = lazy(() => import('./CovidDetails_Function'));

const CovidDetails_Function = props => (
  <Suspense fallback={null}>
    <LazyCovidDetails_Function {...props} />
  </Suspense>
);

export default CovidDetails_Function;
