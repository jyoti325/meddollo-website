import HealthPackageHero from "@/components/health-packages/HealthPackageHero";
import HealthPackageIntro from "@/components/health-packages/HealthPackageIntro";
import HealthPackageGrid from "@/components/health-packages/HealthPackageGrid";
import HealthPackageComparison from "@/components/health-packages/HealthPackageComparison";
import WhyHealthCheckup from "@/components/health-packages/WhyHealthCheckup";
import HealthPackageCTA from "@/components/health-packages/HealthPackageCTA";

export default function HealthPackagesPage() {
  return (
    <>
      <HealthPackageHero />
      <HealthPackageIntro />
      <HealthPackageGrid />
      <HealthPackageComparison />
      <WhyHealthCheckup />
      <HealthPackageCTA />
    </>
  );
}