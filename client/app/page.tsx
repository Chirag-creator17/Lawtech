"use client";
import { useEffect, useState } from "react";
import Navbar from "@/ui/navbar/navbar";
import FooterComponent from "@/ui/footer/footer";
import SearchLawyer from "@/ui/landing/searchLawyer";
import FeaturesComponent from "@/ui/landing/featureComponent";
import SearchLawyerComponent from "@/ui/landing/searchStateArea";
import DivAnimatedSteps from "@/ui/landing/steps";
import Ecosystem from "@/ui/landing/ecosystem";
export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const cookies = document.cookie;

    if (cookies.includes("token")) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="flex-auto mt-8">
          <SearchLawyer />
          <FeaturesComponent />
          <DivAnimatedSteps />
          <SearchLawyerComponent />
          <Ecosystem />
        </div>
      </main>
      <FooterComponent />
    </>
  );
}
