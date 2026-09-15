"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "motion/react";

type GalleryImage = { src: string; alt: string };

const EASE = [0.22, 1, 0.36, 1] as const;

const slideVariants: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    scale: 0.92,
    x: direction * 60,
  }),
  center: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.4, ease: EASE },
  },
  exit: (direction: number) => ({
    opacity: 0,
    scale: 0.92,
    x: direction * -60,
    transition: { duration: 0.25, ease: EASE },
  }),
};

export default function Gallery({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const close = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
  }, [images.length]);

  const showNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((i) => (i === null ? i : (i + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, close, showPrev, showNext]);

  const lightbox = (
    <AnimatePresence>
      {activeIndex !== null && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/75 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          onClick={close}
        >
          <motion.div
            className="relative w-full max-w-3xl"
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.35, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video overflow-hidden rounded-xl border border-line bg-paper-dim shadow-2xl">
              <AnimatePresence custom={direction} initial={false}>
                <motion.div
                  key={images[activeIndex].src}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <Image
                    src={images[activeIndex].src}
                    alt={images[activeIndex].alt}
                    fill
                    sizes="(max-width: 768px) 90vw, 768px"
                    quality={100}
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>

              {images.length > 1 && (
                <>
                  <motion.button
                    type="button"
                    onClick={showPrev}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0, transition: { delay: 0.15, duration: 0.3, ease: EASE } }}
                    exit={{ opacity: 0, x: -8, transition: { duration: 0.15 } }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.92 }}
                    className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink/55 font-mono text-lg text-paper backdrop-blur-sm transition-colors hover:bg-ink/75"
                    aria-label="Previous image"
                  >
                    ‹
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={showNext}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0, transition: { delay: 0.15, duration: 0.3, ease: EASE } }}
                    exit={{ opacity: 0, x: 8, transition: { duration: 0.15 } }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.92 }}
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink/55 font-mono text-lg text-paper backdrop-blur-sm transition-colors hover:bg-ink/75"
                    aria-label="Next image"
                  >
                    ›
                  </motion.button>

                  <motion.div
                    className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-ink/55 px-2.5 py-1 font-mono text-[11px] tracking-wide text-paper backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.3 } }}
                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                  >
                    {activeIndex + 1} / {images.length}
                  </motion.div>
                </>
              )}
            </div>

            <motion.button
              type="button"
              onClick={close}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, transition: { delay: 0.15, duration: 0.3, ease: EASE } }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-paper font-mono text-xs text-ink shadow-lg transition-colors hover:text-teal"
              aria-label="Close gallery"
            >
              ✕
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <motion.div
        className="grid grid-cols-2 gap-3 sm:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
      >
        {images.map((image, i) => (
          <motion.button
            key={image.src}
            type="button"
            onClick={() => {
              setDirection(0);
              setActiveIndex(i);
            }}
            variants={{
              hidden: { opacity: 0, y: 14, scale: 0.96 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: EASE } },
            }}
            className="group relative aspect-video overflow-hidden rounded-md border border-line bg-paper-dim/60"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10" />
          </motion.button>
        ))}
      </motion.div>

      {mounted && createPortal(lightbox, document.body)}
    </>
  );
}
