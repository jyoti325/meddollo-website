import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryCategories from "@/components/gallery/GalleryCategories";
import MasonryGallery from "@/components/gallery/MasonryGallery";
import FacilityHighlights from "@/components/gallery/FacilityHighlights";
import GalleryCTA from "@/components/gallery/GalleryCTA";

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryCategories />
      <MasonryGallery />
      <FacilityHighlights />
      <GalleryCTA />
    </>
  );
}