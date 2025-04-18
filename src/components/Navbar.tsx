import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Instagram, Facebook } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LoginSignup from "./LoginSignup";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "/collections" },
    { name: "Blog", href: "/blog" },
    { name: "Store Location", href: "/store-location" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleNavigate = (href: string) => {
    if (href.startsWith('#') && location.pathname === '/') {
      // If it's a hash link on the homepage, use hash navigation
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    } else if (href.includes('#') && !href.startsWith('#')) {
      // If it's a hash link on another page, navigate to that page
      const [path, hash] = href.split('#');
      navigate(path);
      setTimeout(() => {
        document.querySelector(`#${hash}`)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Regular navigation
      navigate(href);
    }
    setIsMobileMenuOpen(false);
  };

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
          <a href="/" className="flex items-center">
            <h1 className="text-2xl font-bold font-playfair tracking-wider text-fashion-dark-gray dark:text-white whitespace-nowrap">
              THE FASHION WORLD
            </h1>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavigate(link.href);
              }}
              className={`text-fashion-dark-gray dark:text-white text-sm hover:text-black dark:hover:text-white transition-colors hover-underline ${
                location.pathname === link.href ? "font-semibold" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center space-x-2">
          <a 
            href="https://www.instagram.com/the_faison_world?utm_source=qr&igsh=MTB1MmwwdGNkd2Z6YQ==" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-black dark:hover:text-white transition-colors mr-2"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors mr-4">
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
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate(link.href);
                }}
                className={`text-fashion-dark-gray dark:text-white hover:text-black dark:hover:text-white transition-colors py-2 border-b border-gray-100 dark:border-gray-800 ${
                  location.pathname === link.href ? "font-semibold" : ""
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://www.instagram.com/the_faison_world?utm_source=qr&igsh=MTB1MmwwdGNkd2Z6YQ==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-fashion-dark-gray dark:text-white hover:text-black dark:hover:text-white transition-colors py-2 border-b border-gray-100 dark:border-gray-800 flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Instagram className="h-5 w-5 mr-2" />
              Follow on Instagram
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
