"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypingAnimationProps {
  fullText: string;
  typingSpeed?: number;
  cursorBlinkDuration?: number;
}

export default function TypingAnimation({
  fullText,
  typingSpeed = 25,
  cursorBlinkDuration = 0.85,
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!fullText) return; // Prevent running if fullText is empty

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [fullText, typingSpeed]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        display: "inline-block",
      }}
    >
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: cursorBlinkDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ display: "inline-block" }}
      >
        |
      </motion.span>
    </motion.span>
  );
}
