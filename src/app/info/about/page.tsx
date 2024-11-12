'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { PageWrapper } from '@/app/components/page-wrapper';
import styles from '@/app/styles/about.module.scss'
import { AnimatePresence, motion } from "framer-motion";

interface LogoItemProps {
  src: string;
  alt: string;
}

const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: JSX.Element;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="inline-flex gap-16 px-8 md:gap-32 md:px-16"
      style={{ minWidth: '100%' }}
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ src, alt }: LogoItemProps) => {
  return (
    <Image
      src={src}
      draggable={false}
      alt={alt}
      height={55}
      width={100}
      className="w-full max-h-[55px]"
    />
  );
};

const LogoItemsTop = () => (
  <>
    <LogoItem src="/logos/espn.svg" alt="ESPN Logo" />
    <LogoItem src="/logos/dentsu.svg" alt="dentsu Logo" />
    <LogoItem src="/logos/disney.svg" alt="disney Logo" />
    <LogoItem src="/logos/appletv.svg" alt="appletv Logo" />
    <LogoItem src="/logos/paramount.svg" alt="paramount Logo" />
    <LogoItem src="/logos/fifa.svg" alt="fifa Logo" />
    <LogoItem src="/logos/espn.svg" alt="ESPN Logo" />
    <LogoItem src="/logos/dentsu.svg" alt="dentsu Logo" />
    <LogoItem src="/logos/disney.svg" alt="disney Logo" />
    <LogoItem src="/logos/appletv.svg" alt="appletv Logo" />
    <LogoItem src="/logos/paramount.svg" alt="paramount Logo" />
    <LogoItem src="/logos/fifa.svg" alt="fifa Logo" />
  </>
);


export default function About() {

  const [isEnglish, setIsEnglish] = useState(true);
  const handleToggle = () => {
    setIsEnglish(!isEnglish);
  };



  return (
    <PageWrapper>
      <div className={styles.containerAbout}>
        <div className={styles.gridAbout}>
          <div></div>
          <div style={{ maxWidth: '700px' }}>
            <div className={styles.containerToggle}>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
              >About</motion.h2>
              <div className='flex justify-end'>
                <p>
                  <motion.span
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: isEnglish ? 1 : 0.5 }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                  >
                    EN
                  </motion.span>
                  <span className='px-1'>/</span>
                  <motion.span
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: isEnglish ? 0.5 : 1 }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                  >
                    ES
                  </motion.span>
                </p>
                <div className={styles.Toggle} onClick={handleToggle}>
                  <motion.div
                    className={styles.switcher}
                    animate={{ x: isEnglish ? 0 : 24 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  />
                </div>
              </div>

            </div>
            <div className={styles.containerps}>
              <AnimatePresence>
                {isEnglish ? (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    >
                      <p>Monkey Label Films is a creative production company founded by partners dedicated to crafting audiovisual projects with a unique impact. We are driven by a commitment to creative storytelling and exceptional visual quality.</p>
                      <p>With international production capabilities, our passion for filmmaking has led to collaborations with some of the industry's most renowned platforms, leading artists, and cutting-edge brands.</p>
                      <p>Our team includes internationally acclaimed directors and producers who are deeply committed to inclusion and diversity in all our content.</p>
                      <p>At Monkey Label Films, every project reflects our artistic and creative vision, giving each narrative a distinct identity, a label with its own signature.</p>
                    </motion.div>
                  </AnimatePresence>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  >
                    <p>Monkey Label Films es una productora creativa formada por socios preocupados por realizar proyectos audivisuales con un significado diferencial, buscando siempre un mensaje creative y un alto nivel de imagen. </p>
                    <p>Con capacidad de producción internacional, nuestra pasión por este trabajo, nos ha llevado a colaboraciones con las plataformas mas reconocidas de la industria, artistas destacados y marcas de vanguardia. </p>
                    <p>Un espacio con Directores y Productores premiados internacionalmente, y comprometidos con la inclusion y la diversidad en cada uno de sus contenidos. </p>
                    <p>Una mirada artística y creativea plasmada en cada uno de nuestros proyectos, ofreciendo de esta forma un diferencial a cada narrativa en la que participamos, una etiqueta con identidad propia.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
        <div className={`${styles.paddinglogos} overflow-hidden`}>
          <section className="bg-white py-4">
            <motion.div
              initial={{ opacity: 0, translateX: '100%' }}
              animate={{ opacity: 1, translateX: '0%' }}
              exit={{ opacity: 0 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 3 }}
              className="flex overflow-hidden">
              <TranslateWrapper>
                <LogoItemsTop />
              </TranslateWrapper>
              <TranslateWrapper>
                <LogoItemsTop />
              </TranslateWrapper>
            </motion.div>
          </section>
        </div>
      </div>
    </PageWrapper >
  );
}
