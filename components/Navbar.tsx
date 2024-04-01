"use client";
import Image from "next/image";
import React from "react";
import Kayzen from "@/assets/kayzen-assets/logo.png";
import { Menu, MoonStar, Sun } from "lucide-react";

{
  /*list of links in navbar*/
}
const links = [
  {
    text: "FEATURES",
    href: "#features",
  },

  {
    text: "INTEGRATIONS",
    href: "#integrations",
  },
  {
    text: "PRICING",
    href: "#pricing",
  },
];

function Navbar() {
  return (
    <nav className="center justify-between py-4">
      {/* div containing logo and name */}
      <div id="navbar-logo" className="center">
        <Image src={Kayzen} alt="Kayzen Logo" className="w-10" />
        <h1 className="ml-2 text-2xl font-bold">KAYZEN</h1>
      </div>

      {/* div containing links */}
      <div id="navbar-links" className="lg:center hidden gap-10">
        {/* map through each links and return <a> tag */}
        {links.map((link) => (
          <a href={link.href} key={link.href} className="font-semibold">
            {link.text}
          </a>
        ))}
      </div>

      {/* div containing buttons (text and icons) */}
      <div id="navbar-buttons" className="center gap-6">
        {/* div containing buttons (only text) */}
        <div
          id="navbar-buttons-text"
          className="md:center lg:center hidden gap-4"
        >
          <button className="w-36 rounded-md border-2 border-pink-500 py-2">
            Start a free trial
          </button>
          <button className="active:bg-gradient-active bg-gradient w-36 rounded-md py-2 text-zinc-100">
            Sign In
          </button>
        </div>

        {/* buttons (only icons) */}
        <button>
          <MoonStar />
          {/* <Sun /> */}
        </button>

        <button className="lg:hidden">
          <Menu />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
