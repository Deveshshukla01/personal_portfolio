import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { MyLinks } from "../nav/Header";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-4">
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              <span className="bg-indigo-500 text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                H
              </span>
              ey! I&apos;m Devesh, if you haven&apos;t already gathered that by
              now. I&apos;m a Web developer turned software engineer from Chandigarh,
              Engineering college. I specialize in the frontend and backend, primarily ReactJs and express, but
              love building with whatever tools are right for the job.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I am currently Freelancing Projects. I have my instagram page Zezoed_webservices where I upload content about my services. To visit my socials hover on top of the presnt website for links
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
            When I'm not pushing pixels or debugging code, I’m exploring new UI trends, building side projects,
             or contributing to open source. I believe great design meets clean code—and I’m always chasing that perfect merge
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I&apos;m passively looking for new positions where I can merge my
              love for code with my love for websites. If you think
              you&apos;ve got an opening that I might like, let&apos;s connect
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-indigo-300">
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
