
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you soon!",
    });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="section-padding bg-white dark:bg-fashion-dark">
      <div className="content-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-fashion-mid-gray dark:text-gray-400 max-w-3xl mx-auto">
            Have questions or want to visit our store? Get in touch with us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="border-0 shadow-md overflow-hidden h-full dark:bg-fashion-dark-gray/80">
              <div className="h-64 sm:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14420.921643427494!2d86.91130437553157!3d25.041523595845712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f21fcc2992f3d3%3A0x4f6b54c309b20b99!2sAmarpur%2C%20Bihar%20813101!5e0!3m2!1sen!2sin!4v1711729021600!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Store Location"
                ></iframe>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Visit Our Store</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-fashion-royal-blue mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Address:</p>
                      <p className="text-fashion-mid-gray dark:text-gray-400">Main Road, Near Bus Stand, Amarpur, Bihar 813101</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-fashion-royal-blue mr-3" />
                    <div>
                      <p className="font-medium">Phone:</p>
                      <p className="text-fashion-mid-gray dark:text-gray-400">+91 9546482080</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-fashion-royal-blue mr-3" />
                    <div>
                      <p className="font-medium">Email:</p>
                      <p className="text-fashion-mid-gray dark:text-gray-400">contact@thefashionworld.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Store Hours:</h4>
                  <ul className="text-fashion-mid-gray dark:text-gray-400 space-y-1">
                    <li className="flex justify-between">
                      <span>Monday - Saturday:</span>
                      <span>10:00 AM - 8:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>11:00 AM - 6:00 PM</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-0 shadow-md h-full dark:bg-fashion-dark-gray/80">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email"
                      required
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="block font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Your Message"
                      rows={5}
                      required
                      className="w-full"
                    />
                  </div>
                  <Button type="submit" className="btn-primary w-full">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
