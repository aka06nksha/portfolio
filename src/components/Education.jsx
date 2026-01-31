import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6"
                    >
                        <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                            <GraduationCap size={40} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">B.Tech in Artificial Intelligence and Machine Learning</h3>
                            <h4 className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-1">Jawaharlal Nehru Technological University, Hyderabad</h4>
                            <div className="flex items-center justify-center sm:justify-start text-gray-500 dark:text-gray-400 mb-4">
                                <Calendar size={16} className="mr-2" />
                                <span>Nov 2021 – Jun 2025</span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 font-medium">
                                CGPA: 8.2/10
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
