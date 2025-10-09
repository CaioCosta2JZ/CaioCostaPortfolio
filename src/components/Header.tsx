import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-elegant" : "bg-transparent"
        }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl sm:text-2xl font-bold ">
            Caio Costa
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            {["sobre", "formacao", "certificados", "projetos", "contato"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text hover:text-primary transition-smooth capitalize"
              >
                {item === "formacao" ? "Formação" : item}
              </button>
            ))}
          </div>

          {/* Contact button - visible only on desktop */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contato")}
              className="hero-gradient text-primary-foreground hover:shadow-glow transition-smooth"
            >
              Contato
            </Button>
          </div>

          {/* Mobile menu button - visible only on mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-background/10 rounded-md"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md p-4 md:hidden">
            <div className="flex flex-col space-y-4">
              {["sobre", "formacao", "certificados", "projetos", "contato"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left py-2 hover:text-primary transition-smooth capitalize"
                >
                  {item === "formacao" ? "Formação" : item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;