import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 text-gradient">
            Sobre Mim
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Profissional com sólida base em Desenvolvimento Full Stack e Cibersegurança, além de inglês avançado.
                Minha formação, certificados e projetos abrangem desde a Análise e Projeto de Sistemas, Testes e Qualidade de Software (QA),
                até Segurança da Informação e Hacking Ético.
                Tenho foco em entregar soluções completas e de alta performance.
                Sou proativo na busca por otimizações, eficaz na execução de tarefas e disposto a enfrentar novos desafios,
                e procuro desenvolver soluções de qualidade em ambientes de desenvolvimento Web, Mobile e Desktop.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">

              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {["HTML", "CSS", "JS", "C#", "Python", "PHP", "React Native", "MySQL", "Linux", "Kali Linux"].map((tech) => (
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