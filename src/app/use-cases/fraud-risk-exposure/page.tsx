"use client";

import bannerImage from "@/assets/illustration/data.png";
import PageBanner from "@/components/common/PageBanner";

export default function Page() {
  return (
    <div className="my-16">
      <PageBanner
        subTitle="Reduce Fraud and Risk Exposure"
        title="Financial services"
        caption="Revolutionizing Financial Security: The Role of Advanced Technologies in Fraud Detection and Risk Mitigation"
        bannerImage={bannerImage.src}
      />
    </div>
  );
}
