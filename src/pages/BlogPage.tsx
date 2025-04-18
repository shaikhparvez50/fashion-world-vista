
import { useState } from "react";
import { blogPosts } from "@/data/blog-posts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPostsList from "@/components/blog/BlogPostsList";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Tag } from "lucide-react";
import { Helmet } from "react-helmet-async";

// Get unique categories
const categories = Array.from(new Set(blogPosts.map(post => post.category)));

// Get unique tags
const allTags = Array.from(
  new Set(blogPosts.flatMap(post => post.tags))
).sort();

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  // Filter posts based on search, category, and tags
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = 
      searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === null || 
      post.category === selectedCategory;
    
    const matchesTags = 
      selectedTags.length === 0 || 
      selectedTags.every(tag => post.tags.includes(tag));
    
    return matchesSearch && matchesCategory && matchesTags;
  });
  
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already handled by the state change, this just prevents form submission
  };
  
  // Sort posts by date (newest first)
  const sortedPosts = [...filteredPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Fashion Blog - The Fashion World</title>
        <meta name="description" content="Explore the latest men's fashion trends, styling tips, and fashion advice on The Fashion World blog. Your source for premium men's fashion in Bihar." />
        <meta name="keywords" content="men's fashion blog, fashion trends, styling tips, denim trends, sneaker styling, men's clothing, Bihar fashion" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow content-container py-8 md:py-16">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">Fashion Blog</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore the latest fashion trends, styling tips, and expert advice for the modern Indian man.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {/* Sidebar with filters */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </form>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-3">Categories</h3>
              <div className="space-y-2">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  className="mr-2 mb-2"
                  onClick={() => setSelectedCategory(null)}
                >
                  All
                </Button>
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className="mr-2 mb-2"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-3">Popular Tags</h3>
              <div className="flex flex-wrap">
                {allTags.map(tag => (
                  <Badge 
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    className="mr-2 mb-2 cursor-pointer"
                    onClick={() => toggleTag(tag)}
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          {/* Blog posts list */}
          <div className="lg:col-span-3">
            {sortedPosts.length > 0 ? (
              <BlogPostsList posts={sortedPosts} />
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No posts found</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Try adjusting your search or filter criteria
                </p>
                <Button 
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory(null);
                    setSelectedTags([]);
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
