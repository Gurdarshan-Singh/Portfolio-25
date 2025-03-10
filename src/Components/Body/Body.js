import React from "react";
import { motion } from "framer-motion";

function Body() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hi, I'm Gurdarshan Singh
      </motion.h1>
      <p className="text-lg mt-4">Full Stack Developer | AI Enthusiast | Cloud Architect</p>
      <a
        href="/contact"
        className="mt-6 px-6 py-3 bg-blue-600 rounded-lg text-white text-lg hover:bg-blue-700"
      >
        Contact Me
      </a>
    </div>
  );
}

export default Body;
