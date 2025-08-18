const SkillsSection = () => {
    const technicalSkills = [
        'HTML and CSS',
        'JavaScript',
        'React.js',
        'Vue.js',
        'Nuxt.js',
        'Tailwind and Bootstrap',
        'Git',
        'Figma'
    ];

    const softSkills = [
        'Organization and Time Management',
        'Team Collaboration',
        'Interpersonal Communication',
        'Troubleshooting'
    ];

    const certifications = [
        {
            name: 'Visual Element of User Interface Design',
            provider: 'CaLARTS'
        },
        {
            name: 'Modern JavaScript: ES6 Basics',
            provider: 'COURSERA'
        },
        {
            name: 'JSworld Conference',
            provider: 'JSworld'
        }
    ];

    return (
        <div id="skills" className="py-16">
            <div className="flex flex-col gap-8">
                {/* Section Header */}
                <div className="flex items-center gap-4">
                    <h2 className="text-xl lg:text-2xl xl:text-3xl text-white font-bold">
                        <span className="text-primary">#</span>skills
                    </h2>
                    <div className="flex-1 h-px bg-gray"></div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Technical Skills */}
                    <div className="space-y-6">
                        <h3 className="text-lg lg:text-xl text-white font-bold">Technical Skills</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {technicalSkills.map((skill, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span className="text-gray text-sm">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Soft Skills */}
                    <div className="space-y-6">
                        <h3 className="text-lg lg:text-xl text-white font-bold">Soft Skills</h3>
                        <div className="space-y-3">
                            {softSkills.map((skill, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span className="text-gray text-sm">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Certifications */}
                <div className="space-y-6">
                    <h3 className="text-lg lg:text-xl text-white font-bold">Certifications & Training</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                    {certifications.map((cert, index) => (
                                <div key={index} className="border border-gray p-4">
                                <h4 className="text-white font-semibold mb-2 text-sm">{cert.name}</h4>
                                <p className="text-primary text-xs">{cert.provider}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection; 