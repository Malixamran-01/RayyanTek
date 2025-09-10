import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: "Home", path: createPageUrl("Home") },
    { name: "About", path: createPageUrl("About") },
    { name: "Services", path: createPageUrl("Services") },
    { name: "Projects", path: createPageUrl("Projects") },
    { name: "Pricing", path: createPageUrl("Pricing") },
    { name: "Contact", path: createPageUrl("Contact") }
  ];

  const isActive = (path) => {
    if (path === createPageUrl("Home")) {
      return location.pathname === "/" || location.pathname === path;
    }
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className={`fixed z-50 transition-all duration-200 ease-out ${
        isScrolled 
          ? 'top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[1200px] bg-black/85 backdrop-blur-[6px] border border-[#bfa45a]/20 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] px-8 py-2' 
          : 'top-0 left-0 w-full bg-black/95 backdrop-blur-[8px] border-b border-[#bfa45a]/20 px-4 sm:px-6 lg:px-8 py-3'
      }`}>
        <div className={`flex justify-between items-center transition-all duration-200 ${
          isScrolled ? 'h-12' : 'h-16'
        }`}>
          {/* Logo */}
          <Link to={createPageUrl("Home")} className="flex items-center justify-center ml-0">
            <img src={logo} alt="RayyanTek Logo" className="h-25 w-25"/>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-base font-semibold transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-[#bfa45a]"
                    : "text-[#F5F5F5] hover:text-[#bfa45a]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-[#F5F5F5]">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <Link to={createPageUrl("Contact")}>
              <Button className="bg-[#bfa45a] hover:bg-[#bfa45a]/90 text-black font-semibold px-4 py-2 rounded-lg transition-all duration-300">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[#bfa45a]/20 text-[#F5F5F5] transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#bfa45a]/20">
            <div className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 ${
                    isActive(item.path)
                      ? "bg-[#bfa45a]/20 text-[#bfa45a]"
                      : "text-[#F5F5F5] hover:bg-[#bfa45a]/10 hover:text-[#bfa45a]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4 border-t border-[#bfa45a]/20">
                <Link to={createPageUrl("Contact")} onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-[#bfa45a] hover:bg-[#bfa45a]/90 text-black font-semibold px-4 py-2 rounded-lg transition-all duration-300">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-200 ${
        isScrolled ? 'pt-16' : 'pt-20'
      }`}>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#2a0d0f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-[#bfa45a] to-[#2a0d0f] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <span className="text-xl font-bold text-[#bfa45a]">Rayyan Tek</span>
              </div>
              <p className="text-[#bfa45a]/80 text-sm leading-relaxed">
                Building scalable web solutions and providing strategic IT consultancy to transform your business.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#bfa45a]">Quick Links</h3>
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block text-[#bfa45a]/80 hover:text-[#bfa45a] text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#bfa45a]">Services</h3>
              <div className="space-y-2 text-sm text-[#bfa45a]/80">
                <p>Web Development</p>
                <p>Mobile Apps</p>
                <p>IT Consulting</p>
                <p>UI/UX Design</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#bfa45a]">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-[#bfa45a]/80">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-[#bfa45a]/80">
                  <Mail className="w-4 h-4" />
                  <span>hello@rayyantek.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#bfa45a]/20 mt-8 pt-8 text-center text-sm text-[#bfa45a]/80">
            <p>&copy; 2025 RayyanTek. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}