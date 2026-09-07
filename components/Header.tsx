"use client";

import { useEffect, useState } from "react";
import { site, nav } from "@/src/data/content";
import SocialLinks from "./SocialLinks";

export default function Header() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>("header nav a"),
    );
    const sections = links
      .map((a) => document.querySelector(a.getAttribute("href") ?? ""))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-lightest sm:text-5xl">
          <a href="/">{site.name}</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-lightest sm:text-xl">
          {site.role}
        </h2>
        <p className="mt-4 max-w-xs leading-normal">{site.tagline}</p>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  className="group flex items-center py-3"
                  href={`#${item.id}`}
                >
                  <span
                    className={`nav-indicator mr-4 h-px w-8 bg-slate transition-all group-hover:w-16 group-hover:bg-lightest group-focus-visible:w-16 group-focus-visible:bg-lightest motion-reduce:transition-none ${
                      active === item.id ? "w-16 bg-lightest" : ""
                    }`}
                  />
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest text-slate group-hover:text-lightest group-focus-visible:text-lightest ${
                      active === item.id ? "text-lightest" : ""
                    }`}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        <SocialLinks />
      </ul>
    </header>
  );
}
