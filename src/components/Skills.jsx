import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Brain, Wrench, Terminal, Layers } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming & CS Fundamentals",
            icon: <Code2 className="w-6 h-6 text-blue-500" />,
            skills: ["Java", "Python", "C", "Data Structures & Algorithms", "OOPS", "Computer Networks", "Operating Systems", "DBMS"]
        },
        {
            title: "Data & AI",
            icon: <Brain className="w-6 h-6 text-purple-500" />,
            skills: ["Machine Learning", "NLP", "Computer Vision", "CNNs", "Transfer Learning"]
        },
        {
            title: "Backend Development",
            icon: <Terminal className="w-6 h-6 text-green-500" />,
            skills: ["Spring Boot", "REST APIs", "JDBC", "SQL"]
        },
        {
            title: "Tools & Platforms",
            icon: <Wrench className="w-6 h-6 text-orange-500" />,
            skills: ["Git", "GitHub", "Linux (Ubuntu)", "VS Code", "Postman", "Docker (Basic)", "AWS (Basic)"]
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section id="skills" className="py-24 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm">Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-2">Technical Arsenal</h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="glass p-8 rounded-3xl border border-white/20 dark:border-white/5 hover:border-blue-500/30 transition-all duration-300 group"
                        >
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-gray-100 dark:bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                    {category.icon}
                                </div>
                                <h3 className="ml-4 text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 text-sm font-medium bg-white/50 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-white/5 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
