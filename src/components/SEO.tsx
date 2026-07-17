import { useEffect } from 'react';
import { products, reviews, FAQs } from '../data';

export default function SEO() {
  useEffect(() => {
    // Set Document Title & Description
    document.title = "Kopi Nusantara | Premium Indonesian Coffee Shop & Roastery";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Experience authentic Indonesian coffee brewed fresh. Explore premium single-origin beans from local Gayo, Lampung, Toraja, and Bali farmers.');

    // Set Robots meta
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', 'index, follow');

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);

    // Open Graph Tags
    const ogTags = {
      'og:title': 'Kopi Nusantara | Premium Indonesian Coffee Shop & Roastery',
      'og:description': 'Authentic Indonesian single-origin coffee freshly roasted in-house. Sourced ethically directly from Gayo, Lampung, Toraja, and Bali Kintamani farmers.',
      'og:image': 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200',
      'og:url': window.location.href,
      'og:type': 'website',
      'og:site_name': 'Kopi Nusantara',
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Twitter Cards
    const twitterTags = {
      'twitter:card': 'summary_large_image',
      'twitter:title': 'Kopi Nusantara | Premium Indonesian Coffee Shop & Roastery',
      'twitter:description': 'Ethically sourced single-origin coffee beans from the Indonesian archipelago, roasted in small batches for peak flavor.',
      'twitter:image': 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200',
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Schema.org JSON-LD Generation
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(schema => schema.remove());

    // 1. LocalBusiness Schema
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'CafeOrCoffeeShop',
      'name': 'Kopi Nusantara',
      'image': 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
      '@id': window.location.href + '#localbusiness',
      'url': window.location.href,
      'telephone': '+6281234567890',
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Jl. Kelapa Dua No. 45, Kebon Jeruk',
        'addressLocality': 'Jakarta Barat',
        'addressRegion': 'DKI Jakarta',
        'postalCode': '11550',
        'addressCountry': 'ID'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': -6.1944,
        'longitude': 106.7725
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        'opens': '08:00',
        'closes': '22:00'
      },
      'sameAs': [
        'https://instagram.com/kopinusantara',
        'https://facebook.com/kopinusantara',
        'https://tiktok.com/@kopinusantara'
      ]
    };

    // 2. FAQ Schema
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': FAQs.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    };

    // 3. Products Schema
    const productSchemas = products.map(prod => ({
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': prod.name,
      'image': prod.image,
      'description': prod.description,
      'brand': {
        '@type': 'Brand',
        'name': 'Kopi Nusantara'
      },
      'offers': {
        '@type': 'Offer',
        'url': window.location.href + '#menu',
        'priceCurrency': 'IDR',
        'price': prod.price,
        'itemCondition': 'https://schema.org/NewCondition',
        'availability': 'https://schema.org/InStock'
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': prod.rating,
        'bestRating': '5',
        'worstRating': '1',
        'ratingCount': '24'
      }
    }));

    // 4. Review Schema
    const reviewSchemas = reviews.map(rev => ({
      '@context': 'https://schema.org',
      '@type': 'Review',
      'itemReviewed': {
        '@type': 'LocalBusiness',
        'name': 'Kopi Nusantara',
        'image': 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800'
      },
      'author': {
        '@type': 'Person',
        'name': rev.name
      },
      'reviewRating': {
        '@type': 'Rating',
        'ratingValue': rev.rating,
        'bestRating': '5',
        'worstRating': '1'
      },
      'reviewBody': rev.text
    }));

    // 5. Breadcrumb Schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': window.location.origin
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Menu',
          'item': window.location.origin + '#menu'
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Blog',
          'item': window.location.origin + '#blog'
        }
      ]
    };

    // Inject all schemas as separate script tags
    [localBusinessSchema, faqSchema, ...productSchemas, ...reviewSchemas, breadcrumbSchema].forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

  }, []);

  return null;
}
