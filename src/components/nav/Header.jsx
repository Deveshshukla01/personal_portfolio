import Link from "next/link";
import React from "react";
import { SiCodepen, SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { OutlineButton } from "../buttons/OutlineButton";
import { SlSocialInstagram } from "react-icons/sl";

export const Header = () => {
  return (
    <header className="h-[72px] px-4 flex items-center justify-between sticky top-0 z-20 bg-zinc-900/50 backdrop-blur-md">
      <MyLinks />
      <OutlineButton onClick={() => window.open("/Devesh_Kumar_resume.pdf")}>
        My Resume
      </OutlineButton>
    </header>
  );
};

export const MyLinks = () => (
  <div className="flex items-center text-lg gap-4">
    <Link
      className="text-zinc-300 hover:text-indigo-300 transition-colors"
      href="https://www.linkedin.com/in/deveshshukla01/"
      target="_blank"
      rel="nofollow"
    >
      <SiLinkedin />
    </Link>
    <Link
      className="text-zinc-300 hover:text-indigo-300 transition-colors"
      href="https://www.github.com/deveshshukla01"
      target="_blank"
      rel="nofollow"
    >
      <SiGithub />
    </Link>

    <Link
      className="text-zinc-300 hover:text-indigo-300 transition-colors"
      href="https://www.instagram.com/zezoed_webservices?igsh=MWhpbDNuZDl3eXA1Yw=="
      target="_blank"
      rel="nofollow"
    >
      <SlSocialInstagram />
    </Link>
  </div>
);
