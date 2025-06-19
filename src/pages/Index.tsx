
import Header from '../components/Header';
import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ClientLogos />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
