import Amenities from "@/components/Amenities";
import BanksLegal from "@/components/BanksLegal";
import Contact from "@/components/Contact";
import Documents from "@/components/Documents";
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
import Usps from "@/components/Usps";
import { faqs, hero, overview, pricing, site } from "@/data/site";

// Dữ liệu có cấu trúc cho Google (Schema.org)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ApartmentComplex",
      name: site.name,
      alternateName: ["Bcons Tam Hiệp", "Bcons Biên Hòa", "Bcons Phan Trung"],
      description: site.description,
      url: site.domain,
      numberOfAccommodationUnits: 2820,
      address: {
        "@type": "PostalAddress",
        streetAddress: "236 đường Phan Trung, phường Tam Hiệp",
        addressLocality: "Biên Hòa",
        addressRegion: "Đồng Nai",
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
        lowPrice: 2000000000,
        highPrice: 3800000000,
        offerCount: 2820,
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
        <Usps />
        <Overview />
        <Location />
        <Amenities />
        <FloorPlans />
        <Gallery />
        <Pricing />
        <Documents />
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
  title: `${site.name} (${site.altName}) — ${hero.eyebrow}`,
};
