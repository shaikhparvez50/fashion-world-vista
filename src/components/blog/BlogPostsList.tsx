
import { BlogPost } from "@/data/blog-posts";
import BlogPostCard from "./BlogPostCard";

interface BlogPostsListProps {
  posts: BlogPost[];
  featuredPost?: boolean;
}

const BlogPostsList = ({ posts, featuredPost = true }: BlogPostsListProps) => {
  // If there's a featured post and the feature flag is true, render the first post as large
  const [firstPost, ...restPosts] = posts;
  
  return (
    <div className="space-y-8">
      {featuredPost && firstPost && (
        <BlogPostCard post={firstPost} variant="large" />
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(featuredPost ? restPosts : posts).map(post => (
          <BlogPostCard key={post.id} post={post} variant="medium" />
        ))}
      </div>
    </div>
  );
};

export default BlogPostsList;
