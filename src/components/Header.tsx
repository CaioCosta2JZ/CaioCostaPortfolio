import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">
            Portfólio
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {["sobre", "formacao", "certificados", "projetos", "contato"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-muted-foreground hover:text-primary transition-smooth capitalize"
              >
                {item === "formacao" ? "Formação" : item}
              </button>
            ))}
          </div>

          <Button
            onClick={() => scrollToSection("contato")}
            className="hero-gradient text-primary-foreground hover:shadow-glow transition-smooth"
          >
            Contato
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;