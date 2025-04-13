
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SearchBar } from "../components/collections";
import { CategoryFilters } from "../components/collections";
import { TabNavigation } from "../components/collections";
import { CategoryHeading } from "../components/collections";
import { ProductList } from "../components/collections";
import { SpotlightDenim } from "../components/collections";
import { SpotlightFootwear } from "../components/collections";
import { SpotlightVape } from "../components/collections";
import { BrandShowcase } from "../components/collections";

import { allItems, clothingItems, jeansItems, shoesItems, vapeItems } from "../data/products";

const CollectionsPage = () => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [activeTab, setActiveTab] = useState<string>("all");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const location = useLocation();

  const categories = [
    "All", 
    "Shirts", 
    "T-Shirts", 
    "Pants", 
    "Jeans", 
    "Track Pants", 
    "Shoes",
    "Vape",
    "Hookah"
  ];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabParam = params.get("tab");
    const categoryParam = params.get("category");
    const searchParam = params.get("search");
    
    if (tabParam && ["all", "jeans", "shoes", "clothing", "vape"].includes(tabParam)) {
      setActiveTab(tabParam);
    }
    
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
    
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [location]);

  const getFilteredItems = () => {
    let items = allItems;
    if (activeTab === "jeans") {
      items = jeansItems;
    } else if (activeTab === "shoes") {
      items = shoesItems;
    } else if (activeTab === "clothing") {
      items = clothingItems;
    } else if (activeTab === "vape") {
      items = vapeItems;
    }
    
    if (activeCategory !== "All") {
      items = items.filter(item => item.category === activeCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      items = items.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.brand.toLowerCase().includes(query) || 
        item.category.toLowerCase().includes(query) || 
        item.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    return items;
  };

  const filteredItems = getFilteredItems();
  
  const toggleFavorite = (id: string) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const resetFilters = () => {
    setActiveCategory("All");
    setSearchQuery("");
  };

  const navigateToJeans = () => {
    setActiveTab("jeans");
    setActiveCategory("Jeans");
  };

  const navigateToShoes = () => {
    setActiveTab("shoes");
    setActiveCategory("All");
  };

  const navigateToVape = () => {
    setActiveTab("vape");
    setActiveCategory("All");
  };

  const navigateToHookah = () => {
    setActiveTab("vape");
    setActiveCategory("Hookah");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
          <div className="content-container max-w-6xl mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">Our Collections</h1>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8 text-center">
              Explore our premium collection of men's fashion items, featuring brands like Kochi Jordan, Allen Solly, and more.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-300 mx-auto mb-8"></div>
            
            <SearchBar 
              searchQuery={searchQuery}
              onChange={handleSearchChange}
              onClear={clearSearch}
            />
          </div>
        </div>

        <section className="py-12 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="content-container max-w-6xl mx-auto px-4">
            <TabNavigation 
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />

            <CategoryFilters 
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            <CategoryHeading 
              activeTab={activeTab}
              activeCategory={activeCategory}
            />

            {searchQuery && (
              <div className="mb-8 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-md">
                <h3 className="text-lg font-medium mb-2">
                  Search results for: <span className="font-bold italic">{searchQuery}</span>
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Found {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''}
                </p>
              </div>
            )}

            <ProductList 
              items={filteredItems}
              favorites={favorites}
              onFavoriteToggle={toggleFavorite}
              onResetFilters={resetFilters}
            />
          </div>
        </section>

        {activeTab === "all" && (
          <SpotlightDenim 
            onViewAll={navigateToJeans}
            onShopCollection={navigateToJeans}
          />
        )}

        {activeTab === "all" && (
          <SpotlightFootwear onExplore={navigateToShoes} />
        )}

        {activeTab === "all" && (
          <SpotlightVape 
            onViewAll={navigateToVape}
            onShopHookah={navigateToHookah}
          />
        )}

        <BrandShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default CollectionsPage;
