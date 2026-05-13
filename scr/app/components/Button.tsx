import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger" | "success" | "premium";
  icon?: LucideIcon;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit";
}

export function Button({
  children,
  onClick,
  variant = "primary",
  icon: Icon,
  disabled = false,
  className = "",
  type = "button",
}: ButtonProps) {
  const variants = {
    primary: "bg-gradient-to-r from-[#9482AE] to-[#7c6a9a] hover:from-[#7c6a9a] hover:to-[#6b5b8e] text-white shadow-lg shadow-[#9482AE]/30 hover:shadow-[#9482AE]/50",
    secondary: "bg-[#3B3B3B] hover:bg-[#2a2a2a] text-gray-300 hover:text-white border border-[#9482AE]/20 hover:border-[#9482AE]/40",
    danger: "bg-gradient-to-r from-red-500/20 to-red-600/20 hover:from-red-500/30 hover:to-red-600/30 text-red-400 border border-red-500/30 hover:border-red-500/50",
    success: "bg-gradient-to-r from-green-500/20 to-green-600/20 hover:from-green-500/30 hover:to-green-600/30 text-green-400 border border-green-500/30 hover:border-green-500/50",
    premium: "bg-gradient-to-r from-[#b8a5d6] to-[#9482AE] hover:from-[#9482AE] hover:to-[#7c6a9a] text-white shadow-lg shadow-[#b8a5d6]/30 hover:shadow-[#b8a5d6]/50",
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`
        px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2
        ${variants[variant]}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </motion.button>
  );
}
