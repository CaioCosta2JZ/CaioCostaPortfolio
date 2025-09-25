import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative">
      <div className="container mx-auto px-10 text-primary-foreground">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Imagem à esquerda */}
          <div className="flex justify-center md:justify-end">
            <img
              src="../../assets/fotoMinhav2.png" // Coloque sua foto dentro de /public
              alt="Caio Costa"
              className="w-96 h-96 md:w-128 md:h-128 rounded-full object-cover shadow-elegant"
            />
          </div>

          {/* Texto à direita */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Olá, eu sou
              <span className="block text-5xl md:text-8xl mt-2">
                Caio Costa
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto md:mx-0">
              Desenvolvedor Full Stack | Engenheiro de Cibersegurança
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
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

            {/* Links sociais */}
            <div className="flex justify-center md:justify-start space-x-6 mb-12">
              <a
                href="https://github.com/CaioCosta2JZ"
                className="text-white/80 hover:text-white transition-smooth"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/caio-costa2jz/"
                className="text-white/80 hover:text-white transition-smooth"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:caiocosta.profissional2007@gmail.com"
                className="text-white/80 hover:text-white transition-smooth"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Botão para rolar */}
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
