
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const models = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    outfit: "Casual Summer",
    description: "Light cotton shirt with beige pants",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    outfit: "Business Formal",
    description: "Navy blue suit with white shirt",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    outfit: "Urban Style",
    description: "Denim jacket with graphic tee",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    outfit: "Winter Collection",
    description: "Wool coat with scarf and gloves",
  },
];

const ModelGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === models.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? models.length - 1 : prev - 1));
  };

  return (
    <section className="section-padding bg-fashion-light-gray dark:bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-fashion-royal-blue/10 to-transparent z-0"></div>
      <div className="content-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Style Gallery</h2>
          <p className="text-fashion-mid-gray dark:text-gray-400 max-w-3xl mx-auto">
            Get inspired by our latest fashion trends and styling ideas.
          </p>
        </div>

        <div className="relative">
          {/* Large display */}
          <div className="hidden md:flex items-center justify-center gap-8">
            {models.map((model, index) => (
              <div 
                key={model.id}
                className={`transition-all duration-700 ease-in-out transform ${
                  index === currentIndex 
                    ? "opacity-100 scale-100" 
                    : "opacity-40 scale-90"
                }`}
              >
                <div className="bg-white dark:bg-fashion-dark-gray shadow-lg rounded-lg overflow-hidden max-w-xs">
                  <div className="h-96 overflow-hidden">
                    <img 
                      src={model.image} 
                      alt={model.outfit} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{model.outfit}</h3>
                    <p className="text-fashion-mid-gray dark:text-gray-400">{model.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile display - carousel */}
          <div className="md:hidden relative">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div className="h-96">
                <img 
                  src={models[currentIndex].image} 
                  alt={models[currentIndex].outfit} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-white dark:bg-fashion-dark-gray">
                <h3 className="text-xl font-bold mb-2">{models[currentIndex].outfit}</h3>
                <p className="text-fashion-mid-gray dark:text-gray-400">{models[currentIndex].description}</p>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <Button 
              variant="secondary" 
              size="icon" 
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-black/80 rounded-full"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="secondary" 
              size="icon" 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-black/80 rounded-full"
              onClick={nextSlide}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {models.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentIndex 
                    ? "bg-fashion-royal-blue" 
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelGallery;
