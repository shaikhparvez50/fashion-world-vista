
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MapPin, Phone, Clock, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const StoreLocation = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="bg-black text-white py-16">
          <div className="content-container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Visit Our Store</h1>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Experience the premium collection of men's fashion at our flagship store in Amarpur, Bihar.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-300 mx-auto mt-8"></div>
          </div>
        </section>

        <section className="py-16">
          <div className="content-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden h-[400px] lg:h-full">
                  {/* Embed Google Maps */}
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14516.732617658738!2d86.20052143775351!3d24.61665095264915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f177e4ca015555%3A0x9b2751d4eacc76e0!2sAmarpur%2C%20Bihar%20812002!5e0!3m2!1sen!2sin!4v1712841761891!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div>
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-4">The Fashion World</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Your destination for premium men's fashion in Amarpur, Bihar.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-fashion-royal-blue mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Address:</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Main Road, Near Bus Stand<br />
                          Amarpur, Bihar 812002<br />
                          India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-fashion-royal-blue mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Phone:</h3>
                        <p className="text-gray-600 dark:text-gray-400">+91 9546482080</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-fashion-royal-blue mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Email:</h3>
                        <p className="text-gray-600 dark:text-gray-400">contact@thefashionworld.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-fashion-royal-blue mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Store Hours:</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Monday - Saturday: 10:00 AM - 8:00 PM<br />
                          Sunday: 11:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="flex flex-col space-y-3">
                    <Button 
                      className="w-full"
                      onClick={() => window.open("https://www.google.com/maps/dir//Amarpur,+Bihar+812002/@24.616651,86.2005214,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39f177e4ca015555:0x9b2751d4eacc76e0!2m2!1d86.2005214!2d24.616651", "_blank")}
                    >
                      Get Directions
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open("tel:+919546482080")}
                    >
                      Call Store
                      <Phone className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100 dark:bg-gray-900">
          <div className="content-container">
            <h2 className="text-3xl font-bold mb-12 text-center">What's In Store</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3">Premium Brands</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Browse our collection of top brands including Kochi Jordan, Allen Solly, Nike, Puma, and more.
                </p>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3">Expert Styling</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our fashion consultants are available to help you find the perfect outfit for any occasion.
                </p>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3">Custom Tailoring</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Get your clothes perfectly fitted with our in-store tailoring services.
                </p>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3">Exclusive Deals</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Visit our store to access exclusive in-store promotions and discounts not available online.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="content-container">
            <div className="bg-black text-white rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-4">Visit Us Today</h2>
                  <p className="mb-6">
                    Experience our premium collection in person. Our staff is ready to assist you in finding the perfect style that suits your personality.
                  </p>
                  <Button 
                    className="bg-white text-black hover:bg-gray-200 w-fit"
                    onClick={() => window.open("tel:+919546482080")}
                  >
                    Contact Us
                  </Button>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Store Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-yellow-500 mr-3"></div>
                      <span>Wide range of premium men's fashion</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-yellow-500 mr-3"></div>
                      <span>Comfortable trial rooms</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-yellow-500 mr-3"></div>
                      <span>Knowledgeable staff</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-yellow-500 mr-3"></div>
                      <span>Easy payment options</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-yellow-500 mr-3"></div>
                      <span>Lifestyle accessories</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StoreLocation;
