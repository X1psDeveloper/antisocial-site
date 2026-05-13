import { motion } from "motion/react";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  onClick?: () => void;
}

export function Card({ children, className = "", hover = true, gradient = false, onClick }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -4 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={`
        ${gradient
          ? "bg-gradient-to-br from-[#9482AE]/20 to-[#7c6a9a]/20 border-[#9482AE]/30"
          : "bg-[#2a2a2a] border-[#9482AE]/20"
        }
        border rounded-2xl transition-all duration-300
        ${hover ? "hover:border-[#9482AE]/50 hover:shadow-xl hover:shadow-[#9482AE]/10" : ""}
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
