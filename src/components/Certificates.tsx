import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      name: "Nivelamento Hackers do Bem - Formação em Cibersegurança",
      issuer: "SENAI",
      date: "2025",
      description: "Curso sobre Introdução à cibersegurança, Hardware, Redes, Sistemas operacionais Windows e Linux, Lógica de programação, e Desenvolvimento de scripts voltados à área de segurança da informação.",
      skills: [ "Redes de computadores" , "Serviços de rede" , "Linux" , "Lógica de programação" , "Programação (computação)" , "Hardware de computador" , "IPv6" , "IPv4" , "Microsoft Windows" , "Desenvolvimento de scripts" , "Cibersegurança"]
    },
    {
      name: "Robótica - micro:bit básico",
      issuer: "SESI São Paulo",
      date: "2022",
      description: "Conceitos básicos de programação, automação e princípios da robótica, Pensamento científico, crítico e criativo; Pensamento computacional (raciocínio lógico, lógica de programação); Resolução de situação-problema; Cultura Maker e projetos de autoria; Trabalho em equipe (colaboração, respeito, empatia, etc).",
      skills: ["Lógica de programação", "Arduíno", "micro:bit"]
    },
    {
      name: "Imersão Cloud DevOps",
      issuer: "Coursera",
      date: "2023",
      description: "Curso de aproximadamente 2 horas sobre conceitos fundamentais na área de DevOps e noção básica sobre Google Cloud.",
      skills: ["Google Cloud", "DevOps", "Docker"]
    },
    {
      name: "Imersão Dados com Python",
      issuer: "Meta",
      date: "2025",
      description: "Imersão sobre manipulação de dados com a linguagem de programação Python, usando bibliotecas como Pandas e Plotly. 4 horas de curso",
      skills: ["Python", "Manipulação de dados", "Plotly", "Pandas (Software)", "Análise de dados"]
    }
  ];

  return (
    <section id="certificados" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            Certificados
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <Card key={index} className="card-gradient shadow-elegant p-6 hover:shadow-glow transition-smooth group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-smooth">
                    <Award className="text-primary" size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{cert.name}</h3>
                        <p className="text-primary font-medium">{cert.issuer}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{cert.date}</span>
                        <ExternalLink size={16} className="text-muted-foreground hover:text-primary cursor-pointer" />
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {cert.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;