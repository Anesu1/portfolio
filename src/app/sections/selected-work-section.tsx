import { caseStudies } from "../content";
import CoverflowGallery from "../components/coverflow-gallery";

// TODO(assets): swap these grayscale StudioNF placeholder images for real
// screenshots of RAHA, website-cloner, Uncommon Global, and zimsec-vault.
const PLACEHOLDER_IMAGES = [
  "/assets/cloned/images/6fa69042f3c6.webp",
  "/assets/cloned/images/8eedf6ec3465.webp",
  "/assets/cloned/images/79b94c1f0c40.webp",
  "/assets/cloned/images/e7dc17a79b5e.webp",
];

// Originkit-style 3D Coverflow Gallery: a tilted carousel replacing the old
// sticky-stacking case-study list. hero-scene.tsx's Selected-Work particle
// highlight reads the gallery's own `data-active-work-slide` attribute
// directly rather than measuring DOM rects of discrete stacked rows.
export default function SelectedWorkSection() {
  return (
    <section className="block relative z-1" id="work">
      <div className="block max-w-337.5 px-[0.9375rem] mx-auto">
        <div className="border-r border-solid border-r-border border-l border-l-border block relative z-2 px-10 max-md:px-[0.9375rem] md:max-lg:px-5">
          <div className="block pt-11.5 pb-36.5 max-md:pt-7.5 max-md:pb-15 md:max-lg:pt-10 md:max-lg:pb-25">
            <CoverflowGallery
              slides={caseStudies.map((study, i) => ({
                slug: study.slug,
                title: study.title,
                oneLiner: study.oneLiner,
                tags: study.tags,
                image: PLACEHOLDER_IMAGES[i % PLACEHOLDER_IMAGES.length],
              }))}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
