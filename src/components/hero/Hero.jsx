import Reveal from "../util/Reveal";
import DotGrid from "./DotGrid";
import { OutlineButton } from "../buttons/OutlineButton";

const Hero = () => {
  return (
    <section className="text-slat-100 overflow-hidden py-24 md:py-32">
      <div className="relative">
        <div className="pointer-events-none relative z-10">
          <Reveal>
            <h1 className="pointer-events-auto text-4xl sm:text-6xl font-black text-zinc-500 md:text-8xl">
              Hi, I'm Devesh<span className="text-indigo-500">.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className="pointer-events-auto my-2 text-xl sm:text-2xl text-zinc-300 md:my-4 md:text-4xl">
              I'm a{" "}
              <span className="font-semibold text-indigo-500">
                Full Stack Developer
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="pointer-events-auto leading-relaxed md:leading-relaxed max-w-xl text-sm text-zinc-300 md:text-base">
            For the past 2 years, I've been crafting sleek, responsive websites and turning wild ideas into interactive web experiences.
             From animated UIs to clean backend logic—I love making the web feel alive. Got a project or just wanna geek out over React? Let’s connect!
            </p>
          </Reveal>
          <Reveal>
            <OutlineButton
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView();
              }}
              className="pointer-events-auto before:bg-indigo-700 hover:text-white hover:border-indigo-700 mt-4 bg-indigo-500 text-zinc-100 border-indigo-500 md:mt-6"
            >
              Contact Me
            </OutlineButton>
          </Reveal>
        </div>
        <DotGrid />
      </div>
    </section>
  );
};

export default Hero;
