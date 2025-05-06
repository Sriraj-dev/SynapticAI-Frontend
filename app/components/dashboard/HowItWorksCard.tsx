"use client";
import { motion } from "framer-motion";

export function HowItWorksCard({
  number,
  title,
  description,
  index,
}: {
  number: number;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      className="flex flex-col items-center text-center p-6 transform transition duration-300 ease-linear hover:scale-105"
      initial={{ opacity: 0, scale: 0.75 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        opacity: { duration: 0.9, delay: index * 0.2 },
        scale: { duration: 0.9, delay: index * 0.2 },
      }}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-4">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2" style={{ color: "#0a0a0a" }}>
        {title}
      </h3>
      <p className="text-gray-500">{description}</p>
    </motion.div>
  );
}
