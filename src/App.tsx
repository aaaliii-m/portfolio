// Components
import HeroSection from './components/heroSection/HeroSection';
import Nav from './components/nav/Nav';
import AboutSection from './components/about/AboutSection';
import SkillsSection from './components/skills/SkillsSection';
import ExperienceSection from './components/experience/ExperienceSection';
import EducationSection from './components/education/EducationSection';
import ContactSection from './components/contact/ContactSection';


function App() {

  return (
    <>
    <div className='bg-background min-h-screen grid-background'>
      <div className='max-w-5xl mx-auto px-4 py-8'>
        <div id="top">
          {/* Navigation */}
          <Nav />
          {/* Hero Section */}
          <div className='mt-4'>
            <HeroSection />
          </div>
          {/* About Section */}
          <div className='m-4 md:mt-8'>
          <AboutSection />
          </div>
          {/* Skills Section */}
          <SkillsSection />
          {/* Experience Section */}
          <ExperienceSection />
          {/* Education Section */}
          <EducationSection />
          {/* Contact Section */}
          <ContactSection />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
