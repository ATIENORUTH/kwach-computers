import ContactSection from './components/ContactSection';
import CTA from './components/CTA';
import FeaturedProducts from './components/FeaturedProducts';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Products from './components/Products';
import SellingStrip from './components/SellingStrip';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-navy-950"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <SellingStrip />
        <Products />
        <FeaturedProducts />
        <CTA />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
