"use client";

import bannerImage from "@/assets/illustration/data.png";
import PageBanner from "@/components/common/PageBanner";
import PageComparison from "@/components/comparison";

export default function Page() {
  return (
    <div className="my-16">
      <PageBanner
        subTitle="Backward compatibility for Hadoop and SAS"
        title="For data engineers and Devops"
        caption="Briding the Past and Present: Graal Systems' Backward Cpmpatibility for Hadoop and SAS"
        bannerImage={bannerImage.src}
      />
      <PageHero />
      <PageComparison />
    </div>
  );
}

function PageHero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto items-center bg-neutral-50 border border-neutral-200/60 p-8 py-8 lg:py-0 rounded-3xl container">
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
