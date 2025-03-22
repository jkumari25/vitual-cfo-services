import AboutComponent from "@/components/AboutComponent";
// import BlogSection from "@/components/BlogSection";
// import CatalogueSection from "@/components/CatalogueSection";
// import CatalogueSwiperSection from "@/components/CatalogueSwiperSection";
import CompanySection from "@/components/CompanySection";
import ContactSection from "@/components/ContactSection";
import CtaSection from "@/components/CtaSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompanySection />
      <AboutComponent />
      {/* <CatalogueSection /> */}
      {/* <CatalogueSwiperSection /> */}
      <ContactSection />
      {/* <BlogSection /> */}
      <CtaSection />
    </>
  );
}
