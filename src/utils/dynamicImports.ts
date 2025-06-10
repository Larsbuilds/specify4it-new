'use client';

import dynamic from 'next/dynamic';
import { type DynamicOptionsLoadingProps } from 'next/dynamic';
import React from 'react';

const LoadingSection = (_props: DynamicOptionsLoadingProps) => {
  return React.createElement('div', {
    className: 'h-24 w-full animate-pulse bg-gray-800 rounded'
  });
};

const LoadingCard = (_props: DynamicOptionsLoadingProps) => {
  return React.createElement('div', {
    className: 'h-24 w-full animate-pulse bg-gray-800 rounded'
  });
};

export const DynamicCTASection = dynamic(
  () => import('@/components/CTASection').then(mod => mod.default),
  {
    loading: LoadingSection,
    ssr: false
  }
);

export const DynamicFeatureCard = dynamic(
  () => import('@/components/FeatureCard').then(mod => mod.default),
  {
    loading: LoadingCard,
    ssr: false
  }
);

// Add more dynamic imports as needed
