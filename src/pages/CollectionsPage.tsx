
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Eye, Filter, Wind, Cannabis } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
];

// Adding new jeans items using the uploaded images
const jeansItems = [
  {
    id: "jeans1",
    name: "Distressed Light Wash Jeans",
    image: "/lovable-uploads/7c4ebb80-eaf4-4ccb-bbe5-1f6391329dbf.png",
    price: "₹1,999",
    brand: "Kochi Jordan",
    category: "Jeans",
    tags: ["Distressed", "Light Wash"],
    isFeatured: true
  },
  {
    id: "jeans2",
    name: "Ripped Vintage Wash Denim",
    image: "/lovable-uploads/646cab6e-1804-4712-b118-f75f5c60aa08.png",
    price: "₹2,499",
    brand: "Kochi Jordan",
    category: "Jeans",
    tags: ["Ripped", "Vintage"],
  },
  {
    id: "jeans3",
    name: "Classic Dark Wash Slim Fit",
    image: "/lovable-uploads/326ccca9-366e-4003-bfd8-a81f194f9bbe.png",
    price: "₹1,799",
    brand: "Pepe Jeans",
    category: "Jeans",
    tags: ["Slim Fit", "Dark Wash"],
  },
  {
    id: "jeans4",
    name: "Patched Graphic Denim",
    image: "/lovable-uploads/7fcee203-fa89-4982-a262-bd408b95655b.png",
    price: "₹2,699",
    brand: "CJ Streetwear",
    category: "Jeans",
    tags: ["Graphic", "Patched"],
  },
  {
    id: "jeans5",
    name: "Two-Tone Jogger Jeans",
    image: "/lovable-uploads/85c397be-ee0d-446a-877c-6541a4211418.png",
    price: "₹2,299",
    brand: "Urban Denim",
    category: "Jeans",
    tags: ["Two-Tone", "Jogger"],
  },
  {
    id: "jeans6",
    name: "Military Patch Denim",
    image: "/lovable-uploads/074a89f3-bff5-46e0-a9b5-8c2cccca38e5.png",
    price: "₹2,199",
    brand: "Army Style",
    category: "Jeans",
    tags: ["Patches", "Distressed"],
  },
  {
    id: "jeans7",
    name: "Cargo Pocket Distressed Jeans",
    image: "/lovable-uploads/ea9d8356-cf51-4b2e-adde-7d22157f5d8e.png",
    price: "₹2,399",
    brand: "Urban Explorer",
    category: "Jeans",
    tags: ["Cargo", "Distressed"],
  },
  {
    id: "jeans8",
    name: "Classic Ripped Blue Jeans",
    image: "/lovable-uploads/87581fa1-eb2b-4b06-a212-48eb6f4f6c64.png",
    price: "₹1,899",
    brand: "Denim Life",
    category: "Jeans",
    tags: ["Ripped", "Classic"],
  },
  {
    id: "jeans9",
    name: "Kids Style Denim",
    image: "/lovable-uploads/520fc937-aa71-4377-bbbf-ed27354a6ab7.png",
    price: "₹1,499",
    brand: "Junior Style",
    category: "Jeans",
    tags: ["Kids", "Comfortable"],
  },
];

