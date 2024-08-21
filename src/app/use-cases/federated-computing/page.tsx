"use client";

import bannerImage from "@/assets/illustration/data.png";
import PageBanner from "@/components/common/PageBanner";

export default function Page() {
  return (
    <div className="my-16">
      <PageBanner
        subTitle="Federated Computing"
        title="Healthcare"
        caption="Sculpting Future Healthcare: Unifying Insights through Graal's Federated Computing Excellence"
        bannerImage={bannerImage.src}
      />
    </div>
  );
}
