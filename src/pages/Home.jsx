import { motion } from "motion/react";
import HeroSection from "../components/HeroSection";
import PropertyGrid from "../components/PropertyGrid";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <HeroSection />
      <PropertyGrid />
    </motion.div>
  );
}
