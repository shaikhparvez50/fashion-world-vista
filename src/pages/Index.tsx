
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import BrandShowcase from "../components/BrandShowcase";
import ModelGallery from "../components/ModelGallery";
import Testimonials from "../components/Testimonials";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Categories />
        <BrandShowcase />
        <ModelGallery />
        <Testimonials />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
