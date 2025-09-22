import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2024",
      description: "Certificação em desenvolvimento de aplicações na nuvem AWS",
      skills: ["AWS", "Cloud", "DevOps"]
    },
    {
      name: "React Developer Certificate",
      issuer: "Meta",
      date: "2023",
      description: "Certificação avançada em desenvolvimento React e JavaScript",
      skills: ["React", "JavaScript", "Frontend"]
    },
    {
      name: "Full Stack Web Development",
      issuer: "Coursera",
      date: "2023",
      description: "Curso completo de desenvolvimento web full stack",
      skills: ["Node.js", "MongoDB", "Express"]
    },
    {
      name: "Python for Data Science",
      issuer: "DataCamp",
      date: "2022",
      description: "Certificação em análise de dados e machine learning com Python",
      skills: ["Python", "Data Science", "ML"]
    }
  ];

  return (
    <section id="certificados" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
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