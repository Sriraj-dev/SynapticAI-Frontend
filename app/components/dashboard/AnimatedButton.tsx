"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface AnimatedButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  target?: string;
}

export default function AnimatedButton({
  href,
  className = "",
  children,
  target = "_self",
}: AnimatedButtonProps) {
  return (
    <Link href={href} target={target}>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={className}
      >
        {children}
      </motion.button>
    </Link>
  );
}
