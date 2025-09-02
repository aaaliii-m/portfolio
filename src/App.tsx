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
import freePalestine from '../public/img/Free Palestine.svg';


function App() {

    return (
        <>
            <div className='bg-background min-h-screen grid-background relative'>
                <div className="flex w-full h-[45px] bg-green-700/20 absolute top-0 left-0 z-0 justify-center">
                    <img src={freePalestine} alt="Free Palestine" title='free palestine'
                         className='w-[180px] h-auto object-fit'/>
                </div>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl'>
                    <div id="top">
                        {/* Navigation */}
                        <Nav/>
                        {/* Hero Section */}
                        <div className='md:pt-8 xl:pt-16 relative'>
                            <HeroSection/>
                        </div>
                        {/* Quote Section */}
                        <div className='mt-12 pt-12 pb-6 sm:pb-8 flex justify-center items-center px-4'>
                            <div className='w-fit max-w-4xl relative flex flex-col items-center'>
                                <blockquote className="border border-gray-500 border-t-4 relative before:content-['“'] before:absolute before:-top-3 before:md:-top-2 before:left-4 before:text-xl before:md:text-2xl before:font-bold before:text-neutral-300 before:px-[4px] before:bg-background after:content-['”'] after:absolute after:md:-bottom-6 after:-bottom-5 after:right-4 after:text-xl after:md:text-2xl
           after:font-bold after:text-neutral-300 after:bg-background after:px-[4px] after:z-10">
                                    <p className='text-white p-4 md:p-6 text-sm md:text-lg leading-relaxed'>Man is
                                        primarily governed by passion and instinct.</p>
                                </blockquote>
                                <div className='flex justify-end w-full'>
                                    <figcaption
                                        className='p-2 md:p-3 w-fit text-white text-sm md:text-lg text-right relative z-20 border-t-0 border border-gray-500'>—
                                        Muhammad Iqbal
                                    </figcaption>
                                </div>
                            </div>
                        </div>
                        {/* Projects Section */}
                        <ProjectsSection/>
                        {/* About Section */}
                        <div className='mt-4 sm:mt-6 lg:mt-8'>
                            <AboutSection/>
                        </div>
                        {/* Experience Section */}
                        <ExperienceSection/>
                        {/* Skills Section */}
                        <SkillsSection/>
                        {/* Education Section */}
                        <EducationSection/>
                        {/* Certifications Section */}
                        <CertificationsSection/>
                        {/* Contact Section */}
                        <ContactSection/>
                    </div>
                </div>

                {/* Footer */}
                <Footer/>
            </div>
        </>
    )
}

export default App
