import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative">
      <div className="container mx-auto px-6 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Olá, eu sou
            <span className="block text-6xl md:text-8xl mt-2">
              Seu Nome
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e experiências digitais excepcionais
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection("projetos")}
              variant="secondary"
              className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-smooth"
            >
              Ver Projetos
            </Button>
            <Button
              onClick={() => scrollToSection("contato")}
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 transition-smooth"
            >
              Entre em Contato
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="text-white/80 hover:text-white transition-smooth">
              <Github size={24} />
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-smooth">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-smooth">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => scrollToSection("sobre")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-smooth animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;