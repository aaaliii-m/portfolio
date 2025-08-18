const EducationSection = () => {
    const education = {
        degree: 'BS Telecommunications and Computer Networks',
        institution: 'Superior University Lahore',
        location: 'Pakistan',
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
                    <div className="flex-1 h-px bg-gray"></div>
                </div>

                {/* Education Content */}
                <div className="max-w-2xl">
                    <div className="border border-gray p-6">
                        <h3 className="text-lg lg:text-xl text-white font-bold mb-4">{education.degree}</h3>
                        <div className="space-y-2 text-gray text-sm">
                            <p><span className="text-primary">Institution:</span> {education.institution}</p>
                            <p><span className="text-primary">Location:</span> {education.location}</p>
                            <p><span className="text-primary">Duration:</span> {education.duration}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationSection; 