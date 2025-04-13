
import { useState } from "react";
import { Eye, Heart, ShoppingBag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ClothingItem } from "@/types/product";

interface ProductCardProps {
  item: ClothingItem;
  onFavoriteToggle?: (id: string, isFavorite: boolean) => void;
  isFavorite?: boolean;
}

const ProductCard = ({ item, onFavoriteToggle, isFavorite = false }: ProductCardProps) => {
  const { toast } = useToast();
  
  const handleFavoriteToggle = () => {
    if (onFavoriteToggle) {
      onFavoriteToggle(item.id, !isFavorite);
      
      toast({
        title: !isFavorite ? "Added to favorites" : "Removed from favorites",
        description: `Item has been ${!isFavorite ? "saved to" : "removed from"} your favorites`,
        duration: 3000,
      });
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group card-hover bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl">
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
              className="bg-white text-black hover:bg-gray-200 shadow-lg"
            >
              <ShoppingBag className="h-4 w-4 mr-1" />
              Add to Cart
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="bg-white/20 text-white backdrop-blur-sm border-white/20 hover:bg-white/30"
              onClick={handleFavoriteToggle}
            >
              <Heart className={`h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
            </Button>
          </div>
        </div>
        {item.isFeatured && (
          <Badge className="absolute top-3 left-3 bg-gradient-to-r from-yellow-600 to-yellow-400 text-white border-none shadow-lg">
            Featured
          </Badge>
        )}
      </div>
      <CardContent className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 font-medium">{item.brand}</p>
            <h3 className="font-semibold text-lg mb-2 line-clamp-2">{item.name}</h3>
            <p className="text-lg font-bold bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
              {item.price}
            </p>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="mt-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full" 
            onClick={() => window.location.href = `/product/${item.id}`}
          >
            <Eye className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex flex-wrap gap-1 mt-3">
          {item.tags.map(tag => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
