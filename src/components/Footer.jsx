import React from 'react';
import { Github, Linkedin, Mail, Heart, Code2, Terminal } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-[#0a0a0a] py-12 border-t border-gray-100 dark:border-white/5 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                        Akanksha Cirigiri
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Building the future, one line of code at a time.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a href="https://github.com/aka06nksha" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-50 dark:bg-white/5 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/akanksha-c-614b6327b/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-50 dark:bg-white/5 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://leetcode.com/u/AkankshaCirigiri/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-50 dark:bg-white/5 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300">
                        <Code2 size={20} />
                    </a>
                    <a href="https://www.geeksforgeeks.org/profile/akankshac5v42?from=explore" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-50 dark:bg-white/5 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300">
                        <Terminal size={20} />
                    </a>
                    <a href="mailto:akankshacirigiri@gmail.com" className="p-2 bg-gray-50 dark:bg-white/5 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300">
                        <Mail size={20} />
                    </a>
                </div>

                <div className="flex flex-col items-center md:items-end text-sm text-gray-500 dark:text-gray-400">
                    <p>© {new Date().getFullYear()} All rights reserved.</p>
                    <div className="flex items-center mt-1">
                        <span>Made with</span>
                        <Heart size={14} className="text-red-500 mx-1 fill-current animate-pulse" />
                        <span>& Premium Precision</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
