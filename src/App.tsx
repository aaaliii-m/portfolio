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
      <div className='container lg:w-[75%] mx-auto px-4 py-8'>
        <div id="top">
          {/* Navigation */}
          <Nav />
          {/* Hero Section */}
          <div className='mt-4 relative'>
            <HeroSection />
          </div>
          {/* Quote Section */}
          <div className='mt-20 pt-20 pb-8 flex justify-center items-center'>
            <div className='w-auto relative flex flex-col items-end'>
              <blockquote className="border border-gray-500 border-t-4 relative before:content-['“'] before:absolute before:-top-2 before:left-4 before:text-3xl before:font-bold before:text-neutral-300 before:px-[4px] before:bg-background after:content-['”'] after:absolute after:-bottom-7 after:right-4 after:text-3xl 
           after:font-bold after:text-neutral-300 after:bg-background after:px-[4px] after:z-10">
                <p className='text-white p-6 text-2xl'>Man is primarily governed by passion and instinct.</p>
              </blockquote>
              <figcaption className='p-3 w-fit text-white text-xl text-right relative z-20 border-t-0 border border-gray-500'>— Muhammad Iqbal</figcaption>
            </div>
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
