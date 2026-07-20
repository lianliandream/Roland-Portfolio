export function SiteFooter() {
  return (
    <footer className="px-5 py-16 text-[#1E1E1E] md:px-10">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mt-4 text-sm leading-7 text-[#1E1E1E]/40">
            Reach out for stories, interviews, or editorial collaborations.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-[0.7rem] uppercase tracking-[0.25em] text-[#1E1E1E]">
          <a
            href="mailto:rolandlisf@gmail.com"
            className="transition-opacity hover:opacity-60"
          >
            Email
          </a>
          <a
            href="https://www.instagram.com/sfroland/"
            target="_blank"
            rel="noreferrer"
            className="transition-opacity hover:opacity-60"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/liroland/"
            target="_blank"
            rel="noreferrer"
            className="transition-opacity hover:opacity-60"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
