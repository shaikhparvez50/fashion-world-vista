
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface SpotlightDenimProps {
  onViewAll: () => void;
  onShopCollection: () => void;
}

const SpotlightDenim = ({ onViewAll, onShopCollection }: SpotlightDenimProps) => {
  return (
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
                  <h3 className="text-xl font-bold">Kochi Jordan Distressed Jeans</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Our signature distressed denim collection, handcrafted for the perfect balance of style and comfort.
                  </p>
                  <Button 
                    onClick={onShopCollection}
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
            onClick={onViewAll}
          >
            View All Jeans
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpotlightDenim;
