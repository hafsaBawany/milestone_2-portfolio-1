import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default Home;
