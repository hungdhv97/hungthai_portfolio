import { experience } from "@/src/data/content";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <SectionHeading number="02" title="Experience" />
      <ol className="group/list">
        {experience.map((job) => (
          <li key={job.company} className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-navy-light/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <header
                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate sm:col-span-2"
                aria-label={`${job.period}`}
              >
                {job.period}
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-lightest">
                  <div>
                    <a
                      className="group/link inline-flex items-baseline font-medium leading-tight text-lightest"
                      href="#"
                      aria-label={`${job.role} at ${job.company}`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      <span>
                        {job.role} ·{" "}
                        <span className="inline-block text-teal">
                          {job.company}
                        </span>
                      </span>
                    </a>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal">{job.description}</p>
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="Technologies used"
                >
                  {job.tech.map((t) => (
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
      </ol>
      <div className="mt-4">
        <a
          href="/cv.html"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="View Full Résumé (opens in a new tab)"
          className="group/link inline-flex items-baseline gap-2 font-medium leading-tight text-lightest transition-colors hover:text-teal"
        >
          <span>View Full Résumé</span>
          <span className="inline-block transition-transform motion-reduce:transform-none group-hover/link:translate-x-1">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              aria-hidden="true"
            >
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
