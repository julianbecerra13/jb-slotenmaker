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
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

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
      <WhatsAppButton />
    </>
  );
}
