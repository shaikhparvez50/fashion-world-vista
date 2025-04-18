
import { BlogPost } from "@/data/blog-posts";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Tag, User } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPostCardProps {
  post: BlogPost;
  variant?: "large" | "medium" | "small";
}

const BlogPostCard = ({ post, variant = "medium" }: BlogPostCardProps) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  const isLarge = variant === "large";
  const isSmall = variant === "small";
  
  return (
    <Card className={`overflow-hidden bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow
      ${isLarge ? 'lg:flex' : 'flex flex-col'}`}>
      <div className={`${isLarge ? 'lg:w-1/2' : 'w-full'} relative`}>
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className={`w-full object-cover ${isLarge ? 'lg:h-full h-64' : isSmall ? 'h-48' : 'h-60'}`}
        />
        <Badge className="absolute top-4 right-4 bg-black/80 hover:bg-black">{post.category}</Badge>
      </div>
      
      <div className={`${isLarge ? 'lg:w-1/2' : 'w-full'} flex flex-col`}>
        <CardHeader className="pb-2">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-3 mb-2">
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {post.author}
            </span>
          </div>
          <Link to={`/blog/${post.slug}`} className="group">
            <h3 className={`font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors
              ${isLarge ? 'text-2xl' : isSmall ? 'text-lg' : 'text-xl'}`}>
              {post.title}
            </h3>
          </Link>
        </CardHeader>
        
        <CardContent className={isSmall ? 'py-2' : 'py-4'}>
          <p className={`text-gray-600 dark:text-gray-300 ${isSmall ? 'line-clamp-2' : 'line-clamp-3'}`}>
            {post.excerpt}
          </p>
        </CardContent>
        
        <CardFooter className={`${isSmall ? 'pt-0' : 'pt-2'} pb-4 flex-wrap gap-1`}>
          {post.tags.slice(0, isSmall ? 2 : 3).map(tag => (
            <Badge key={tag} variant="outline" className="mr-1">
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </Badge>
          ))}
          <Link 
            to={`/blog/${post.slug}`} 
            className="ml-auto text-primary hover:text-primary/80 text-sm font-medium"
          >
            Read More
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
};

export default BlogPostCard;
