"use client";

import bannerImage from "@/assets/illustration/data.png";
import PageBanner from "@/components/common/PageBanner";

export default function Page() {
  return (
    <div className="my-16">
      <PageBanner
        subTitle="Sovereignty"
        title="Government"
        caption="Securing Sovereignty, Empowering Nations with Graal Systems"
        bannerImage={bannerImage.src}
      />
    </div>
  );
}
