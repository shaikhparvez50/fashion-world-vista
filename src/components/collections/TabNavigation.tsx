
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  return (
    <Tabs defaultValue="all" value={activeTab} onValueChange={onTabChange} className="mb-8">
      <TabsList className="grid w-full grid-cols-5 md:w-auto md:inline-flex bg-white/20 dark:bg-black/20 backdrop-blur-sm p-1 rounded-full border border-gray-200/20 dark:border-gray-700/20">
        <TabsTrigger 
          value="all" 
          className="text-sm md:text-base rounded-full data-[state=active]:bg-white data-[state=active]:text-black dark:data-[state=active]:bg-gray-800"
        >
          All Collections
        </TabsTrigger>
        <TabsTrigger 
          value="jeans" 
          className="text-sm md:text-base rounded-full data-[state=active]:bg-white data-[state=active]:text-black dark:data-[state=active]:bg-gray-800"
        >
          Jeans Collection
        </TabsTrigger>
        <TabsTrigger 
          value="shoes" 
          className="text-sm md:text-base rounded-full data-[state=active]:bg-white data-[state=active]:text-black dark:data-[state=active]:bg-gray-800"
        >
          Shoes Collection
        </TabsTrigger>
        <TabsTrigger 
          value="clothing" 
          className="text-sm md:text-base rounded-full data-[state=active]:bg-white data-[state=active]:text-black dark:data-[state=active]:bg-gray-800"
        >
          Clothing
        </TabsTrigger>
        <TabsTrigger 
          value="vape" 
          className="text-sm md:text-base rounded-full data-[state=active]:bg-white data-[state=active]:text-black dark:data-[state=active]:bg-gray-800"
        >
          Vape & Hookah
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default TabNavigation;
