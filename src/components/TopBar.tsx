"use client";

import logo from "../assets/logo-black.svg";

import { Icon } from "@iconify/react";

import { motion } from "framer-motion";

export default function TopBar() {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto flex justify-around items-center py-8"
    >
      <img src={logo.src} alt="Single" className="max-w-24" />
      <ul className="flex gap-12 text-sm hover:cursor-pointer">
        <li>Home</li>
        <li>Products</li>
        <li>Use cases</li>
        <li>Learn</li>
        <li>Pricing</li>
        <li>About</li>
      </ul>
      <div className="flex gap-2">
        <button className="text-sm bg-fuchsia-500 text-white rounded-3xl px-4 py-2 flex items-center gap-2">
          Book a demo{" "}
          <Icon
            icon="flowbite:chevron-right-outline"
            width={16}
            strokeWidth={3.5}
          />
        </button>
        <button className="text-sm bg-black text-white rounded-3xl px-4 py-2 flex items-center gap-2">
          Login{" "}
          <Icon icon="material-symbols:login" width={16} strokeWidth={3.5} />
        </button>
      </div>
    </motion.div>
  );
}
