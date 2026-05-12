import { motion, AnimatePresence } from 'framer-motion';

const InvitationOverlay = ({ isOpened, onOpen }) => {
  return (
    <AnimatePresence>
      {!isOpened && (
        <>
          {/* Main Overlay */}
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#0f2e20] via-[#1B4332] to-[#0a2016] overflow-hidden"
          >
            {/* Background pattern/glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,168,76,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(201,168,76,0.08)_0%,transparent_50%)]" />
            
            <div className="relative z-10 flex flex-col items-center text-center p-6 space-y-6">
              {/* Bismillah */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-2xl md:text-3xl text-[#EDD98A] tracking-wider"
                style={{ fontFamily: 'var(--font-arabic)' }}
              >
                بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent"
              />

              {/* Names */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="flex flex-col items-center space-y-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <div className="text-3xl md:text-4xl text-white italic tracking-wide">
                  Shiba Afsheen
                </div>
                <div className="text-2xl text-[#C9A84C] italic">&</div>
                <div className="text-3xl md:text-4xl text-white italic tracking-wide">
                  Shayan Patel
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="text-[0.65rem] md:text-xs tracking-[0.3em] uppercase text-[#D4AF55] mt-2"
              >
                Engagement Ceremony · 24 May 2026
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mb-4"
              />

              {/* Open Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.3 }}
                onClick={onOpen}
                className="relative overflow-hidden px-8 py-3 border border-[#C9A84C] text-[#EDD98A] text-xs tracking-[0.25em] uppercase hover:bg-[#C9A84C] hover:text-[#1B4332] transition-colors duration-500 ease-out group"
              >
                <span className="relative z-10">✦ Open Invitation ✦</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Curtains */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1.2, ease: [0.86, 0, 0.07, 1], delay: 0.4 }}
            className="fixed inset-y-0 left-0 w-1/2 bg-[#153426] z-[9998]"
          />
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 1.2, ease: [0.86, 0, 0.07, 1], delay: 0.4 }}
            className="fixed inset-y-0 right-0 w-1/2 bg-[#153426] z-[9998]"
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default InvitationOverlay;
