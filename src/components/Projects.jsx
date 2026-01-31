import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Microscope, Activity, Leaf, Cpu, Atom, Gamepad2, Building2, Wallet, BarChart2 } from 'lucide-react';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "AI/ML", "QML", "Software Development", "Web Development"];

    const projects = [
        {
            title: "Blood Cell Classification",
            category: "AI/ML",
            description: "Designed an end-to-end ML pipeline for automated blood cell classification. Applied transfer learning to enhance model performance, improving classification accuracy by 15% over baseline models.",
            tags: ["Python", "TensorFlow", "OpenCV", "Transfer Learning"],
            github: "https://github.com/aka06nksha",
            demo: null,
            icon: Microscope
        },
        {
            title: "Breast Ultrasound Anomaly Detection",
            category: "AI/ML",
            description: "Analyzed medical ultrasound image data and engineered features to improve anomaly detection accuracy from 26% to 95%. Trained CNN architectures and classical ML models.",
            tags: ["Python", "OpenCV", "CNN", "Isolation Forest"],
            github: "https://github.com/aka06nksha",
            demo: null,
            icon: Activity
        },
        {
            title: "Smart Leaf Health Detection",
            category: "AI/ML",
            description: "An AI/ML based system to detect and classify leaf diseases to assist in agricultural health monitoring.",
            tags: ["AI/ML", "Python", "Image Processing"],
            github: "https://github.com/aka06nksha/projects/tree/main/Smart%20Leaf%20Health%20Detection%20AIML",
            demo: null,
            icon: Leaf
        },
        {
            title: "Hybrid Quantum-Classical Anomaly Detection",
            category: "QML",
            description: "Designed and evaluated hybrid quantum–classical anomaly detection models at C-DAC. Collaborated with cross-functional teams to benchmark solutions against metrics.",
            tags: ["Python", "Quantum Computing", "Qiskit", "PyTorch"],
            github: "https://github.com/aka06nksha",
            demo: null,
            icon: Cpu
        },
        {
            title: "Quorum",
            category: "QML",
            description: "A Quantum Machine Learning project exploring quantum algorithms and their applications.",
            tags: ["QML", "Quantum Computing", "Python"],
            github: "https://github.com/aka06nksha/Quorum",
            demo: null,
            icon: Atom
        },
        {
            title: "The Maze of the Worm",
            category: "Software Development",
            description: "Developed an event-driven Java application demonstrating strong object-oriented principles. Optimized logic for high-frequency update cycles ensuring smooth runtime performance.",
            tags: ["Java", "OOP", "Event-Driven Programming"],
            github: "https://github.com/aka06nksha",
            demo: null,
            icon: Gamepad2
        },

        {
            title: "Digital Payment Wallet (Paytm Clone)",
            category: "Web Development",
            description: "A comprehensive digital payment wallet application facilitating secure transactions and user account management.",
            tags: ["Web Development", "Full Stack", "Payment Gateway"],
            github: "https://github.com/aka06nksha/Digital-Payment-Wallet-Paytm-",
            demo: null,
            icon: Wallet
        },
        {
            title: "Real Time Display",
            category: "Web Development",
            description: "A web application featuring real-time data visualization and display capabilities.",
            tags: ["Web Development", "Real-Time", "Visualization"],
            github: "https://github.com/aka06nksha/web-dev/tree/main/Real-Time%20Display",
            demo: null,
            icon: BarChart2
        }
    ];

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <section id="projects" className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300 relative">
            {/* Background Decoration */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm">Portfolio</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-2">Selected Works</h2>
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

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="glass group rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/10 border border-white/20 dark:border-white/5 hover:border-cyan-500/30 transition-all duration-300 flex flex-col relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-500/0 group-hover:to-blue-500/5 transition-all duration-500"></div>

                                <div className="p-8 flex-grow relative z-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 bg-gray-50 dark:bg-white/5 rounded-xl text-blue-600 dark:text-blue-400 group-hover:text-cyan-400 transition-colors">
                                            <project.icon size={28} />
                                        </div>
                                        <div className="flex gap-4">
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                                    <Github size={20} />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <span className="text-xs font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="px-8 pb-8 relative z-10">
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 rounded-lg border border-transparent dark:border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
