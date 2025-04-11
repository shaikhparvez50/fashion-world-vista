
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Eye } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";

type ClothingItem = {
  id: string;
  name: string;
  image: string;
  price: string;
  brand: string;
  category: string;
  tags: string[];
  isFeatured?: boolean;
};

const clothingItems: ClothingItem[] = [
  {
    id: "item1",
    name: "Blue & White Striped Shirt",
    image: "/lovable-uploads/aa16e865-ac5c-4964-827b-1e48a94e830c.png",
    price: "₹799",
    brand: "Allen Solly",
    category: "Shirts",
    tags: ["Casual", "Summer"],
    isFeatured: true
  },
  {
    id: "item2",
    name: "Beige Cargo Pants",
    image: "/lovable-uploads/920eac41-b5e9-4653-9c43-7dcf7be9759d.png",
    price: "₹1,299",
    brand: "Allen Solly",
    category: "Pants",
    tags: ["Casual", "Cargo"]
  },
  {
    id: "item3",
    name: "H&M Black T-Shirt",
    image: "/lovable-uploads/4f092a71-5a61-4e93-8e47-929e67c5566c.png",
    price: "₹699",
    brand: "H&M",
    category: "T-Shirts",
    tags: ["Casual", "Basic"]
  },
  {
    id: "item4",
    name: "Lakers Print Polo Shirt",
    image: "/lovable-uploads/2ffc96dc-0ade-4ae9-9f3b-db1ab25cd421.png",
    price: "₹1,199",
    brand: "M7",
    category: "Polo Shirts",
    tags: ["Sports", "Casual"]
  },
  {
    id: "item5",
    name: "Electric Red EMT T-Shirt",
    image: "/lovable-uploads/a6746895-5c84-4ae8-8e80-636ecffaa832.png",
    price: "₹899",
    brand: "EMT",
    category: "T-Shirts",
    tags: ["Casual", "Graphic"]
  },
  {
    id: "item6",
    name: "Marvel White Turtleneck T-Shirt",
    image: "/lovable-uploads/88e4e003-ec2b-41f3-a103-ccf8993ede60.png",
    price: "₹899",
    brand: "Marvel",
    category: "T-Shirts",
    tags: ["Casual", "Branded"]
  },
  {
    id: "item7",
    name: "AMIRI Olive Green Shirt",
    image: "/lovable-uploads/e5de6eef-0489-48b3-8c1f-d96f00abec97.png",
    price: "₹1,499",
    brand: "AMIRI",
    category: "Shirts",
    tags: ["Premium", "Casual"]
  },
  {
    id: "item8",
    name: "Freaky Freak Graphic Tee",
    image: "/lovable-uploads/9530b33b-72d7-4113-adf8-bd96d6105872.png",
    price: "₹999",
    brand: "Freaky",
    category: "T-Shirts",
    tags: ["Graphic", "Trendy"]
  },
  {
    id: "item9",
    name: "Blue Pepe Jeans Denim",
    image: "/lovable-uploads/56bd9bc1-57e1-4db8-a9df-13c829a273c1.png",
    price: "₹1,899",
    brand: "Pepe Jeans",
    category: "Jeans",
    tags: ["Denim", "Casual"]
  },
  {
    id: "item10",
    name: "Premium Grey Formal Trousers",
    image: "/lovable-uploads/f673e06a-6fd7-405c-b8cb-78e910d03d50.png",
    price: "₹1,599",
    brand: "Nice Tip Dress",
    category: "Trousers",
    tags: ["Formal", "Premium"]
  },
  {
    id: "item11",
    name: "Sportswear Ferrari Track Pants",
    image: "/lovable-uploads/11a3f567-6747-43c4-a641-33c741926369.png",
    price: "₹1,299",
    brand: "Ferrari",
    category: "Track Pants",
    tags: ["Sports", "Casual"]
  },
  {
    id: "item12",
    name: "Premium Track Pants Collection",
    image: "/lovable-uploads/88c38580-0b39-48c6-b541-c0150240e53f.png",
    price: "₹1,199",
    brand: "Puma",
    category: "Track Pants",
    tags: ["Sports", "Casual"]
  },
  {
    id: "item13",
    name: "Purple & White Striped Shirt",
    image: "/lovable-uploads/de86e0b9-614b-40de-bde0-df303cbb16db.png",
    price: "₹999",
    brand: "M7",
    category: "Shirts",
    tags: ["Casual", "Summer"]
  },
  {
    id: "item14",
    name: "iStick Pico Vaping Kit",
    image: "/lovable-uploads/0fdf880a-8261-4c00-8a1d-c176912cf7ae.png",
    price: "₹2,499",
    brand: "iStick",
    category: "Lifestyle",
    tags: ["Vape", "Accessories"]
  }
];

const CollectionsPage = () => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const { toast } = useToast();

  const categories = [
    "All", 
    "Shirts", 
    "T-Shirts", 
    "Pants", 
    "Jeans", 
    "Trousers", 
    "Track Pants", 
    "Lifestyle"
  ];

  const filteredItems = activeCategory === "All" 
    ? clothingItems 
    : clothingItems.filter(item => item.category === activeCategory);

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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="bg-black text-white py-16">
          <div className="content-container">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Collections</h1>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8">
              Explore our premium collection of men's fashion items, featuring brands like Kochi Jordan, Allen Solly, and more.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-300 mx-auto"></div>
          </div>
        </div>

        <section className="py-12 bg-white dark:bg-fashion-dark">
          <div className="content-container">
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {categories.map(category => (
                <Button 
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className="m-1"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group card-hover">
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <div className="flex justify-center space-x-2 mb-4">
                        <Button 
                          variant="default" 
                          size="sm" 
                          className="bg-white text-black hover:bg-gray-200"
                        >
                          <ShoppingBag className="h-4 w-4 mr-1" />
                          Add to Cart
                        </Button>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="bg-white/20 text-white backdrop-blur-sm border-white/20 hover:bg-white/30"
                          onClick={() => toggleFavorite(item.id)}
                        >
                          <Heart className={`h-4 w-4 ${favorites[item.id] ? "fill-red-500 text-red-500" : ""}`} />
                        </Button>
                      </div>
                    </div>
                    {item.isFeatured && (
                      <Badge className="absolute top-3 left-3 bg-yellow-600 text-white">Featured</Badge>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.brand}</p>
                        <h3 className="font-medium text-lg mb-1">{item.name}</h3>
                        <p className="text-lg font-bold">{item.price}</p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="mt-1" 
                        onClick={() => window.location.href = `/product/${item.id}`}
                      >
                        <Eye className="h-5 w-5" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {item.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100 dark:bg-gray-900">
          <div className="content-container">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Brands</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {['Kochi Jordan', 'Allen Solly', 'Nike', 'Puma', 'Adidas', 'Ferrari', 'H&M', 'Pepe Jeans', 'AMIRI'].map((brand) => (
                <div key={brand} className="bg-white dark:bg-gray-800 rounded-lg p-6 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                  <p className="text-lg font-semibold">{brand}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CollectionsPage;
