import TopBar from "@/components/TopBar";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <div>
      {/* Topbar */}
      <TopBar />
      {/* Main page */}
      <Main />
      {/* Footer */}
      <Footer callToActionBanner={true} />
    </div>
  );
}
