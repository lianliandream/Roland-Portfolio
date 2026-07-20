import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export function CareerTimeline() {
  return (
    <section
      id="career"
      className="relative overflow-hidden bg-[#DCE5D8] px-5 py-24 text-[#1E1E1E] md:px-10 md:py-36"
    >
      <div className="relative z-10 mx-auto max-w-[1500px]">
        <Reveal>
          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="mt-5 max-w-lg font-serif text-lg leading-[0.95] tracking-[-0.035em] md:text-5xl">
                Resume
              </p>
            </div>
          </div>
        </Reveal>
        <div className="mt-14 border-t border-canvas/20 md:mt-20">
          {[
            [
              "June 2018 — Present",
              "Reporter, Editor",
              "San Francisco Chronicle",
              "Cover the Bay Area economy, including technology, housing, offices, retail, hotels, and local businesses, and have also served as a breaking news editor.",
            ],
            [
              "January 2015 — June 2018",
              "Reporter",
              "San Francisco Business Times",
              "Covered real estate and economic development, focusing on housing affordability and job growth.",
            ],
            [
              "January 2015 — June 2016",
              "Author",
              "Good Luck Have Fun: The Rise of eSports",
              "Wrote the first comprehensive history of the competitive video games industry, including over 50 interviews and original photography.",
            ],
            [
              "October 2012 — January 2015",
              "Freelance Reporter",
              "The Wall Street Journal",
              "Covered real estate for the Greater New York section and freelanced for The New York Times, Reuters, Curbed, Interview Magazine, Polygon, and Narratively.",
            ],
            [
              "October 2011 — October 2012",
              "Reporter",
              "International Business Times",
              "Covered company earnings, stocks, global trading, and national housing policy.",
            ],
            [
              "July 2010 — September 2011",
              "Reporter",
              "Real Estate Weekly",
              "Interviewed architects, developers, and brokers in the New York region, and developed and launched a new website.",
            ],
            [
              "September 2009 — July 2010",
              "Freelance Reporter, Intern",
              "The New York Observer",
              "Contributed weekly to the Commercial Observer newspaper and daily to the website, covering real estate leases, historic preservation, and economic development.",
            ],
            [
              "September 2008 — January 2009",
              "Intern, Research Assistant",
              "The Real Deal",
              "Compiled commercial real estate deals and real estate news in New York.",
            ],
            [
              "April 2008 — September 2009",
              "Publicity Director, DJ",
              "WNYU",
              "Engineered and hosted weekly two-hour radio shows for my college radio station and managed publicity for two semesters.",
            ],
            [
              "January 2007 — February 2009",
              "Staff Writer",
              "Washington Square News",
              "Wrote features and interviewed dozens of musicians for the student newspaper's music section.",
            ],
            [
              "September 2006 — May 2010",
              "Bachelor of Arts",
              "New York University",
              "Majored in Journalism, minor History, pre-med dropout",
              "",
            ],
          ].map(([year, position, organization, detail], index) => (
            <Reveal key={`${year}-${position}`} delay={index * 0.08}>
              <article className="grid gap-6 border-b border-[#1E1E1E]/20 py-7 md:grid-cols-[190px_1.2fr_1fr] md:gap-10">
                {/* Year */}
                <p className="whitespace-nowrap text-[15px] font-medium tracking-[0.08em] text-[#1E1E1E]/80">
                  {year}
                </p>

                {/* Position + Organization */}
                <div>
                  <div className="mx-auto w-100 text-center">
                    <h3 className="font-serif text-2xl text-[#1E1E1E]">
                      {position}
                    </h3>

                    <p className="mt-1 text-sm uppercase tracking-[0.18em] text-[#1E1E1E]/80">
                      {organization}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg leading-7 text-[#1E1E1E]/70">{detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
