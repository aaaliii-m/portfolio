import {useState} from 'react';
import CompletedProjectModal from "../modals/CompletedProjectModal.tsx";
import {truncateTechnologies, truncateText} from "../../../utils/textUtils.ts";

const CompletedProjects = ({projects}:any) => {
    // States
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Handlers
    const handleProjectClick = (project: any) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    // UI
    return (
        <>
            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    {projects.map((project: any) => (
                    <div
                        key={project.id}
                        className="bg-background border border-gray flex flex-col hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
                        onClick={() => handleProjectClick(project)}
                    >
                        {/* Project Thumbnail */}
                        <div className="w-full h-40 sm:h-48 border border-gray/30 overflow-hidden">
                            <img
                                src={project.image}
                                alt={`${project.title} thumbnail`}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Technologies */}
                        <div
                            className="text-gray font-mono text-sm p-4 border border-gray border-s-0 border-e-0">
                            {truncateTechnologies(project.technologies, 3)}
                        </div>

                        <div className="px-4 pb-4 flex flex-col flex-grow">
                            {/* Project Title */}
                            <h3 className="text-white font-mono font-bold text-lg sm:text-xl mt-2 mb-4">
                                {project.title}
                            </h3>

                            {/* Project Description */}
                            <p className="text-gray font-mono text-sm mb-6 flex-grow">
                                {truncateText(project.description, 12)}
                            </p>

                            {/* Action Buttons */}
                            <div className="flex gap-4 mt-auto" onClick={(e) => e.stopPropagation()}>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={project.liveUrl}
                                    className="border border-primary text-white px-4 py-2 font-mono text-sm hover:bg-primary/20 transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
                                >
                                    View Live
                                    <span className="text-white">↔</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Project Modal */}
            <CompletedProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    )
}

export default CompletedProjects;