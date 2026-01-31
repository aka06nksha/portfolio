import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: "Project Intern",
            company: "CDAC",
            period: "Aug 2025 - Present",
            description: "Working on advanced research and development projects. Designed hybrid quantum–classical anomaly detection models. Collaborated with cross-functional teams and executed end-to-end data processing."
        },
        {
            title: "Full Stack Intern",
            company: "EY Global Services",
            period: "Mar 2025 - Apr 2025",
            description: "Developed full-stack components in an Agile environment. Built backend APIs and responsive UI, improving efficiency by 30%. Ranked in the Top 10% of interns."
        },
        {
            title: "Summer of AI Internship",
            company: "Swecha Telangana",
            period: "May 2024 - Jun 2024",
            description: "Participated in an intensive AI training program. Collaborated on open-source AI projects and gained practical experience in machine learning workflows."
        }
    ];

    return (
        <section id="experience" className="py-24 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 w-full h-96 bg-blue-500/5 blur-[120px] -skew-y-12 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm">Career Path</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-2">Professional Journey</h2>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12 pb-16 last:pb-0"
                        >
                            {/* Timeline Line */}
                            <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-blue-500 to-purple-500/20"></div>

                            {/* Timeline Dot */}
                            <div className="absolute top-0 left-[-5px] w-3 h-3 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)] z-10"></div>

                            <div className="glass p-8 rounded-2xl border border-white/20 dark:border-white/5 hover:border-blue-500/30 transition-all duration-300 group">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{exp.title}</h3>
                                        <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-1">{exp.company}</h4>
                                    </div>
                                    <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full w-fit">
                                        <Calendar size={14} className="mr-2" />
                                        {exp.period}
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
