import Amenities from "@/components/Amenities";
import BanksLegal from "@/components/BanksLegal";
import Contact from "@/components/Contact";
import FloatingButtons from "@/components/FloatingButtons";
import FloorPlans from "@/components/FloorPlans";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LeadPopup from "@/components/LeadPopup";
import Location from "@/components/Location";
import News from "@/components/News";
import Overview from "@/components/Overview";
import Pricing from "@/components/Pricing";
import Progress from "@/components/Progress";
import { faqs, hero, overview, pricing, site } from "@/data/site";

// Dữ liệu có cấu trúc cho Google (Schema.org)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Residence",
      name: site.name,
      description: site.description,
      url: site.domain,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address,
        addressLocality: "Dĩ An",
        addressRegion: "Bình Dương",
        addressCountry: "VN",
      },
      amenityFeature: overview.facts.map((f) => ({
        "@type": "LocationFeatureSpecification",
        name: f.label,
        value: f.value,
      })),
    },
    {
      "@type": "Organization",
      name: site.name,
      url: site.domain,
      telephone: site.hotline,
      email: site.email,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: site.hotline,
          contactType: "sales",
          areaServed: "VN",
          availableLanguage: "Vietnamese",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "Product",
      name: `Căn hộ ${site.name}`,
      description: pricing.note,
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "VND",
        lowPrice: 1200000000,
        highPrice: 2950000000,
        offerCount: 1200,
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <Overview />
        <Location />
        <Amenities />
        <FloorPlans />
        <Gallery />
        <Pricing />
        <Progress />
        <BanksLegal />
        <News />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      <LeadPopup />
    </>
  );
}

export const metadata = {
  title: `${site.name} — ${hero.subtitle}`,
};
