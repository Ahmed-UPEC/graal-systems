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
    <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto w-10/12 xl:w-10/12 text-left pt-0 lg:pt-8 p-8 place-items-center">
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
        <button className="flex justify-start bg-fuchsia-500 text-white py-2 px-4 rounded-md w-fit hover:bg-black transition-all duration-300">
          Contact us
        </button>
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
    <div className="py-16">
      <div className="flex flex-col items-center justify-center">
        <div className="mx-auto max-w-[45%] text-center flex flex-col gap-4 pb-8">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto max-w-[95%] lg:max-w-[60%] gap-4">
          <div className="bg-fuchsia-400 text-white rounded-xl p-6 flex flex-col gap-4">
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
          <div className="bg-fuchsia-400 text-white rounded-xl p-6 flex flex-col gap-4">
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
          <div className="bg-fuchsia-400 text-white rounded-xl p-6 flex flex-col gap-4">
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
    <div className="mx-auto max-w-[95%] lg:max-w-[60%] py-16">
      <Accordion defaultValue="item-1" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl hover:no-underline">
            Availability and Response Time
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl hover:no-underline">
            Services Provided
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
