"use client";

import { useState, useEffect } from "react";

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
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Link from "next/link";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  console.log(windowDimensions);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {windowDimensions.width > 1024 ? (
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
                    Use Cases
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <UseCasesNavigation />
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Ressources
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
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
              <Icon
                icon="material-symbols:login"
                width={16}
                strokeWidth={3.5}
              />
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto flex justify-between items-center py-8"
        >
          <img src={logo.src} alt="Single" className="max-w-24" />

          <Icon
            icon="gg:menu-right"
            width={24}
            height={24}
            className="text-black block hover:cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />

          {isMenuOpen && (
            <div className="fixed top-0 left-0 z-50 bg-black/80 w-full h-screen flex justify-end">
              <motion.div
                initial={{ x: 200 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.25, type: "tween" }}
                className="bg-white p-4 max-w-[350px] w-full relative"
              >
                <Icon
                  icon="mdi:times"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="hover:cursor-pointer  absolute top-4 left-4"
                />
                <Accordion type="single" collapsible className="mt-10">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="hover:no-underline">
                      Product
                    </AccordionTrigger>
                    <AccordionContent>
                      <ProductNavigationResponsive />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="hover:no-underline">
                      Use cases
                    </AccordionTrigger>
                    <AccordionContent>
                      <UseCasesNavigationResponsive />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <p className="py-4 font-medium border-b">Ressources</p>
                <p className="py-4 font-medium border-b">Pricing</p>
                <p className="py-4 font-medium">About</p>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </>
  );
}

function ProductNavigationResponsive() {
  return (
    <div className="flex flex-col gap-3 cursor-default">
      <div className="grid gap-3 grid-cols-1">
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
        <div className="grid grid-cols-1 gap-3">
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

function UseCasesNavigation() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:w-[500px] lg:w-[600px] xl:w-max xl:max-w-[800px] cursor-default">
      <div>
        <h2 className="text-fuchsia-500 font-bold">HealthCare</h2>
        <ul className="list-none flex flex-col gap-2 text-xs">
          <li>Genomics processing</li>
          <li>Federated computing</li>
        </ul>
      </div>
      <div>
        <h2 className="text-fuchsia-500 font-bold">Financial services</h2>
        <ul className="list-none flex flex-col gap-2 text-xs">
          <li>Reduce fraud and risk exposure</li>
          <li>Regulatory compliance</li>
        </ul>
      </div>
      <div>
        <h2 className="text-fuchsia-500 font-bold">Governement</h2>
        <ul className="list-none flex flex-col gap-2 text-xs">
          <li>Sovereignty</li>
          <li>Collaborative</li>
        </ul>
      </div>
      <div>
        <h2 className="text-fuchsia-500 font-bold">Industry</h2>
        <ul className="list-none flex flex-col gap-2 text-xs">
          <li>Edge computing</li>
          <li>Migration for Hadoop platforms</li>
        </ul>
      </div>
      <div>
        <h2 className="text-fuchsia-500 font-bold">Defense</h2>
        <ul className="list-none flex flex-col gap-2 text-xs">
          <li>Command & control, everywhere</li>
        </ul>
      </div>
      <div>
        <h2 className="text-fuchsia-500 font-bold">Environment</h2>
        <ul className="list-none flex flex-col gap-2 text-xs">
          <li>EcoOps</li>
        </ul>
      </div>
    </div>
  );
}

function UseCasesNavigationResponsive() {
  return (
    <div className="grid grid-cols-1 gap-4 cursor-default">
      <div>
        <h2 className="text-fuchsia-500 font-bold">HealthCare</h2>
        <ul className="list-none flex flex-col gap-2 text-xs">
          <li>Genomics processing</li>
          <li>Federated computing</li>
        </ul>
      </div>
      <div>
        <h2 className="text-fuchsia-500 font-bold">Financial services</h2>
        <ul className="list-none flex flex-col gap-2 text-xs">
          <li>Reduce fraud and risk exposure</li>
          <li>Regulatory compliance</li>
        </ul>
      </div>
      <div>
        <h2 className="text-fuchsia-500 font-bold">Governement</h2>
        <ul className="list-none flex flex-col gap-2 text-xs">
          <li>Sovereignty</li>
          <li>Collaborative</li>
        </ul>
      </div>
      <div>
        <h2 className="text-fuchsia-500 font-bold">Industry</h2>
        <ul className="list-none flex flex-col gap-2 text-xs">
          <li>Edge computing</li>
          <li>Migration for Hadoop platforms</li>
        </ul>
      </div>
      <div>
        <h2 className="text-fuchsia-500 font-bold">Defense</h2>
        <ul className="list-none flex flex-col gap-2 text-xs">
          <li>Command & control, everywhere</li>
        </ul>
      </div>
      <div>
        <h2 className="text-fuchsia-500 font-bold">Environment</h2>
        <ul className="list-none flex flex-col gap-2 text-xs">
          <li>EcoOps</li>
        </ul>
      </div>
    </div>
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
