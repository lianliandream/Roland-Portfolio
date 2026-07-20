import { SiteHeader } from "@/components/layout/site-header";
import { Hero } from "@/components/hero/hero";
import { FeaturedBook } from "@/components/books/featured-book";
import { FeaturedReporting } from "@/components/reporting/featured-reporting";
import { CareerTimeline } from "@/components/timeline/career-timeline";
import { PhotographyPreview } from "@/components/photography/photography-preview";
import { Quote } from "@/components/quote/quote";
import { SiteFooter } from "@/components/footer/site-footer";

export default function Home() {
  return (
    <main>
      {/* Shared Header + Hero Background */}
      <section className="relative overflow-hidden bg-[#CFE0C7]">
        <div className="absolute inset-0 bg-[#CFE0C7]/10" />
        <div className="relative z-10">
          <SiteHeader />
          <Hero />
        </div>
      </section>
      <CareerTimeline />
      <FeaturedReporting />
      <FeaturedBook />
      <PhotographyPreview />
      <div className="relative overflow-hidden bg-[#DCE5D8]">
        <div className="absolute inset-0 bg-[#DCE5D8]/20" />

        <div className="relative z-10">
          <Quote />
          <SiteFooter />
        </div>
      </div>
    </main>
  );
}
