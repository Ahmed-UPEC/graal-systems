"use client";

import bannerImage from "@/assets/illustration/data.png";
import PageBanner from "@/components/common/PageBanner";

export default function Page() {
  return (
    <div className="my-16">
      <PageBanner
        subTitle="Regulatory Compliance"
        title="Financial Services"
        caption="Unveiled: Safely Navigate Waters of Assurance with Graal Systems at the Helm."
        bannerImage={bannerImage.src}
      />
    </div>
  );
}
