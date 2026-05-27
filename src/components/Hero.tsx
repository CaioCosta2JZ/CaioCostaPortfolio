import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import fotoMinhav2 from "../../public/fotoMinhav3.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center hero-gradient relative pt-24 md:pt-0">
      <div className="container mx-auto px-10 text-primary-foreground flex-1 flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Imagem à esquerda */}
          <div className="flex justify-center md:justify-end">
            <img
              src={fotoMinhav2} // Coloque sua foto dentro de /public
              alt="Caio Costa"
              className="block w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover shadow-elegant"
            />
          </div>

          {/* Texto à direita */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Olá, eu sou
              <span className="block text-4xl sm:text-6xl md:text-8xl mt-2">
                Caio Costa
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto md:mx-0">
              Desenvolvedor Full Stack | Profissional em Cibersegurança
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
                href="https://mail.google.com/mail/?view=cm&fs=1&to=caiocosta.profissional2007@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="E-mail"
                className="text-white/80 hover:text-white transition-smooth"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Botão para rolar - agora dentro do fluxo */}
      <div className="mt-8 mb-6">
        <button
          onClick={() => scrollToSection("sobre")}
          className="text-white/80 hover:text-white transition-smooth animate-bounce"
        >
          <ArrowDown size={28} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
