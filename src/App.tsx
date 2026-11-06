import { useEffect } from "react";
import { Community } from "./components/Community";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Highlights } from "./components/Highlights";
import { Marquee } from "./components/Marquee";
import { Services } from "./components/Services";
import { WhyChoose } from "./components/WhyChoose";
import { enhance } from "./enhance";

export default function App() {
  useEffect(() => enhance(), []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <Services />
        <Highlights />
        <Features />
        <WhyChoose />
        <FAQ />
        <Community />
      </main>
      <Footer />
    </>
  );
}
