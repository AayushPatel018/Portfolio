import { motion, AnimatePresence } from 'framer-motion';
import { useScrollY } from '../hooks/useScrollAnimation';

const BackToTop = () => {
  const scrollY = useScrollY();

  return (
    <AnimatePresence>
      {scrollY > 500 && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-cyan-400/20 text-lg"
          style={{ background: 'linear-gradient(135deg,#00D4FF,#7B2FBE)' }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
