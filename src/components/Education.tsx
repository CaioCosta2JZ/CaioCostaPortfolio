import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bacharelado em Ciência da Computação",
      institution: "Universidade Federal",
      period: "2020 - 2024",
      description: "Formação sólida em algoritmos, estruturas de dados, engenharia de software e desenvolvimento de sistemas."
    },
    {
      degree: "Curso Técnico em Informática",
      institution: "Instituto Técnico",
      period: "2018 - 2020",
      description: "Base fundamental em programação, banco de dados e desenvolvimento web."
    }
  ];

  return (
    <section id="formacao" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            Formação Acadêmica
          </h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="card-gradient shadow-elegant p-8 hover:shadow-glow transition-smooth">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                        <p className="text-xl text-primary font-medium">{edu.institution}</p>
                      </div>
                      
                      <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
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

export default Education;