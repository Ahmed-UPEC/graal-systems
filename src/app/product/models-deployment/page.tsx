"use client";

import bannerImage from "@/assets/illustration/data.png";
import PageBanner from "@/components/common/PageBanner";
import PageHero from "@/components/common/PageHero";
import PageComparison from "@/components/comparison";

export default function Page() {
  return (
    <div className="my-16">
      <PageBanner
        subTitle="Day-1 production for model deployment"
        title="For data scientists and MLOps"
        caption="From Prototype to Production in Snap - Graal Systems, Your Gateway to Day-1 Model Deployment Excellence"
        bannerImage={bannerImage.src}
      />
      <PageHero
        text="Graal Systems introduces a revolutionary Serverless Computing approach,
        streamlining data processing by eliminating infrastructure complexities.
        Its dynamic scalability ensures optimal performance and significant cost
        savings, as resources are allocated based on workload demands. The
        seamless integration with advanced analytics tools positions Graal
        Systems as a pioneer in cloud-native data processing, offering a
        transformative and cost-effective solution."
        image={bannerImage.src}
      />
      <PageComparison />
    </div>
  );
}
