
import { Button } from "@/components/ui/button";

interface CategoryFiltersProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilters = ({ categories, activeCategory, onCategoryChange }: CategoryFiltersProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10 overflow-x-auto pb-4">
      <div className="bg-white/60 dark:bg-black/60 backdrop-blur-sm p-2 rounded-full inline-flex flex-wrap justify-center gap-2 shadow-lg border border-gray-200/30 dark:border-gray-700/30">
        {categories.map(category => (
          <Button 
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            size="sm"
            className={`rounded-full ${
              activeCategory === category 
                ? "bg-gradient-to-r from-yellow-600 to-yellow-500 text-white border-transparent" 
                : "bg-transparent border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilters;
