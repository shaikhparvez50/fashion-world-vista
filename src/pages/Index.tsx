
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ModelGallery from "../components/ModelGallery";
import Testimonials from "../components/Testimonials";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Handle search query if present in URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get("search");
    
    if (searchQuery) {
      navigate(`/collections?search=${searchQuery}`);
    }
  }, [location.search, navigate]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Categories />
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
