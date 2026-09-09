import { caseStudies } from "../content";
import CoverflowGallery from "../components/coverflow-gallery";

// Originkit-style 3D Coverflow Gallery: a tilted carousel replacing the old
// sticky-stacking case-study list. hero-scene.tsx's Selected-Work particle
// highlight reads the gallery's own `data-active-work-slide` attribute
// directly rather than measuring DOM rects of discrete stacked rows.
//
// Slides with no imgSrc (currently RAHA — no public repo, and its Render
// demo is suspended) render CoverflowGallery's built-in "no public preview"
// placeholder instead of falling back to a stock photo. A real screenshot
// beats a polished fake one; no screenshot beats a fake one too.
export default function SelectedWorkSection() {
  return (
    <section className="block relative z-1" id="work">
      <div className="block max-w-337.5 px-[0.9375rem] mx-auto">
        <div className="border-r border-solid border-r-border border-l border-l-border block relative z-2 px-10 max-md:px-[0.9375rem] md:max-lg:px-5">
          <div className="block pt-11.5 pb-36.5 max-md:pt-7.5 max-md:pb-15 md:max-lg:pt-10 md:max-lg:pb-25">
            <CoverflowGallery
              slides={caseStudies.map((study) => ({
                slug: study.slug,
                title: study.title,
                oneLiner: study.oneLiner,
                tags: study.tags,
                image: study.imgSrc,
              }))}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
