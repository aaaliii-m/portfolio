import {Link} from "react-router";
import logo from '../assets/muhammad-ali-logo.svg';
import CompletedProjects from "../components/ui/cards/CompletedProjects.tsx";
import {miniProjects, projects} from '../data/projects.ts';
import Footer from "../components/footer/Footer.tsx";


const Projects = () => {
    return (
        <div className='bg-background min-h-screen grid-background relative'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl'>
                {/* Navigation */}
                <div className='flex items-center gap-x-1 md:gap-x-2 2xl:gap-x-4 cursor-pointer'>
                    <img title="logo" src={logo} className='w-6 h-6 sm:w-8 sm:h-8 text-white' alt="logo"/>
                    <Link to='/' className='text-white font-bold text-sm sm:text-base'>Muhammad Ali</Link>
                </div>
                {/* Section Header */}
                <div className="flex flex-col justify-center gap-2 sm:gap-4 mt-13">
                    <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white font-bold">
                        <span className="text-primary">&#47;</span>projects
                    </h2>
                    <p className="text-gray text-sm">List of my projects</p>
                </div>
                {/* Completed Projects */}
                <div className="flex flex-col gap-8 mt-17">
                    {/* Section Header */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white font-bold">
                            <span className="text-primary">#</span>completed-apps
                        </h2>
                    </div>

                    {/* Projects Grid */}

                    <CompletedProjects projects={projects}/>

                </div>
                {/*  Mini Projects  */}
                <div className="flex flex-col gap-8 mt-17">
                    {/* Section Header */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white font-bold">
                            <span className="text-primary">#</span>mini-projects
                        </h2>
                    </div>


                    {/* Projects Grid */}
                    <CompletedProjects projects={miniProjects}/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Projects;