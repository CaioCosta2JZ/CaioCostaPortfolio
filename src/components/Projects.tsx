import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

// importa imagens locais (ajuste o caminho se necessário)
import fotoZeno from "../../public/fotoZeno.png";
import fotoUbetter from "../../public/fotoUBetter.png";
import fotoBombhero from "../../public/fotoBombhero.png";

const Projects = () => {
  const projects = [
    {
      title: "Zeno: Plataforma ERP",
      description:
        "TCC do curso técnico de Desenvolvimento de sistemas. Zeno é um sistema ERP projetado para Microempreendedores, com gestão de estoque, fluxo de caixa e mais.",
      image: fotoZeno,
      technologies: ["React", "Node.js", "Supabase"],
      github: "https://github.com/TCC-Zeno/Zeno/",
      demo: "https://tcc-zeno.onrender.com/",
    },
    {
      title: "UBetter: Aplicativo de bem-estar",
      description:
        "Aplicativo de incentivo a hábitos saudáveis e metas de bem-estar.",
      image: fotoUbetter,
      technologies: ["React Native", "Node.js", "Firebase"],
      github: "https://github.com/CaioCosta2JZ/UBetter",
      demo: "https://github.com/CaioCosta2JZ/UBetter",
    },
    {
      title: "BOMBHERO: Jogo de estratégia",
      description:
        "Jogo Web desafiador e emocionante que colocará suas habilidades cognitivas à prova.",
      image: fotoBombhero,
      technologies: ["HTML5", "CSS3", "JavaScript", "JQuery"],
      github: "https://github.com/CarlosMattei/BOMBHERO",
      demo: "https://bombhero.vercel.app/pages/paginaInicial.html",
    },
    {
      title: "CPSHelp: Sistema de chamados",
      description: "Aplicativo Windows Forms desenvolvido para auxiliares docentes.",
      image: "🔨",
      technologies: ["C#", "Windows Forms", "MySQL"],
      github: "https://github.com/CarlosMattei/sistema-CPS",
      demo: "https://github.com/CarlosMattei/sistema-CPS",
    },
  ];

  return (
    <section id="projetos" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 text-gradient">
            Projetos
          </h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="card-gradient shadow-elegant overflow-hidden hover:shadow-glow transition-smooth group"
              >
                <div className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4">
                    {typeof project.image === "string" &&
                      project.image.length <= 3 ? (
                      <div className="text-4xl sm:text-6xl">{project.image}</div>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                      />
                    )}
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                        Código
                      </a>
                    </Button>

                    <Button
                      asChild
                      size="sm"
                      className="flex items-center gap-2 hero-gradient text-primary-foreground hover:shadow-glow transition-smooth"
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
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
