import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="scroll-smooth">
      <Header />
      <Hero />
      <About />
      <Education />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
