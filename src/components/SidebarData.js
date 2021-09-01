import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Beranda",
    path: "/beranda",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Buat Payment Request",
    path: "/create-payment",
    icon: <IoIcons.IoMdCreate />,
    cName: "nav-text",
  },
  {
    title: "Sign Out",
    path: "/login",
    icon: <FaIcons.FaSignOutAlt />,
    cName: "nav-text",
  },
];
