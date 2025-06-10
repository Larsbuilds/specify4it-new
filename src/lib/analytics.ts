declare global {
  interface Window {
    dataLayer: any[];
  }
}

export function initGA(measurementId: string) {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  const dataLayer = window.dataLayer;

  dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  });

  // Create script element with CSP-friendly loading
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Configure GA
  dataLayer.push('js', new Date());
  dataLayer.push('config', measurementId, {
    page_path: window.location.pathname,
    transport_type: 'beacon',
    anonymize_ip: true,
    cookie_flags: 'SameSite=Lax;Secure'
  });
}
