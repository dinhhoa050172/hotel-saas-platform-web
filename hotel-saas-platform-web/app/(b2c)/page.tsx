import { CobeGlobeDynamic } from "@/components/map/cobe-globe-dynamic";
import { getGlobeMarkers } from "@/lib/mock-data-landing-page";
import { VibeDiscovery } from "@/components/landing/vibe-discovery";
import { FeaturedProperties } from "@/components/landing/featured-properties";
import { StatsSection } from "@/components/landing/stats-section";
import { HostCTA } from "@/components/landing/host-cta";
import { Footer } from "@/components/landing/footer";
import { HeroSearchBar } from "@/components/landing/hero-search-bar";
import { HeroTrustBadges } from "@/components/landing/hero-trust-badges";
import { GlobeFloatingCards } from "@/components/landing/globe-floating-cards";
import { Header } from "@/components/landing/header";

export default function HomePage() {
  return (
    <>
      {/* HEADER */}
      <Header />

      {/* ============================================ */}
      {/* SECTION 1: HERO — Light theme + 3D Globe    */}
      {/* ============================================ */}
      <main className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        {/* Decorative gradient meshes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff385c]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[100px] pointer-events-none" />

        <section className="max-w-7xl mx-auto px-6 pt-16 pb-10 lg:pt-28 lg:pb-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative z-10">
          {/* Left: Typography, Search, Badges */}
          <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
            {/* Tagline */}
            <p className="text-sm font-semibold tracking-widest uppercase text-[#ff385c]">
              Nền tảng đặt phòng #1 Việt Nam
            </p>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] text-[#222222]">
              Khám phá{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff385c] to-[#e00b41]">
                điểm đến
              </span>
              <br />
              lý tưởng của bạn
            </h1>

            {/* Subtitle */}
            <p className="text-base lg:text-lg text-[#6a6a6a] max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Hàng ngàn lựa chọn lưu trú độc đáo trên khắp Việt Nam — từ
              homestay núi rừng đến resort biển xanh. Chuyến đi hoàn hảo bắt đầu
              từ đây.
            </p>

            {/* Search Bar */}
            <HeroSearchBar />

            {/* Trust Badges */}
            <HeroTrustBadges />
          </div>

          {/* Right: 3D Globe + Floating Cards */}
          <div className="flex-1 w-full relative min-h-[350px] lg:min-h-[550px] flex items-center justify-center">
            <CobeGlobeDynamic markers={getGlobeMarkers()} />
            <GlobeFloatingCards />
          </div>
        </section>
      </main>

      {/* ============================================ */}
      {/* SECTION 2: VIBE DISCOVERY — Light theme      */}
      {/* ============================================ */}
      <VibeDiscovery />

      {/* ============================================ */}
      {/* SECTION 3: FEATURED PROPERTIES               */}
      {/* ============================================ */}
      <FeaturedProperties />

      {/* ============================================ */}
      {/* SECTION 4: STATS / TRUST                     */}
      {/* ============================================ */}
      <StatsSection />

      {/* ============================================ */}
      {/* SECTION 5: HOST CTA                          */}
      {/* ============================================ */}
      <HostCTA />

      {/* ============================================ */}
      {/* SECTION 6: FOOTER                            */}
      {/* ============================================ */}
      <Footer />
    </>
  );
}
