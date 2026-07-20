import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { TypewriterNav } from "@/components/ui/typewriter";

export function Hero() {
  return (
    <section className="px-5 py-24 text-[#233b2b] md:px-10 md:py-36">
      <div className="mx-auto flex min-h-[70vh] max-w-[1500px] items-center justify-center">
        <Reveal>
          <div
            className="
              font-serif
              text-md
              md:text-[20px]
              uppercase
              tracking-[0.35em]
              text-[#1E1E1E]
              text-topcenter
              md:text-topcenter
              "
          >
            <TypewriterNav />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
