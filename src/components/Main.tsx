"use client";

import { Icon } from "@iconify/react";
import { FlipWords } from "./ui/flip-words";

import dashboard from "../assets/graal-systems-console.png";
import { TracingBeam } from "./ui/tracing-beam";
import { Card, Carousel } from "./ui/apple-cards-carousel";
import { FloatingNav } from "./ui/floating-navbar";

import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Main() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: (
        <Icon icon="" className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Products",
      link: "/about",
      icon: (
        <Icon icon="" className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Use cases",
      link: "/contact",
      icon: (
        <Icon icon="" className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Learn",
      link: "/",
      icon: (
        <Icon icon="" className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Pricing",
      link: "/about",
      icon: (
        <Icon icon="" className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "About",
      link: "/contact",
      icon: (
        <Icon icon="" className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div className="container mx-auto">
      <FloatingNav navItems={navItems} />
      <GridHero />
      <Platform />
      <AppleCardsCarouselDemo />
      <Trust />
    </div>
  );
}

function GridHero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-[calc(100vh-64px)] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-large-black/[0.05] relative flex items-center justify-center"
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Backgrounds
      </p> */}
      <div className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-6">
          <p className="text-4xl sm:text-7xl font-bold">Graal Systems</p>
          <span className="text-2xl sm:text-5xl font-bold">
            Your next generation
            <FlipWords
              className="text-fuchsia-500"
              duration={6000}
              words={["Data platform", "Cloud provider"]}
            />
          </span>
        </div>
        <p className="text-xl sm:text-xl font-semibold">
          Deploying AI and Data processing can be simple
        </p>
        <button className="text-lg font-normal bg-black text-white rounded-3xl py-2 px-4 flex gap-3 items-center">
          <Icon icon="material-symbols:login" width={20} /> Getting started
        </button>
      </div>
    </motion.div>
  );
}

function Platform() {
  return (
    <TracingBeam>
      <div
        className="max-w-full mx-auto antialiased pt-4 relative"
        style={{ perspective: "800px" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 1, once: true }}
          className="container mx-auto grid grid-cols-2 my-16 gap-x-4"
        >
          <h1 className="col-span-2 mb-16 text-center text-2xl sm:text-5xl font-semibold">
            Our platform
          </h1>
          <div className="flex  gap-6 col-span-2 max-w-[80%] mx-auto">
            <p className="leading-6 text-neutral-400 font-normal text-sm w-11/12">
              <span className="text-lg font-semibold text-neutral-600">
                Graal Platform
              </span>{" "}
              is a modern data analytics platform that provides an easy-to-use
              platform for data analysts, developers and data scientists who
              want to run various data projects quickly and very easily. It is a
              web-based data analytics and decision modeling SaaS platform
              offering comprehensive tooling for working with big data.
            </p>
            <p className="leading-6 text-neutral-400 font-normal text-sm w-11/12">
              <span className="text-lg font-semibold text-neutral-600">
                Graal Platform
              </span>{" "}
              reimagines how people use data by removing the barriers between
              back-end data management and front-end data analysis. It enables
              users with varying technical ability and deep subject matter
              expertise to work meaningfully with data. With Graal Platform,
              anyone can source, connect, and transform data into any shape they
              desire, then use it to take action.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ rotateX: "40deg" }}
          whileInView={{ rotateX: 0 }}
          viewport={{ amount: 0.75, once: true }}
          className="transition-all duration-300 mx-auto max-w-[80%] transform rounded-xl bg-gradient-to-r from-fuchsia-700 to-fuchsia-500 p-2"
        >
          <img
            src={dashboard.src}
            alt="graal-system-console"
            className="mx-auto rounded-xl"
          />
        </motion.div>

        <Features />
      </div>
      <SupportedRuntimes />
    </TracingBeam>
  );
}

