import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToCollection = () => {
    document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary via-background to-background pt-16 hero-bg">
      <div className="container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm font-sans uppercase tracking-[0.3em] text-invert mb-4"
        >
          Space Journey 2126
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-invert mb-6 leading-tight"
        >
          The Space Essentials
          <br />
          <span className="text-accent">Don't leave without them</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-sans text-lg md:text-xl text-invert max-w-2xl mx-auto mb-12"
        >
          The equipment every individual and group needs to survive the space journey. 
          Experience each item in immersive 3D before you buy.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          onClick={scrollToCollection}
          className="inline-flex items-center gap-2 text-sm font-sans uppercase tracking-widest text-invert hover:text-accent transition-colors group"
        >
          Explore the Essentials
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.span>
        </motion.button>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
