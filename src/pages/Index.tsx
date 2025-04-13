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
import { Helmet } from "react-helmet-async";

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

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    "name": "The Fashion World",
    "description": "Premium men's clothing store in Amarpur, Bihar offering designer jeans, t-shirts, footwear, and accessories.",
    "url": "https://thefashionworld.com",
    "telephone": "+91 9546482080",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Road, Near Bus Stand",
      "addressLocality": "Amarpur",
      "addressRegion": "Bihar",
      "postalCode": "813101",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.0415,
      "longitude": 86.9113
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "11:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "₹₹",
    "image": "https://lovable.dev/opengraph-image-p98pqg.png"
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>The Fashion World - Premium Men's Clothing in Amarpur, Bihar</title>
        <meta name="description" content="The Fashion World - Premier destination for premium men's clothing, designer jeans, t-shirts, footwear and accessories in Amarpur, Bihar." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
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
