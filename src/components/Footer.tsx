import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="#"
              className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-muted-foreground">
            <p className="flex items-center gap-2">
              Feito com <Heart className="text-red-500" size={16} fill="currentColor" /> e muito café
            </p>
            <span className="hidden md:block">•</span>
            <p>© 2024 Seu Nome. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;