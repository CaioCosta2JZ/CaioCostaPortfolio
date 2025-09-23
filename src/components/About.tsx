import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            Sobre Mim
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Profissional com sólida base em Desenvolvimento Full Stack e Cibersegurança. Minha experiência em abrange desde a Análise e Projeto de Sistemas até Testes e Qualidade de Software (QA), com foco em entregar soluções completas e de alta performance, além de garantir a segurança dos sistemas construídos. Sou proativo na busca por otimizações, eficaz na execução de tarefas e resiliente para enfrentar desafios, garantindo a entrega de projetos inovadores em ambientes de desenvolvimento Web, Mobile e Desktop.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                
              </p>
              
              <div className="flex flex-wrap gap-3 mt-8">
                {["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Docker"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <Card className="card-gradient shadow-elegant p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">👨‍💻</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Desenvolvedor Full Stack</h3>
                  <h3 className="text-2xl font-bold mb-2">Profissional em Cibersegurança</h3>
                  <p className="text-muted-foreground">
                    Focado em entregar qualidade, performance e segurança.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {[
                    { label: "Projetos Concluídos", value: "6+" },
                    { label: "Anos de Experiência com projetos acadêmicos", value: "2+" },
                    { label: "Tecnologias", value: "10+" }
                  ].map((stat) => (
                    <div key={stat.label} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{stat.label}</span>
                      <span className="font-bold text-primary">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;