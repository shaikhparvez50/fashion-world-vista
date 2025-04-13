
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface SpotlightFootwearProps {
  onExplore: () => void;
}

const SpotlightFootwear = ({ onExplore }: SpotlightFootwearProps) => {
  return (
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
            onClick={onExplore}
            className="bg-black text-white hover:bg-gray-800"
          >
            Explore All Footwear
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpotlightFootwear;
