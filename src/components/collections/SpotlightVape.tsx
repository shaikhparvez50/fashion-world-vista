
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cannabis, Wind } from "lucide-react";

interface SpotlightVapeProps {
  onViewAll: () => void;
  onShopHookah: () => void;
}

const SpotlightVape = ({ onViewAll, onShopHookah }: SpotlightVapeProps) => {
  return (
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
                    onClick={onShopHookah}
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
            onClick={onViewAll}
            className="border-purple-500 text-white hover:bg-purple-800/30"
          >
            <Wind className="mr-2 h-4 w-4" />
            View All Vape & Hookah Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpotlightVape;
