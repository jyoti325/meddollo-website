import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import HealthPackages from "@/components/home/HealthPackages";
import Doctors from "@/components/home/Doctors";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import ContactSection from "@/components/home/ContactSection";
import Facilities from "@/components/about-us/Facilities";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <HealthPackages />
      <Doctors />
      <Testimonials />
      <CTA />
      <ContactSection />
      <Facilities />
    </>
  );
}