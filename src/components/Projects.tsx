import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

// importa imagens locais (ajuste o caminho se necessário)
import fotoZeno from "../../assets/fotoZeno.png";
import fotoUbetter from "../../assets/fotoUbetter.png";
import fotoBombhero from "../../assets/fotoBombhero.png";

const Projects = () => {
  const projects = [
    {
      title: "Zeno: Plataforma ERP",
      description: "TCC do curso técnico de Desenvolvimento de sistemas. Zeno é um sistema ERP projetado para Microempreendedores, com gestão de estoque, fluxo de caixa e mais.",
      image: fotoZeno, // aqui virou o import
      technologies: ["React", "Node.js", "Supabase"],
      github: "#",
      demo: "#"
    },
    {
      title: "UBetter: Aplicativo de bem-estar",
      description: "Aplicativo de incentivo a hábitos saudáveis e metas de bem-estar.",
      image: fotoUbetter,
      technologies: ["React Native", "Node.js", "Firebase"],
      github: "#",
      demo: "#"
    },
    {
      title: "BOMBHERO: Jogo de estratégia",
      description: "Dashboard interativo para visualização de dados meteorológicos com gráficos e previsões.",
      image: fotoBombhero,
      technologies: ["HTML5", "CSS3", "JavaScript", "JQuery"],
      github: "#",
      demo: "#"
    },
    {
      title: "CPSHelp: Sistema de chamados",
      description: "Aplicativo Windows Forms desenvolvido para auxiliares docentes.",
      image: "🔨",
      technologies: ["C#", "Windos Forms", "MySQL"],
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
                    {/* Se for string (emoji), mostra texto. Se for import de imagem, mostra <img /> */}
                    {typeof project.image === "string" && project.image.startsWith("🛒") || project.image.length <= 3 ? (
                      <div className="text-6xl">{project.image}</div>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-16 h-18 object-contain"
                      />
                    )}
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
