
interface CategoryHeadingProps {
  activeTab: string;
  activeCategory: string;
}

const CategoryHeading = ({ activeTab, activeCategory }: CategoryHeadingProps) => {
  if (activeTab === "jeans") {
    return (
      <div className="animate-fade-up text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Premium Jeans Collection</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          From distressed denim to classic fits, explore our curated selection of premium jeans from top brands.
        </p>
      </div>
    );
  }

  if (activeTab === "shoes") {
    return (
      <div className="animate-fade-up text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Exclusive Footwear Collection</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Step up your style with our range of high-quality sneakers, formal shoes, and athletic footwear.
        </p>
      </div>
    );
  }

  if (activeTab === "vape") {
    return (
      <div className="animate-fade-up text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Premium Vape & Hookah Collection</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Discover our exclusive range of high-quality vape devices, hookahs, and accessories for the modern lifestyle.
        </p>
      </div>
    );
  }

  if ((activeTab === "clothing" || activeTab === "all") && activeCategory !== "All") {
    return (
      <div className="animate-fade-up text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">{activeCategory} Collection</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Premium quality {activeCategory.toLowerCase()} designed for comfort, style, and lasting impression.
        </p>
      </div>
    );
  }

  return null;
};

export default CategoryHeading;
