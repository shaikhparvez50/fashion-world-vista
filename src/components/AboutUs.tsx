
import { ShieldCheck, Clock, Map } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-fashion-light-gray dark:bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-fashion-royal-blue/5 to-transparent z-0"></div>
      <div className="content-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2 animate-fade-right">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?q=80&w=1000&auto=format&fit=crop"
                alt="The Fashion World Store"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-fashion-royal-blue text-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="font-semibold">Established 2010</p>
                <p className="text-sm">Amarpur, Bihar</p>
              </div>
            </div>
          </div>
          
          <div className="lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About The Fashion World</h2>
            <p className="text-fashion-mid-gray dark:text-gray-300 mb-6 leading-relaxed">
              The Fashion World is Amarpur's premier fashion destination, established in 2010 with a vision to bring high-quality fashion to our community. We curate collections from leading national and international brands, focusing on the latest trends and timeless classics.
            </p>
            <p className="text-fashion-mid-gray dark:text-gray-300 mb-8 leading-relaxed">
              Our store in Amarpur, Bihar serves customers from across the region, offering personalized styling advice and a welcoming shopping environment. We believe that great style should be accessible to everyone, and our knowledgeable team is always ready to help you find the perfect look.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-fashion-royal-blue/10 dark:bg-fashion-royal-blue/20 p-3 rounded-full mb-4">
                  <ShieldCheck className="h-6 w-6 text-fashion-royal-blue" />
                </div>
                <h3 className="font-semibold mb-2">Quality Guarantee</h3>
                <p className="text-sm text-fashion-mid-gray dark:text-gray-400">We source only the finest products from trusted brands</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-fashion-royal-blue/10 dark:bg-fashion-royal-blue/20 p-3 rounded-full mb-4">
                  <Clock className="h-6 w-6 text-fashion-royal-blue" />
                </div>
                <h3 className="font-semibold mb-2">Experienced Team</h3>
                <p className="text-sm text-fashion-mid-gray dark:text-gray-400">Over a decade of fashion expertise</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-fashion-royal-blue/10 dark:bg-fashion-royal-blue/20 p-3 rounded-full mb-4">
                  <Map className="h-6 w-6 text-fashion-royal-blue" />
                </div>
                <h3 className="font-semibold mb-2">Local Pride</h3>
                <p className="text-sm text-fashion-mid-gray dark:text-gray-400">Proudly serving Amarpur and surrounding areas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
