"use client";

import bannerImage from "@/assets/illustration/data.png";
import PageBanner from "@/components/common/PageBanner";

export default function Page() {
  return (
    <div className="my-16">
      <PageBanner
        subTitle="Genomics Processing"
        title="Healthcare"
        caption="Explore new dimensions in precision medicine by tapping into comprehensive genetic insights, fostering breakthroughs that redefine the landscape of oncology."
        bannerImage={bannerImage.src}
      />
    </div>
  );
}
