import { SectionHeader } from "../util/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Zezoed webservices",
    position: "web developer",
    time: "jan, 2025 - Present",
    location: "Mohali",
    description:
      "I run my own web services business as a freelance developer, specializing in creating innovative, fully responsive, and performance-optimized websites. I work closely with clients to understand their unique needs and deliver custom web solutions that not only look great but also function seamlessly across all devices. My services include modern UI/UX design, fast-loading pages, SEO-friendly structures, and scalable architecture to help businesses establish a strong digital presence.",
    tech: [
      "Tailwind",
      "React",
      "JavaScript",
      "Git",
      "GitHub",
      "Java",
      "JavaScript",
      "Databases",
    ],
  },
  {
    title: "My digital dreamers",
    position: "Full stack developer",
    time: "2024 - 2025",
    location: "Chandigarh",
    description:
      "Led the development of a robust service from the ground up to manage new listings efficiently. As a full stack developer, I architected and delivered high-performance web applications with a strong focus on responsive design, optimized memory usage, and seamless user experiences across devices. Contributed to building globally scalable websites that support high traffic and ensure fast load times. Collaborated closely with cross-functional teams to maintain code quality, implement best practices, and drive product excellence.Senior Full Stack Engineer for my digital dreamers. Created a service from scratch to handle new listings. Also played some ping pong. It was fun.",
    tech: ["HTML","CSS","React","javascript", "Node", "PHP", "Express", "Databases"],
  },
];
