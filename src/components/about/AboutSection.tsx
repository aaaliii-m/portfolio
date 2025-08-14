import dots from '../../assets/Dots.png';

const AboutSection = () => {
    return (
        <div id="about-me" className="py-16 relative">
            <div className="flex flex-col gap-8">
                {/* Section Header */}
                <div className="flex items-center gap-4">
                    <h2 className="text-xl lg:text-2xl xl:text-3xl text-white font-bold">
                        <span className="text-primary">#</span>about-me
                    </h2>
                    <div className="flex-1 h-px bg-gray"></div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Summary */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg lg:text-xl text-white font-bold mb-4">Summary</h3>
                            <p className="text-gray leading-relaxed text-sm">
                                Frontend Developer with 3+ years of experience building responsive, high-performance web apps using Vue, 
                                Nuxt, React, and Tailwind. Skilled in API integration (GraphQL/REST), secure auth (JWT, Google OAuth), 
                                and state management (Pinia, Redux). Strong focus on performance, UX, and cross-team collaboration.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg lg:text-xl text-white font-bold mb-4">Personal Info</h3>
                            <div className="space-y-2 text-gray">
                                <p><span className="text-primary">Email:</span> aaaliii4u@gmail.com</p>
                                <p><span className="text-primary">Phone:</span> 929 784 4870</p>
                                <p><span className="text-primary">GitHub:</span> aaaliii-m</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Activities & Honors */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg lg:text-xl text-white font-bold mb-4">Activities & Honors</h3>
                            <ul className="space-y-2 text-gray text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>Cricket Enthusiast: Participates regularly in cricket activities</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>Athlete's Dedication: Maintains an active lifestyle through sports</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>Environmental Advocate: Leads annual tree plantation drives</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>House Captain: Represented and lead my house at School</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>Farooq Shaheed Foundation Award: Achieved for distinctive performance in Secondary School</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg lg:text-xl text-white font-bold mb-4">Languages</h3>
                            <div className="space-y-2 text-gray text-sm">
                                <p><span className="text-primary">English:</span> Professional</p>
                                <p><span className="text-primary">Urdu:</span> Native/Bilingual</p>
                                <p><span className="text-primary">Punjabi:</span> Native/Bilingual</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Decorative dots */}
            <img src={dots} title='dots' className='w-[80px] h-auto absolute right-8 top-20 opacity-30' />
        </div>
    );
};

export default AboutSection; 