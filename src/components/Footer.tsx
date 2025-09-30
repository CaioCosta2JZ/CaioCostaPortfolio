import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Redes sociais */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/CaioCosta2JZ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white/80 hover:text-white transition-smooth"
            >
              <Github size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/caio-costa2jz/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
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

          {/* Direitos autorais */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-muted-foreground">
            <p>© {new Date().getFullYear()} Caio Costa. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
