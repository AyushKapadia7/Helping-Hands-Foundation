import Head from "next/head";
import Carousal from "../components/home/Carousal";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Testimonials from "../components/home/Testimonials";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import CoreTeam from "../components/home/CoreTeam";
import About from "../components/home/About";
import PhotoGallery from "../components/home/PhotoGallery";

export default function Home() {
  return (
    <>
      <Head>
        <title>Helping Hands Foundation</title>
        <link rel="icon" href="/logo.png" />
        <meta name="title" content="Helping Hands Foundation" />
        <meta
          name="description"
          content="We reduce the wastage of food by using it for a good cause and provide a healthy meal to kids so that they can sleep with no hunger."
        />
        <meta name="copyright" content="VishwaGauravIn" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="teamhnm.org" />
        <meta property="og:title" content="Helping Hands Foundation" />
        <meta
          property="og:description"
          content="We reduce the wastage of food by using it for a good cause and provide a healthy meal to kids so that they can sleep with no hunger."
        />
        <meta property="og:image" content="https://teamhnm.org/og.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="teamhnm.org" />
        <meta property="twitter:title" content="Helping Hands Foundation" />
        <meta
          property="twitter:description"
          content="We reduce the wastage of food by using it for a good cause and provide a healthy meal to kids so that they can sleep with no hunger."
        />
        <meta property="twitter:image" content="https://teamhnm.org/og.png" />
      </Head>

      <main className="">
        <Navbar />
        <Hero />
        <Carousal />
        <Stats />
        <PhotoGallery />
        <Testimonials />
        <CoreTeam />
        <About />
      </main>

      <Footer />
    </>
  );
}
