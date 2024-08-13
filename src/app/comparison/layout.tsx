"use client";

import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";

import { motion } from "framer-motion";

export default function ComparisonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <TopBar preTopBar={true} />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
      <Footer callToActionBanner={true} />
    </div>
  );
}
