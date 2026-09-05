import { site, skills } from '@/src/data/content';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="max-w-md pb-16 pt-16 text-sm text-slate sm:pb-0">
      <div className="mb-8 rounded border border-navy-light bg-navy-light/40 p-5">
        <h3 className="font-mono text-xs uppercase tracking-wide text-teal">Skills</h3>
        <div className="mt-3 space-y-3">
          <div>
            <p className="font-mono text-xs text-slate">Languages</p>
            <p className="mt-1 text-sm text-lightest">{skills.languages.join(', ')}</p>
          </div>
          <div>
            <p className="font-mono text-xs text-slate">Frameworks</p>
            <p className="mt-1 text-sm text-lightest">{skills.frameworks.join(', ')}</p>
          </div>
          <div>
            <p className="font-mono text-xs text-slate">Databases</p>
            <p className="mt-1 text-sm text-lightest">{skills.databases.join(', ')}</p>
          </div>
          <div>
            <p className="font-mono text-xs text-slate">Cloud</p>
            <p className="mt-1 text-sm text-lightest">{skills.cloud.join(', ')}</p>
          </div>
          <div>
            <p className="font-mono text-xs text-slate">Tools</p>
            <p className="mt-1 text-sm text-lightest">{skills.tools.join(', ')}</p>
          </div>
        </div>
      </div>

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
  );
}
