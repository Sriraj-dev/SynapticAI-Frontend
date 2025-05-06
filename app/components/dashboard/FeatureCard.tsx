"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  bg: string;
}

export const FeatureCard = function FeatureCard({
  icon,
  title,
  description,
  bg,
  index,
  isMobile,
}: FeatureCardProps & { index: number } & { isMobile: boolean }) {
  // Mobile: slide from left/right
  const mobileInitial =
    index % 2 === 0 ? { x: -100, opacity: 0 } : { x: 100, opacity: 0 };

  // Desktop: slide up
  const desktopInitial = { y: 40, opacity: 0 };

  return (
    <motion.div
      className={`flex flex-col items-start p-6 rounded-xl shadow-sm border ${bg} transform transition duration-300 hover:scale-105 hover:shadow-lg hover:rotate-1`}
      initial={isMobile ? mobileInitial : desktopInitial}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        opacity: { duration: 0.6, ease: "linear" },
        x: { duration: 0.3, ease: "linear" },
        y: { duration: 0.3, ease: "linear" },
      }}
    >
      <div className="flex flex-row items-center gap-4 pb-5">
        <div className="p-2 rounded-lg bg-purple-100 text-purple-600 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-background">{title}</h3>
      </div>
      <p className="text-gray-500">{description}</p>
    </motion.div>
  );
};
