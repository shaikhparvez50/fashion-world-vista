
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
    title: "Top 5 Denim Trends for 2025",
    slug: "top-5-denim-trends-2025",
    excerpt: "Discover the hottest denim trends that will dominate the fashion scene in 2025. From relaxed fits to sustainable washes, we cover it all.",
    content: `
# Top 5 Denim Trends for 2025

Denim is always evolving, and 2025 brings some exciting new trends to the table. As a premier men's fashion store in Amarpur, Bihar, we're excited to share the latest styles that are making waves in the fashion world.

## 1. Relaxed Straight Legs

The skinny jean era is officially over! Relaxed straight-leg jeans are the silhouette of the year. They provide comfort without sacrificing style, making them perfect for both casual outings and semi-formal events when paired with the right top.

## 2. Sustainable Washes

Eco-conscious fashion is no longer just a trend but a movement. Denim brands are increasingly adopting water-saving washing techniques and organic cotton. These sustainable washes not only reduce environmental impact but also create unique, naturally worn looks.

## 3. Statement Pockets

Forget minimalism when it comes to pockets in 2025. Oversized, contrast-stitched, and uniquely shaped pockets are becoming a major design element in denim fashion.

## 4. Vintage-Inspired Cuts

What's old is new again! High-waisted, wide-leg jeans inspired by the 70s and 90s are making a strong comeback, offering a retro aesthetic with modern comfort.

## 5. Bold Colors

While classic blue denim will never go out of style, 2025 is all about experimenting with bold colors. From earthy terracottas to vibrant greens, colored denim is a great way to stand out.

Visit our store at The Fashion World in Amarpur to explore our latest denim collection featuring all these trending styles!
    `,
    author: "Rahul Sharma",
    date: "2025-04-15",
    imageUrl: "/lovable-uploads/87581fa1-eb2b-4b06-a212-48eb6f4f6c64.png",
    tags: ["denim", "jeans", "fashion trends", "men's style"],
    category: "Fashion Trends"
  },
  {
    id: "2",
    title: "How to Style White Sneakers for Every Occasion",
    slug: "style-white-sneakers-every-occasion",
    excerpt: "White sneakers are a versatile footwear option that can be styled for almost any setting. Learn how to wear them from casual outings to semi-formal events.",
    content: `
# How to Style White Sneakers for Every Occasion

White sneakers are the chameleons of men's footwear - incredibly versatile and appropriate for almost any setting when styled correctly. Here's our guide on how to wear your favorite white kicks for different occasions.

## Casual Everyday Look

Pair your white sneakers with:
- Slim or straight jeans (cuffed at the bottom for a modern touch)
- A simple T-shirt or henley
- A light jacket or overshirt

This combination works for running errands, meeting friends for coffee, or casual weekend activities.

## Smart Casual Office

For a business casual environment:
- Chinos or tailored trousers
- A crisp button-down shirt
- A lightweight blazer (optional)
- Clean, minimalist white sneakers

This look strikes the perfect balance between professional and approachable.

## Summer Parties

For outdoor gatherings:
- Shorts (tailored, not athletic)
- A short-sleeve button-up shirt
- Low-profile white sneakers
- No-show socks

This ensemble keeps you looking put-together while staying cool.

## Date Night

For a stylish impression:
- Dark jeans or trousers
- A textured shirt or polo
- A bomber jacket or lightweight coat
- Premium white leather sneakers

This outfit shows you've made an effort without appearing overdressed.

## Semi-Formal Events

For occasions with a somewhat relaxed dress code:
- Tailored suit in navy or gray
- Dress shirt (no tie)
- High-quality white leather sneakers with minimal branding

This contemporary look works for modern weddings, gallery openings, and upscale restaurants with a relaxed vibe.

Remember, the key to styling white sneakers for dressier occasions is to ensure they're impeccably clean and high-quality. Visit The Fashion World in Amarpur to explore our premium footwear collection!
    `,
    author: "Vikram Singh",
    date: "2025-04-10",
    imageUrl: "/lovable-uploads/326ccca9-366e-4003-bfd8-a81f194f9bbe.png",
    tags: ["footwear", "sneakers", "styling tips", "men's fashion"],
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
