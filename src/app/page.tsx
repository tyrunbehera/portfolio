import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIDo from "@/components/WhatIDo";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import PersonalDetails from "@/components/PersonalDetails";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollBackground from "@/components/ScrollBackground";

export default function Home() {
  return (
    <>
      {/* Scroll-driven animated background */}
      <ScrollBackground />

      <Navbar />

      <main>
        <Hero />
        <WhatIDo />
        <Skills />
        <Experience />
        <Certifications />
        <Education />
        <PersonalDetails />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
