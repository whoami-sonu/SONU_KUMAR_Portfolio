import { motion } from "framer-motion";
import "../assets/styles/background.css";

function CyberBackground() {
  return (
    <div className="cyber-bg">
      <div className="grid" />

      <motion.div
        className="glow glow-1"
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="glow glow-2"
        animate={{
          x: [0, -80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="scanner"
        animate={{
          y: ["-10%", "110%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

export default CyberBackground;