"use client"
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";


interface FeatureCardProps {
  title: string;
  description: string;
  index: number;
}

export const BenefitCard = ({
  title,
  description,
  index,
}: FeatureCardProps) => (
      <motion.div
      className="flex flex-col items-start transform transition duration-300 hover:scale-102"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ opacity: { duration: 0.6, delay: index * 0.1 }, y: { duration: 0.6, delay: index * 0.1 } }}
    >
      <div className="flex flex-row items-start gap-2">
        <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
        <h3 className="text-lg font-bold mb-2">{title}</h3>
      </div>
      <div className="pl-6 text-gray-500 text-left">{description}</div>
    </motion.div>
);
