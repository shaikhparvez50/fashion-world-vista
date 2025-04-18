
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getBlogPostBySlug, getRelatedPosts, BlogPost } from "@/data/blog-posts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPostCard from "@/components/blog/BlogPostCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Share2, Tag, User } from "lucide-react";
import { Helmet } from "react-helmet-async";

// Simple markdown renderer
const renderMarkdown = (markdown: string) => {
  // This is a very basic markdown renderer
  // For production, use a proper markdown library like marked or remark
  
  const html = markdown
    // Headers
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-6 mb-4">$1</h1>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-5 mb-3">$1</h2>')
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-4 mb-2">$1</h3>')
    // Lists
    .replace(/^\* (.*$)/gim, '<li class="ml-6 list-disc">$1</li>')
    .replace(/^- (.*$)/gim, '<li class="ml-6 list-disc">$1</li>')
    // Paragraphs
    .replace(/^\n(?!<)/gim, '<p class="mb-4">')
    .replace(/^([^<].*)\n$/gim, '<p class="mb-4">$1</p>');
  
  return { __html: html };
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (slug) {
      const foundPost = getBlogPostBySlug(slug);
      if (foundPost) {
        setPost(foundPost);
        setRelatedPosts(getRelatedPosts(foundPost.id));
      } else {
        // Redirect to blog page if post not found
        navigate("/blog");
      }
    }
  }, [slug, navigate]);
  
  if (!post) {
    return null; // Or a loading state
  }
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>{post.title} - The Fashion World Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.imageUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.imageUrl} />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow content-container py-8 md:py-16">
        <div className="mb-8">
          <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>
        
        <article className="max-w-4xl mx-auto">
          {/* Hero section */}
          <div className="mb-8">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-playfair">
              {post.title}
            </h1>
            
            <div className="flex items-center text-gray-500 dark:text-gray-400 space-x-6 mb-8">
              <span className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                {post.author}
              </span>
              <span className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                {formatDate(post.date)}
              </span>
              <Button 
                variant="ghost" 
                size="sm" 
                className="ml-auto" 
                onClick={handleShare}
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
            
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg mb-8">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Post content */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
            <div dangerouslySetInnerHTML={renderMarkdown(post.content)} />
          </div>
          
          {/* Tags */}
          <div className="border-t border-b py-6 mb-16">
            <div className="flex flex-wrap items-center">
              <span className="font-medium mr-4">Tags:</span>
              {post.tags.map(tag => (
                <Badge key={tag} variant="outline" className="mr-2 mb-2">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold mb-8">Related Posts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map(relatedPost => (
                  <BlogPostCard key={relatedPost.id} post={relatedPost} variant="small" />
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPostPage;
