import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CtaSection } from "@/components/home/CtaSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
