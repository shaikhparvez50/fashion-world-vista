
export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  tags: string[];
  category: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Summer Fashion Trends 2025",
    slug: "summer-fashion-trends-2025",
    excerpt: "Summer 2025 is all about cool tones, light fabrics, and bold accessories. Think pastel shirts paired with silver chains, loose joggers with trendy belts, and breathable kurtas for festive vibes.",
    content: `
# Summer Fashion Trends 2025

Summer 2025 is all about cool tones, light fabrics, and bold accessories. Think pastel shirts paired with silver chains, loose joggers with trendy belts, and breathable kurtas for festive vibes. At The Fashion World, we've picked the hottest trends that keep you cool and stylish — whether you're on campus or chilling with friends.

## Key Trends for Summer 2025:

* Pastel Color Palette
* Lightweight, Breathable Fabrics
* Statement Accessories
* Loose-Fit Silhouettes
* Traditional Fusion Wear

Visit our store to explore our curated summer collection that combines comfort with style.
    `,
    author: "Rahul Sharma",
    date: "2025-04-18",
    imageUrl: "/lovable-uploads/27d9a13b-3f6b-4b8b-b9b4-3ff9a02ce8b6.png",
    tags: ["summer fashion", "trends", "2025", "men's style"],
    category: "Fashion Trends"
  },
  {
    id: "2",
    title: "Top 5 Must-Have Accessories for Men",
    slug: "must-have-accessories-men",
    excerpt: "Want to upgrade your look in seconds? Accessories are the key. A sleek watch, a chunky ring, a classic belt, a stylish chain, and a signature hookah piece can completely change your vibe.",
    content: `
# Top 5 Must-Have Accessories for Men

Want to upgrade your look in seconds? Accessories are the key. These five essential items can turn your simple outfit into a standout statement.

## 1. The Timeless Watch
A sleek timepiece that speaks volumes about your style and punctuality.

## 2. Statement Rings
From minimalist bands to bold designs, find your signature piece.

## 3. Classic Belts
The perfect finishing touch that pulls your outfit together.

## 4. Trendy Chains
Add edge to any outfit with the right chain.

## 5. Signature Hookah
Make a statement with a personalized piece that reflects your style.

Visit The Fashion World to explore our complete accessories collection.
    `,
    author: "Vikram Singh",
    date: "2025-04-17",
    imageUrl: "/lovable-uploads/520fc937-aa71-4377-bbbf-ed27354a6ab7.png",
    tags: ["accessories", "men's fashion", "style tips"],
    category: "Style Guide"
  },
  {
    id: "3",
    title: "Why Chains Are the King of Street Style",
    slug: "chains-king-street-style",
    excerpt: "Chains have taken over the streets — from rappers to influencers, everyone is rocking chains. Whether it's gold-plated, silver, or black matte, chains add attitude to your look.",
    content: `
# Why Chains Are the King of Street Style

Chains have taken over the streets — from rappers to influencers, everyone is rocking chains. Whether it's gold-plated, silver, or black matte, chains add attitude to your look. 

## Popular Chain Styles:
* Classic Gold-Plated
* Sleek Silver
* Edgy Black Matte
* Mixed Metal Designs
* Custom Pendants

Pair them with oversized tees or open jackets and see how your style game levels up instantly.
    `,
    author: "Rahul Sharma",
    date: "2025-04-16",
    imageUrl: "/lovable-uploads/5caa1746-43f8-4a1e-8563-6e58746d1aa1.png",
    tags: ["chains", "street style", "accessories"],
    category: "Accessories"
  },
  {
    id: "4",
    title: "The Rise of Pen Hookahs in Men's Fashion",
    slug: "pen-hookahs-mens-fashion",
    excerpt: "Pen hookahs aren't just smoking tools — they're fashion icons now. Stylish designs, LED tips, and customized colors have made hookahs a cool part of urban outfits.",
    content: `
# The Rise of Pen Hookahs in Men's Fashion

Pen hookahs aren't just smoking tools — they're fashion icons now. Stylish designs, LED tips, and customized colors have made hookahs a cool part of urban outfits. 

## Trending Features:
* LED Light Tips
* Custom Colors
* Sleek Designs
* Portable Sizes
* Modern Materials

The Fashion World offers pen hookahs that match your personality, style, and budget.
    `,
    author: "Vikram Singh",
    date: "2025-04-15",
    imageUrl: "/lovable-uploads/646cab6e-1804-4712-b118-f75f5c60aa08.png",
    tags: ["hookah", "accessories", "lifestyle"],
    category: "Lifestyle"
  },
  {
    id: "5",
    title: "Watches vs. Smartwatches – What Should You Wear?",
    slug: "watches-vs-smartwatches",
    excerpt: "A traditional watch adds class and elegance, while a smartwatch shows you're modern and tech-savvy. But what if you could mix both?",
    content: `
# Watches vs. Smartwatches – What Should You Wear?

A traditional watch adds class and elegance, while a smartwatch shows you're modern and tech-savvy. But what if you could mix both? 

## Traditional Watches:
* Timeless Appeal
* Status Symbol
* No Charging Needed
* Classic Design

## Smartwatches:
* Modern Features 
* Health Tracking
* Notifications
* Customizable Faces

Explore our new collection of hybrid watches — classic designs with a smart touch, made just for the new generation of trendsetters.
    `,
    author: "Rahul Sharma",
    date: "2025-04-14",
    imageUrl: "/lovable-uploads/ad9bbc5d-3b05-46f9-af2f-bf080df81e0c.png",
    tags: ["watches", "smartwatches", "accessories"],
    category: "Tech & Style"
  },
  {
    id: "6",
    title: "Fashion Tips for School & College Students",
    slug: "fashion-tips-students",
    excerpt: "Don't let your uniform kill your style. Accessorize smartly — a clean chain, a subtle ring, stylish shoes, and a confident smile can make all the difference.",
    content: `
# Fashion Tips for School & College Students

Don't let your uniform kill your style. Here's how to stand out while following the rules.

## Smart Accessorizing:
* Clean, Simple Chains
* Subtle Rings
* Stylish Shoes
* Classic Watches
* Neat Hairstyles

At The Fashion World, we help students stand out without breaking rules or the bank.
    `,
    author: "Vikram Singh",
    date: "2025-04-13",
    imageUrl: "/lovable-uploads/94c7536b-37bc-47a6-aeb3-ca3c82b45aa1.png",
    tags: ["student fashion", "accessories", "style tips"],
    category: "Style Guide"
  },
  {
    id: "7",
    title: "How to Choose the Right Ring for Your Personality",
    slug: "choose-right-ring-personality",
    excerpt: "Rings say a lot about you. Bold and big? You're confident. Simple and sleek? You're classy. Our collection helps you find the perfect ring that reflects your personality.",
    content: `
# How to Choose the Right Ring for Your Personality

Rings say a lot about you. Let's find your perfect match.

## Ring Styles & Personalities:
* Bold & Big - Confident & Outgoing
* Simple & Sleek - Classic & Sophisticated
* Gemstone - Artistic & Unique
* Black Metal - Modern & Edgy
* Mixed Materials - Creative & Versatile

Explore our collection of silver, black, golden, and gemstone rings that speak your style.
    `,
    author: "Rahul Sharma",
    date: "2025-04-12",
    imageUrl: "/lovable-uploads/85c397be-ee0d-446a-877c-6541a4211418.png",
    tags: ["rings", "accessories", "personality"],
    category: "Style Guide"
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRecentPosts = (count: number = 3): BlogPost[] => {
  // Sort by date (newest first) and return the requested count
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

export const getRelatedPosts = (currentPostId: string, count: number = 2): BlogPost[] => {
  const currentPost = blogPosts.find(post => post.id === currentPostId);
  if (!currentPost) return [];
  
  // Find posts with similar tags or categories
  return blogPosts
    .filter(post => post.id !== currentPostId)
    .sort((a, b) => {
      const aCommonTags = a.tags.filter(tag => currentPost.tags.includes(tag)).length;
      const bCommonTags = b.tags.filter(tag => currentPost.tags.includes(tag)).length;
      
      if (a.category === currentPost.category && b.category !== currentPost.category) return -1;
      if (a.category !== currentPost.category && b.category === currentPost.category) return 1;
      
      return bCommonTags - aCommonTags;
    })
    .slice(0, count);
};
