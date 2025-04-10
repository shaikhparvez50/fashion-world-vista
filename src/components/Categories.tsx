
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const categories = [
  {
    id: "men",
    title: "Men's Collection",
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=800&auto=format&fit=crop",
    items: ["T-Shirts", "Pants", "Shirts", "Suits"],
  },
  {
    id: "women",
    title: "Women's Collection",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop",
    items: ["T-Shirts", "Pants", "Dresses"],
  },
  {
    id: "accessories",
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=800&auto=format&fit=crop",
    items: ["Rings", "Chains", "Belts", "Watches"],
  },
  {
    id: "footwear",
    title: "Footwear",
    image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=800&auto=format&fit=crop",
    items: ["Slippers", "Shoes", "Sneakers"],
  },
  {
    id: "lifestyle",
    title: "Lifestyle",
    image: "https://images.unsplash.com/photo-1516914589923-f105f1535f88?q=80&w=800&auto=format&fit=crop",
    items: ["Hookahs", "Pen Hookahs"],
  },
];

const Categories = () => {
  return (
    <section id="categories" className="section-padding bg-secondary/50 dark:bg-fashion-dark">
      <div className="content-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Categories</h2>
          <p className="text-fashion-mid-gray dark:text-gray-400 max-w-3xl mx-auto">
            Discover our extensive collection of premium fashion items, carefully curated for the modern individual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <a href={`#${category.id}`} key={category.id} className="block">
              <Card className="overflow-hidden card-hover border-0 shadow-md dark:bg-fashion-dark-gray/80">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((item) => (
                          <Badge key={item} variant="secondary" className="bg-white/20 hover:bg-white/30">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
