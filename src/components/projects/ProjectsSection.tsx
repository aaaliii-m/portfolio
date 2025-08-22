                          import { truncateText, truncateTechnologies } from '../../utils/textUtils';
         import nycTourCopilotThumb from '../../../public/img/nyc-tour-copilot-thumb.png';
         import parentLoopThumb from '../../../public/img/parent-loop-thumb.png';
         import petPalThumb from '../../../public/img/pet-pal-thumb.png';
         import subwayPulseThumb from '../../../public/img/subway-pulse-thumb.png';
         import ProjectModal from './ProjectModal';
         import { useState } from 'react';

                 const ProjectsSection = () => {
             const [selectedProject, setSelectedProject] = useState<any>(null);
             const [isModalOpen, setIsModalOpen] = useState(false);

             const handleProjectClick = (project: any) => {
                 setSelectedProject(project);
                 setIsModalOpen(true);
             };

             const handleCloseModal = () => {
                 setIsModalOpen(false);
                 setSelectedProject(null);
             };

             const projects = [
                {
                id: 1,
                title: "NYC Tour Copilot",
                description: "Personalized travel planning app for NYC tourists with real-time recommendations, trip saving, and interactive maps.",
                technologies: ["React", "Firebase", "Tailwind CSS", "Mapbox"],
                liveUrl: "https://nyctourcopilot.example.com",
                githubUrl: "https://github.com/ali-dev/nyc-tour-copilot",
                image: nycTourCopilotThumb
                },
                {
                id: 2,
                title: "ParentLoop",
                description: "School communication platform that connects teachers, parents, and administrators with announcements, attendance, and homework tracking.",
                technologies: ["Vue.js", "Nuxt.js", "Node.js", "MongoDB"],
                liveUrl: "https://parentloop.example.com",
                githubUrl: "https://github.com/ali-dev/parentloop",
                image: parentLoopThumb
                },
                {
                id: 3,
                title: "PetPal",
                description: "Pet management system with profile creation, vaccination tracking, and a fun pet name generator.",
                technologies: ["React", "Express", "MongoDB", "Tailwind CSS"],
                liveUrl: "https://petpal.example.com",
                githubUrl: "https://github.com/ali-dev/petpal",
                image: petPalThumb
                },
                {
                id: 4,
                title: "SubwayPulse",
                description: "Real-time subway dashboard showing train delays, line status, and commuter insights for NYC riders.",
                technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
                liveUrl: "https://subwaypulse.example.com",
                githubUrl: "https://github.com/ali-dev/subwaypulse",
                image: subwayPulseThumb
                }
            ];

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
                                 <a href="#projects" className="text-gray hover:text-primary cursor-pointer transition-colors duration-200">
                                     View all
                                 </a>
                             </div>

                             {/* Projects Grid */}
                             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                                 {projects.map((project) => (
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
                                         <div className="text-gray font-mono text-sm p-4 border border-gray border-s-0 border-e-0">
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
                         </div>
                     </div>
                     
                     {/* Project Modal */}
                     <ProjectModal 
                         project={selectedProject}
                         isOpen={isModalOpen}
                         onClose={handleCloseModal}
                     />
                 </>
             );
         };

        export default ProjectsSection; 