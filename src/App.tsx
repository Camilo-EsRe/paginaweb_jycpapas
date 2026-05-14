import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Process from './components/Process';
import Quality from './components/Quality';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Process />
        <Quality />
        <Benefits />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
