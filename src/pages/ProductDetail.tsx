
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Heart, 
  ShoppingBag, 
  Star, 
  Share2, 
  Truck, 
  ArrowLeft,
  RefreshCw,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ProductImage = {
  id: string;
  src: string;
  alt: string;
};

// Example products based on the uploaded images
const products = [
  {
    id: "item1",
    name: "Blue & White Striped Shirt",
    images: [
      { id: "img1", src: "/lovable-uploads/aa16e865-ac5c-4964-827b-1e48a94e830c.png", alt: "Blue & White Striped Shirt front view" }
    ],
    price: 799,
    originalPrice: 1299,
    discount: 38,
    brand: "Allen Solly",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Blue/White"],
    description: "Premium cotton blue and white striped shirt with button-down design, perfect for casual and semi-formal occasions. Features a comfortable fit and durable fabric.",
    details: [
      "100% Premium Cotton",
      "Button-down collar",
      "Regular fit",
      "Machine washable",
      "Imported"
    ],
    reviews: [
      { id: "r1", user: "Rahul M.", rating: 5, comment: "Excellent quality shirt, very comfortable to wear." },
      { id: "r2", user: "Amit K.", rating: 4, comment: "Good fit, nice material. Slightly overpriced." }
    ],
    sku: "AS-BW-STRP-001",
    inStock: true,
    category: "Shirts",
  },
  {
    id: "item2",
    name: "Beige Cargo Pants",
    images: [
      { id: "img1", src: "/lovable-uploads/920eac41-b5e9-4653-9c43-7dcf7be9759d.png", alt: "Beige Cargo Pants front view" }
    ],
    price: 1299,
    originalPrice: 1799,
    discount: 28,
    brand: "Allen Solly",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Beige"],
    description: "Comfortable cargo pants with multiple pockets, perfect for casual outings. Made with durable cotton fabric that offers both comfort and style.",
    details: [
      "Cotton blend material",
      "Multiple pocket design",
      "Relaxed fit",
      "Button and zip closure",
      "Machine washable"
    ],
    reviews: [
      { id: "r1", user: "Vikas S.", rating: 5, comment: "Very comfortable and stylish, pockets are really useful." },
      { id: "r2", user: "Dinesh R.", rating: 5, comment: "Great quality, fits perfectly." }
    ],
    sku: "AS-BG-CRGO-002",
    inStock: true,
    category: "Pants",
  },
  {
    id: "item3",
    name: "H&M Black T-Shirt",
    images: [
      { id: "img1", src: "/lovable-uploads/4f092a71-5a61-4e93-8e47-929e67c5566c.png", alt: "H&M Black T-Shirt" }
    ],
    price: 699,
    originalPrice: 999,
    discount: 30,
    brand: "H&M",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    description: "Classic black t-shirt with a modern fit, made from soft cotton material for maximum comfort throughout the day.",
    details: [
      "100% Cotton",
      "Regular fit",
      "Crew neck",
      "Short sleeves",
      "Machine washable"
    ],
    reviews: [
      { id: "r1", user: "Rajiv T.", rating: 4, comment: "Good quality basic tee, fits well." },
      { id: "r2", user: "Suresh M.", rating: 3, comment: "Decent t-shirt, but the material could be better." }
    ],
    sku: "HM-BLK-TS-003",
    inStock: true,
    category: "T-Shirts",
  },
  {
    id: "item4",
    name: "Lakers Print Polo Shirt",
    images: [
      { id: "img1", src: "/lovable-uploads/2ffc96dc-0ade-4ae9-9f3b-db1ab25cd421.png", alt: "Lakers Print Polo Shirt" }
    ],
    price: 1199,
    originalPrice: 1599,
    discount: 25,
    brand: "M7",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Maroon/White"],
    description: "Official Lakers merchandise featuring the iconic team logo. This stylish polo shirt combines sports fandom with casual fashion.",
    details: [
      "Licensed NBA merchandise",
      "Premium cotton blend",
      "Ribbed collar and cuffs",
      "Regular fit",
      "Machine washable"
    ],
    reviews: [
      { id: "r1", user: "Karthik B.", rating: 5, comment: "Great for Lakers fans! Quality is excellent." },
      { id: "r2", user: "Mahesh L.", rating: 4, comment: "Fits well, good quality. Nice design." }
    ],
    sku: "M7-LKR-POLO-004",
    inStock: true,
    category: "Polo Shirts",
  },
  // Add other products with similar structure
];

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const product = products.find(p => p.id === productId);
  
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  
  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate('/collections')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Collections
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "You need to select a size before adding to cart",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Added to Cart",
      description: `${product.name} (Size: ${selectedSize}) has been added to your cart`,
      action: (
        <div className="flex items-center">
          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
        </div>
      ),
    });
  };
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Removed from Wishlist" : "Added to Wishlist",
      description: `${product.name} has been ${isFavorite ? "removed from" : "added to"} your wishlist`,
    });
  };
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out this amazing ${product.name} at The Fashion World!`,
        url: window.location.href,
      });
    } else {
      toast({
        title: "Sharing not supported",
        description: "Your browser doesn't support sharing.",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="content-container py-8">
          <Button 
            variant="ghost" 
            className="mb-6" 
            onClick={() => navigate('/collections')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Collections
          </Button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden h-[500px] flex items-center justify-center">
                <img
                  src={product.images[currentImage].src}
                  alt={product.images[currentImage].alt}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <div
                    key={image.id}
                    className={`cursor-pointer border-2 rounded-md overflow-hidden w-24 h-24 flex-shrink-0 ${
                      currentImage === index ? "border-black dark:border-white" : "border-transparent"
                    }`}
                    onClick={() => setCurrentImage(index)}
                  >
                    <img
                      src={image.src}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
                    <p className="text-gray-600 dark:text-gray-400">{product.brand}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" onClick={toggleFavorite}>
                      <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={handleShare}>
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mt-2">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    4.0 ({product.reviews.length} reviews)
                  </span>
                </div>
              </div>
              
              <div className="flex items-baseline space-x-3">
                <span className="text-2xl font-bold">₹{product.price}</span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-gray-500 line-through">₹{product.originalPrice}</span>
                    <Badge className="bg-green-600">
                      {product.discount}% OFF
                    </Badge>
                  </>
                )}
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-medium mb-2">Select Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      className={`h-10 w-12 p-0 ${selectedSize === size ? "bg-black text-white dark:bg-white dark:text-black" : ""}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <Badge key={color} variant="outline">
                      {color}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Quantity</h3>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    -
                  </Button>
                  <span className="w-10 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
              
              <div className="flex space-x-3 pt-4">
                <Button className="flex-1 bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200" onClick={handleAddToCart}>
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button variant="outline" className="flex-1">
                  Buy Now
                </Button>
              </div>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Truck className="h-4 w-4 mr-2" />
                  <span>Free delivery on orders above ₹499</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  <span>30-day easy returns</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <Tabs defaultValue="description">
              <TabsList className="w-full justify-start border-b mb-6">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="reviews">Reviews ({product.reviews.length})</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="px-1">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {product.description}
                </p>
              </TabsContent>
              
              <TabsContent value="details" className="px-1">
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  {product.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4">
                    <h4 className="font-medium mb-2">SKU</h4>
                    <p className="text-gray-600 dark:text-gray-400">{product.sku}</p>
                  </div>
                  <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4">
                    <h4 className="font-medium mb-2">Category</h4>
                    <p className="text-gray-600 dark:text-gray-400">{product.category}</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="px-1">
                <div className="space-y-6">
                  {product.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 dark:border-gray-700 pb-6">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{review.user}</h4>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
