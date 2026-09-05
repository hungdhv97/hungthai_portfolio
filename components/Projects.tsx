import { projects } from '@/src/data/content';
import SectionHeading from './SectionHeading';

export default function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <SectionHeading number="03" title="Projects" />

      <ul className="group/list">
        {projects.featured.map((p) => (
          <li key={p.title} className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-navy-light/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <div className="z-10 sm:col-span-8">
                <h3>
                  <a
                    className="group/link inline-flex items-baseline font-medium leading-tight text-lightest"
                    href={p.external}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${p.title} (opens in a new tab)`}
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                    <span>{p.title}</span>
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal">{p.description}</p>
                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                  {p.tech.map((t) => (
                    <li key={t} className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal/10 px-3 py-1 text-xs font-medium leading-5 text-teal">
                        {t}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <h3 className="mt-16 mb-8 text-center font-mono text-lg text-lightest">
        Other Noteworthy Projects
      </h3>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.grid.map((p) => (
          <article
            key={p.title}
            className="group relative rounded border border-navy-light bg-navy-light/40 p-6 transition-transform hover:-translate-y-1"
          >
            <h4 className="font-sans text-base font-medium text-lightest">{p.title}</h4>
            <p className="mt-2 text-sm leading-relaxed">{p.description}</p>
            <ul className="mt-4 flex flex-wrap gap-3 font-mono text-xs text-teal">
              {p.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
