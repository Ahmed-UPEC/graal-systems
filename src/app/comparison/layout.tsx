import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";

export default function ComparisonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <TopBar preTopBar={true} />
      {children}
      <Footer callToActionBanner={true} />
    </div>
  );
}
