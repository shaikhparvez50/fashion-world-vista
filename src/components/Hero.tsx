
import { ArrowRight, Instagram, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { 
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";

const Hero = () => {
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample product categories for search results
  const searchCategories = [
    { name: "Shirts", url: "/collections?category=Shirts" },
    { name: "T-Shirts", url: "/collections?category=T-Shirts" },
    { name: "Jeans", url: "/collections?tab=jeans" },
    { name: "Shoes", url: "/collections?tab=shoes" },
    { name: "Vape & Hookah", url: "/collections?tab=vape" },
    { name: "Track Pants", url: "/collections?category=Track%20Pants" },
  ];
  
  // Sample popular products for search results
  const popularProducts = [
    { name: "Blue & White Striped Shirt", url: "/product/item1" },
    { name: "Distressed Light Wash Jeans", url: "/product/jeans1" },
    { name: "Chunky Sole Streetwear Sneakers", url: "/product/shoes1" },
    { name: "Premium E-Cigarette Kit", url: "/product/vape1" },
  ];
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/collections?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setSearchOpen(false);
    }
  };
  
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Using one of the uploaded images */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: `url('/lovable-uploads/56bd9bc1-57e1-4db8-a9df-13c829a273c1.png')`,
          filter: 'brightness(0.3)',
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
          
          {/* Search bar */}
          <div className="w-full max-w-md mb-8 relative">
            <form onSubmit={handleSearch} className="flex">
              <div className="relative flex-grow">
                <Input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onClick={() => setSearchOpen(true)}
                  className="h-12 pl-10 pr-4 rounded-l-full bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 transition-all duration-300"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
              </div>
              <Button 
                type="submit" 
                className="h-12 rounded-r-full bg-white text-black hover:bg-gray-200 px-6"
              >
                Search
              </Button>
            </form>
          </div>
          
          {/* Search command dialog */}
          <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
            <Command className="rounded-lg border shadow-md">
              <CommandInput 
                placeholder="Search for products..." 
                value={searchQuery}
                onValueChange={setSearchQuery}
              />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Categories">
                  {searchCategories.map((category) => (
                    <CommandItem
                      key={category.url}
                      onSelect={() => {
                        navigate(category.url);
                        setSearchOpen(false);
                      }}
                    >
                      {category.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
                <CommandGroup heading="Popular Products">
                  {popularProducts.map((product) => (
                    <CommandItem
                      key={product.url}
                      onSelect={() => {
                        navigate(product.url);
                        setSearchOpen(false);
                      }}
                    >
                      {product.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </CommandDialog>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button 
              className="bg-white text-black hover:bg-gray-200 hover:text-black transition-all duration-300 text-md md:text-lg py-6 px-8 shadow-xl group premium-hover"
              onClick={() => navigate('/collections')}
            >
              Explore Collections
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="text-md md:text-lg py-6 px-8 text-white bg-transparent border-white hover:bg-white/10 shadow-xl premium-hover"
              onClick={() => navigate('/store-location')}
            >
              Visit Store
            </Button>
            <Button 
              variant="outline" 
              className="text-md md:text-lg py-6 px-8 text-white bg-transparent border-white hover:bg-white/10 shadow-xl premium-hover flex items-center"
              onClick={() => window.open('https://www.instagram.com/the_faison_world?utm_source=qr&igsh=MTB1MmwwdGNkd2Z6YQ==', '_blank')}
            >
              <Instagram className="mr-2 h-5 w-5" />
              Follow on Instagram
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
