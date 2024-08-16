"use client";

import { Icon } from "@iconify/react";
import logo from "../assets/logo-black.svg";
import Link from "next/link";

export default function PageComparison() {
  return (
    <div className="my-12">
      <div className="mx-auto max-w-[55%] text-center flex flex-col gap-4 pb-8">
        <h2 className="text-2xl font-semibold text-fuchsia-500">
          See how GraalSystems compares
        </h2>
        <p className="text-center text-neutral-600">
          Get a view of how GraalSystems compares to other data platforms.
          Common themes include our cloud flexibility, wide range of
          technologies, and pricing that still makes sense as you scale.
        </p>
      </div>
      <div className="grid grid-cols-3 mx-auto max-w-[85%] gap-6">
        <div className="bg-fuchsia-400 hover:bg-fuchsia-500 transition-all duration-300 px-4 py-8 flex flex-col gap-8 rounded-xl">
          <div className="flex justify-between items-center gap-4 px-4">
            <img src={logo.src} alt="graal illustation" className="max-w-24" />
            <span className="text-2xl font-semibold">vs</span>
            <div className="flex items-center gap-1">
              <Icon icon="simple-icons:databricks" width={30} color="black" />
              <span className="text-2xl font-semibold tracking-wide">
                DataBricks
              </span>
            </div>
          </div>
          <div className="flex justify-between px-4 items-center">
            <p className="uppercase font-semibold">Compare</p>
            <Link
              href="/comparison/databricks"
              className="flex gap-2 items-center transition-all duration-300 bg-white text-fuchsia-800 px-4 py-2 rounded-md hover:scale-105"
            >
              See more
              <Icon
                icon="flowbite:chevron-right-outline"
                width={16}
                strokeWidth={3.5}
              />
            </Link>
          </div>
        </div>

        <div className="bg-fuchsia-400 hover:bg-fuchsia-500 transition-all duration-300 px-4 py-8 flex flex-col gap-8 rounded-xl">
          <div className="flex justify-between items-center gap-4 px-4">
            <img src={logo.src} alt="graal illustation" className="max-w-24" />
            <span className="text-2xl font-semibold">vs</span>
            <div className="flex items-center gap-1">
              <Icon icon="uil:snowflake" width={35} color="black" />
              <span className="text-2xl font-semibold tracking-wide">
                Snowflake
              </span>
            </div>
          </div>
          <div className="flex justify-between px-4 items-center">
            <p className="uppercase font-semibold">Compare</p>
            <Link
              href="/comparison/snowflake"
              className="flex gap-2 items-center transition-all duration-300 bg-white text-fuchsia-800 px-4 py-2 rounded-md hover:scale-105"
            >
              See more
              <Icon
                icon="flowbite:chevron-right-outline"
                width={16}
                strokeWidth={3.5}
              />
            </Link>
          </div>
        </div>

        <div className="bg-fuchsia-400 hover:bg-fuchsia-500 transition-all duration-300 px-4 py-8 flex flex-col gap-8 rounded-xl">
          <div className="flex justify-between items-center gap-4 px-4">
            <img src={logo.src} alt="graal illustation" className="max-w-24" />
            <span className="text-2xl font-semibold">vs</span>
            <div className="flex items-center gap-1">
              <span className="text-2xl font-semibold tracking-wide flex items-center">
                Cloud
                <Icon icon="ri:menu-5-fill" strokeWidth={5} />
                ra
              </span>
            </div>
          </div>
          <div className="flex justify-between px-4 items-center">
            <p className="uppercase font-semibold">Compare</p>
            <Link
              href="/comparison/cloudera"
              className="flex gap-2 items-center transition-all duration-300 bg-white text-fuchsia-800 px-4 py-2 rounded-md hover:scale-105"
            >
              See more
              <Icon
                icon="flowbite:chevron-right-outline"
                width={16}
                strokeWidth={3.5}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
