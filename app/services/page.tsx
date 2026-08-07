import ServiceHero from "@/components/services/ServiceHero";
import ServicesOverview from "@/components/services/ServicesOverview";
import WhyChooseServices from "@/components/services/WhyChooseServices";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <>
      <ServiceHero />
      <ServicesOverview />
      <WhyChooseServices />
      <ServicesCTA />
    </>
  );
}