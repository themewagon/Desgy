import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar/index'
import Footer from './components/Footer/index'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Prism Lab | AI Training, Strategy & Execution for SMBs',
  description: 'Turn AI hype into outcomes for your business. AI training, strategy, and execution services for SMBs. Practical masterclasses, coaching, and 90-day programmes.',
  keywords: 'AI training for business teams, AI workshops for SMBs, AI leadership coaching, AI strategy for SMBs, AI adoption programmes APAC, AI go-to-market strategy, AI for sales and marketing, AI execution support, AI use cases for business, practical AI services',
  openGraph: {
    title: 'The Prism Lab | AI Training, Strategy & Execution for SMBs',
    description: 'Turn AI hype into outcomes for your business. AI training, strategy, and execution services for SMBs. Practical masterclasses, coaching, and 90-day programmes.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'The Prism Lab',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Prism Lab | AI Training, Strategy & Execution for SMBs',
    description: 'Turn AI hype into outcomes for your business. AI training, strategy, and execution services for SMBs.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://theprismlab.com',
  },
}

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "The Prism Lab",
  "description": "AI training, strategy, and execution services for SMBs. Turn AI hype into outcomes for your business.",
  "url": "https://theprismlab.com",
  "telephone": "+65-XXXX-XXXX",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Singapore",
    "addressCountry": "SG"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "1.3521",
    "longitude": "103.8198"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "1.3521",
      "longitude": "103.8198"
    },
    "geoRadius": "5000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI Services for SMBs",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Readiness Masterclasses",
          "description": "Practical training for business teams with half-day or full-day formats"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Leadership Coaching",
          "description": "Clarity and confidence for decision-makers with monthly coaching"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Revenue Launchpad (90 Days)",
          "description": "A structured enablement programme that delivers measurable outcomes"
        }
      }
    ]
  },
  "sameAs": [
    "https://linkedin.com/company/theprismlab"
  ]
}

// FAQ Structured Data
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can SMBs adopt AI quickly without a big budget?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most SMBs think AI requires major investment, but results come faster with focused use cases. We help you start small: AI workshops that upskill teams, leadership coaching that sets priorities, and a 90-day program that embeds AI into existing tools like CRM, content, and reporting. This way, you get measurable outcomes — faster sales cycles, better marketing conversion, leaner operations — without hiring data scientists or building in-house platforms."
      }
    },
    {
      "@type": "Question",
      "name": "What makes The Prism Lab different from other AI consultancies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many AI consultants focus on tools and technology. We focus on business outcomes. Our approach combines training, strategy, and execution tied directly to revenue and efficiency. We're also built for SMBs: programmes are cost-effective, practical, and tool-agnostic. Instead of leaving you with slide decks or unfinished pilots, we ensure your teams are confident with AI, your leaders are aligned on priorities, and your workflows are embedded into daily execution."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need technical staff to benefit from your programmes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Our services are designed for business users, not technical teams. Sales, marketing, and operations leaders can all use AI with the right training and workflows. We provide hands-on masterclasses, leadership coaching, and ready-to-use templates so your people can adopt AI without needing coding skills. If you already have IT or data teams, we complement them by helping align AI use cases with commercial goals."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to see measurable results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most clients see quick wins within weeks. In masterclasses, teams walk away with a 2-tool adoption plan they can apply immediately. Leadership coaching often produces strategic clarity in the first month. In the 90-day AI Revenue Launchpad, measurable improvements — such as faster marketing cycles, reduced reporting time, or higher close rates — are built into the roadmap. We design every engagement with clear KPIs, owners, and timelines so outcomes are visible fast."
      }
    },
    {
      "@type": "Question",
      "name": "Which industries do you work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work across sectors where SMBs need to scale sales, marketing, and operations. Our experience spans SaaS, consulting, professional services, retail, and financial services. Because our programmes are tool-agnostic and outcome-driven, the principles apply in almost any industry. The common thread: SMB leaders who want to move beyond experiments and see AI tied to revenue growth, customer experience, and operational efficiency."
      }
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

