"use client";

import Link from "next/link";

interface PageBannerProps {
  subTitle: string;
  title: string;
  caption: string;
  bannerImage: string;
}

export default function PageBanner({
  subTitle,
  title,
  caption,
  bannerImage,
}: Readonly<PageBannerProps>) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto text-left pt-0 lg:pt-8 p-8 place-items-center container">
      <div className="flex flex-col gap-4 order-last lg:order-1">
        <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">
          {title}
        </h3>
        <h2 className="font-semibold text-2xl md:text-3xl xl:text-6xl">
          {subTitle}
        </h2>
        <p className="text-base w-full">{caption}</p>
        <Link
          href="/contact"
          className="flex justify-start bg-fuchsia-500 text-white py-2 px-4 rounded-md w-fit hover:bg-black transition-all duration-300"
        >
          Contact
        </Link>
      </div>
      <img
        src={bannerImage}
        alt="banner illustration"
        className="max-w-[75%] md:max-w[100%] mx-auto lg:order-last order-1"
      />
    </div>
  );
}
