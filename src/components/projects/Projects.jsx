import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "QAI education",
    imgSrc: "project-imgs/qai.jpeg",
    code: "https://www.github.com/deveshshukla01",
    projectLink: "https://qaieducation.in",
    tech: ["Tailwind","Typescript", "Node", "Express", "prisma"],
    description:
      "A real-time coaching app for students learning AI, designed and built for students who want to learn more about the present tech.",
    modalContent: (
      <>
        <p>
  QAI Education is an interactive learning platform designed for students interested in AI and technology. It combines a collaborative community space with educational resources.
</p>
<p>
  Key features include a social-style community where users can share images, post notes, and comment on each other’s content—fostering peer-to-peer learning.
</p>
<p>
  The site also features a dynamic AI news section, updated daily with the latest advancements in artificial intelligence, helping students stay current with industry trends.
</p>
<p>
  A full AI course is available on the platform, with both free and premium packages. Premium users get access to additional content, mentorship support, and certification.
</p>
<p>
  The platform is built with a modern full-stack approach using React for the front end, Node.js and Express for the backend, and MongoDB for data storage google cloud for video storage upto 4k quality. It is hosted on Vercel and integrated with Google Sheets for lightweight data workflows.
</p>
<p>
  The platform includes a powerful Admin Dashboard where administrators can monitor user analytics, manage community activity, and upload educational content. It features a bulk student account creation system via Excel file upload, streamlining onboarding for schools and institutions.
</p>


      </>
    ),
  },
  {
    title: "My digital dreamers",
    imgSrc: "project-imgs/digital.png",
    code: "https://www.github.com/deveshshukla01",
    projectLink: "https://www.mydigitaldreamers.in",
    tech: ["HTML", "CSS(Tailwind)", "Javascript", "ReactJs", "google services","google API"],
    description: "A full-service digital marketing platform specializing in SEO, content creation, paid advertising, and performance analytics—empowering brands to scale their online presence and drive measurable growth.",

    modalContent: (
      <>
        <p>
    This digital marketing platform offers end-to-end brand growth services—including SEO, social media strategy, paid ads, and professional product photography.
  </p>
  <p>
    We provide high-quality product shoots tailored for e-commerce and branding, helping clients enhance their visual identity across digital platforms.
  </p>
  <p>
    The website is fully responsive and built with modern technologies like React and Tailwind CSS, featuring real-time animations and visually rich components to create an engaging user experience.
  </p>
  <p>
    It includes a one-click WhatsApp integration for direct client communication, making it easy for potential customers to request services or share project requirements instantly.
  </p>
  <p>
    I lead the full-stack development, ensuring the platform performs smoothly across devices while maintaining high visual and functional standards.
  </p>
      
    </>
    
    ),
  },
  {
    title: "Brandelevators Digital",
    imgSrc: "project-imgs/brand.png",
    code: "https://www.github.com",
    projectLink: "https://www.brandelevatordigitals.in",
    tech: ["NextJS", "Javascript", "Spring",],
    description:
      "A results-driven digital marketing platform offering SEO, content strategy, paid ads, and analytics tools for growing brands online.",
    modalContent: (
      <>
        <>

  <p>
      Digital Marketing platform is built to help brands grow through SEO, content strategy, and paid campaigns—all supported by sleek, conversion-focused design.
      </p>
      <p>
        The site includes a direct WhatsApp conversation link, allowing potential clients to instantly connect with our marketing team for inquiries or consultations.
      </p>
      <p>
        I focus on building and maintaining the full-stack architecture using React, Tailwind CSS, and Node.js, with a strong emphasis on real-time animations and interactive UI components.
      </p>
      <p>
        The website is fully responsive, optimized for all screen sizes, and packed with visually engaging components like animated counters, scroll-triggered effects, and modular service cards.
      </p>
      <p>
        We’re a tight-knit team of designers and developers passionate about building impactful digital experiences that convert visitors into loyal customers.
      </p>
</>

      </>
    ),
  },
  {
    title: "much more",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://www.github.com/deveshshukla01",
    projectLink: "https://www.github.com/deveshshukla01",
    tech: ["HTML", "CSS", "Javacript","Typescript", "Node", "Express","Prisma","Firebase", "Appwrite","MongoDB" ,"Google APIs",],
    description:
      "I have designed and full filled the demands of 10+ clients as a freelancer",
    modalContent: (
      <>
       <p>Okay, enough jokes—let’s get serious (well, mostly).</p> <p>Here’s where I tell you what this project is really about, and more importantly, what I brought to the table as a freelance full stack developer.</p> <p>I specialize in crafting fully responsive, high-performance web applications from end to end. From intuitive UI/UX on the front end to scalable, optimized logic on the back end, I make sure everything runs smoothly across all devices—globally.</p> <p>Every project I take on is carefully engineered for speed, memory efficiency, and long-term maintainability. Whether it's building from scratch, improving architecture, or adding key features, I ensure each line of code contributes to better user experiences and measurable impact.</p> <p>In short: I don’t just build websites. I build fast, future-proof digital platforms that users love and businesses rely on.</p>
      </>
    ),
  },
];
