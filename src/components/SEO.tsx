import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage = '/hero-home-HSC.webp',
  ogType = 'website',
  canonicalUrl,
  structuredData
}) => {
  const location = useLocation();
  const baseUrl = 'https://www.hscbuilders.co.uk';

  const pathname = location.pathname === '/' ? '' : location.pathname;
  const fullUrl = canonicalUrl || `${baseUrl}${pathname}`;
  const fullTitle = `${title} | HSC Builders - Hamilton, Bothwell & Lanarkshire`;

  useEffect(() => {
    document.title = fullTitle;

    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);

    updateMetaTag('og:title', fullTitle, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:url', fullUrl, 'property');
    updateMetaTag('og:type', ogType, 'property');
    updateMetaTag('og:image', `${baseUrl}${ogImage}`, 'property');
    updateMetaTag('og:site_name', 'HSC Builders', 'property');
    updateMetaTag('og:locale', 'en_GB', 'property');

    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', `${baseUrl}${ogImage}`);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // Prevent duplicate content from hash-based URLs
    if (window.location.hash.includes('#/')) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    }

    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [fullTitle, description, keywords, fullUrl, ogImage, ogType, structuredData]);

  return null;
};

export const getLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'HSC Builders',
  image: 'https://www.hscbuilders.co.uk/hsc-logo.webp',
  '@id': 'https://www.hscbuilders.co.uk',
  url: 'https://www.hscbuilders.co.uk',
  telephone: '+44-1698-123456',
  priceRange: '££',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hamilton',
    addressLocality: 'South Lanarkshire',
    addressRegion: 'Scotland',
    postalCode: 'ML3',
    addressCountry: 'GB'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 55.7795,
    longitude: -4.0390
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday'
    ],
    opens: '08:00',
    closes: '18:00'
  },
  sameAs: [
    'https://www.facebook.com/hscbuilders',
    'https://www.instagram.com/hscbuilders'
  ],
  areaServed: [
    {
      '@type': 'City',
      name: 'Hamilton'
    },
    {
      '@type': 'City',
      name: 'Bothwell'
    },
    {
      '@type': 'City',
      name: 'Newton Farm'
    },
    {
      '@type': 'City',
      name: 'Jackton'
    }
  ]
});

export const getServiceSchema = (serviceName: string, description: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: serviceName,
  provider: {
    '@type': 'LocalBusiness',
    name: 'HSC Builders'
  },
  areaServed: {
    '@type': 'State',
    name: 'South Lanarkshire'
  },
  description: description
});

export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `https://www.hscbuilders.co.uk${item.url}`
  }))
});
