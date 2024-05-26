"use client";
import Image from "next/image";
import React, { useState } from "react";
import Kayzen from "@/assets/kayzen-assets/logo.png";
import {
  LogOut,
  Mail,
  MessageSquareMore,
  Phone,
  PieChart,
  Settings,
  Users,
} from "lucide-react";
import Avatar from "@/assets/kayzen-assets/avatar.jpg";
import Chat from "@/components/screen/Chat";

const options = [
  {
    title: "Dashboard",
    image: <PieChart />,
  },
  {
    title: "Chat Agent",
    image: <MessageSquareMore />,
  },
  {
    title: "Phone Agent",
    image: <Phone />,
  },
  {
    title: "Emails",
    image: <Mail />,
  },
  {
    title: "Teams",
    image: <Users />,
  },
];

function Dashboard() {
  const [selectedOption, setSelectedOption] = useState<String>(
    options[0].title,
  );

  function handleSelect(option: String) {
    setSelectedOption(option);
  }

  return (
    <main id="dashboard" className="flex">
      <section
        id="sidebar"
        className="relative h-screen w-full max-w-[250px] p-4"
      >
        <div id="navbar-logo" className="center justify-start">
          <Image src={Kayzen} alt="Kayzen Logo" className="w-10" />
          <h1 className="ml-2 text-2xl font-bold">KAYZEN</h1>
        </div>

        <div className="mt-10">
          {options.map((option) => {
            return (
              <div
                className={`bg-zinc-40 center my-2 cursor-pointer justify-start gap-4 rounded-xl  p-4 text-lg ${selectedOption === option.title ? "bg-gradient text-gray-100" : ""}`}
                onClick={() => handleSelect(option.title)}
              >
                {option.image}
                <p>{option.title}</p>
              </div>
            );
          })}
        </div>

        <div className="absolute bottom-5 w-full text-lg">
          <div className="center cursor-pointer justify-start gap-4 p-4 text-zinc-500">
            <Settings />
            <p>Settings</p>
          </div>

          <div className="center justify-start gap-2 p-2">
            <Image src={Avatar} alt="profile" className="w-12 rounded-full" />
            <p className="font-bold">K.Jane</p>
            <LogOut className="absolute right-10 cursor-pointer" />
          </div>
        </div>
      </section>

      <section className="w-full bg-zinc-50">
        {selectedOption === "Chat Agent" ? <Chat /> : null}
      </section>
    </main>
  );
}

export default Dashboard;
