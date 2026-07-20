"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { images } from "@/lib/content";

export function PhotographyPreview() {
  const [showAll, setShowAll] = useState(false);
  const visibleImages = showAll
    ? images.photography
    : images.photography.slice(0, 4);

  return (
    <section
      id="photography"
      className="relative overflow-hidden bg-[#CFE0C7] px-5 py-24 text-[#233b2b] md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.23em] text-[#1E1E1E]/60">
            Photography
          </p>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-3 md:mt-20 md:grid-cols-12 md:gap-5">
          {visibleImages.map((src, index) => (
            <Reveal
              key={src}
              delay={index * 0.05}
              className={
                index < 2
                  ? "col-span-2 md:col-span-6"
                  : "col-span-1 md:col-span-4"
              }
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={src}
                  alt={`Photographic field study ${index + 1}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            className="mt-12 inline-flex border-b border-[#1E1E1E] pb-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
          >
            {showAll ? "Show less" : "View gallery"}
          </button>
        </Reveal>
      </div>
    </section>
  );
}
