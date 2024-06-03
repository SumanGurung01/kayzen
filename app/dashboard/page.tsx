"use client";
import Image from "next/image";
import React, { useState } from "react";
import Kayzen from "@/assets/kayzen-assets/logo.png";
import {
  ChevronsLeft,
  ChevronsRight,
  LogOut,
  Mail,
  MessageSquareMore,
  Moon,
  Phone,
  PieChart,
  Settings,
  SquareUser,
  SunMedium,
  SunMoon,
  Users,
} from "lucide-react";
import Avatar from "@/assets/kayzen-assets/avatar.jpg";
import Chat from "@/components/screen/Chat";
import Teams from "@/components/screen/Teams";
import DashboardApp from "@/components/screen/DashboardApp";

const options = [
  {
    title: "Dashboard",
    image: <PieChart size={16} />,
  },
  {
    title: "Chat Agent",
    image: <MessageSquareMore size={16} />,
  },
  {
    title: "Phone Agent",
    image: <Phone size={16} />,
  },
  {
    title: "Emails",
    image: <Mail size={16} />,
  },
  {
    title: "Teams",
    image: <Users size={16} />,
  },
];

function Dashboard() {
  const [selectedOption, setSelectedOption] = useState<String>(
    options[0].title,
  );

  const [theme, setTheme] = useState<string>("light");

  const [collapse, setCollapse] = useState<boolean>(false);

  function handleSelect(option: String) {
    setSelectedOption(option);
  }

  return (
    <main id="dashboard" className="text-md flex">
      <section
        id="sidebar"
        className={`no-scrollbar h-screen min-h-full w-full overflow-x-hidden overflow-y-scroll p-4 duration-300 ${collapse ? "max-w-[70px]" : "max-w-[250px]"}`}
      >
        <div
          id="navbar-logo"
          className={`${collapse ? "flex-col" : ""} center justify-start`}
        >
          <Image src={Kayzen} alt="Kayzen Logo" className="w-10" />

          <h1
            className={`ml-2 flex-1 text-2xl font-bold ${collapse ? "hidden" : ""}`}
          >
            KAYZEN
          </h1>

          <ChevronsLeft
            onClick={() => setCollapse(!collapse)}
            className={`${collapse ? "hidden" : ""}`}
          />
          <ChevronsRight
            onClick={() => setCollapse(!collapse)}
            className={`${collapse ? "mt-4" : "hidden"}`}
          />
        </div>

        <div className="mt-10">
          {options.map((option) => {
            return (
              <div
                className={`center my-2 cursor-pointer justify-start gap-4 rounded-xl p-3 ${selectedOption === option.title ? "bg-gradient text-gray-100 shadow-lg" : ""}`}
                onClick={() => handleSelect(option.title)}
                key={option.title}
              >
                {option.image}
                <p className={`${collapse ? "hidden" : ""}`}>{option.title}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 w-full border-y-2 border-zinc-200">
          <div className="center my-2 cursor-pointer justify-start gap-4 rounded-xl p-3">
            <Settings size={16} />
            <p className={`${collapse ? "hidden" : ""}`}>Settings</p>
          </div>

          <div className="center my-2 cursor-pointer justify-start gap-4 rounded-xl p-3">
            <SquareUser size={16} />
            <p className={`${collapse ? "hidden" : ""}`}>Account</p>
          </div>

          <div className="center my-2 cursor-pointer justify-start gap-4 rounded-xl p-3">
            <LogOut size={16} />
            <p className={`${collapse ? "hidden" : ""}`}>Log Out</p>
          </div>
        </div>

        <div>
          <div className="center my-6 gap-2">
            <Image src={Avatar} alt="profile" className="w-10 rounded-full" />
            <p className={`${collapse ? "hidden" : "font-bold"}`}>K.Jane</p>
          </div>
          <div className="text-sm">
            <div
              className={`${collapse ? "hidden" : "center w-full gap-1 rounded-lg bg-zinc-100 p-1"}`}
            >
              <button
                className={`center w-[50%] gap-2 rounded-md p-1 duration-300 ${theme === "light" ? "bg-zinc-300" : ""}`}
                onClick={() => setTheme("light")}
              >
                <SunMedium size={14} />
                Light
              </button>
              <button
                className={`center w-[50%] gap-2 rounded-md p-1 duration-300 ${theme === "dark" ? "bg-zinc-300" : ""}`}
                onClick={() => setTheme("dark")}
              >
                <Moon size={14} />
                Dark
              </button>
            </div>
            <SunMoon
              size={16}
              className={`${collapse ? "mx-auto cursor-pointer" : "hidden"}`}
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-zinc-50">
        {selectedOption === "Dashboard" ? <DashboardApp /> : null}
        {selectedOption === "Chat Agent" ? <Chat /> : null}
        {selectedOption === "Teams" ? <Teams /> : null}
      </section>
    </main>
  );
}

export default Dashboard;
