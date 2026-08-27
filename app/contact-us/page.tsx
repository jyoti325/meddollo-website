import ContactCards from "@/components/contact-us/ContactCards";
import ContactForm from "@/components/contact-us/ContactForm";
import ContactMap from "@/components/contact-us/ContactMap";
import WhyChooseContact from "@/components/contact-us/WhyChooseContact";
import EmergencyCTA from "@/components/contact-us/EmergencyCTA";

export default function ContactUsPage() {
  return (
    <>
      <ContactCards />
      <ContactForm />
      <ContactMap />
      <WhyChooseContact />
      <EmergencyCTA />
    </>
  );
}