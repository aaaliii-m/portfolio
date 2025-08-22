import { useState } from 'react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [touched, setTouched] = useState({
        name: false,
        email: false,
        subject: false,
        message: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const contactInfo = [
        {
            label: 'GitHub',
            value: 'aaaliii-m',
            link: 'https://github.com/aaaliii-m',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
            )
        },
        {
            label: 'LinkedIn',
            value: 'aaaliii-m',
            link: 'https://www.linkedin.com/in/aaaliii-m/',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            )
        }
    ];

    const validateField = (name: string, value: string): string => {
        switch (name) {
            case 'name':
                if (!value.trim()) return 'Name is required';
                if (value.trim().length < 2) return 'Name must be at least 2 characters';
                if (value.trim().length > 50) return 'Name must be less than 50 characters';
                if (!/^[a-zA-Z\s]+$/.test(value.trim())) return 'Name can only contain letters and spaces';
                return '';
            
            case 'email':
                if (!value.trim()) return 'Email is required';
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
                if (value.length > 100) return 'Email must be less than 100 characters';
                return '';
            
            case 'subject':
                if (!value.trim()) return 'Subject is required';
                if (value.trim().length < 5) return 'Subject must be at least 5 characters';
                if (value.trim().length > 100) return 'Subject must be less than 100 characters';
                return '';
            
            case 'message':
                if (!value.trim()) return 'Message is required';
                if (value.trim().length < 10) return 'Message must be at least 10 characters';
                if (value.trim().length > 1000) return 'Message must be less than 1000 characters';
                return '';
            
            default:
                return '';
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setTouched(prev => ({
            ...prev,
            [name]: true
        }));
        
        const error = validateField(name, value);
        setErrors(prev => ({
            ...prev,
            [name]: error
        }));
    };

    const validateForm = (): boolean => {
        const newErrors = {
            name: validateField('name', formData.name),
            email: validateField('email', formData.email),
            subject: validateField('subject', formData.subject),
            message: validateField('message', formData.message)
        };
        
        setErrors(newErrors);
        
        // Mark all fields as touched
        setTouched({
            name: true,
            email: true,
            subject: true,
            message: true
        });
        
        return !Object.values(newErrors).some(error => error !== '');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Validate form before submission
        if (!validateForm()) {
            return;
        }
        
        setIsSubmitting(true);
        
        // Simulate form submission (replace with actual API call)
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setErrors({ name: '', email: '', subject: '', message: '' });
            setTouched({ name: false, email: false, subject: false, message: false });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="contact" className="py-12 sm:py-16">
            <div className="flex flex-col gap-8">
                {/* Section Header */}
                                            <div className="flex items-center gap-2 sm:gap-4">
                                <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white font-bold">
                                    <span className="text-primary">#</span>contact
                                </h2>
                                <div className="flex-1 h-px bg-primary"></div>
                            </div>

                {/* Contact Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-lg lg:text-xl text-white font-bold">Get In Touch</h3>
                        <p className="text-gray leading-relaxed text-sm">
                            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
                        </p>
                        
                        <div className="flex items-center">
                            {contactInfo.map((contact, index) => (
                                <a 
                                    key={index}
                                    href={contact.link} 
                                    className="inline-flex items-center text-gray px-1 py-2 transition-all duration-200 text-sm cursor-pointer hover:text-primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {contact.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="space-y-6">
                        <h3 className="text-lg lg:text-xl text-white font-bold">Send Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    onBlur={handleInputBlur}
                                    required
                                    className={`w-full px-4 py-3 border bg-background/50 text-white placeholder-gray/50 focus:outline-none transition-colors duration-200 ${
                                        errors.name && touched.name 
                                            ? 'border-red-500 focus:border-red-500' 
                                            : 'border-gray focus:border-primary'
                                    }`}
                                    placeholder="Your name"
                                />
                                {errors.name && touched.name && (
                                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                                )}
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    onBlur={handleInputBlur}
                                    required
                                    className={`w-full px-4 py-3 border bg-background/50 text-white placeholder-gray/50 focus:outline-none transition-colors duration-200 ${
                                        errors.email && touched.email 
                                            ? 'border-red-500 focus:border-red-500' 
                                            : 'border-gray focus:border-primary'
                                    }`}
                                    placeholder="your.email@example.com"
                                />
                                {errors.email && touched.email && (
                                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                                )}
                            </div>

                            {/* Subject Field */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    onBlur={handleInputBlur}
                                    required
                                    className={`w-full px-4 py-3 border bg-background/50 text-white placeholder-gray/50 focus:outline-none transition-colors duration-200 ${
                                        errors.subject && touched.subject 
                                            ? 'border-red-500 focus:border-red-500' 
                                            : 'border-gray focus:border-primary'
                                    }`}
                                    placeholder="What's this about?"
                                />
                                {errors.subject && touched.subject && (
                                    <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
                                )}
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    onBlur={handleInputBlur}
                                    required
                                    rows={5}
                                    className={`w-full px-4 py-3 border bg-background/50 text-white placeholder-gray/50 focus:outline-none transition-colors duration-200 resize-none ${
                                        errors.message && touched.message 
                                            ? 'border-red-500 focus:border-red-500' 
                                            : 'border-gray focus:border-primary'
                                    }`}
                                    placeholder="Tell me about your project or opportunity..."
                                />
                                {errors.message && touched.message && (
                                    <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full border border-primary text-white px-6 py-3 font-medium hover:bg-primary/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <div className="p-3 bg-green-500/20 border border-green-500/30 text-green-400 text-sm text-center">
                                    Message sent successfully! I'll get back to you soon.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="p-3 bg-red-500/20 border border-red-500/30 text-red-400 text-sm text-center">
                                    Something went wrong. Please try again or contact me directly.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection; 