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
      link: "/#home",
      icon: (
        <Icon icon="" className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Platform",
      link: "/#platform",
      icon: (
        <Icon icon="" className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Runtimes",
      link: "/#runtimes",
      icon: (
        <Icon icon="" className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Use cases",
      link: "/#use-cases",
      icon: (
        <Icon icon="" className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "They trust us",
      link: "/#trust",
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
      id="home"
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
          <span className="text-2xl sm:text-5xl font-bold text-center">
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
        id="platform"
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
        className="mx-auto max-w-[300px] relative p-8 border border-neutral-200 rounded-xl dark:bg-grid-white/[0.2] bg-dot-neutral-500/[0.25] overflow-hidden"
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
        className="mx-auto max-w-[300px] relative p-8 border border-neutral-200 rounded-xl dark:bg-grid-white/[0.2] bg-dot-neutral-500/[0.2] overflow-hidden"
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
        className="mx-auto max-w-[300px] relative p-8 border border-neutral-200 rounded-xl dark:bg-grid-white/[0.2] bg-dot-neutral-500/[0.25] overflow-hidden"
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
        className="mx-auto max-w-[300px] relative p-8 border border-neutral-200 rounded-xl dark:bg-grid-white/[0.2] bg-dot-neutral-500/[0.25] overflow-hidden"
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
    <div className="w-full h-full py-20" id="use-cases">
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

const DefenseContent = () => {
  return (
    <>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 z-50">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          A pioneer in the use of algorithmic intelligence (radar, missiles,
          etc.), the defense sector can use big data in many other areas, from
          human resource management to equipment management.
        </p>
      </div>

      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 z-50">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            What Will Big Data Do for Defense?
          </span>{" "}
          <br />
          <br />
          Processing highly structured domain-specific data offers few benefits
          to a world full of asymmetric threats and multiplying attack vectors,
          nor does fielding purpose-built software systems based on
          pre-determined, hardcoded data, and business models.
          <br />
          <br />
          Today&apos;s multi-source intelligence environments must shorten the
          timelines for delivering complex capabilities and application updates
          from months to days while remaining adaptable and scalable and
          integrating with legacy systems. Adding to the solution complexity and
          urgency is the fact that Defense industry challenges are different
          from most of the commercial sector due to the high risk to life,
          property, and peace and the incredibly compressed timelines in which
          our warfighters have to make decisions. Consider the classic OODA
          (Observe, Orient, Decide, Act) Loop: By using Big Data analytics to
          process data into information, we shorten the observe and orient
          phases so that warfighters will have more time to decide and take
          action. Building on Big Data foundations, artificial intelligence (AI)
          and machine learning (ML) are also increasing speed-to-action.
          <br />
          <br />
          For example, the US Navy and the Marine Corp can now access new
          classified data sets that bridge between Command & Control (C2) and
          the Intelligence Community (IC) to support real-time, data-driven
          actions and other expanded use cases the Navy.
        </p>
      </div>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 z-50">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Why Does Data have to Be Big?
          </span>{" "}
          <br />
          <br />
          Distilling actionable information requires vast volumes of data for
          trend analysis and model training. The more data that is analyzed, the
          higher the confidence will be in Big Data analytics results.
          Confidence in analytic results is what allows our military leaders to
          preemptively predict where the enemy might strike and make better
          decisions in near real-time.
          <br />
          <br />
          Data does not have to be “big” all the time. There is a DoD movement
          to create smaller, more targeted data sets that apply more broadly to
          the missions at hand. These manageable data sets don&apos;t
          necessarily originate from big data caches and benefit from a smaller
          cache. This data strategy has given rise to the need for data
          warehouses and even data lakes that expose orchestratable services
          that pull selectively from a wide array of sources based on geographic
          area, timelines, and mission objectives.
          <br />
          <br />
          What were tomorrow&apos;s projections for using Big Data are now
          becoming today&apos;s realities. Governing bodies are tapping into
          best-of-breed technology and partners to create solutions that
          leverage and maximize some of the world&apos;s largest repositories of
          classified data. Since Big Data, AI, and ML are already impacting the
          Defense industry&apos;s future, the potential for delivering true “All
          Source” intelligence in a timely manner is within grasp. This
          transition means the future of Defense is finally starting to catch up
          to the rest of today&apos;s data-driven world.
        </p>
      </div>
    </>
  );
};

const CyberContent = () => {
  return (
    <>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 z-50">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          As growing volumes of diverse data are channeled into the data lake,
          it becomes a centralized source of vital and often highly sensitive
          business data. In recognition of the need to protect business and
          customer data, enterprise-grade data lake security has been an
          integral part of Graal Data Platform.
        </p>
      </div>

      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 z-50">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Implement Dynamic Security Policies
          </span>{" "}
          <br />
          <br />
          The integration of Graal Platform represents a paradigm shift for
          enterprise big data governance and security. By integrating Graal,
          enterprises can now implement dynamic classification-based security
          policies, in addition to role-based security. Graal platform empowers
          data administrators to define security policy based metadata tags or
          attributes and apply this policy in real-time to the entire hierarchy
          of data assets including databases, tables and columns.
        </p>
      </div>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 z-50">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Balance the Need for Data Access Without Sacrificing Strong Security
          </span>{" "}
          <br />
          <br />
          Dynamic data masking enables Graal security administrators to ensure
          that only authorized users can see the data they are permitted to see,
          while for other users or groups the same data is masked or anonymized
          to protect sensitive content. The process of dynamic data masking does
          not physically alter the data, or make a copy of it. The original
          sensitive data also does not leave the data store, but rather the data
          is obfuscated when presenting to the user.
        </p>
      </div>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 z-50">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Deploy the Most Comprehensive Authorization Model Across Big Data
            Ecosystem
          </span>{" "}
          <br />
          <br />
          Graal Platform provides the most comprehensive centralized platform to
          define, administer and manage security policies consistently.
        </p>
      </div>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 z-50">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Conduct Scalable and Authoritative Audits
          </span>{" "}
          <br />
          <br />
          Graal Platform provides administrators with deep visibility into the
          security administration process that is a prerequisite to complying
          with enterprise data governance audits. The combination of a rich user
          interface and deep audit visibility provides answers to auditor&apos;s
          questions and enhances the productivity of data lake security
          administrators. Graal also provides a centralized framework to collect
          and report on access audit history, including the ability to filter on
          various parameters.
        </p>
      </div>
    </>
  );
};

const RGPDContent = () => {
  return (
    <>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 z-50">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          GDPR represents a sea change for the organizations that store or
          process data on EU residents. As companies scramble to comply with
          GDPR, data governance helps enterprises manage risk effectively and
          gain competitive advantage through responsible use of data assets.
          <br />
          <br />
          Graal Platform provides an accelerated path to a single view of threat
          data to help enterprises comply with the breach notification
          provisions of GDPR.
          <br />
          <br />
          Graal Data Platform reduces compliance risk by identifying and
          classifying sensitive data, understanding its lineage and impact, and
          automating its use, retention, and recovery.
        </p>
      </div>

      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 z-50">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Breach Notification
          </span>{" "}
          <br />
          <br />
          Detect and respond to threats using a single view of diverse,
          streaming data at scale. Security monitoring and analysis that
          features log aggregation, full packet capture indexing, advanced
          behavioral analytics and data enrichment.
        </p>
      </div>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 z-50">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Data Classification
          </span>{" "}
          <br />
          <br />
          Identify and classify sensitive data, harvest and maintain metadata
          about data stores, owners and business classifications.
        </p>
      </div>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 z-50">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Enterprise Data Catalog & Business Glossary
          </span>{" "}
          <br />
          <br />
          Leverage metadata to identify and classify sensitive data using Graal
          Platform. Map sources and specific data locations that contain
          high-risk or personal data.
        </p>
      </div>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 z-50">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Data Lineage and Impact Analysis
          </span>{" "}
          <br />
          <br />
          Use Apache Atlas to maintain a near real-time view of data movement
          throughout the enterprise and understand the proliferation of
          sensitive data with data lineage and impact analysis.
        </p>
      </div>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 z-50">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Access Control
          </span>{" "}
          <br />
          <br />
          Use Apache Ranger to implement policy-based data access controls.
          Monitor user activity to support both forensic auditing, as well as
          alerting for proactive breach notification.
        </p>
      </div>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 z-50">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Data Anonymization
          </span>{" "}
          <br />
          <br />
          Protect sensitive data through anonymization and pseudonymization
          using Apache Ranger&apos;s dynamic masking functionality.
        </p>
      </div>
    </>
  );
};

const HealthContent = () => {
  return (
    <>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 z-50">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          Difficult challenges and choices face today’s healthcare industry.
          Researchers, clinicians and administrators have to make important
          decisions—often without sufficient data. Graal Systems offers its Data
          Platforms to make healthcare data available and actionable.
          <br />
          <br />
          Researchers explore the genetic architecture of cancer cells. Nurses
          and physicians monitor intensive care patients. Administrators submit
          reimbursement claims before patients leave the hospital. Graal Systems
          is transforming big data analytics in healthcare and medicine.
        </p>
      </div>

      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 z-50">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Access genomic data for new cancer treatments
          </span>{" "}
          <br />
          <br />
          If we read that a given drug is “40% effective in treating cancer,”
          another interpretation could be that the drug is 100% effective for
          patients with a certain genetic profile. However, genomic data is Big
          Data. The data in a single human genome includes approximately 20,000
          genes. Stored in traditional data platforms, this is the equivalent of
          several hundred gigabytes. Combining each genome with one million
          variable DNA locations produces the equivalent of about 20 billion
          rows of data per person.
          <br />
          <br />
          Researchers at major universities and teaching hospitals are
          performing big data analytics in genomics with Graal Data Platform as
          the cost-effective, reliable platform for storing genomic data and
          combining that with other data on demographics, trial outcomes, and
          real-time patient responses. They are adopting Graal DataFlow to
          stream that data into Graal Platform for real-time decisions and
          long-term cohort analyses. Connected Data Platforms help those doctors
          learn which drugs and treatments work best for groups of patients
          across the genetic spectrum.
        </p>
      </div>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 z-50">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Monitor patient vitals in real time
          </span>{" "}
          <br />
          <br />
          In a typical hospital setting, nurses do rounds and manually monitor
          patient vital signs. They may visit each bed every few hours to
          measure and record vital signs but the patient&apos;s condition may
          decline between the time of scheduled visits. This means that
          caregivers often respond to problems reactively, in situations where
          arriving earlier may have made a huge difference in the patient&apos;s
          wellbeing.
          <br />
          <br />
          New wireless sensors can capture and transmit patient vitals far more
          frequently than human beings can visit the bedside, and these
          measurements can stream into our platform. Caregivers can use these
          signals for real-time alerts to respond more promptly to unexpected
          changes. Graal uses this data accumulated over time for healthcare
          predictive analytics, feeding algorithms that proactively help predict
          the likelihood of an emergency even before it could be detected with a
          bedside visit.
        </p>
      </div>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 z-50">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Reduce cardiac re-admittance rates
          </span>{" "}
          <br />
          <br />
          Patients with heart disease can be closely monitored while they are in
          a hospital, but when those patients go home, they may skip their
          medications or ignore dietary and self-care instructions given by
          their doctor when they left the hospital.
          <br />
          <br />
          Congestive heart failure causes fluid retention, which leads to weight
          gain. In one innovative program at UC Irvine Health, patients could
          return home with a wireless scale and weigh themselves at regular
          intervals. Algorithms running in Graal&apos; healthcare predictive
          analytics determined unsafe weight gain thresholds and alerted a
          physician to see the patient proactively, before an emergency
          re-admittance was necessary.
        </p>
      </div>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 z-50">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Machine learning to screen for autism with in-home testing
          </span>{" "}
          <br />
          <br />
          Autism spectrum disorders affect 1 in 100 children at an annual cost
          estimated at more than $100 billion. The condition can be detected
          through behavior at eighteen months, but more than 1 in 4 cases are
          still undiagnosed at 8 years of age. A small number of clinical
          testing facilities are oversubscribed, with long wait lists. The most
          common diagnostic test typically takes 2.5 hours to administer and
          score.
          <br />
          <br />
          Dr. Dennis Wall is Director of the Computational Biology Initiative at
          the Harvard Medical School. In this presentation, he describes a
          process his team developed for low-cost, mobile screening for autism.
          It takes less than five minutes and relies on the ability to store
          large volumes of semi-structured data from brief in-home tests
          administered and submitted by parents. Wall&apos;s lab also used
          Facebook to capture user-reported information on autism.
          <br />
          <br />
          Artificial intelligence running on those huge data sets helps maximize
          efficiency of diagnosis without loss of accuracy. This approach, in
          combination with data storage on our platform, can be used for other
          innovative machine learning diagnostic processes.
        </p>
      </div>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 z-50">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Store medical research data forever
          </span>{" "}
          <br />
          <br />
          Medical and scientific researchers at universities live by the
          “publish or perish” code. Data supporting a given paper used to be
          appended in an Excel spreadsheet, but many of today&apos;s data sets
          are just too large. Nevertheless, supporting data sets must be
          perpetually available in association with its paper. If the data
          disappears, the paper becomes unsubstantiated.
          <br />
          <br />
          Universities can use a cluster running Graal Data Platform as a
          cost-effective, perpetual storage platform for its scientists&apos;
          data. Big data in medicine&apos;s easy and open querying capabilities
          allow scientific colleagues to share data, validate it and reuse it
          for more downstream research.
        </p>
      </div>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 z-50">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Track equipment, medicines and caregivers with RFID data
          </span>{" "}
          <br />
          <br />
          Hospitals have begun to use radio-frequency identification (RFID) to
          track equipment and medicines that move throughout their facilities.
          RFID scans of an item or device can capture their contents, location,
          manufacture date, order numbers, and shipping data. One innovative
          hospital group was able to determine how long its doctors stood in
          front of sinks to wash their hands (reducing the likelihood of disease
          transmission).
          <br />
          <br />
          In the short run, this data can help utilize medicines before their
          dates of expiration or quickly locate an important piece of equipment.
          Over time, historical data on how medicines, equipment and doctors
          interact provides valuable information for healthcare predictive
          analytics and helps in planning purchases, training staff and
          improving operational efficiency.
        </p>
      </div>
    </>
  );
};

const FinanceContent = () => {
  return (
    <>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 z-50">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          Whether you&apos;re focused on consumer or commercial banking, wealth
          management or capital markets, or all of the above, it&apos;s all
          about relationships. You&apos;ve got to find, secure, and deepen
          relationships while lowering risk and assuring compliance. Make your
          customers feel you know them. Connect with them in the channel they
          are most comfortable with: mobile, online, phone, or branch agent.
          <br />
          <br />
          Building trust and confidence increases share of wallet and lifetime
          value. To achieve that on a global scale, you need to leverage big
          data and analytics in finance using a proven modern hybrid data
          architecture platform from GraalSystems.
        </p>
      </div>

      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 z-50">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Increase Customer Retention and Profitability
          </span>{" "}
          <br />
          <br />
          You already collect and store massive amounts of data. You can use it
          to increase revenue and share of wallet, but you know you&apos;re just
          scratching the surface. A modern hybrid data architecture and cloud
          data management platform from Graal can transform this into reality—in
          less time and cost—by leveraging your data as it is, where it is.
        </p>
      </div>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 z-50">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Improve Regulatory Compliance
          </span>{" "}
          <br />
          <br />
          GDPR, CCAR, BCBS239, FATCA, Know Your Customer, OATS, Dodd-Frank,
          Sarbanes-Oxley, CASL… Just a few of an evolving set of regulations
          demanding compliance. A modern hybrid data architecture from Graal
          lets you maintain comprehensive audit trails—at scale—while making all
          your data available for analysis.
        </p>
      </div>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 z-50">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Reduce Fraud and Risk Exposure
          </span>{" "}
          <br />
          <br />
          New technologies to leverage big data and analytics in finance, enable
          improved risk modeling and fraud detection. A hybrid cloud data
          management platform lets you implement them faster and more seamlessly
          for better data-driven decisions.
          <br />
          <br />
          Implementing fraud detection methods using a hybrid data architecture,
          lets you deliver faster, more flexible solutions to achieve necessary
          protections and avoid significant losses. It also provides the
          information and enables the data science tools you need to reduce risk
          through risk modeling.
        </p>
      </div>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 z-50">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Modernize Enterprise Analytics
          </span>{" "}
          <br />
          <br />
          Digital delivery creates terabytes of customer data—both data in
          motion and data at rest. The challenge is to isolate truly relevant
          data across multiple silos to drive more agile business intelligence.
          <br />
          <br />
          When enabled by a modern hybrid data architecture platform, data lakes
          and big data fabrics are a better solution. Faster information about
          customer behaviors, interactions, and preferences can unlock new
          revenue and risk modeling opportunities and improve business decision
          making by isolating and processing only the most relevant information.
        </p>
      </div>
    </>
  );
};

function SupportedRuntimes() {
  return (
    <div className="container my-12" id="runtimes">
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
    <div className="container mx-auto my-24 mb-32" id="trust">
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
    title: "Big Data – Winning the Data Battle",
    src: "/assets/defense.png",
    content: <DefenseContent />,
  },
  {
    category: "Defense",
    title: "Next Generation of Security and Enterprise Big Data Governance",
    src: "/assets/security.png",
    content: <CyberContent />,
  },
  {
    category: "Defense",
    title: "Sustainable GDPR Compliance.",
    src: "/assets/rgpd2.png",
    content: <RGPDContent />,
  },

  {
    category: "Research",
    title: "Saving Lives While Delivering More Efficient Care",
    src: "/assets/health.png",
    content: <HealthContent />,
  },
  {
    category: "Finance",
    title:
      "Increase Agility in Financial Services with a Modern Hybrid Data Architecture",
    src: "/assets/finance.png",
    content: <FinanceContent />,
  },
];
