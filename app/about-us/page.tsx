import AboutHero from "@/components/about-us/AboutHero";
import AboutIntro from "@/components/about-us/AboutIntro";
import MissionVision from "@/components/about-us/MissionVision";
import WhyChooseUs from "@/components/about-us/WhyChooseUs";
import Facilities from "@/components/about-us/Facilities";
import AboutCTA from "@/components/about-us/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <MissionVision />
      <WhyChooseUs />
      <Facilities />
      <AboutCTA />
    </>
  );
}