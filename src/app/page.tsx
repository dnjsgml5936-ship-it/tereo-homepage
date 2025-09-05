import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServiceCards from '@/components/ServiceCards';
import AboutSection from '@/components/AboutSection';
import ProjectManager from '@/components/ProjectManager';
import BranchLocations from '@/components/BranchLocations';
import MediaSection from '@/components/MediaSection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function Home() {
  return (
    <>
      <Header transparent />
      <main>
        <HeroSection />
        <ServiceCards />
        <AboutSection />
        <ProjectManager />
        <BranchLocations />
        <MediaSection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
