
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const categories = [
  {
    id: "men-formal",
    title: "Men's Formal Wear",
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=800&auto=format&fit=crop",
    items: ["Suits", "Formal Shirts", "Trousers", "Ties"],
  },
  {
    id: "men-casual",
    title: "Men's Casual Wear",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=800&auto=format&fit=crop",
    items: ["T-Shirts", "Casual Shirts", "Jeans", "Shorts"],
  },
  {
    id: "men-accessories",
    title: "Men's Accessories",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=800&auto=format&fit=crop",
    items: ["Rings", "Chains", "Bracelets", "Watches"],
  },
  {
    id: "men-footwear",
    title: "Men's Footwear",
    image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=800&auto=format&fit=crop",
    items: ["Formal Shoes", "Sneakers", "Loafers", "Sandals"],
  },
  {
    id: "men-ethnic",
    title: "Men's Ethnic Wear",
    image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80&w=800&auto=format&fit=crop",
    items: ["Kurtas", "Sherwanis", "Nehru Jackets", "Dhotis"],
  },
  {
    id: "lifestyle",
    title: "Lifestyle",
    image: "https://images.unsplash.com/photo-1516914589923-f105f1535f88?q=80&w=800&auto=format&fit=crop",
    items: ["Premium Accessories", "Hookahs", "Pen Hookahs"],
  },
];

const Categories = () => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const { toast } = useToast();

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

  return (
    <section id="categories" className="section-padding bg-black dark:bg-black text-white">
      <div className="content-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Premium Collections</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Discover our exclusive collection of premium fashion items, carefully curated for the modern Indian man.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="relative group">
              <Card className="overflow-hidden card-hover border-0 shadow-lg bg-fashion-dark-gray/90 text-white transform transition-all duration-500 hover:-translate-y-2">
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
                          <Badge key={item} variant="secondary" className="bg-white/20 hover:bg-white/30 text-white">
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
                    className="text-white border-white/20 hover:bg-white/10"
                  >
                    View Collection
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => toggleFavorite(category.id)}
                    className="rounded-full"
                  >
                    <Heart 
                      className={`h-6 w-6 transition-colors ${
                        favorites[category.id] 
                          ? "fill-fashion-royal-blue text-fashion-royal-blue" 
                          : "text-white"
                      }`} 
                    />
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
