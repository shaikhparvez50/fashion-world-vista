
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const brands = [
  {
    id: 1,
    name: "Louis Philippe",
    logo: "https://via.placeholder.com/200x100?text=Louis+Philippe",
  },
  {
    id: 2,
    name: "Allen Solly",
    logo: "https://via.placeholder.com/200x100?text=Allen+Solly",
  },
  {
    id: 3,
    name: "Peter England",
    logo: "https://via.placeholder.com/200x100?text=Peter+England",
  },
  {
    id: 4,
    name: "Van Heusen",
    logo: "https://via.placeholder.com/200x100?text=Van+Heusen",
  },
  {
    id: 5,
    name: "Arrow",
    logo: "https://via.placeholder.com/200x100?text=Arrow",
  },
  {
    id: 6,
    name: "Park Avenue",
    logo: "https://via.placeholder.com/200x100?text=Park+Avenue",
  },
];

const BrandShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % brands.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-white dark:bg-fashion-dark py-16">
      <div className="content-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Brands</h2>
          <p className="text-fashion-mid-gray dark:text-gray-400 max-w-3xl mx-auto">
            We partner with the world's leading fashion brands to bring you the highest quality products.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <Card 
              key={brand.id} 
              className={`border bg-white/80 dark:bg-fashion-dark-gray/80 flex items-center justify-center h-32 transition-all duration-300 ${index === activeIndex ? 'scale-110 shadow-lg z-10' : 'scale-100'}`}
            >
              <CardContent className="p-4 flex items-center justify-center h-full">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="max-h-16 max-w-full" 
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
