// Simple SVG icons for education section
const GraduationCapIcon = () => (
    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 14l9-5-9-5-9 5 9 5z"/>
        <path d="M12 16l6-3.3v4.8c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2v-4.8L12 16z"/>
    </svg>
);

const BuildingIcon = () => (
    <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
    </svg>
);

const MapPinIcon = () => (
    <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
);

const CalendarIcon = () => (
    <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
    </svg>
);

const EducationSection = () => {
    const education = {
        degree: 'BS Telecommunications and Computer Networks',
        institution: 'Superior University Lahore',
        location: 'Lahore, Pakistan',
        duration: '09/2011 - 12/2015'
    };

    return (
        <div id="education" className="py-16">
            <div className="flex flex-col gap-8">
                {/* Section Header */}
                                            <div className="flex items-center gap-4">
                                <h2 className="text-xl lg:text-2xl xl:text-3xl text-white font-bold">
                                    <span className="text-primary">#</span>education
                                </h2>
                                <div className="flex-1 h-px bg-primary"></div>
                            </div>

                {/* Education Content */}
                <div className="max-w-2xl">
                    <div className="border border-gray bg-background/50 p-6">
                        {/* Degree Header with Icon */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary/70 text-white shadow-md">
                                <GraduationCapIcon />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white">{education.degree}</h3>
                                <p className="text-sm text-gray">Bachelor's Degree</p>
                            </div>
                        </div>
                        
                        {/* Education Details */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="text-primary">
                                    <BuildingIcon />
                                </div>
                                <div>
                                    <span className="text-primary font-semibold text-sm">Institution:</span>
                                    <span className="text-gray text-sm ml-2">{education.institution}</span>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <div className="text-primary">
                                    <MapPinIcon />
                                </div>
                                <div>
                                    <span className="text-primary font-semibold text-sm">Location:</span>
                                    <span className="text-gray text-sm ml-2">{education.location}</span>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <div className="text-primary">
                                    <CalendarIcon />
                                </div>
                                <div>
                                    <span className="text-primary font-semibold text-sm">Duration:</span>
                                    <span className="text-gray text-sm ml-2">{education.duration}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationSection; 