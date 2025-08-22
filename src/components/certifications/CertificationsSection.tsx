const CertificationsSection = () => {
    const certifications = [
        {
            name: 'Visual Element of User Interface Design',
            provider: 'CaLARTS',
            year: '2023',
            description: 'Comprehensive course on UI design principles and visual elements'
        },
        {
            name: 'Modern JavaScript: ES6 Basics',
            provider: 'COURSERA',
            year: '2022',
            description: 'Advanced JavaScript concepts including ES6+ features and modern syntax'
        },
        {
            name: 'JSworld Conference',
            provider: 'JSworld',
            year: '2022',
            description: 'Attended international JavaScript conference for latest industry insights'
        },
        {
            name: 'React.js Fundamentals',
            provider: 'Udemy',
            year: '2021',
            description: 'Complete React.js course covering hooks, context, and state management'
        },
        {
            name: 'Vue.js Development',
            provider: 'Vue Mastery',
            year: '2021',
            description: 'Vue.js framework mastery including composition API and Nuxt.js'
        }
    ];

    return (
        <div id="certifications" className="py-16 min-h-[400px]">
            <div className="flex flex-col gap-8">
                {/* Section Header */}
                <div className="flex items-center gap-4">
                    <h2 className="text-xl lg:text-2xl xl:text-3xl text-white font-bold">
                        <span className="text-primary">#</span>certifications
                    </h2>
                    <div className="flex-1 h-px bg-primary"></div>
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {certifications.map((cert, index) => (
                        <div key={index} className="border border-gray bg-background/50 p-6 hover:border-primary/50 transition-all duration-300">
                            {/* Provider Badge */}
                            <div className="flex items-center justify-between mb-4">
                                <span className="bg-primary/20 text-primary px-3 py-1 text-xs font-mono border border-primary/30">
                                    {cert.provider}
                                </span>
                                <span className="text-gray text-sm">{cert.year}</span>
                            </div>
                            
                            {/* Certification Name */}
                            <h3 className="text-white font-bold text-lg mb-3">
                                {cert.name}
                            </h3>
                            
                            {/* Description */}
                            <p className="text-gray text-sm leading-relaxed">
                                {cert.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CertificationsSection; 