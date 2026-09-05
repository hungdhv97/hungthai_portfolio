import { site, skills } from '@/src/data/content';
import SectionHeading from './SectionHeading';
import SocialLinks from './SocialLinks';

export default function Contact() {
  return (
    <section
      id="contact"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Contact"
    >
      <SectionHeading number="04" title="Contact" />

      <p className="max-w-xl leading-normal">
        I'm currently open to opportunities and interesting projects. If you'd like to get in touch,
        my inbox is always open — whether you have a question or just want to say hi.
      </p>
      <a
        href={`mailto:${site.email}`}
        className="mt-8 inline-block border border-teal px-6 py-3 font-mono text-sm text-teal transition-all hover:-translate-y-0.5 hover:bg-teal/10"
      >
        Say Hello
      </a>

      <div className="mt-16 rounded border border-navy-light bg-navy-light/40 p-5">
        <h3 className="font-mono text-xs uppercase tracking-wide text-teal">Skills</h3>
        <div className="mt-3 space-y-3">
          <div>
            <p className="font-mono text-xs text-slate">Languages</p>
            <p className="mt-1 text-sm text-lightest">{skills.languages.join(', ')}</p>
          </div>
          <div>
            <p className="font-mono text-xs text-slate">Databases</p>
            <p className="mt-1 text-sm text-lightest">{skills.databases.join(', ')}</p>
          </div>
          <div>
            <p className="font-mono text-xs text-slate">Other</p>
            <p className="mt-1 text-sm text-lightest">{skills.other.join(', ')}</p>
          </div>
        </div>
      </div>

      <footer className="max-w-md pb-16 pt-16 text-sm text-slate sm:pb-0">
        <ul className="ml-1 mb-8 flex items-center" aria-label="Social media">
          <SocialLinks />
        </ul>
        <p>
          Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with{' '}
          <a href="https://nextjs.org/" className="font-medium text-light-slate" target="_blank" rel="noreferrer noopener">
            Next.js
          </a>{' '}
          and{' '}
          <a href="https://tailwindcss.com/" className="font-medium text-light-slate" target="_blank" rel="noreferrer noopener">
            Tailwind CSS
          </a>
          , deployed on Proxmox via Cloudflare Tunnel.
        </p>
        <p className="mt-4 font-mono text-xs text-slate">
          &copy; {new Date().getFullYear()} {site.name}
        </p>
      </footer>
    </section>
  );
}
