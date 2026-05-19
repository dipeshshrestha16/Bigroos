import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bigroos Tech Australia | Professional Websites for Trade Businesses',
  description:
    'We build modern, fast websites for trade businesses in Australia. Plumbers, electricians, painters, builders and more.',
  keywords:
    'website design Australia, trade business website, plumber website, electrician website, builder website',
  metadataBase: new URL('https://bigroostech.com.au'),
  openGraph: {
    title: 'Bigroos Tech Australia',
    description: 'We build modern, fast websites for trade businesses in Australia.',
    url: 'https://bigroostech.com.au',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Bigroos Tech Australia' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bigroos Tech Australia',
    description: 'We build modern, fast websites for trade businesses in Australia.',
    images: ['/og-image.png'],
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Bigroos Tech Australia',
  description: 'Professional websites for trade and service businesses in Australia.',
  url: 'https://bigroostech.com.au',
  areaServed: 'AU',
  serviceType: 'Web Design',
  sameAs: [],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does it take to build a website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The timeline depends on the size of the website and how quickly the content is provided. A basic landing page can usually be prepared faster than a full multi-page website.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to provide photos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Photos are helpful, especially for trade and service businesses. If you do not have photos, we can still design a clean layout and guide you on what images are needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you redesign my old website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can improve the layout, content structure, mobile responsiveness, and overall visual design of an existing website.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can customers contact me through the website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the website can include a contact form, quote request form, phone button, email link, and location details.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the website mobile-friendly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, websites are designed to work properly on phones, tablets, and desktops.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the website show my services and previous work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can include service cards, project galleries, reviews, business information, and service areas.',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>
        {children}
        <Script
          id="crisp-chat"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="2e81e297-8884-4582-b463-e731f326b4b3";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`,
          }}
        />
      </body>
    </html>
  );
}
