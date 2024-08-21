"use client";

import bannerImage from "@/assets/illustration/data.png";
import PageBanner from "@/components/common/PageBanner";

export default function Page() {
  return (
    <div className="my-16">
      <PageBanner
        subTitle="Collaborative"
        title="Government"
        caption="Collaboration Unleashed: Graal Systems Paving the Way for Effective Governance"
        bannerImage={bannerImage.src}
      />
    </div>
  );
}
