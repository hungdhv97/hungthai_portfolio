import { awards } from "@/src/data/content";
import SectionHeading from "./SectionHeading";

export default function Awards() {
  return (
    <section
      id="awards"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Awards"
    >
      <SectionHeading number="04" title="Awards" />
      <ol className="group/list">
        {awards.map((award) => (
          <li key={award} className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-navy-light/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <div className="z-10 sm:col-span-8">
                <p className="leading-normal">{award}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
