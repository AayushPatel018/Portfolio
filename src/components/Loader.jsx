import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ isLoading }) => (
  <AnimatePresence>
    {isLoading && (
      <motion.div
        className="fixed inset-0 z-[999] flex flex-col items-center justify-center"
        style={{ background: '#020913' }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 text-center"
        >
          <div className="w-20 h-20 mx-auto mb-4 relative">
            <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400/30 animate-ping" />
            <div className="absolute inset-0 rounded-2xl border border-cyan-400/60 flex items-center justify-center"
              style={{ background: '#0A1628' }}>
              <span className="font-mono font-bold text-3xl gradient-text">AP</span>
            </div>
          </div>
          <p className="font-mono text-sm text-slate-500 tracking-widest uppercase">Initializing portfolio...</p>
        </motion.div>

        <motion.div
          className="w-48 h-0.5 bg-slate-800 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="h-full loader-bar rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.2, delay: 0.4, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Loader;
