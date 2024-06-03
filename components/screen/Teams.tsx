import React from "react";
import Avatar from "@/assets/kayzen-assets/avatar.jpg";
import Image from "next/image";
import { EllipsisVertical, Plus, Search, Trash } from "lucide-react";

const members = [
  {
    name: "Jane Cooper",
    email: "kayzen@gmail.com",
    last_activity: "1 minutes ago",
    role: "Marketer",
  },
  {
    name: "Guy Hawkins",
    email: "kayzen@gmail.com",
    last_activity: "1 minutes ago",
    role: "Marketer",
  },
  {
    name: "Theresa Webb",
    email: "kayzen@gmail.com",
    last_activity: "1 minutes ago",
    role: "Marketer",
  },
  {
    name: "Esther Howard",
    email: "kayzen@gmail.com",
    last_activity: "1 minutes ago",
    role: "Marketer",
  },
  {
    name: "Rick Harisson",
    email: "kayzen@gmail.com",
    last_activity: "1 minutes ago",
    role: "Marketer",
  },
];
function Teams() {
  return (
    <div className="no-scrollbar h-screen overflow-y-scroll p-8">
      <p className="mb-10 text-2xl font-bold">Team</p>

      <div className="rounded-xl bg-white p-4 shadow-md">
        <div className="center mb-4 justify-start gap-2">
          <p className="text-xl font-bold">Team Owner</p>
          <Plus size={16} className="cursor-pointer" />
        </div>

        <div className="flex gap-10">
          <div className="center w-[300px] justify-start gap-2 rounded-lg bg-zinc-50 p-2">
            <Image src={Avatar} alt="avatar" className="w-10 rounded-full" />
            <div className="flex-1">
              <p className="text-sm font-bold">Jane Cooper</p>
              <p className="text-xs text-zinc-500">
                janecooperkayzen@gmail.com
              </p>
            </div>
            <EllipsisVertical size={16} className="cursor-pointer" />
          </div>

          <div className="center w-[300px] justify-start gap-2 rounded-lg bg-zinc-50 p-2">
            <Image src={Avatar} alt="avatar" className="w-10 rounded-full" />
            <div className="flex-1">
              <p className="text-sm font-bold">Wade Warren</p>
              <p className="text-xs text-zinc-500">
                wadewarrenkayzen@gmail.com
              </p>
            </div>
            <EllipsisVertical size={16} className="cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="center my-10 mt-20 justify-between">
        <div className="center w-full max-w-[600px] rounded-xl bg-white pl-3 shadow-md">
          <Search size={16} />
          <input
            type="text"
            className="w-full rounded-xl p-2 outline-none"
            placeholder="Search by Member"
          />
        </div>
        <button className="center bg-gradient gap-2 rounded-lg p-2 px-4 text-white">
          <Plus size={16} />
          <p>Add Members</p>
        </button>
      </div>

      <div className="bg-white p-4">
        <table className="w-full table-auto">
          <tr className="bg-zinc-100 font-bold">
            <td>
              <input type="checkbox" />
            </td>
            <td>Members</td>
            <td>Email</td>
            <td>Last Activity</td>
            <td>Role</td>
            <td></td>
          </tr>
          {members.map((member) => {
            return (
              <tr key={member.name} className="p-4 shadow-sm">
                <td>
                  <input type="checkbox" />
                </td>
                <td className="center justify-start gap-2">
                  <Image
                    src={Avatar}
                    alt="avatar"
                    className="w-10 rounded-full"
                  ></Image>
                  {member.name}
                </td>
                <td>{member.email}</td>
                <td>{member.last_activity}</td>
                <td>{member.role}</td>
                <td>
                  <Trash size={16} className="cursor-pointer" />
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Teams;
