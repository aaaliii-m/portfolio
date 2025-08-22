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
                                        <div className="flex-1 h-px bg-primary"></div>
                                    </div>

                        {/* Content */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Left Column - Summary */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg lg:text-xl text-white font-bold mb-4">Summary</h3>
                                    <p className="text-gray leading-relaxed text-sm">
                                    Frontend developer (3 years) focused on performance, accessibility, and maintainable UI.
        At Tile Mountain, I delivered Vue/Nuxt features with SSR and lazy loading, built secure JWT dashboards, and integrated GraphQL/Strapi; I collaborated cross-functionally and used GA4/Lighthouse to guide improvements.
        At Scytalelabs, I shipped React dashboards (Bootstrap/MUI), integrated GraphQL and REST, managed state with Redux/Context, and set up robust auth with JWT and Google OAuth.
        Now expanding into Node.js + MongoDB to take features end-to-end.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg lg:text-xl text-white font-bold mb-4">Location & Availability</h3>
                                    <div className="space-y-4 text-gray">
                                        <div className="flex items-center gap-2">
                                            <span className="text-primary text-lg">📍</span>
                                            <span>Brooklyn, NYC (open to remote/hybrid)</span>
                                        </div>
                                        <div className="bg-primary/10 border border-primary/20 p-4 rounded">
                                            <p className="text-primary medium leading-relaxed">
                                                Open to frontend roles and freelance engagements — let's build something users love.
                                            </p>
                                        </div>
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