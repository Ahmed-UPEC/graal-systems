"use client";

import bannerImage from "@/assets/illustration/data.png";
import PageComparison from "@/components/comparison";

export default function Page() {
  return (
    <div className="my-16">
      <PageBanner
        subTitle="For data engineers and DevOps"
        title="Serverless computing"
        caption="Execute data processing and analytics tasks without the need for explicit infrastructure management, enabling seamless and efficient data exploration and analysis"
        bannerImage={bannerImage.src}
      />
      <PageHero />
      <PageComparison />
    </div>
  );
}
interface PageBannerProps {
  subTitle: string;
  title: string;
  caption: string;
  bannerImage: string;
}

function PageBanner({
  subTitle,
  title,
  caption,
  bannerImage,
}: Readonly<PageBannerProps>) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto w-10/12 xl:w-10/12 text-left pt-0 lg:pt-8 p-8 place-items-center">
      <div className="flex flex-col gap-4 order-last lg:order-1">
        <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">
          {title}
        </h3>
        <h2 className="font-semibold text-2xl md:text-3xl xl:text-6xl">
          {subTitle}
        </h2>
        <p className="text-base w-full">{caption}</p>
        <button className="flex justify-start bg-fuchsia-500 text-white py-2 px-4 rounded-md w-fit hover:bg-black transition-all duration-300">
          Contact us
        </button>
      </div>
      <img
        src={bannerImage}
        alt="banner illustration"
        className="max-w-[75%] md:max-w[100%] mx-auto lg:order-last order-1"
      />
    </div>
  );
}

function PageHero() {
  return (
    <div className="grid grid-cols-2 mx-auto max-w-[80%] items-center bg-neutral-50 border border-neutral-200/60 p-8 py-0 rounded-3xl">
      <p>
        Graal Systems introduces a revolutionary Serverless Computing approach,
        streamlining data processing by eliminating infrastructure complexities.
        Its dynamic scalability ensures optimal performance and significant cost
        savings, as resources are allocated based on workload demands. The
        seamless integration with advanced analytics tools positions Graal
        Systems as a pioneer in cloud-native data processing, offering a
        transformative and cost-effective solution.
      </p>
      <img
        src={bannerImage.src}
        alt="hero page illustration"
        className="max-w-[75%] md:max-w[100%] mx-auto lg:order-last order-1"
      />
    </div>
  );
}
