import { motion } from "framer-motion";
import { Menu, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-5 h-5" />
        </Button>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors">
            Navigation
          </a>
          <a href="#" className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors">
            Repair
          </a>
          <a href="#" className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors">
            Manuals & Resources
          </a>
        </nav>

        <a href="/" className="font-serif text-2xl font-semibold text-foreground tracking-tight">
          <img className="logo" src="src/assets/Logo.svg" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#" className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        <Button variant="ghost" size="icon">
          <ShoppingBag className="w-5 h-5" />
        </Button>
      </div>
    </motion.header>
  );
};

export default Header;
