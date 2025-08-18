const ContactSection = () => {
    const contactInfo = [
        {
            label: 'Email',
            value: 'aaaliii4u@gmail.com',
            link: 'mailto:aaaliii4u@gmail.com'
        },
        {
            label: 'Phone',
            value: '929 784 4870',
            link: 'tel:9297844870'
        },
        {
            label: 'Website',
            value: 'aaaliii.dev',
            link: 'https://aaaliii.dev'
        },
        {
            label: 'GitHub',
            value: 'aaaliii-m',
            link: 'https://github.com/aaaliii-m'
        },

    ];

    return (
        <div id="contact" className="py-16">
            <div className="flex flex-col gap-8">
                {/* Section Header */}
                <div className="flex items-center gap-4">
                    <h2 className="text-xl lg:text-2xl xl:text-3xl text-white font-bold">
                        <span className="text-primary">#</span>contact
                    </h2>
                    <div className="flex-1 h-px bg-gray"></div>
                </div>

                {/* Contact Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-lg lg:text-xl text-white font-bold">Get In Touch</h3>
                        <p className="text-gray leading-relaxed text-sm">
                            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
                        </p>
                        
                        <div className="space-y-4">
                            {contactInfo.map((contact, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <div>
                                        <span className="text-primary font-semibold text-sm">{contact.label}:</span>
                                        {contact.link ? (
                                            <a 
                                                href={contact.link} 
                                                className="border border-gray text-gray hover:bg-gray/20 px-2 py-1 rounded transition-all duration-200 ml-2 text-sm"
                                                target={contact.label === 'Email' || contact.label === 'Phone' ? '_self' : '_blank'}
                                                rel={contact.label === 'Email' || contact.label === 'Phone' ? '' : 'noopener noreferrer'}
                                            >
                                                {contact.value}
                                            </a>
                                        ) : (
                                            <span className="text-gray ml-2 text-sm">{contact.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form Placeholder */}
                    <div className="space-y-6">
                        <h3 className="text-lg lg:text-xl text-white font-bold">Send Message</h3>
                        <div className="border border-gray p-6">
                            <p className="text-gray text-center text-sm">
                                Contact form coming soon...
                            </p>
                            <p className="text-gray text-center mt-2 text-sm">
                                For now, please reach out via email or phone.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection; 