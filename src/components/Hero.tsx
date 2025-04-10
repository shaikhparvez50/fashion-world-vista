
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=2000&auto=format&fit=crop')`,
          filter: 'brightness(0.5)',
        }}
      />
      
      {/* Content */}
      <div className="content-container relative z-10 text-center my-20 md:my-0">
        <div className="animate-fade-in max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            THE FASHION WORLD
          </h1>
          <p className="text-xl md:text-2xl font-light text-white mb-8 max-w-2xl mx-auto">
            Your Style, Our Passion – Explore the World of Fashion for the Modern Man
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button className="btn-primary text-md md:text-lg py-6 px-8 group">
              Explore Collections
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="text-md md:text-lg py-6 px-8 text-white bg-transparent border-white hover:bg-white/10">
              Visit Store
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="flex space-x-2">
          <a href="#categories" className="animate-bounce text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
