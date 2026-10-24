import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Treatments } from '@/components/Treatments';
import { Conditions } from '@/components/Conditions';
import { Gallery } from '@/components/Gallery';
import { About } from '@/components/About';
import { Experts } from '@/components/Experts';
import { Alliances } from '@/components/Alliances';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Treatments />
        <Conditions />
        <Gallery />
        <About />
        <Experts />
        <Alliances />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
