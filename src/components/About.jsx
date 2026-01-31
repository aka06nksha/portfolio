import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Globe, Cloud } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm">Introduction</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-2">Behind the Code</h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Visual / Abstract Representation */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative z-10 grid grid-cols-2 gap-6">
                            <div className="space-y-6 mt-12">
                                <div className="glass p-6 rounded-2xl text-center transform hover:-translate-y-2 transition-transform duration-500">
                                    <Code className="w-8 h-8 mx-auto text-blue-500 mb-4" />
                                    <h3 className="font-bold text-gray-900 dark:text-white">Backend</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Robust Architectures</p>
                                </div>
                                <div className="glass p-6 rounded-2xl text-center transform hover:-translate-y-2 transition-transform duration-500">
                                    <Cpu className="w-8 h-8 mx-auto text-purple-500 mb-4" />
                                    <h3 className="font-bold text-gray-900 dark:text-white">AI / ML</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Intelligent Models</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="glass p-6 rounded-2xl text-center transform hover:-translate-y-2 transition-transform duration-500">
                                    <Globe className="w-8 h-8 mx-auto text-cyan-500 mb-4" />
                                    <h3 className="font-bold text-gray-900 dark:text-white">Global</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Impactful Solutions</p>
                                </div>
                                <div className="glass p-6 rounded-2xl text-center transform hover:-translate-y-2 transition-transform duration-500">
                                    <Cloud className="w-8 h-8 mx-auto text-emerald-500 mb-4" />
                                    <h3 className="font-bold text-gray-900 dark:text-white">Cloud</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Scalable DevOps</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Story Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="glass p-8 rounded-3xl border border-white/20 dark:border-white/5 relative">
                            {/* Decorative Quote Mark */}
                            <span className="absolute -top-6 -left-4 text-8xl text-blue-500/10 font-serif leading-none">“</span>

                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Spark</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                My journey didn't start with Hello World—it started with a curiosity about how data shapes decisions.
                                That curiosity evolved into a passion for building <span className="text-blue-600 dark:text-blue-400 font-semibold">intelligent systems</span> that solve real-world problems.
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Evolution</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                I transitioned from understanding core computing principles to architecting <span className="text-purple-600 dark:text-purple-400 font-semibold">enterprise-grade backend solutions</span> and exploring the depths of AI.
                                Today, I focus on bridging the gap between rigorous engineering and adaptive machine learning models.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
