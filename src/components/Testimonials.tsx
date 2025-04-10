
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Amit Kumar",
    location: "Amarpur",
    rating: 5,
    comment: "The Fashion World has transformed my style. Their collection is top-notch and the staff is extremely helpful. I always find what I'm looking for here.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Rahul Singh",
    location: "Bhagalpur",
    rating: 5,
    comment: "Finally a store that understands men's fashion! Great quality products and reasonable prices. Will definitely keep coming back.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: 3,
    name: "Priya Sharma",
    location: "Amarpur",
    rating: 4,
    comment: "Excellent collection of watches and accessories. The staff is knowledgeable and helped me pick the perfect gift for my husband.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-white dark:bg-fashion-dark">
      <div className="content-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-fashion-mid-gray dark:text-gray-400 max-w-3xl mx-auto">
            We take pride in providing exceptional service and products that our customers love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="card-hover border-0 shadow-md dark:bg-fashion-dark-gray/80">
              <CardContent className="p-8">
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-fashion-mid-gray dark:text-gray-400 text-sm">{testimonial.location}</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="flex-grow text-fashion-mid-gray dark:text-gray-300 italic">"{testimonial.comment}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
