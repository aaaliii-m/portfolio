         import React, { useEffect } from 'react';

    interface Project {
        id: number;
        title: string;
        description: string;
        technologies: string[];
        liveUrl: string;
        githubUrl: string;
        image: string;
    }

    interface ProjectModalProps {
        project: Project | null;
        isOpen: boolean;
        onClose: () => void;
    }

         const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
         // Prevent background scrolling when modal is open
         useEffect(() => {
             if (isOpen) {
                 document.body.style.overflow = 'hidden';
             } else {
                 document.body.style.overflow = 'unset';
             }

             // Cleanup function to restore scrolling when component unmounts
             return () => {
                 document.body.style.overflow = 'unset';
             };
         }, [isOpen]);

         if (!isOpen || !project) return null;

                 return (
             <div 
                 className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                 onClick={onClose}
             >
                                 <div 
                     className="bg-background border border-gray max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                     onClick={(e) => e.stopPropagation()}
                 >
                    {/* Modal Header */}
                    <div className="flex justify-between items-center p-6 border-b border-gray">
                        <h2 className="text-2xl lg:text-3xl text-white font-bold">
                            {project.title}
                        </h2>
                        <button
                            onClick={onClose}
                            className="text-gray hover:text-white text-2xl font-bold transition-colors duration-200 cursor-pointer"
                        >
                            ×
                        </button>
                    </div>

                    {/* Modal Content */}
                        {/* Project Image */}
                        <div className="w-full h-64 lg:h-80 border border-gray/30 overflow-hidden mb-6">
                            <img 
                                src={project.image}
                                alt={`${project.title} screenshot`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    <div className="p-6">

                        {/* Project Description */}
                        <div className="mb-6">
                            <h3 className="text-xl text-white font-bold mb-3">Description</h3>
                            <p className="text-gray leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        {/* Technologies */}
                        <div className="mb-6">
                            <h3 className="text-xl text-white font-bold mb-3">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                    <span 
                                        key={index}
                                        className="bg-primary/20 text-primary px-3 py-1 text-sm font-mono border border-primary/30"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-primary text-white px-6 py-3 font-mono text-sm hover:bg-primary/20 transition-all duration-200 cursor-pointer inline-flex items-center justify-center gap-2"
                            >
                                View Live
                                <span className="text-white">↔</span>
                            </a>
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-gray text-gray px-6 py-3 font-mono text-sm hover:bg-gray/20 transition-all duration-200 cursor-pointer inline-flex items-center justify-center gap-2"
                            >
                                View Code
                                <span className="text-gray">↗</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default ProjectModal; 