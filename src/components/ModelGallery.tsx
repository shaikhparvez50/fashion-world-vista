
import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const models = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=800&auto=format&fit=crop",
    outfit: "Men's Formal Elegance",
    description: "Premium tailored suit with silk accessories",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    outfit: "Men's Business Professional",
    description: "Navy blue blazer with custom-fit trousers",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?q=80&w=800&auto=format&fit=crop",
    outfit: "Men's Urban Luxury",
    description: "Designer casual wear with premium accessories",
  },
  {
    id: 4,
    image: "/lovable-uploads/56bd9bc1-57e1-4db8-a9df-13c829a273c1.png",
    outfit: "Men's Premium Collection",
    description: "Exclusive designer wear for the modern gentleman",
  },
];

const ModelGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState<Record<number, boolean>>({});
  const { toast } = useToast();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === models.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? models.length - 1 : prev - 1));
  };

  const toggleFavorite = (id: number) => {
    setFavorites(prev => {
      const newState = { ...prev, [id]: !prev[id] };
      
      toast({
        title: newState[id] ? "Style saved" : "Style removed",
        description: `This look has been ${newState[id] ? "added to" : "removed from"} your saved styles`,
        duration: 3000,
      });
      
      return newState;
    });
  };

  return (
    <section className="section-padding bg-white dark:bg-black relative overflow-hidden py-20">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-100/20 to-transparent dark:from-fashion-royal-blue/5 dark:to-transparent z-0"></div>
      <div className="content-container relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 dark:text-white">Men's Premium Style Gallery</h2>
          <p className="text-fashion-mid-gray dark:text-gray-300 max-w-3xl mx-auto">
            Discover exclusive looks crafted for the distinguished gentleman.
          </p>
        </div>

        <div className="relative">
          {/* Large display */}
          <div className="hidden md:grid grid-cols-4 gap-6">
            {models.map((model, index) => (
              <div 
                key={model.id}
                className={`transition-all duration-700 ease-in-out transform hover:scale-105 ${
                  index === currentIndex 
                    ? "opacity-100 scale-105" 
                    : "opacity-90 scale-100"
                }`}
              >
                <div className="bg-white dark:bg-fashion-dark-gray shadow-xl rounded-lg overflow-hidden max-w-xs">
                  <div className="h-96 overflow-hidden relative group">
                    <img 
                      src={model.image} 
                      alt={model.outfit} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                      <div className="p-4">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="bg-white/20 text-white border-white/10 backdrop-blur-sm hover:bg-white/30"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 dark:bg-fashion-dark-gray">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold dark:text-white">{model.outfit}</h3>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => toggleFavorite(model.id)}
                      >
                        <Heart 
                          className={`h-5 w-5 ${
                            favorites[model.id]
                              ? "fill-fashion-royal-blue text-fashion-royal-blue" 
                              : "dark:text-white"
                          }`} 
                        />
                      </Button>
                    </div>
                    <p className="text-fashion-mid-gray dark:text-gray-400">{model.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile display - carousel */}
          <div className="md:hidden relative">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div className="h-96 relative">
                <img 
                  src={models[currentIndex].image} 
                  alt={models[currentIndex].outfit} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                    onClick={() => toggleFavorite(models[currentIndex].id)}
                  >
                    <Heart 
                      className={`h-5 w-5 ${
                        favorites[models[currentIndex].id]
                          ? "fill-fashion-royal-blue text-fashion-royal-blue" 
                          : "text-white"
                      }`} 
                    />
                  </Button>
                </div>
              </div>
              <div className="p-6 bg-white dark:bg-fashion-dark-gray">
                <h3 className="text-xl font-bold mb-2 dark:text-white">{models[currentIndex].outfit}</h3>
                <p className="text-fashion-mid-gray dark:text-gray-400">{models[currentIndex].description}</p>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <Button 
              variant="secondary" 
              size="icon" 
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white rounded-full z-10"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="secondary" 
              size="icon" 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white rounded-full z-10"
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
