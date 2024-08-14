import Address from "@/components/address";
import Booking from "@/components/booking";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HistoryBakso from "@/components/history-bakso";
import Menus from "@/components/menus";
import Navbar from "@/components/navbar";
import Sponsored from "@/components/sponsored";
import Testimoni from "@/components/testimoni";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HistoryBakso />
      <Menus />
      <Sponsored />
      <Booking />
      <Testimoni />
      <Address />
      <Footer />
      <CallToAction />
    </main>
  );
}
