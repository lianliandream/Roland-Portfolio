"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { stories } from "@/lib/content";

export function FeaturedReporting() {
  const [showAll, setShowAll] = useState(false);

  const initialVisibleStories = 6;
  const visibleStories = showAll
    ? stories
    : stories.slice(0, initialVisibleStories);

  const shouldShowToggle = stories.length >= initialVisibleStories;

  return (
    <section
      id="writing"
      className="relative overflow-hidden bg-[#CFE0C7] px-5 py-24 text-[#233b2b] md:px-10 md:py-36"
    >
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1500px]">
        <Reveal>
          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="mt-5 max-w-lg font-serif text-lg leading-[0.95] tracking-[-0.035em] md:text-5xl">
                Selected Reporting
              </p>
            </div>

            {shouldShowToggle && (
              <button
                type="button"
                onClick={() => setShowAll((current) => !current)}
                className="hidden border-b border-[#1E1E1E]/60 pb-2 text-[0.65rem] font-medium uppercase tracking-[0.2em] transition-opacity hover:opacity-60 md:block"
              >
                {showAll ? "Show less" : "View more"}
              </button>
            )}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-3 md:gap-7">
          {visibleStories.map((story, index) => (
            <Reveal key={story.title} delay={index * 0.1}>
              <motion.a
                href={story.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.35 }}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-[#1E1E1E]/10 bg-[#F7F4EC] p-3 shadow-[0_10px_30px_rgba(30,30,30,0.08)]">
                  <Image
                    src={story.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <p className="mt-5 text-[0.65rem] font-medium md:text-md uppercase tracking-[0.18em] text-[#1E1E1E]/90">
                  {story.publication} · {story.year}
                </p>

                <h3 className="mt-3 font-serif text-lg leading-[0.95] tracking-[-0.025em] md:text-2xl">
                  {story.title}
                </h3>
              </motion.a>
            </Reveal>
          ))}
        </div>

        {shouldShowToggle && (
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            className="mt-12 border-b border-[#1E1E1E]/60 pb-2 text-[0.65rem] font-medium uppercase tracking-[0.2em] transition-opacity hover:opacity-60 md:hidden"
          >
            {showAll ? "Show less" : "View more"}
          </button>
        )}
      </div>
    </section>
  );
}
