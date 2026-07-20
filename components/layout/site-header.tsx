import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="relative z-10 px-5 py-6 md:px-10">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between">
        <a
          href="mailto:rolandlisf@gmail.com"
          className="text-[20px] font-medium uppercase tracking-[0.3em] text-[#1E1E1E]"
        >
          Roland Li
        </a>

        <nav className="flex gap-6 text-[12px] uppercase tracking-[0.25em] text-[#1E1E1E]/70">
          <Link href="#writing" className="transition-opacity hover:opacity-60">
            Writing
          </Link>

          <Link href="#book" className="transition-opacity hover:opacity-60">
            Book
          </Link>

          <Link
            href="#photography"
            className="transition-opacity hover:opacity-60"
          >
            Photography
          </Link>
        </nav>
      </div>
    </header>
  );
}
