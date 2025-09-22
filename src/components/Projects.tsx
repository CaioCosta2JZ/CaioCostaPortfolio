import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos e gestão de produtos.",
      image: "🛒",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "Aplicativo de gerenciamento de tarefas com colaboração em tempo real e notificações.",
      image: "📝",
      technologies: ["Vue.js", "Express", "Socket.io", "MongoDB"],
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard interativo para visualização de dados meteorológicos com gráficos e previsões.",
      image: "🌤️",
      technologies: ["React", "D3.js", "API REST", "Chart.js"],
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      description: "Site pessoal responsivo com design moderno e animações suaves para apresentação profissional.",
      image: "💼",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projetos" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            Projetos
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="card-gradient shadow-elegant overflow-hidden hover:shadow-glow transition-smooth group">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{project.image}</div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      <Github size={16} />
                      Código
                    </Button>
                    <Button
                      size="sm"
                      className="flex items-center gap-2 hero-gradient text-primary-foreground hover:shadow-glow transition-smooth"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              Ver Mais Projetos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;