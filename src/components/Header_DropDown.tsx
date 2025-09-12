"use client";

import { useState } from "react";
import { X, Menu } from "lucide-react";
import astroth_logo from "../assets/astroth_logo.png";
import astroth_horizontal from "../assets/astroth_horizontal.png";
import twitter from "../assets/twitter.svg";
import misskey from "../assets/misskey.svg";
import github from "../assets/github.png";

export interface LinkItem {
  href: string;
  text: string;
}

interface DropDownHeaderProps {
  links: LinkItem[];
  menu_font: string;
}

export default function HeaderDropDown({ links, menu_font }: DropDownHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 flex items-center justify-between w-full z-[9999] py-4 px-4"
      data-open={open}
    >
      <a href="/" className="flex-shrink-0 z-[10001]">
        <img
          src={astroth_logo.src}
          alt=""
          className="block w-8 hover:opacity-80"
        />
        <img
          src={astroth_horizontal.src}
          alt=""
          className="hidden"
        />
      </a>

      <button
        className="absolute right-4 p-2 text-white z-[10001] bg-transparent border-0 focus:outline-none"
        aria-label="Menu toggle"
        onClick={() => {setOpen((prev) => !prev)}}
      >
        {open ? <X size={32} /> : <Menu size={32} />}
      </button>

      <div
        className="overlay fixed inset-0 bg-black/80"
        onClick={() => setOpen(false)}
      />

      <div className="panel fixed inset-0 flex flex-col items-center justify-center">
        <nav className="flex flex-col gap-10 text-2xl font-semibold text-white tracking-wide text-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-white hover:opacity-70 transition-opacity duration-200 ${menu_font}`}
              onClick={() => setOpen(false)}
            >
              {link.text}
            </a>
          ))}
        </nav>
        <div className="flex py-20 items-center gap-6">
          <a href="https://twitter.com/Astroth_soft">
            <img src={twitter.src} alt="" className="w-8 h-8 hover:opacity-60" />
          </a>
          <a href="https://misskey.io/@astroth_soft">
            <img src={misskey.src} alt="" className="w-8 h-8 hover:opacity-60 invert-100" />
          </a>
          <a href="https://github.com/astroth-soft">
            <img src={github.src} alt="" className="w-8 h-8 hover:opacity-60" />
          </a>
        </div>
      </div>

      <style>{`
        .overlay {
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s ease;
        }
        header[data-open="true"] .overlay {
          opacity: 1;
          pointer-events: auto;
        }

        .panel {
          top: 0;
          height: 100vh;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transform: translateY(-100%);
          opacity: 0;
          pointer-events: none;
          transition: transform 0.5s ease, opacity 0.5s ease;
        }
        header[data-open="true"] .panel {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }
      `}</style>
    </header>
  );
}
