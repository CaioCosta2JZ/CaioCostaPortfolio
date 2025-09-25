import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  /*const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você adicionaria a lógica de envio do formulário
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Retornarei em breve!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
*/
  return (
    <section id="contato" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            Contato
          </h2>
          
          <div className="grid md:grid-cols-1 gap-12">
            <Card className="card-gradient shadow-elegant p-8">
              <h3 className="text-2xl font-bold mb-6">Vamos conversar!</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Estou sempre aberto a novas oportunidades e projetos interessantes. 
                Entre em contato comigo através dos canais abaixo.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">caiocosta.profissional2007@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-muted-foreground"> +55 (11) 96413-1118</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Localização</p>
                    <p className="text-muted-foreground">Itu, SP - Brasil</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <a href="https://github.com/CaioCosta2JZ" className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-smooth">
                  <Github className="text-primary" size={20} />
                </a>
                <a href="https://www.linkedin.com/in/caio-costa2jz/" className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-smooth">
                  <Linkedin className="text-primary" size={20} />
                </a>
              </div>
            </Card>
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;