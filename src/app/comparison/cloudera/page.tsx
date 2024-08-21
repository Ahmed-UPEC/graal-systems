"use client";

import data from "../../../assets/illustration/data.png";
import dataBis from "../../../assets/illustration/data_bis.png";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Page() {
  return (
    <div className="">
      <PageBanner />
      <PageTable />
      <PageInformation />
    </div>
  );
}

function PageBanner() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto text-left pt-0 lg:pt-8 p-8 place-items-center container">
      <div className="flex flex-col gap-4 order-last lg:order-1">
        <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">
          Lorem ipsum dolor sit amet
        </h3>
        <h2 className="font-semibold text-2xl md:text-3xl xl:text-6xl">
          GraalSystems vs. Cloudera
        </h2>
        <p className="text-base w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <button className="flex justify-start bg-fuchsia-500 text-white py-2 px-4 rounded-md w-fit hover:bg-black transition-all duration-300">
          Download the migration guide
        </button>
      </div>
      <img
        src={data.src}
        alt="data illustration"
        className="max-w-[75%] md:max-w[100%] mx-auto lg:order-last order-1"
      />
    </div>
  );
}

function PageTable() {
  return (
    <div className="bg-neutral-50 py-4 mx-auto container">
      <div className="w-11/12 lg:w-8/12 mx-auto my-8">
        <p className="text-center my-12">
          Data processing workloads are the foundation of your analytics and AI
          initiatives and typically account for 50% or more of an
          organization&apos;s overall data costs. The rapid rise of LLMs and
          other AI applications is forcing companies to take a closer look at
          how to scale in a cost-efficient manner.
        </p>
        <Table>
          <TableCaption className="pt-4">
            Any question about the comparison ? Contact us
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="lg:min-w-[200px] border-r text-center">
                Use case
              </TableHead>
              <TableHead className="border-r text-center">Cloudera</TableHead>
              <TableHead className="text-center">Graal System</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium border-r border-b">
                Self-Managing
              </TableCell>
              <TableCell className="border-r border-b">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                quis malesuada orci.
              </TableCell>
              <TableCell className="border-b">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                quis malesuada orci.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium border-r border-b">
                Complexity and ROI
              </TableCell>
              <TableCell className="border-r border-b">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                quis malesuada orci.
              </TableCell>
              <TableCell className="border-b">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                quis malesuada orci.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium border-r border-b">
                Maintenance
              </TableCell>
              <TableCell className="border-r border-b">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                quis malesuada orci.
              </TableCell>
              <TableCell className="border-b">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                quis malesuada orci.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium border-r border-b">
                Skills
              </TableCell>
              <TableCell className="border-r border-b">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                quis malesuada orci.
              </TableCell>
              <TableCell className="border-b">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                quis malesuada orci.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium border-r border-b">
                Design
              </TableCell>
              <TableCell className="border-r border-b">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                quis malesuada orci.
              </TableCell>
              <TableCell className="border-b">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                quis malesuada orci.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium border-r border-b">
                Managing &quot;zero-copy&quot; external secrets
              </TableCell>
              <TableCell className="border-r border-b">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                quis malesuada orci.
              </TableCell>
              <TableCell className="border-b">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                quis malesuada orci.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function PageInformation() {
  return (
    <div className="bg-neutral-900 text-white pb-16 pt-8">
      <div className="grid grid-cols-1 xl:grid-cols-2 mx-auto text-left p-4 lg:p-8 place-items-center gap-4 md:gap-0 container">
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-2xl text-fuchsia-500">
            Cloudera to GraalSystems Migration Guide
          </h3>
          <p className="">
            Building data projects on Databricks requires you to manage and
            operate your clusters. Over time, your architecture will become more
            costly and complex. With the GraalSystemsplatform, you get
            high-performing, cost effective data platform and native support for
            AI.{" "}
          </p>
          <p className="font-semibold">
            Download this migration guide to learn:
          </p>
          <ul className="list-disc pl-10">
            <li>5 critical phases of your migration project</li>
            <li>Best practices to scale your platform</li>
            <li>Resources to help with your migration journey</li>
          </ul>
        </div>
        <img
          src={dataBis.src}
          alt="data illustration"
          className="max-w-[45%] sm:max-w[100%] mx-auto"
        />
      </div>
    </div>
  );
}
