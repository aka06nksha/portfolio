
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, BookOpen, ExternalLink, X, Eye } from 'lucide-react';

const Certifications = () => {
    const [selectedImage, setSelectedImage] = React.useState(null);
    const [activeCategory, setActiveCategory] = React.useState("All");

    const categories = ["All", "AI & Machine Learning", "Python & Java", "Cybersecurity", "Interview Skills", "Software Engineering", "Research"];

    const certifications = [
        {
            name: "Career Essentials in Generative AI",
            issuer: "Microsoft & LinkedIn",
            category: "AI & Machine Learning",
            image: "/certificates/microsoft_genai.png"
        },
        {
            name: "Machine Learning with Python - Level 1",
            issuer: "IBM",
            category: "AI & Machine Learning",
            image: "/certificates/ibm_ml.png"
        },
        {
            name: "Practical Machine Learning",
            issuer: "Johns Hopkins University",
            category: "AI & Machine Learning",
            image: "/certificates/jhu_ml.png"
        },
        {
            name: "Intro to Cybersecurity",
            issuer: "Cisco",
            category: "Cybersecurity",
            image: "/certificates/cisco_cyber.jpg"
        },
        {
            name: "Introduction to NLP",
            issuer: "Great Learning",
            category: "AI & Machine Learning",
            image: "/certificates/gl_nlp.png"
        },
        {
            name: "Introduction to Scikit Learn",
            issuer: "Great Learning",
            category: "AI & Machine Learning",
            image: "/certificates/gl_scikit.png"
        },
        {
            name: "Java (Basic)",
            issuer: "HackerRank",
            category: "Python & Java",
            image: "/certificates/hackerrank_java.png"
        },
        {
            name: "Introduction to Python",
            issuer: "SoloLearn",
            category: "Python & Java",
            image: "/certificates/sololearn_python.png"
        },
        {
            name: "Developer Job Simulation",
            issuer: "Accenture",
            category: "Software Engineering",
            image: "/certificates/accenture.png"
        },
        {
            name: "Software Engineering Job Simulation",
            issuer: "Goldman Sachs",
            category: "Software Engineering",
            image: "/certificates/goldman_sachs.jpg"
        },
        {
            name: "Oral Presentation - ICSEM-2025",
            issuer: "ICSEM Conference",
            category: "Research",
            image: "/certificates/icsem_presentation.png"
        }
    ].filter(cert => cert.image);

    const filteredCerts = activeCategory === "All"
        ? certifications
        : certifications.filter(c => c.category === activeCategory);

    const publications = [
        {
            title: "AI-Driven Classification from Peripheral Blood Cell Images for Hematological Disorders",
            journal: "International Journal of Innovative Research in Technology (IJIRT)",
            date: "May 2025",
            link: "https://ijirt.org/publishedpaper/IJIRT177278_PAPER.pdf",
            image: "/certificates/ijirt_publication_cert.png"
        }
    ];

    return (
        <section id="certifications" className="py-24 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-1/3 h-full bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm">Achievements</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-2">Certifications</h2>
                </motion.div>

                {/* Category Tabs */}
                <div className="flex flex-wrap gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === category
                                ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/25"
                                : "bg-transparent border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-white/30"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 min-h-[300px]">
                    <AnimatePresence mode='popLayout'>
                        {filteredCerts.map((cert, index) => (
                            <motion.div
                                layout
                                key={cert.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="relative group"
                            >
                                {/* Aura Glow */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500 group-hover:duration-200"></div>

                                <div className="relative glass p-7 rounded-2xl border border-white/20 dark:border-white/5 bg-white/50 dark:bg-[#111]/50 hover:border-blue-500/50 transition-all duration-500 flex flex-col h-full overflow-hidden">
                                    {/* Shimmer Effect */}
                                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-in-out"></div>

                                    <div className="flex items-start gap-4 mb-6 relative z-10">
                                        <div className="p-4 bg-blue-50 dark:bg-blue-500/10 rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-inner">
                                            <Award size={28} />
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{cert.name}</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{cert.issuer}</p>
                                        </div>
                                    </div>

                                    <div className="mt-auto flex justify-end relative z-10">
                                        <button
                                            onClick={() => setSelectedImage(cert.image)}
                                            className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-500/5 hover:bg-blue-500/10 rounded-xl transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10"
                                        >
                                            <Eye size={16} />
                                            View Certificate
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Publications */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <span className="text-purple-600 dark:text-purple-400 font-bold tracking-wider uppercase text-sm">Research</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-2">Publications</h2>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {publications.map((pub, index) => (
                        <div key={index} className="relative group">
                            {/* Research Aura */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-0 group-hover:opacity-15 transition duration-500"></div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -5 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="relative glass p-8 md:p-10 rounded-3xl border border-white/20 dark:border-white/5 bg-white/50 dark:bg-[#111]/50 hover:border-purple-500/50 transition-all duration-500 shadow-xl overflow-hidden"
                            >
                                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-purple-500/5 to-transparent transition-transform duration-1000"></div>

                                <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                                    <div className="p-5 bg-purple-100 dark:bg-purple-500/10 rounded-2xl text-purple-600 dark:text-purple-400 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-inner shrink-0">
                                        <BookOpen size={40} />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-start mb-4">
                                            <a
                                                href={pub.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-tight"
                                            >
                                                {pub.title}
                                            </a>
                                            <a href={pub.link} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink size={24} className="text-gray-400 hover:text-purple-400 transition-colors shrink-0 ml-4" />
                                            </a>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg italic leading-relaxed">{pub.journal}</p>
                                        <div className="flex flex-wrap items-center justify-between gap-4">
                                            <div className="flex items-center text-sm font-bold text-purple-600 dark:text-purple-400 bg-purple-500/5 px-5 py-2.5 rounded-full border border-purple-500/20">
                                                <span>{pub.date}</span>
                                            </div>
                                            {pub.image && (
                                                <button
                                                    onClick={() => setSelectedImage(pub.image)}
                                                    className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-500/5 hover:bg-purple-500/10 rounded-xl transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10"
                                                >
                                                    <Eye size={16} />
                                                    View Publication Certificate
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Certificate Modal */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImage(null)}
                            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl"
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                                onClick={(e) => e.stopPropagation()}
                                className="relative max-w-5xl w-full glass p-1 rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.2)]"
                            >
                                {/* Neon Border Glow */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 animate-pulse"></div>

                                <div className="relative bg-[#0a0a0a] rounded-2xl overflow-hidden">
                                    <button
                                        onClick={() => setSelectedImage(null)}
                                        className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-all hover:scale-110 active:scale-90 border border-white/10"
                                    >
                                        <X size={24} />
                                    </button>

                                    <img
                                        src={selectedImage}
                                        alt="Certificate"
                                        className="w-full h-auto rounded-xl shadow-2xl relative z-10"
                                    />

                                    {/* Modal Background Pulse */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-blue-500/10 blur-[100px] rounded-full animate-pulse pointer-events-none"></div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Certifications;
