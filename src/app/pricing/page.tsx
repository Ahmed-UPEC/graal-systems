import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";

import pricing from "../../assets/illustration/pricing.png";
import plan from "../../assets/illustration/plan.png";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div>
        <TopBar />
        <PageBanner />
        <PagePricingPlan />
        <PagePricingPlanAccordeon />
        <Footer callToActionBanner={true} />
      </div>
    </div>
  );
}

function PageBanner() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto w-10/12 xl:w-10/12 text-left pt-0 lg:pt-8 p-8 place-items-center container">
      <div className="flex flex-col gap-4 order-last lg:order-1">
        <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">
          Pricing
        </h3>
        <h2 className="font-semibold text-2xl md:text-3xl xl:text-6xl">
          Lorem ipsum dolor sit amet
        </h2>
        <p className="text-base w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <Link
          href="/contact"
          className="flex justify-start bg-fuchsia-500 text-white py-2 px-4 rounded-md w-fit hover:bg-black transition-all duration-300"
        >
          Contact us
        </Link>
      </div>
      <img
        src={pricing.src}
        alt="data illustration"
        className="max-w-[75%] md:max-w[100%] mx-auto lg:order-last order-1"
      />
    </div>
  );
}

function PagePricingPlan() {
  return (
    <div className="py-16 mx-auto container">
      <div className="flex flex-col items-center justify-center">
        <div className="mx-auto max-w-[60%] text-center flex flex-col gap-4 pb-8">
          <h2 className="text-2xl font-semibold text-fuchsia-500">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="text-center text-neutral-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto mt-4 container gap-4">
          <div className="bg-fuchsia-200 text-fuchsia-800 rounded-xl p-6 flex flex-col gap-4">
            <img
              src={plan.src}
              alt="pricing illustration"
              className="max-w-[80%] mx-auto"
            />
            <h2 className="text-2xl uppercase font-semibold">SAAS PUBLIC</h2>
            <h2 className="text-lg font-medium">0,005€ / Per GCU</h2>
            <p>
              Public infrastructures of hosts and cloud providers. The fastest
              way to start your project!
            </p>
            <ul>
              <li>List 1</li>
              <li>List 2</li>
              <li>List 3</li>
            </ul>
          </div>
          <div className="bg-fuchsia-200 text-fuchsia-800 rounded-xl p-6 flex flex-col gap-4">
            <img
              src={plan.src}
              alt="pricing illustration"
              className="max-w-[80%] mx-auto"
            />
            <h2 className="text-2xl uppercase font-semibold">Enterprise</h2>
            <h2 className="text-lg font-medium">240 k€ / Per Year</h2>
            <p>
              Public infrastructures of hosts and cloud providers. The fastest
              way to start your project!
            </p>
            <ul>
              <li>List 1</li>
              <li>List 2</li>
              <li>List 3</li>
            </ul>
          </div>
          <div className="bg-fuchsia-200 text-fuchsia-800 rounded-xl p-6 flex flex-col gap-4">
            <img
              src={plan.src}
              alt="pricing illustration"
              className="max-w-[80%] mx-auto"
            />
            <h2 className="text-2xl uppercase font-semibold">Private cloud</h2>
            <h2 className="text-lg font-medium">240 k€ / Per Year</h2>
            <p>
              Public infrastructures of hosts and cloud providers. The fastest
              way to start your project!
            </p>
            <ul>
              <li>List 1</li>
              <li>List 2</li>
              <li>List 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function PagePricingPlanAccordeon() {
  return (
    <div className="mx-auto pt-16 pb-24 container">
      <Accordion defaultValue="item-availability" type="single" collapsible>
        <AccordionItem value="item-availability" className="border-b-0">
          <AccordionTrigger className="text-xl hover:no-underline justify-start">
            <span className="order-2 ml-4">Availability and Response Time</span>
          </AccordionTrigger>
          <AccordionContent>
            <PagePricingPlanAccordeonAvailabilityAndResponseTime />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-services" className="border-b-0 ">
          <AccordionTrigger className="text-xl hover:no-underline justify-start">
            <span className="order-2 ml-4">Services Provided</span>
          </AccordionTrigger>
          <AccordionContent>
            <PagePricingPlanAccordeonServicesProvided />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mx-auto max-w-[70%] my-8 text-center flex flex-col gap-4 pb-8">
        <h2 className="text-2xl font-semibold text-fuchsia-500">
          Pay as you go
        </h2>
        <p className="text-center text-neutral-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      <Accordion defaultValue="item-generic" type="single" collapsible>
        <AccordionItem value="item-generic" className="border-b-0 ">
          <AccordionTrigger className="text-xl hover:no-underline justify-start">
            <span className="order-2 ml-4">Generic</span>
          </AccordionTrigger>
          <AccordionContent>
            <PagePricingPlanAccordeonGeneric />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-memory" className="border-b-0 ">
          <AccordionTrigger className="text-xl hover:no-underline justify-start">
            <span className="order-2 ml-4">Memory optimised</span>
          </AccordionTrigger>
          <AccordionContent>
            <PagePricingPlanAccordeonMemoryOptimised />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-compute" className="border-b-0 ">
          <AccordionTrigger className="text-xl hover:no-underline justify-start">
            <span className="order-2 ml-4">Compute optimised</span>
          </AccordionTrigger>
          <AccordionContent>
            <PagePricingPlanAccordeonComputeOptimised />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-gpu" className="border-b-0 ">
          <AccordionTrigger className="text-xl hover:no-underline justify-start">
            <span className="order-2 ml-4">GPU</span>
          </AccordionTrigger>
          <AccordionContent>
            <PagePricingPlanAccordeonGPU />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mx-auto max-w-[70%] my-8 text-center flex flex-col gap-4 pb-8">
        <h2 className="text-2xl font-semibold text-fuchsia-500">F.A.Q</h2>
      </div>

      <Accordion
        type="single"
        collapsible
        className="grid grid-cols-1 lg:grid-cols-2 gap-x-4"
      >
        <AccordionItem value="item-generic" className="border-b-0 ">
          <AccordionTrigger className="text-xl hover:no-underline justify-start">
            <span className="order-2 ml-4">What is a GCU ?</span>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              A CGU is the unit used to measure consumption on the Graal
              platform. The number of GCUs consumed is based on compute engine
              size and processing time, with processing time measured on a
              per-second basis
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-memory" className="border-b-0 ">
          <AccordionTrigger className="text-xl hover:no-underline justify-start">
            <span className="order-2 ml-4 text-left">
              How long does it take to deploy Graal Platform for
              entreprise/private cloud offers ?
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Our team need 3 weeks to deploy the Graal Platform on
              Entreprise/Private cloud. This includes auditing the existing
              configuration, the whole deployment and tests.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-compute" className="border-b-0 ">
          <AccordionTrigger className="text-xl hover:no-underline justify-start">
            <span className="order-2 ml-4">How am i billied ?</span>
          </AccordionTrigger>
          <AccordionContent>
            <PagePricingPlanAccordeonComputeOptimised />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

function PagePricingPlanAccordeonAvailabilityAndResponseTime() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="lg:min-w-[200px] border-r text-center"></TableHead>
          <TableHead className="border-r text-center">Saas public</TableHead>
          <TableHead className="border-r text-center">Entreprise</TableHead>
          <TableHead className="text-center">Private Cloud</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium border-r border-b">
            Access
          </TableCell>
          <TableCell className="border-r border-b">Phone and web</TableCell>
          <TableCell className="border-r border-b">Phone and web</TableCell>
          <TableCell className="border-b">Phone and web</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium border-r border-b">
            Hours of direct support**
          </TableCell>
          <TableCell className="border-r border-b">8 x 5</TableCell>
          <TableCell className="border-r border-b">27 x 7</TableCell>
          <TableCell className="border-b">24 x 7</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium border-r border-b">
            Severity 1 Response ***
          </TableCell>
          <TableCell className="border-r border-b">1 Business Day</TableCell>
          <TableCell className="border-b border-r">4 Hours</TableCell>
          <TableCell className="border-b">1 Hour</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium border-r border-b">
            Severity 2 Response ***
          </TableCell>
          <TableCell className="border-r border-b">2 Business Days</TableCell>
          <TableCell className="border-b border-r">8 Hours</TableCell>
          <TableCell className="border-b">4 Hours</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium border-r border-b">
            Severity 3 Response ***
          </TableCell>
          <TableCell className="border-r border-b">3 Business Days</TableCell>
          <TableCell className="border-b border-r">1 Business day</TableCell>
          <TableCell className="border-b">8 Hours</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium border-r border-b">
            Severity 4 Response ***
          </TableCell>
          <TableCell className="border-r border-b">5 Business Week</TableCell>
          <TableCell className="border-b border-r">2 Business days</TableCell>
          <TableCell className="border-b">1 Business day</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

function PagePricingPlanAccordeonServicesProvided() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="lg:min-w-[200px] border-r text-center"></TableHead>
          <TableHead className="border-r text-center">Saas public</TableHead>
          <TableHead className="border-r text-center">Entreprise</TableHead>
          <TableHead className="text-center">Private Cloud</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium border-r border-b">
            Specific developments
          </TableCell>
          <TableCell className="border-r border-b">No</TableCell>
          <TableCell className="border-r border-b">No</TableCell>
          <TableCell className="border-b">Yes</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium border-r border-b">
            Installation
          </TableCell>
          <TableCell className="border-r border-b">No</TableCell>
          <TableCell className="border-r border-b">Yes</TableCell>
          <TableCell className="border-b">Yes</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium border-r border-b">
            Fully Managed service
          </TableCell>
          <TableCell className="border-r border-b">Yes</TableCell>
          <TableCell className="border-r border-b">No</TableCell>
          <TableCell className="border-b">No</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium border-r border-b">
            Infinite scale
          </TableCell>
          <TableCell className="border-r border-b">Yes</TableCell>
          <TableCell className="border-r border-b">No</TableCell>
          <TableCell className="border-b">No</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium border-r border-b">
            Shared or dedicated resources
          </TableCell>
          <TableCell className="border-r border-b">Shared</TableCell>
          <TableCell className="border-b border-r">Dedicated</TableCell>
          <TableCell className="border-b">Dedicated</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium border-r border-b">
            Training
          </TableCell>
          <TableCell className="border-r border-b">No (community)</TableCell>
          <TableCell className="border-b border-r">
            Yes (15 days training)
          </TableCell>
          <TableCell className="border-b">Yes (30 days training)</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium border-r border-b">
            Autoscaling & Autotuning
          </TableCell>
          <TableCell className="border-r border-b">Yes</TableCell>
          <TableCell className="border-r border-b">Yes</TableCell>
          <TableCell className="border-b">Yes</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

function PagePricingPlanAccordeonGeneric() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="lg:min-w-[100px] border-r text-center"></TableHead>
          <TableHead className="border-r text-center">Memory</TableHead>
          <TableHead className="border-r text-center">GCU</TableHead>
          <TableHead className="text-center">Monthly Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium border-r border-b">
            1 cores
          </TableCell>
          <TableCell className="border-r border-b">4 GB</TableCell>
          <TableCell className="border-r border-b">1.5</TableCell>
          <TableCell className="border-b">54 €</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium border-r border-b">
            2 Cores
          </TableCell>
          <TableCell className="border-r border-b">8 GB</TableCell>
          <TableCell className="border-r border-b">3</TableCell>
          <TableCell className="border-b">108 €</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium border-r border-b">
            4 Cores
          </TableCell>
          <TableCell className="border-r border-b">16 GB</TableCell>
          <TableCell className="border-r border-b">5</TableCell>
          <TableCell className="border-b">180 €</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium border-r border-b">
            8 Cores
          </TableCell>
          <TableCell className="border-r border-b">32 GB</TableCell>
          <TableCell className="border-r border-b">9</TableCell>
          <TableCell className="border-b">324 €</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium border-r border-b">
            16 Cores
          </TableCell>
          <TableCell className="border-r border-b">16 GB</TableCell>
          <TableCell className="border-r border-b">18</TableCell>
          <TableCell className="border-b">648 €</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

function PagePricingPlanAccordeonMemoryOptimised() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="lg:min-w-[100px] border-r text-center"></TableHead>
          <TableHead className="border-r text-center">Memory</TableHead>
          <TableHead className="border-r text-center">GCU</TableHead>
          <TableHead className="text-center">Monthly Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium border-r border-b">
            1 cores
          </TableCell>
          <TableCell className="border-r border-b">8 GB</TableCell>
          <TableCell className="border-r border-b">2.5</TableCell>
          <TableCell className="border-b">90 €</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium border-r border-b">
            2 Cores
          </TableCell>
          <TableCell className="border-r border-b">16 GB</TableCell>
          <TableCell className="border-r border-b">4</TableCell>
          <TableCell className="border-b">144 €</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium border-r border-b">
            4 Cores
          </TableCell>
          <TableCell className="border-r border-b">32 GB</TableCell>
          <TableCell className="border-r border-b">6</TableCell>
          <TableCell className="border-b">216 €</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium border-r border-b">
            8 Cores
          </TableCell>
          <TableCell className="border-r border-b">64 GB</TableCell>
          <TableCell className="border-r border-b">9</TableCell>
          <TableCell className="border-b">324 €</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium border-r border-b">
            16 Cores
          </TableCell>
          <TableCell className="border-r border-b">16 GB</TableCell>
          <TableCell className="border-r border-b">18</TableCell>
          <TableCell className="border-b">648 €</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

function PagePricingPlanAccordeonComputeOptimised() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="lg:min-w-[100px] border-r text-center"></TableHead>
          <TableHead className="border-r text-center">Memory</TableHead>
          <TableHead className="border-r text-center">GCU</TableHead>
          <TableHead className="text-center">Monthly Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium border-r border-b">
            1 cores
          </TableCell>
          <TableCell className="border-r border-b">2 GB</TableCell>
          <TableCell className="border-r border-b">1</TableCell>
          <TableCell className="border-b">36 €</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium border-r border-b">
            2 Cores
          </TableCell>
          <TableCell className="border-r border-b">4 GB</TableCell>
          <TableCell className="border-r border-b">2</TableCell>
          <TableCell className="border-b">72 €</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium border-r border-b">
            4 Cores
          </TableCell>
          <TableCell className="border-r border-b">8 GB</TableCell>
          <TableCell className="border-r border-b">4</TableCell>
          <TableCell className="border-b">144 €</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium border-r border-b">
            8 Cores
          </TableCell>
          <TableCell className="border-r border-b">16 GB</TableCell>
          <TableCell className="border-r border-b">8</TableCell>
          <TableCell className="border-b">288 €</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium border-r border-b">
            16 Cores
          </TableCell>
          <TableCell className="border-r border-b">32 GB</TableCell>
          <TableCell className="border-r border-b">16</TableCell>
          <TableCell className="border-b">576 €</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

function PagePricingPlanAccordeonGPU() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="lg:min-w-[100px] border-r text-center"></TableHead>
          <TableHead className="border-r text-center">Memory</TableHead>
          <TableHead className="border-r text-center">GCU</TableHead>
          <TableHead className="text-center">Monthly Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium border-r border-b">
            1 cores
          </TableCell>
          <TableCell className="border-r border-b">16 GB</TableCell>
          <TableCell className="border-r border-b">Coming soon</TableCell>
          <TableCell className="border-b">Coming soon</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium border-r border-b">
            2 Cores
          </TableCell>
          <TableCell className="border-r border-b">32 GB</TableCell>
          <TableCell className="border-r border-b">Coming soon</TableCell>
          <TableCell className="border-b">Coming soon</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium border-r border-b">
            4 Cores
          </TableCell>
          <TableCell className="border-r border-b">64 GB</TableCell>
          <TableCell className="border-r border-b">Coming soon</TableCell>
          <TableCell className="border-b">Coming soon</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