export function Features() {
  return (
    <div className="grid grid-cols-2 w-full mx-auto lg:grid-cols-4 gap-8 py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0 }}
        className="max-w-[300px] relative p-8 border border-neutral-200 rounded-xl dark:bg-grid-white/[0.2] bg-dot-neutral-500/[0.25] overflow-hidden"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_45%,black)]"></div>
        <div className="relative z-10 flex flex-col gap-4">
          <Icon
            icon="ant-design:experiment-outlined"
            className="text-2xl text-fuchsia-500/75"
          />
          <h2 className="text-2xl font-semibold">Experiment</h2>
          <p className="text-sm text-neutral-400">
            You don&apos;t have to build your data platform from the ground up.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="max-w-[300px] relative p-8 border border-neutral-200 rounded-xl dark:bg-grid-white/[0.2] bg-dot-neutral-500/[0.25] overflow-hidden"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_45%,black)]"></div>
        <div className="relative z-10 flex flex-col gap-4">
          <Icon
            icon="mdi:gear-outline"
            className="text-2xl text-fuchsia-500/75"
          />
          <h2 className="text-2xl font-semibold">Automate</h2>
          <p className="text-sm text-neutral-400">
            Rapidly develop and iterate your code, while we take care of
            configuration, infrastructure and ops.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1 }}
        className="max-w-[300px] relative p-8 border border-neutral-200 rounded-xl dark:bg-grid-white/[0.2] bg-dot-neutral-500/[0.25] overflow-hidden"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_45%,black)]"></div>
        <div className="relative z-10 flex flex-col gap-4">
          <Icon
            icon="ion:rocket-outline"
            className="text-2xl text-fuchsia-500/75"
          />
          <h2 className="text-2xl font-semibold">Deploy</h2>
          <p className="text-sm text-neutral-400">
            Build, run, and manage you data processing at enterprise scale.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="max-w-[300px] relative p-8 border border-neutral-200 rounded-xl dark:bg-grid-white/[0.2] bg-dot-neutral-500/[0.25] overflow-hidden"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_45%,black)]"></div>
        <div className="relative z-10 flex flex-col gap-4">
          <Icon icon="mdi:magnify" className="text-2xl text-fuchsia-500/75" />
          <h2 className="text-2xl font-semibold">Monitor</h2>
          <p className="text-sm text-neutral-400">
            Ensure data processing is delivering value for your organisation,
            every day
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-semibold text-neutral-800 dark:text-neutral-200">
        Tailored for multiple&nbsp;
        <span className="underline-offset-8 underline decoration-fuchsia-500">
          industries
        </span>
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 z-50"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
          </div>
        );
      })}
    </>
  );
};

function SupportedRuntimes() {
  return (
    <div className="container my-12">
      <div>
        <h1 className="col-span-2 mb-16 text-center text-2xl sm:text-5xl font-semibold">
          Supported Runtimes
        </h1>
        <div className="flex gap-6 col-span-2 max-w-[80%] mx-auto mb-4">
          <p className="leading-6 text-neutral-400 font-normal text-sm w-11/12 text-center">
            <span className="text-lg font-semibold text-neutral-600">
              Graal Platform
            </span>{" "}
            <span className="text-lg">support more than 30 runtimes </span>
            <br />
            Use Apache Spark, Tensorflow, Python, Apache Sqoop, or Apache Beam.
            Meet rigorous, enterprise-class performance, security, and
            compliance requirements using a fully managed trust service that
            handles millions of requests per da
          </p>
        </div>
      </div>
      <InfiniteMovingCards
        items={[
          { src: "/assets/pytorch.png" },
          { src: "/assets/tensorflow.png" },
          { src: "/assets/keras.png" },
          { src: "/assets/kafka.png" },
          {
            src: "/assets/bash.png",
          },
          {
            src: "/assets/apache_flink.png",
          },
          {
            src: "/assets/sklearn.png",
          },
          {
            src: "/assets/spring.png",
          },
        ]}
        speed="slow"
      />
    </div>
  );
}

function Trust() {
  return (
    <div className="container mx-auto my-12">
      <h1 className="col-span-2 mb-16 text-center text-2xl sm:text-5xl font-semibold">
        They trust us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto">
        <img
          src="/assets/lbc.png"
          className="grayscale hover:grayscale-0 transition-all duration-300 hover:cursor-pointer"
          alt=""
        />
        <img
          src="/assets/margo.png"
          className="grayscale hover:grayscale-0 transition-all duration-300 hover:cursor-pointer"
          alt=""
        />
        <img
          src="/assets/cardiag.png"
          className="grayscale hover:grayscale-0 transition-all duration-300 hover:cursor-pointer"
          alt=""
        />
      </div>
    </div>
  );
}

const data = [
  {
    category: "Defense",
    title: "Lorem ipsum dolor sit amet.",
    src: "/assets/defense.jpg",
    content: <DummyContent />,
  },
  {
    category: "Defense",
    title: "Lorem ipsum dolor sit amet.",
    src: "/assets/security.jpg",
    content: <DummyContent />,
  },
  {
    category: "Defense",
    title: "Lorem ipsum dolor sit amet.",
    src: "/assets/rgpd.png",
    content: <DummyContent />,
  },

  {
    category: "Research",
    title: "Lorem ipsum dolor sit amet.",
    src: "/assets/health.jpg",
    content: <DummyContent />,
  },
  {
    category: "Research",
    title: "Lorem ipsum dolor sit amet.",
    src: "/assets/finance.jpg",
    content: <DummyContent />,
  },
];
