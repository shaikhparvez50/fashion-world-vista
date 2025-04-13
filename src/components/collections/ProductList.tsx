
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import { ClothingItem } from "@/types/product";

interface ProductListProps {
  items: ClothingItem[];
  favorites: Record<string, boolean>;
  onFavoriteToggle: (id: string) => void;
  onResetFilters: () => void;
}

const ProductList = ({ items, favorites, onFavoriteToggle, onResetFilters }: ProductListProps) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-md">
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-4">No items found matching these filters.</p>
        <Button 
          variant="default" 
          className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-white border-none"
          onClick={onResetFilters}
        >
          Reset Filters
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item) => (
        <ProductCard 
          key={item.id} 
          item={item} 
          isFavorite={!!favorites[item.id]}
          onFavoriteToggle={(id) => onFavoriteToggle(id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
