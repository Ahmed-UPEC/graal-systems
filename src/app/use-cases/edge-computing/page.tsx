"use client";

import bannerImage from "@/assets/illustration/data.png";
import PageBanner from "@/components/common/PageBanner";

export default function Page() {
  return (
    <div className="my-16">
      <PageBanner
        subTitle="Lorem ipsum dolor sit amet"
        title="Uses Cases #1"
        caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        bannerImage={bannerImage.src}
      />
    </div>
  );
}
