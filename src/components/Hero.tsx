
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1550246140-29f40b909e5a?q=80&w=2000&auto=format&fit=crop')`,
          filter: 'brightness(0.4)',
        }}
      />
      
      {/* Black and white gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/50 z-1"></div>
      
      {/* Accent lines */}
      <div className="absolute top-1/3 left-0 w-24 h-1 bg-white z-10 opacity-70"></div>
      <div className="absolute bottom-1/3 right-0 w-24 h-1 bg-white z-10 opacity-70"></div>
      
      {/* Content */}
      <div className="content-container relative z-10 text-center my-20 md:my-0 px-4">
        <div className="animate-fade-in max-w-3xl mx-auto flex flex-col items-center">
          <div className="mb-6 inline-block">
            <span className="text-sm font-medium tracking-widest text-white uppercase bg-black/70 backdrop-blur-sm py-2 px-4 rounded-full border border-white/20 shadow-lg">Premium Men's Fashion</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-shadow">
            THE FASHION WORLD
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/90 mb-8 max-w-2xl mx-auto">
            Your Style, Our Passion – Explore the World of Fashion for the Modern Indian Man
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button className="bg-white text-black hover:bg-gray-200 hover:text-black transition-all duration-300 text-md md:text-lg py-6 px-8 shadow-xl group premium-hover">
              Explore Collections
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="text-md md:text-lg py-6 px-8 text-white bg-transparent border-white hover:bg-white/10 shadow-xl premium-hover">
              Visit Store
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="flex space-x-2 animate-bounce">
          <a href="#categories" className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-10 left-10 w-16 h-16 border-l-2 border-t-2 border-white opacity-50"></div>
      <div className="absolute top-10 right-10 w-16 h-16 border-r-2 border-t-2 border-white opacity-50"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 border-l-2 border-b-2 border-white opacity-50"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border-r-2 border-b-2 border-white opacity-50"></div>
    </div>
  );
};

export default Hero;
