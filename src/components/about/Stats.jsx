import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import { AiFillCode, AiFillSmile } from "react-icons/ai";

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillCode className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Use at work</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>JavaScript</Chip>
            <Chip>TypeScript</Chip>
            <Chip>HTML</Chip>
            <Chip>CSS</Chip>
            <Chip>React</Chip>
            <Chip>Zustand</Chip>
            <Chip>Redux</Chip>
            <Chip>NodeJS</Chip>
            <Chip>Express</Chip>
            <Chip>Postgres</Chip>
            <Chip>MongoDB</Chip>
            <Chip>Firebase</Chip>
            <Chip>Appwrite</Chip>
            <Chip>GitHub</Chip>
            <Chip>Prisma</Chip>
            <Chip>Google services</Chip>
            <Chip>AWS</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillSmile className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Use for fun</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>Reactbits</Chip>
            <Chip>Tailwind</Chip>
            <Chip>Java</Chip>
            <Chip>Figma</Chip>
            <Chip>cooler</Chip>
            <Chip>GraphQL</Chip>
            <Chip>Python</Chip>
            <Chip>FastAPI</Chip>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
