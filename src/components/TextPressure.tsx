import { motion } from "framer-motion";

interface TextPressureProps {
  text: string;
  className?: string;
}

export default function TextPressure({ text, className }: TextPressureProps) {
  return (
    <div className={`flex flex-col items-center ${className || ""}`}>
      {text.split("\n").map((line, i) => (
        <div key={i} className="flex justify-center mb-2 md:mb-4">
          {line.split(" ").map((word, j) => (
            <span key={j} className="inline-flex mr-6 md:mr-8">
              {word.split("").map((letter, k) => (
                <motion.span
                  key={k}
                  className="inline-block"
                  whileHover={{ scale: 1.6, rotate: 0, color: "#10B981" }} // emerald-400
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 12 }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