// Adding new shoes items using the uploaded images
const shoesItems = [
  {
    id: "shoes1",
    name: "Chunky Sole Streetwear Sneakers",
    image: "/lovable-uploads/fea2b134-dfba-4953-9e90-d4711ba17c15.png",
    price: "₹3,499",
    brand: "Y2KVB",
    category: "Shoes",
    tags: ["Chunky", "Streetwear"],
    isFeatured: true
  },
  {
    id: "shoes2",
    name: "White Urban Sport Sneakers",
    image: "/lovable-uploads/5caa1746-43f8-4a1e-8563-6e58746d1aa1.png",
    price: "₹2,999",
    brand: "Sport★Fashion",
    category: "Shoes",
    tags: ["White", "Urban"],
  },
  {
    id: "shoes3",
    name: "Red Accent Performance Runners",
    image: "/lovable-uploads/64c418b4-6c2a-44b0-982d-49d7644805b0.png",
    price: "₹3,299",
    brand: "Active Run",
    category: "Shoes",
    tags: ["Running", "Performance"],
  },
  {
    id: "shoes4",
    name: "Dual Tone Chunky Sneakers",
    image: "/lovable-uploads/70a20648-9096-4498-8fb0-c6c616c4558c.png",
    price: "₹3,799",
    brand: "Streetlife",
    category: "Shoes",
    tags: ["Chunky", "Fashion"],
  },
  {
    id: "shoes5",
    name: "Premium Air Max Style",
    image: "/lovable-uploads/5d52e049-7556-4efa-8745-d92486001970.png",
    price: "₹4,299",
    brand: "Maximum Air",
    category: "Shoes",
    tags: ["Air Cushion", "Premium"],
  },
  {
    id: "shoes6",
    name: "Luxury Formal Leather Shoes",
    image: "/lovable-uploads/1f0faea8-60ab-425e-8ab7-f03382cc08d6.png",
    price: "₹4,999",
    brand: "E Gold",
    category: "Shoes",
    tags: ["Formal", "Leather"],
  },
];

// Adding new vape and hookah items
const vapeItems = [
  {
    id: "vape1",
    name: "Premium E-Cigarette Kit",
    image: "/lovable-uploads/039b08b4-2292-422e-baec-9df41484ab03.png",
    price: "₹1,999",
    brand: "VapeX",
    category: "Vape",
    tags: ["E-Cigarette", "Starter Kit"],
    isFeatured: true
  },
  {
    id: "vape2",
    name: "Flavored Disposable Vape Pens Set",
    image: "/lovable-uploads/e39c0adc-8f44-4f9f-82dc-3bd5dadf5011.png",
    price: "₹1,499",
    brand: "FruitVape",
    category: "Vape",
    tags: ["Disposable", "Flavored"],
  },
  {
    id: "vape3",
    name: "MYA Blue Clearomizer Kit",
    image: "/lovable-uploads/94c7536b-37bc-47a6-aeb3-ca3c82b45aa1.png",
    price: "₹2,299",
    brand: "MYA",
    category: "Vape",
    tags: ["Clearomizer", "Premium"],
  },
  {
    id: "vape4",
    name: "Blue Pepe Jeans Denim", // This was previously in jeans section
    image: "/lovable-uploads/56bd9bc1-57e1-4db8-a9df-13c829a273c1.png",
    price: "₹1,899",
    brand: "VapeLife",
    category: "Vape",
    tags: ["Vape", "Modern"],
  },
  {
    id: "hookah1",
    name: "Premium Glass Hookah Collection",
    image: "/lovable-uploads/5208f75d-4594-491d-8769-49370b7bca76.png",
    price: "₹4,499",
    brand: "HookahZone",
    category: "Hookah",
    tags: ["Glass", "Premium"],
  },
  {
    id: "hookah2",
    name: "Crystal Skull Design Hookah Set",
    image: "/lovable-uploads/86f0bc37-5a84-4ae3-9a74-9954489d578f.png",
    price: "₹5,999",
    brand: "Skull Shisha",
    category: "Hookah",
    tags: ["Crystal", "Designer"],
  },
  {
    id: "hookah3",
    name: "Elegant Black Shisha with LED",
    image: "/lovable-uploads/56633dec-7d40-4d61-ae5f-47830895cb47.png",
    price: "₹3,999",
    brand: "NightGlow",
    category: "Hookah",
    tags: ["LED", "Modern"],
  },
  {
    id: "hookah4",
    name: "Blue Ice Hookah with LED",
    image: "/lovable-uploads/2d79a1f3-4742-40f6-b32e-40199bcb7219.png",
    price: "₹4,299",
    brand: "IceVape",
    category: "Hookah",
    tags: ["LED", "Ice Design"],
  },
  {
    id: "vape5",
    name: "Rainbow SMOK Vape Pen",
    image: "/lovable-uploads/cd17e6aa-9dce-48dc-8720-2c1a6b14085e.png",
    price: "₹2,799",
    brand: "SMOK",
    category: "Vape",
    tags: ["Rainbow", "Premium"],
  },
  {
    id: "vape6",
    name: "Colorful Light Show Pen Vapes",
    image: "/lovable-uploads/27d9a13b-3f6b-4b8b-b9b4-3ff9a02ce8b6.png",
    price: "₹1,699",
    brand: "SpectroVape",
    category: "Vape",
    tags: ["Light Show", "Colorful"],
  },
  {
    id: "vape7",
    name: "Crown Bar Advanced LED Display",
    image: "/lovable-uploads/c9a2617b-af0c-4c7f-ab6e-459debbf6ee7.png",
    price: "₹3,499",
    brand: "Crown Bar",
    category: "Vape",
    tags: ["LED Display", "Premium"],
  },
  {
    id: "vape8",
    name: "Premium Vaping Device Set",
    image: "/lovable-uploads/3e06d190-0222-45a6-93cb-8c660f3326e8.png",
    price: "₹5,999",
    brand: "ProVapeTech",
    category: "Vape",
    tags: ["Premium", "Complete Set"],
  },
  {
    id: "vape9",
    name: "iStick Pico Vaping Kit",
    image: "/lovable-uploads/0fdf880a-8261-4c00-8a1d-c176912cf7ae.png",
    price: "₹2,499",
    brand: "iStick",
    category: "Vape",
    tags: ["Vape", "Accessories"],
  },
  {
    id: "vape10",
    name: "Advanced E-Cigarette",
    image: "/lovable-uploads/3dfad513-7977-407c-a905-fa48adb7f0dc.png",
    price: "₹2,999",
    brand: "VapeTech",
    category: "Vape",
    tags: ["E-Cigarette", "Advanced"],
  }
];

