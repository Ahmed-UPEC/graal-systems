import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";

export default function Page() {
  return (
    <div>
      <TopBar />
      <Contact />
      <Footer callToActionBanner={true} />
    </div>
  );
}
