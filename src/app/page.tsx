"use client";
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
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 1200
    });
  }, []);
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
