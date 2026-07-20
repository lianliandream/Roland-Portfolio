import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { featuredBook } from "@/lib/content";

export function FeaturedBook() {
  return (
    <section
      id="book"
      className="relative overflow-hidden bg-[#DCE5D8] px-5 py-24 text-[#1E1E1E] md:px-10 md:py-36"
    >
      <div className="relative z-10 mx-auto grid max-w-[1500px] items-center gap-14 md:grid-cols-2 md:gap-24">
        {/* Book Covers */}
        <Reveal className="mx-auto w-full max-w-xl md:order-2">
          <div className="grid grid-cols-2 gap-6">
            {featuredBook.editions.map((edition) => (
              <a
                key={edition.name}
                href={edition.link}
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-mist shadow-2xl transition-transform duration-300 group-hover:-translate-y-2">
                  <Image
                    src={edition.image}
                    alt={edition.name}
                    fill
                    sizes="(min-width:768px) 18vw, 40vw"
                    className="object-cover"
                  />
                </div>

                <p className="mt-3 text-center text-xs uppercase tracking-[0.18em] text-[#1E1E1E]/60">
                  {edition.name}
                </p>
              </a>
            ))}
          </div>
        </Reveal>

        {/* Text */}
        <Reveal className="md:order-1">
          <p className="eyebrow text-[#1E1E1E]/60">{featuredBook.year}</p>

          <h2 className="mt-5 max-w-lg font-serif text-lg leading-[0.95] tracking-[-0.035em] md:text-5xl">
            {featuredBook.title}
          </h2>

          <div className="editorial-rule mt-8 max-w-sm border-[#1E1E1E]/25" />

          <p className="mt-8 max-w-md text-base leading-8 text-[#1E1E1E]/70">
            {featuredBook.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            {featuredBook.editions.map((edition) => (
              <a
                key={edition.name}
                href={edition.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex border-b border-[#1E1E1E]/60 pb-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] transition-colors hover:border-[#6B8F71] hover:text-[#6B8F71]"
              >
                View {edition.name}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
