// Components
import HeroSection from './components/heroSection/HeroSection';
import Nav from './components/nav/Nav';
import ProjectsSection from './components/projects/ProjectsSection';
import AboutSection from './components/about/AboutSection';
import SkillsSection from './components/skills/SkillsSection';
import ExperienceSection from './components/experience/ExperienceSection';
import EducationSection from './components/education/EducationSection';
import CertificationsSection from './components/certifications/CertificationsSection';
import ContactSection from './components/contact/ContactSection';
import Footer from './components/footer/Footer';


function App() {

  return (
    <>
    <div className='bg-background min-h-screen grid-background'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl'>
        <div id="top">
          {/* Navigation */}
          <Nav />
          {/* Hero Section */}
          <div className='mt-4 relative'>
            <HeroSection />
          </div>
          {/* Quote Section */}
          <div className='mt-12 sm:mt-16 lg:mt-20 pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 flex justify-center items-center px-4'>
            <div className='w-full max-w-4xl relative flex flex-col items-end'>
              <blockquote className="border border-gray-500 border-t-4 relative before:content-['“'] before:absolute before:-top-2 before:left-4 before:text-3xl before:font-bold before:text-neutral-300 before:px-[4px] before:bg-background after:content-['”'] after:absolute after:-bottom-7 after:right-4 after:text-3xl 
           after:font-bold after:text-neutral-300 after:bg-background after:px-[4px] after:z-10">
                <p className='text-white p-4 sm:p-6 text-lg sm:text-xl lg:text-2xl leading-relaxed'>Man is primarily governed by passion and instinct.</p>
              </blockquote>
              <figcaption className='p-2 sm:p-3 w-fit text-white text-base sm:text-lg lg:text-xl text-right relative z-20 border-t-0 border border-gray-500'>— Muhammad Iqbal</figcaption>
            </div>
          </div>
          {/* Projects Section */}
          <ProjectsSection />
          {/* About Section */}
          <div className='mt-4 sm:mt-6 lg:mt-8'>
          <AboutSection />
          </div>
          {/* Experience Section */}
          <ExperienceSection />
          {/* Skills Section */}
          <SkillsSection />
          {/* Education Section */}
          <EducationSection />
          {/* Certifications Section */}
          <CertificationsSection />
          {/* Contact Section */}
          <ContactSection />
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
    </>
  )
}

export default App
