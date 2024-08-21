"use client";

import bannerImage from "@/assets/illustration/data.png";

interface PageHeroProps {
  text: string;
  image: string;
}

export default function PageHero({
  text,
  image = bannerImage.src,
}: Readonly<PageHeroProps>) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto items-center bg-neutral-200/55 hover:bg-neutral-200/85 transition-all duration-300 border border-neutral-200/60 px-16 py-4 lg:py-0 rounded-3xl container">
      <p>{text}</p>
      <img
        src={image}
        alt="hero page illustration"
        className="max-w-[75%] md:max-w[100%] mx-auto lg:order-last order-1"
      />
    </div>
  );
}
