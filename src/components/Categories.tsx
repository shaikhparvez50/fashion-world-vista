
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Eye } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: "men-formal",
    title: "Men's Formal Wear",
    image: "/lovable-uploads/f673e06a-6fd7-405c-b8cb-78e910d03d50.png",
    items: ["Suits", "Formal Shirts", "Trousers", "Ties"],
  },
  {
    id: "men-casual",
    title: "Men's Casual Wear",
    image: "/lovable-uploads/aa16e865-ac5c-4964-827b-1e48a94e830c.png",
    items: ["T-Shirts", "Casual Shirts", "Jeans", "Shorts"],
  },
  {
    id: "men-jeans",
    title: "Premium Jeans",
    image: "/lovable-uploads/7c4ebb80-eaf4-4ccb-bbe5-1f6391329dbf.png",
    items: ["Distressed", "Ripped", "Slim Fit", "Patched"],
  },
  {
    id: "men-shoes",
    title: "Premium Footwear",
    image: "/lovable-uploads/fea2b134-dfba-4953-9e90-d4711ba17c15.png",
    items: ["Sneakers", "Formals", "Sports", "Casual"],
  },
  {
    id: "men-accessories",
    title: "Men's Accessories",
    image: "/lovable-uploads/8331eff8-b9d6-4b97-8c19-c2838b882255.png",
    items: ["Rings", "Chains", "Bracelets", "Watches"],
  },
  {
    id: "vape",
    title: "Vape & Hookah Collection",
    image: "/lovable-uploads/0fdf880a-8261-4c00-8a1d-c176912cf7ae.png",
    items: ["Vape Pens", "Hookahs", "E-Liquids", "Accessories"],
  },
];

const Categories = () => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const { toast } = useToast();
  const navigate = useNavigate();

  const toggleFavorite = (id: string) => {
    setFavorites(prev => {
      const newState = { ...prev, [id]: !prev[id] };
      
      toast({
        title: newState[id] ? "Added to favorites" : "Removed from favorites",
        description: `Item has been ${newState[id] ? "saved to" : "removed from"} your favorites`,
        duration: 3000,
      });
      
      return newState;
    });
  };

  const handleViewCollection = () => {
    navigate('/collections');
  };

  const handleViewDetails = (id: string) => {
    // Navigate to appropriate tab based on category
    if (id === 'men-jeans') {
      navigate('/collections?tab=jeans');
    } else if (id === 'men-shoes') {
      navigate('/collections?tab=shoes');
    } else if (id === 'vape') {
      navigate('/collections?tab=vape');
    } else {
      navigate(`/collections?category=${id}`);
    }
  };

  return (
    <section id="categories" className="section-padding bg-black dark:bg-black text-white py-24">
      <div className="content-container">
        <div className="text-center mb-16 animate-slow-fade">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            <span className="gold-gradient">Premium</span> Men's Collections
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Discover our exclusive collection of premium fashion items, carefully curated for the modern Indian man.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-300 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="relative group">
              <Card className="overflow-hidden card-hover border-0 shadow-lg bg-fashion-dark-gray/90 text-white transform transition-all duration-500 hover:-translate-y-2 hover-scale">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((item) => (
                          <Badge key={item} variant="secondary" className="bg-yellow-600/30 hover:bg-yellow-600/50 text-yellow-100">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex justify-between items-center">
                  <Button 
                    variant="outline" 
                    className="text-white border-yellow-600/30 hover:bg-yellow-600/20 premium-button"
                    onClick={() => handleViewDetails(category.id)}
                  >
                    View Collection
                  </Button>
                  <div className="flex space-x-2">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => handleViewDetails(category.id)}
                      className="rounded-full"
                    >
                      <Eye className="h-5 w-5 text-white" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => toggleFavorite(category.id)}
                      className="rounded-full"
                    >
                      <Heart 
                        className={`h-5 w-5 transition-colors ${
                          favorites[category.id] 
                            ? "fill-yellow-500 text-yellow-500" 
                            : "text-white"
                        }`} 
                      />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button 
            className="bg-white text-black hover:bg-gray-200 hover:text-black text-md md:text-lg py-6 px-8 premium-hover"
            onClick={handleViewCollection}
          >
            Browse All Collections
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
