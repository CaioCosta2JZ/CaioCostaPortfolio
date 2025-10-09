import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Habilitação profissional em Técnico em Desenvolvimento de sistemas",
      institution: "ETEC Martinho di Ciero",
      period: "2023 - 2025",
      description: "Formação técnica com foco prático e teórico no ciclo completo de desenvolvimento de software — desde o design da interface até testes de qualidade (QA). A grade curricular abordou desde lógica e algoritmos até segurança da informação, web, mobile e banco de dados."
    }
  ];

  return (
    <section id="formacao" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-5xl font-bold text-center mb-16 text-gradient">
            Formação Acadêmica
          </h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="card-gradient shadow-elegant p-4 sm:p-6 md:p-8 hover:shadow-glow transition-smooth">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="p-3 bg-primary/10 rounded-full self-center sm:self-start">
                    <GraduationCap className="text-primary" size={24} />
                  </div>

                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-col gap-2 mb-4">
                      <h3 className="text-xl sm:text-2xl font-bold">{edu.degree}</h3>
                      <p className="text-lg sm:text-xl text-primary font-medium">{edu.institution}</p>
                      <div className="flex items-center justify-center sm:justify-start gap-2 text-muted-foreground">
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