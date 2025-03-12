"use client";
import React from "react";
// Hooks
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import Link from "next/link";

const links = [
  {
    path: "/",
    name: "home",
  },
  {
    // path: "/about",
    path: "",
    name: "about",
  },
  // {
  //   // path: "/gallery",
  //   path: "",
  //   name: "gallery",
  // },
  {
    // path: "/services",
    path: "",
    name: "services",
  },
  {
    // path: "/contact",
    path: "",
    name: "contact",
  },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`uppercase ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
