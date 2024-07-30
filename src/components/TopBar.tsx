"use client";

import logo from "../assets/logo-black.svg";

import { Icon } from "@iconify/react";

import { motion } from "framer-motion";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function TopBar() {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto flex justify-around items-center py-8"
    >
      <img src={logo.src} alt="Single" className="max-w-24" />
      <ul className="text-sm hover:cursor-pointer">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:bg-transparent">
                Product
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ProductNavigation />
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:bg-transparent">
                Features
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI
                          and Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <a href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </a>
                  <a href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </a>
                  <a href="/docs/primitives/typography" title="Typography">
                    Styles for headings, paragraphs, lists...etc
                  </a>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>Ressource</NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
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

function ProductNavigation() {
  return (
    <div className="flex flex-col gap-3 p-4 md:w-[500px] lg:w-[600px] xl:w-max xl:max-w-[750px] cursor-default">
      <div className="grid gap-3 grid-cols-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-fuchsia-500 font-bold">
            For data engineer and Devops
          </h2>
          <ul className="list-none flex flex-col gap-2 text-xs">
            <li>Serverless computing</li>
            <li>From edge to cloud : deploy anywhere</li>
            <li>Cross-version projects testing</li>
            <li>Backward compatibility for Hadoop and SAS</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-fuchsia-500 font-bold">
            For data scientist and MLops
          </h2>
          <ul className="list-none flex flex-col gap-2 text-xs">
            <li>GPU native, the easy way</li>
            <li>The extensive stack</li>
            <li>Focused on productivity</li>
            <li>Day-1 production for models deployment</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-fuchsia-500 font-bold">
            For business and data analyst
          </h2>
          <ul className="list-none flex flex-col gap-2 text-xs">
            <li>Limitless no-code</li>
            <li>Collaboration at scale</li>
            <li>Dashboard and BI</li>
            <li>Data mest</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-fuchsia-500 font-bold">
            For data office... and others
          </h2>
          <ul className="list-none flex flex-col gap-2 text-xs">
            <li>Governance for everyone</li>
            <li>Data quality and compliance</li>
            <li>Integrated with your tools</li>
            <li>Fine grained FinOps</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-3">
        <h2 className="font-bold">See how Graal compared with</h2>
        <div className="grid grid-cols-4">
          <p>
            We made it easy to get an honest view of how GraalSystems compares
            to other platform.
          </p>
          <p>Vs Databricks</p>
          <p>Vs Cloudera</p>
          <p>Vs Snowflake</p>
        </div>
      </div>
    </div>
  );
}
