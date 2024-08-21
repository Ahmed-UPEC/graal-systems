"use client";

import bannerImage from "@/assets/illustration/data.png";
import PageBanner from "@/components/common/PageBanner";

export default function Page() {
  return (
    <div className="my-16">
      <PageBanner
        subTitle="For data engineers and DevOps"
        title="Uses Cases #1"
        caption="Execute data processing and analytics tasks without the need for explicit infrastructure management, enabling seamless and efficient data exploration and analysis"
        bannerImage={bannerImage.src}
      />
    </div>
  );
}
