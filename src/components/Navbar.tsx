
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Instagram, Facebook } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LoginSignup from "./LoginSignup";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Men", href: "#men" },
    { name: "Women", href: "#women" },
    { name: "Accessories", href: "#accessories" },
    { name: "Footwear", href: "#footwear" },
    { name: "Lifestyle", href: "#lifestyle" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-fashion-dark/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="content-container flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <h1 className="text-2xl font-bold font-playfair tracking-wider text-fashion-dark-gray dark:text-white">
              THE FASHION <span className="text-fashion-royal-blue">WORLD</span>
            </h1>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-fashion-dark-gray dark:text-white text-sm hover:text-fashion-royal-blue dark:hover:text-fashion-royal-blue transition-colors hover-underline"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center space-x-2">
          <a href="#" className="hover:text-fashion-royal-blue transition-colors mr-2">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-fashion-royal-blue transition-colors mr-4">
            <Facebook className="h-5 w-5" />
          </a>
          <LoginSignup />
          <ThemeToggle />
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="ml-2 p-2 rounded-md lg:hidden"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-fashion-dark shadow-xl p-4 absolute top-full left-0 right-0 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-fashion-dark-gray dark:text-white hover:text-fashion-royal-blue dark:hover:text-fashion-royal-blue transition-colors py-2 border-b border-gray-100 dark:border-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