// Combine all items for the complete collection
const allItems = [...clothingItems, ...jeansItems, ...shoesItems, ...vapeItems];

const CollectionsPage = () => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [activeTab, setActiveTab] = useState<string>("all");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const { toast } = useToast();

  const categories = [
    "All", 
    "Shirts", 
    "T-Shirts", 
    "Pants", 
    "Jeans", 
    "Track Pants", 
    "Shoes",
    "Vape",
    "Hookah"
  ];

  const getFilteredItems = () => {
    // First filter by tab selection
    let items = allItems;
    if (activeTab === "jeans") {
      items = jeansItems;
    } else if (activeTab === "shoes") {
      items = shoesItems;
    } else if (activeTab === "clothing") {
      items = clothingItems;
    } else if (activeTab === "vape") {
      items = vapeItems;
    }
    
    // Then filter by category if not "All"
    if (activeCategory !== "All") {
      items = items.filter(item => item.category === activeCategory);
    }
    
    return items;
  };

  const filteredItems = getFilteredItems();
  
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
            {/* Main Tab Selection */}
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
              <TabsList className="grid w-full grid-cols-5 md:w-auto md:inline-flex">
                <TabsTrigger value="all" className="text-sm md:text-base">All Collections</TabsTrigger>
                <TabsTrigger value="jeans" className="text-sm md:text-base">Jeans Collection</TabsTrigger>
                <TabsTrigger value="shoes" className="text-sm md:text-base">Shoes Collection</TabsTrigger>
                <TabsTrigger value="clothing" className="text-sm md:text-base">Clothing</TabsTrigger>
                <TabsTrigger value="vape" className="text-sm md:text-base">Vape & Hookah</TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-10 overflow-x-auto pb-2">
              {categories.map(category => (
                <Button 
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  className="m-1"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Collection Header - Dynamic based on active tab */}
            <div className="mb-10 text-center">
              {activeTab === "jeans" && (
                <div className="animate-fade-up">
                  <h2 className="text-2xl md:text-4xl font-bold mb-4">Premium Jeans Collection</h2>
                  <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    From distressed denim to classic fits, explore our curated selection of premium jeans from top brands.
                  </p>
                </div>
              )}
              {activeTab === "shoes" && (
                <div className="animate-fade-up">
                  <h2 className="text-2xl md:text-4xl font-bold mb-4">Exclusive Footwear Collection</h2>
                  <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    Step up your style with our range of high-quality sneakers, formal shoes, and athletic footwear.
                  </p>
                </div>
              )}
              {activeTab === "vape" && (
                <div className="animate-fade-up">
                  <h2 className="text-2xl md:text-4xl font-bold mb-4">Premium Vape & Hookah Collection</h2>
                  <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    Discover our exclusive range of high-quality vape devices, hookahs, and accessories for the modern lifestyle.
                  </p>
                </div>
              )}
              {(activeTab === "clothing" || activeTab === "all") && activeCategory !== "All" && (
                <div className="animate-fade-up">
                  <h2 className="text-2xl md:text-4xl font-bold mb-4">{activeCategory} Collection</h2>
                  <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    Premium quality {activeCategory.toLowerCase()} designed for comfort, style, and lasting impression.
                  </p>
                </div>
              )}
            </div>

            {/* Product Grid */}
            {filteredItems.length > 0 ? (
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
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-500 dark:text-gray-400">No items found matching these filters.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setActiveCategory("All");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Jeans Spotlight Section */}
        {activeTab === "all" && (
          <section className="py-16 bg-gray-100 dark:bg-gray-900">
            <div className="content-container">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Premium Denim Collection</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  Explore our exclusive range of high-quality jeans, from ripped designs to classic fits
                </p>
                <div className="w-16 h-1 bg-black dark:bg-white mx-auto mt-4"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-1 md:col-span-2">
                  <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/2 h-64 md:h-auto">
                        <img 
                          src="/lovable-uploads/7c4ebb80-eaf4-4ccb-bbe5-1f6391329dbf.png" 
                          alt="Featured Jeans" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-1/2 p-6 flex flex-col justify-center">
                        <h3 className="text-xl font-bold mb-2">Kochi Jordan Distressed Jeans</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          Our signature distressed denim collection, handcrafted for the perfect balance of style and comfort.
                        </p>
                        <Button 
                          onClick={() => {
                            setActiveTab("jeans");
                            setActiveCategory("Jeans");
                          }}
                          className="w-fit"
                        >
                          Shop Jeans Collection
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-6">
                  <Card className="overflow-hidden">
                    <img 
                      src="/lovable-uploads/646cab6e-1804-4712-b118-f75f5c60aa08.png" 
                      alt="Ripped Jeans" 
                      className="h-48 w-full object-cover"
                    />
                    <CardContent className="p-4">
                      <h4 className="font-medium">Vintage Ripped Style</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">From ₹1,999</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <img 
                      src="/lovable-uploads/074a89f3-bff5-46e0-a9b5-8c2cccca38e5.png" 
                      alt="Patched Jeans" 
                      className="h-48 w-full object-cover"
                    />
                    <CardContent className="p-4">
                      <h4 className="font-medium">Designer Patches</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">From ₹2,199</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="text-center mt-10">
                <Button
                  variant="outline"
                  onClick={() => {
                    setActiveTab("jeans");
                    setActiveCategory("Jeans");
                  }}
                >
                  View All Jeans
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Footwear Spotlight Section */}
        {activeTab === "all" && (
          <section className="py-16 bg-white dark:bg-black">
            <div className="content-container">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Trending Footwear</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  Step up your style with our exclusive collection of premium footwear
                </p>
                <div className="w-16 h-1 bg-black dark:bg-white mx-auto mt-4"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="overflow-hidden">
                  <div className="h-72 relative">
                    <img 
                      src="/lovable-uploads/fea2b134-dfba-4953-9e90-d4711ba17c15.png" 
                      alt="Street Style Sneakers" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-xl font-bold">Street Style</h3>
                        <p className="text-sm opacity-80">Urban fashion statement pieces</p>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="overflow-hidden">
                  <div className="h-72 relative">
                    <img 
                      src="/lovable-uploads/5caa1746-43f8-4a1e-8563-6e58746d1aa1.png" 
                      alt="Sport Fashion Sneakers" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-xl font-bold">Activewear</h3>
                        <p className="text-sm opacity-80">Performance with style</p>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="overflow-hidden">
                  <div className="h-72 relative">
                    <img 
                      src="/lovable-uploads/1f0faea8-60ab-425e-8ab7-f03382cc08d6.png" 
                      alt="Formal Shoes" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-xl font-bold">Formal Elegance</h3>
                        <p className="text-sm opacity-80">Premium leather craftsmanship</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div className="text-center mt-10">
                <Button
                  onClick={() => {
                    setActiveTab("shoes");
                    setActiveCategory("All");
                  }}
                  className="bg-black text-white hover:bg-gray-800"
                >
                  Explore All Footwear
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Vape & Hookah Spotlight Section */}
        {activeTab === "all" && (
          <section className="py-16 bg-gradient-to-br from-purple-900 to-black text-white">
            <div className="content-container">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Lifestyle Collection</h2>
                <p className="text-gray-300 max-w-3xl mx-auto">
                  Explore our premium range of vapes, hookahs, and lifestyle accessories
                </p>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mt-4"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-1 md:col-span-2">
                  <div className="bg-gradient-to-br from-purple-800/70 to-black/70 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-purple-500/30">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/2 h-64 md:h-auto relative">
                        <img 
                          src="/lovable-uploads/56633dec-7d40-4d61-ae5f-47830895cb47.png" 
                          alt="Premium Hookah" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
                      </div>
                      <div className="md:w-1/2 p-6 flex flex-col justify-center">
                        <h3 className="text-xl font-bold mb-2">Premium Hookah Collection</h3>
                        <p className="text-gray-300 mb-4">
                          Exquisite hookahs crafted with precision and style, featuring premium materials and stunning designs.
                        </p>
                        <Button 
                          onClick={() => {
                            setActiveTab("vape");
                            setActiveCategory("Hookah");
                          }}
                          className="w-fit bg-purple-600 hover:bg-purple-700"
                        >
                          <Cannabis className="mr-2 h-4 w-4" />
                          Shop Hookah Collection
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-6">
                  <Card className="overflow-hidden bg-gradient-to-br from-purple-800/70 to-black/70 text-white border border-purple-500/30">
                    <div className="relative">
                      <img 
                        src="/lovable-uploads/039b08b4-2292-422e-baec-9df41484ab03.png" 
                        alt="Vape Pen" 
                        className="h-48 w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-medium">Premium Vape Pens</h4>
                      <p className="text-sm text-gray-300">From ₹1,999</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden bg-gradient-to-br from-purple-800/70 to-black/70 text-white border border-purple-500/30">
                    <div className="relative">
                      <img 
                        src="/lovable-uploads/cd17e6aa-9dce-48dc-8720-2c1a6b14085e.png" 
                        alt="SMOK Vape" 
                        className="h-48 w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-medium">SMOK Rainbow Series</h4>
                      <p className="text-sm text-gray-300">From ₹2,799</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="text-center mt-10">
                <Button
                  variant="outline"
                  onClick={() => {
                    setActiveTab("vape");
                    setActiveCategory("All");
                  }}
                  className="border-purple-500 text-white hover:bg-purple-800/30"
                >
                  <Wind className="mr-2 h-4 w-4" />
                  View All Vape & Hookah Products
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Featured Brands Section */}
        <section className="py-16 bg-gray-100 dark:bg-gray-900">
          <div className="content-container">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Brands</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {['Kochi Jordan', 'Allen Solly', 'Nike', 'Puma', 'SMOK', 'Crown Bar', 'VapeX', 'Skull Shisha', 'H&M', 'AMIRI'].map((brand) => (
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
