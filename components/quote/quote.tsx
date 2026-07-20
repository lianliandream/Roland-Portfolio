import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { archiveArticles } from "@/lib/content";

export function Quote() {
  return (
    <section className="px-5 py-24 text-[#1E1E1E] md:px-10 md:py-36">
      <Reveal className="mx-auto max-w-[1500px]">
        <p className="eyebrow text-[#1E1E1E]/60">Archive</p>

        <div className="mt-14 flex flex-wrap justify-center gap-12 md:gap-16">
          {archiveArticles.map((article) => (
            <a
              key={article.link}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-[180px] text-center"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={180}
                  height={240}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-[#1E1E1E]/50">
                {article.publication}
              </p>

              <h3 className="mt-2 font-serif text-lg leading-tight transition-opacity group-hover:opacity-70">
                {article.title}
              </h3>

              <p className="mt-2 text-sm text-[#1E1E1E]/45">{article.year}</p>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
