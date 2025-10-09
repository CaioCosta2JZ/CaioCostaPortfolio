import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Redes sociais */}
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
            <a
              href="https://github.com/CaioCosta2JZ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 text-white/80 hover:text-white transition-smooth"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/caio-costa2jz/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-white/80 hover:text-white transition-smooth"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=caiocosta.profissional2007@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="E-mail"
              className="p-2 text-white/80 hover:text-white transition-smooth"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>

          {/* Direitos autorais */}
          <div className="text-sm sm:text-base text-muted-foreground px-4">
            <p>© {new Date().getFullYear()} Caio Costa. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
