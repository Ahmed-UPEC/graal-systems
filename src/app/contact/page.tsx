"use client";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";

export default function Page() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <TopBar />
      <Contact />
      <div className="items-stretch">
        <Footer callToActionBanner={true} />
      </div>
    </div>
  );
}
