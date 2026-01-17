import {
  Header,
  Hero,
  About,
  Pricing,
  Services,
  Gallery,
  CTA,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Pricing />
        <Services />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
