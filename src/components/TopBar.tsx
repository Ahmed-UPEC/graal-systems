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

interface TopBarProps {
  preTopBar?: boolean;
}

export default function TopBar({ preTopBar }: Readonly<TopBarProps>) {
  const [isClient, setIsClient] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };

  function handleResize() {
    setWindowDimensions(getWindowDimensions());
  }

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [isClient]);

  return (
    <>
      {windowDimensions.width > 1024 ? (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {preTopBar && (
            <div className="bg-black text-white p-3">
              <ul className="flex flex-col items-center sm:flex-row sm:gap-6 gap-1 list-none">
                <li className="flex gap-2 items-center">
                  <Icon icon="mdi:phone" />
                  +33 1 39 49 58 39
                </li>
                <li className="flex gap-2 items-center">
                  <Icon icon="mdi:at" />
                  contact@graal.systems
                </li>
                <li className="flex gap-2 items-center">
                  <Icon icon="ion:location-sharp" />
                  Annecy
                </li>
              </ul>
            </div>
          )}
          <div className="container mx-auto flex justify-around items-center py-8">
            <Link href={"/"}>
              <img src={logo.src} alt="Single" className="max-w-24" />
            </Link>
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
                    <Link
                      href="https://docs.dev.graal.systems/"
                      target="_blank"
                    >
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Ressources
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/pricing">
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Pricing
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/about">
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
              <Link
                href="/contact"
                className="text-sm bg-fuchsia-500 text-white rounded-3xl px-4 py-2 flex items-center gap-2"
              >
                <span>Book a demo</span>{" "}
                <Icon
                  icon="flowbite:chevron-right-outline"
                  width={16}
                  strokeWidth={3.5}
                />
              </Link>
              <button className="text-sm bg-black text-white rounded-3xl px-4 py-2 flex items-center gap-2">
                Login{" "}
                <Icon
                  icon="material-symbols:login"
                  width={16}
                  strokeWidth={3.5}
                />
              </button>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto flex justify-between items-center py-8"
        >
          <Link href={"/"}>
            <img src={logo.src} alt="Single" className="max-w-24" />
          </Link>

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
                <Link
                  href="https://docs.dev.graal.systems/"
                  className="py-4 font-medium border-b block"
                  target="_blank"
                >
                  Ressources
                </Link>
                <p className="py-4 font-medium border-b block">Pricing</p>
                <p className="py-4 font-medium block">About</p>
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

          <Link href={"/comparison/databricks"}>Vs Databricks</Link>
          <Link href={"/comparison/cloudera"}>Vs Cloudera</Link>
          <Link href={"/comparison/snowflake"}>Vs Snowflake</Link>
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
        <ul className="list-none flex flex-col gap-2 text-sm">
          <li>Genomics processing</li>
          <li>Federated computing</li>
        </ul>
      </div>
      <div>
        <h2 className="text-fuchsia-500 font-bold">Financial services</h2>
        <ul className="list-none flex flex-col gap-2 text-sm">
          <li>Reduce fraud and risk exposure</li>
          <li>Regulatory compliance</li>
        </ul>
      </div>
      <div>
        <h2 className="text-fuchsia-500 font-bold">Governement</h2>
        <ul className="list-none flex flex-col gap-2 text-sm">
          <li>Sovereignty</li>
          <li>Collaborative</li>
        </ul>
      </div>
      <div>
        <h2 className="text-fuchsia-500 font-bold">Industry</h2>
        <ul className="list-none flex flex-col gap-2 text-sm">
          <li>Edge computing</li>
          <li>Migration for Hadoop platforms</li>
        </ul>
      </div>
      <div>
        <h2 className="text-fuchsia-500 font-bold">Defense</h2>
        <ul className="list-none flex flex-col gap-2 text-sm">
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
    <div className="flex flex-col gap-3 p-4 md:w-[500px] lg:w-[600px] xl:w-max xl:max-w-[1060px] cursor-default">
      <div className="grid gap-3 grid-cols-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-fuchsia-500 font-bold">
            For data engineer and Devops
          </h2>
          <ul className="list-none flex flex-col gap-2 text-sm">
            <Link href="/product/serverless-computing">
              Serverless computing
            </Link>
            <Link href="/product/edge-to-cloud">
              From edge to cloud : deploy anywhere
            </Link>
            <Link href="/product/cross-version-testing">
              Cross-version projects testing
            </Link>
            <Link href="/product/compatibility-hadoop-sas">
              Backward compatibility for Hadoop and SAS
            </Link>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-fuchsia-500 font-bold">
            For data scientist and MLops
          </h2>
          <ul className="list-none flex flex-col gap-2 text-sm">
            <Link href="/product/gpu-native">GPU native, the easy way</Link>
            <Link href="/product/extensive-stack">The extensive stack</Link>
            <Link href="/product/productivity">Focused on productivity</Link>
            <Link href="/product/models-deployment">
              Day-1 production for models deployment
            </Link>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-fuchsia-500 font-bold">
            For business and data analyst
          </h2>
          <ul className="list-none flex flex-col gap-2 text-sm">
            <Link href="/product/limitless-no-code">Limitless no-code</Link>
            <Link href="/product/collaboration-at-scale">
              Collaboration at scale
            </Link>
            <Link href="/product/dashboards-and-bi">Dashboard and BI</Link>
            <Link href="/product/data-mesh">Data mest</Link>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-fuchsia-500 font-bold">
            For data office... and others
          </h2>
          <ul className="list-none flex flex-col gap-2 text-sm">
            <Link href="/product/governance">Governance for everyone</Link>
            <Link href="/product/data-quality-and-compliance">
              Data quality and compliance
            </Link>
            <Link href="/product/integrated">Integrated with your tools</Link>
            <Link href="/product/finops">Fine grained FinOps</Link>
          </ul>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-3">
        <h2 className="font-bold">See how Graal compared with</h2>
        <div className="grid grid-cols-5">
          <p className="col-span-2">
            We made it easy to get an honest view of how GraalSystems compares
            to other platform.
          </p>
          <Link href={"/comparison/databricks"}>Vs Databricks</Link>
          <Link href={"/comparison/cloudera"}>Vs Cloudera</Link>
          <Link href={"/comparison/snowflake"}>Vs Snowflake</Link>
        </div>
      </div>
    </div>
  );
}
