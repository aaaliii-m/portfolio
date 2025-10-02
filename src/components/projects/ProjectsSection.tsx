import {projects} from '../../data/projects.ts'
import {Link} from "react-router";
import CompletedProjects from "../ui/cards/CompletedProjects.tsx";
import PrimaryButton from "../ui/buttons/PrimaryButton.tsx";

const ProjectsSection = () => {

    return (
        <>
            <div id="projects" className="py-12 sm:py-16">
                <div className="flex flex-col gap-8">
                    {/* Section Header */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white font-bold">
                            <span className="text-primary">#</span>projects
                        </h2>
                        <div className="flex-1 h-px bg-primary"></div>
                        <Link to='/projects'
                              className="text-gray hover:text-primary cursor-pointer transition-colors duration-200">
                            View all
                        </Link>
                    </div>
                    <PrimaryButton title='Completed Projects' isSelected={true} />

                    {/* Projects Grid */}
                    <CompletedProjects projects={projects} />
                </div>
            </div>
        </>
    );
};

export default ProjectsSection;