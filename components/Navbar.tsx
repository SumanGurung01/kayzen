"use client";
import Image from "next/image";
import React, { useState } from "react";
import Kayzen from "@/assets/kayzen-assets/logo.png";
import { Menu, MoonStar, Sun, X } from "lucide-react";

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
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <nav className="center relative justify-between py-4">
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

        <button className="lg:hidden" onClick={() => setShowSidebar(true)}>
          <Menu />
        </button>
      </div>

      {/* sidebar div */}
      <div
        id="sidebar"
        className={`absolute ${showSidebar ? "block" : "hidden"} right-0 top-0 z-10 flex w-80 flex-col gap-2 bg-white p-4 text-xl shadow-xl`}
        onClick={() => setShowSidebar(false)}
      >
        <a className="my-2 duration-200 hover:text-pink-500" href="#features">
          Features
        </a>
        <a
          className="my-2 duration-200 hover:text-pink-500"
          href="#integrations"
        >
          Integrations
        </a>
        <a className="my-2 duration-200 hover:text-pink-500" href="#pricing">
          Pricings
        </a>
        <a className="my-2 duration-200 hover:text-pink-500">
          Start a free trial
        </a>
        <a className="my-2 duration-200 hover:text-pink-500">Sign In</a>
        <button
          onClick={() => setShowSidebar(false)}
          className="absolute right-0 top-0 p-4"
        >
          <X />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
