import Image from "next/image";

import AnnouncementBar from "./component/AnnouncementBar";
import HeroSection from "./component/HeroSection";
import FeatureTabs from "./component/FeatureTabs";
import PricingSection from "./component/PricingSection";
import TestimonialSection from "./component/Testimonials";
import ComparisonTable from "./component/ComparisonTable";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <HeroSection/>
      <FeatureTabs/>
      <PricingSection/>
      <TestimonialSection/>
      <ComparisonTable/>
      <Footer/>
    </main>
  );
}
