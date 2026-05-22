import Navbar from '@/components/main/Navbar';
import Hero from '@/components/main/Hero';
import AboutMe from '@/components/main/Aboutme';
import Skills from '@/components/main/Skills';
import Projects from '@/components/main/Projects';
import ContactForm from '@/components/main/Contactform';
import Footer from '@/components/main/Footer';
import StarBackground from '@/components/main/StarBackground';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark relative">
      <StarBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
}
