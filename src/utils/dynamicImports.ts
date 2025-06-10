import dynamic from 'next/dynamic';
import React from 'react';

// Simple loading component
const LoadingComponent = () => {
  return React.createElement('div', { className: 'h-24' });
};

// Dynamically import components that are not needed for initial page load
export const DynamicCTASection = dynamic(
  () => import('@/components/CTASection'),
  {
    loading: LoadingComponent,
    ssr: false
  }
);

export const DynamicFeatureCard = dynamic(
  () => import('@/components/FeatureCard'),
  {
    ssr: true
  }
);

// Add more dynamic imports as needed
