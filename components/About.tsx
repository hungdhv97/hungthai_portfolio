import { about } from '@/src/data/content';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <SectionHeading number="01" title="About" />
      <div className="space-y-4">
        {about.map((p, i) => (
          <p key={i} className="leading-normal">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
